package com.datatwin.service;

import com.datatwin.model.DailyEntry;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class MLEngine {

    /**
     * Calculates a productivity score from 0-100 based on daily habits.
     */
    public double calculateScore(DailyEntry e) {
        double score = 0;

        double sleep = (e.getSleepHours() != null) ? e.getSleepHours() : 0;
        double study = (e.getStudyHours() != null) ? e.getStudyHours() : 0;
        int mood = (e.getMood() != null) ? e.getMood() : 5;
        int stress = (e.getStressLevel() != null) ? e.getStressLevel() : 5;

        // Sleep Logic (Optimal 7-9 hours)
        if (sleep >= 7 && sleep <= 9) score += 30;
        else if (sleep >= 6) score += 15;

        // Study Logic (Target 4+ hours)
        score += Math.min(30, study * 7.5);

        // Wellness Logic
        score += mood * 2;
        score += (11 - stress) * 2;

        return Math.min(100, score);
    }

    /**
     * Advanced: Analyzes recent history to determine burnout risk.
     */
    public Map<String, Object> getBurnoutAnalysis(List<DailyEntry> history) {
        if (history.isEmpty()) return Map.of("risk", "NONE", "score", 0);

        double avgStress = history.stream()
                .mapToDouble(d -> d.getStressLevel() != null ? d.getStressLevel() : 5)
                .average().orElse(5);

        String risk = "LOW";
        if (avgStress >= 7.5) risk = "HIGH";
        else if (avgStress >= 5.0) risk = "MODERATE";

        return Map.of(
                "risk", risk,
                "score", (int)(avgStress * 10)
        );
    }

    /**
     * Advanced: Pearson Correlation Coefficient calculation.
     * Determines the relationship between two variables (e.g., Sleep vs Mood).
     */
    public double calculateCorrelation(List<Double> x, List<Double> y) {
        if (x.size() != y.size() || x.isEmpty()) return 0.0;
        int n = x.size();

        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;

        for (int i = 0; i < n; i++) {
            double xi = x.get(i);
            double yi = y.get(i);
            sumX += xi;
            sumY += yi;
            sumXY += xi * yi;
            sumX2 += xi * xi;
            sumY2 += yi * yi;
        }

        double numerator = (n * sumXY) - (sumX * sumY);
        double denominator = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY)));

        if (denominator == 0) return 0;
        return numerator / denominator;
    }
}