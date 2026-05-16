# 🧬 Personal Data Twin

> **AI-Powered Behavioral Analytics & Productivity Forecasting Engine**

[![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot%203.2-6DB33F?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Database](https://img.shields.io/badge/Database-H2%20SQL-004482?style=for-the-badge&logo=sqlite)](https://www.h2database.com/)

Personal Data Twin is a full-stack behavioral modeling application that creates a digital representation of your daily habits. It uses statistical analysis and custom machine learning logic to predict productivity, detect burnout risks, and find hidden correlations between your lifestyle and your output.

---

## ✨ Key Features

### 📊 Behavioral Analytics
Track high-fidelity data including sleep cycles, study focus, screen time, physical activity, and mood. The system builds a historical profile to understand your "baseline."

### 🧠 ML-Driven Productivity Scoring
A custom Java-based logic engine processes daily inputs to generate a **Productivity Score (0-100)**. It considers non-linear relationships, such as the diminishing returns of over-studying and the critical impact of sleep hygiene.

### 📉 Pearson Correlation Analysis
**Advanced Feature:** The backend implements the Pearson Correlation Coefficient algorithm to mathematically determine the relationship between variables (e.g., *How much does 1 hour of lost sleep actually drop your mood?*).

### ⚠️ Burnout Detection System
An automated risk-assessment module that monitors stress-to-rest ratios and flags "High," "Moderate," or "Low" burnout risks based on rolling historical averages.

### 🔮 What-If Scenario Simulator
A sandbox environment where users can simulate lifestyle changes (e.g., "What happens if I study 10 hours but only sleep 4?") and see predicted impacts on their productivity before committing to the change.

---

## 🛠️ Tech Stack

### Backend (The Brain)
- **Framework:** Java 17, Spring Boot 3.2
- **Data Access:** Spring Data JPA
- **Database:** H2 (In-memory/File-based SQL)
- **Architecture:** Service-Controller Pattern

### Frontend (The Interface)
- **Library:** React 18 (Vite-powered)
- **Styling:** Cyberpunk Aero CSS (Custom)
- **Icons:** Lucide React

---

## 🚀 Getting Started

### 1. Setup Backend (Spring Boot)
```bash
cd backend
mvn clean spring-boot:run

### 2. Setup Frontend (React)
cd ../frontend
npm install
npm run dev


## Project Structure
personal-data-twin/
├── backend/
│   ├── src/main/java/com/datatwin/
│   │   ├── controller/   # REST Endpoints
│   │   ├── service/      # ML Logic & Pearson Algorithms
│   │   └── model/        # JPA Entities
└── frontend/
    ├── src/
    │   ├── api/          # Axios configurations
    │   └── pages/        # Dashboard, Entry, Simulation views
