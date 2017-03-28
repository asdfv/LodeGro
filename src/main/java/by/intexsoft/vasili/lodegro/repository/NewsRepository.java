package by.intexsoft.vasili.lodegro.repository;

import by.intexsoft.vasili.lodegro.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for {@link News}
 */
@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {
	
}
