package com.family.gati.repository;

import com.family.gati.entity.AdminMission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface AdminMissionRepository extends JpaRepository<AdminMission, Integer> {
    Optional<AdminMission> findById(Integer id);
}
