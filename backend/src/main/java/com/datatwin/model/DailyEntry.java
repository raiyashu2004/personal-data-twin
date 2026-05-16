package com.datatwin.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class DailyEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private LocalDate entryDate;

    private Double sleepHours;
    private Double studyHours;
    private Double screenTime;
    private Double exerciseMinutes;
    private Integer mood;
    private Integer stressLevel;
    private Double waterIntake;
    private Double expenses;
    private String notes;
    private Double productivityScore;

    // Standard Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getEntryDate() { return entryDate; }
    public void setEntryDate(LocalDate entryDate) { this.entryDate = entryDate; }

    public Double getSleepHours() { return sleepHours; }
    public void setSleepHours(Double sleepHours) { this.sleepHours = sleepHours; }

    public Double getStudyHours() { return studyHours; }
    public void setStudyHours(Double studyHours) { this.studyHours = studyHours; }

    public Double getScreenTime() { return screenTime; }
    public void setScreenTime(Double screenTime) { this.screenTime = screenTime; }

    public Double getExerciseMinutes() { return exerciseMinutes; }
    public void setExerciseMinutes(Double exerciseMinutes) { this.exerciseMinutes = exerciseMinutes; }

    public Integer getMood() { return mood; }
    public void setMood(Integer mood) { this.mood = mood; }

    public Integer getStressLevel() { return stressLevel; }
    public void setStressLevel(Integer stressLevel) { this.stressLevel = stressLevel; }

    public Double getWaterIntake() { return waterIntake; }
    public void setWaterIntake(Double waterIntake) { this.waterIntake = waterIntake; }

    public Double getExpenses() { return expenses; }
    public void setExpenses(Double expenses) { this.expenses = expenses; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public Double getProductivityScore() { return productivityScore; }
    public void setProductivityScore(Double productivityScore) { this.productivityScore = productivityScore; }
}