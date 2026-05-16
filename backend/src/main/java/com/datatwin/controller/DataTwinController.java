package com.datatwin.controller;

import com.datatwin.model.DailyEntry;
import com.datatwin.repository.DailyEntryRepository;
import com.datatwin.service.MLEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows React frontend to communicate with Java backend
public class DataTwinController {

    @Autowired
    private DailyEntryRepository repository;

    @Autowired
    private MLEngine mlEngine;

    /**
     * Endpoint to save a new daily log.
     * Automatically calculates the productivity score before saving.
     */
    @PostMapping("/entries")
    public DailyEntry createEntry(@RequestBody DailyEntry entry) {
        // Calculate the score using our ML logic
        entry.setProductivityScore(mlEngine.calculateScore(entry));
        return repository.save(entry);
    }

    /**
     * Endpoint to fetch all historical entries.
     */
    @GetMapping("/entries")
    public List<DailyEntry> getEntries() {
        return repository.findAll();
    }

    /**
     * Advanced Analytics Endpoint.
     * Provides burnout risk, total count, and mathematical correlations.
     */
    @GetMapping("/analytics/summary")
    public Map<String, Object> getSummary() {
        List<DailyEntry> allEntries = repository.findAll();
        Map<String, Object> response = new HashMap<>();

        response.put("totalEntries", allEntries.size());

        if (allEntries.isEmpty()) {
            response.put("burnout", Map.of("risk", "No Data", "score", 0));
            response.put("correlation", null);
        } else {
            // 1. Get Burnout Risk Analysis
            response.put("burnout", mlEngine.getBurnoutAnalysis(allEntries));

            // 2. Calculate Correlation if enough data exists (min 3 days)
            if (allEntries.size() >= 3) {
                try {
                    List<Double> sleepData = allEntries.stream()
                            .map(d -> d.getSleepHours() != null ? d.getSleepHours() : 0.0)
                            .collect(Collectors.toList());

                    List<Double> moodData = allEntries.stream()
                            .map(d -> d.getMood() != null ? d.getMood().doubleValue() : 5.0)
                            .collect(Collectors.toList());

                    double correlationValue = mlEngine.calculateCorrelation(sleepData, moodData);

                    response.put("correlation", Map.of(
                            "label", "Sleep vs Mood",
                            "value", Math.round(correlationValue * 100) / 100.0
                    ));
                } catch (Exception e) {
                    response.put("correlation", null);
                }
            } else {
                response.put("correlation", null);
            }
        }

        return response;
    }

    /**
     * Simulation Engine Endpoint.
     * Predicts a productivity score based on hypothetical input without saving to DB.
     */
    @PostMapping("/simulate")
    public Map<String, Object> simulate(@RequestBody DailyEntry scenario) {
        double predictedScore = mlEngine.calculateScore(scenario);
        return Map.of(
                "predictedScore", Math.round(predictedScore * 10) / 10.0,
                "status", predictedScore > 70 ? "OPTIMAL" : "SUB-OPTIMAL"
        );
    }
}