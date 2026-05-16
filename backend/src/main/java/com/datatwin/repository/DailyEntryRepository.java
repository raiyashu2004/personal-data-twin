package com.datatwin.repository;
import com.datatwin.model.DailyEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;

public interface DailyEntryRepository extends JpaRepository<DailyEntry, Long> {
    DailyEntry findByEntryDate(LocalDate date);
}