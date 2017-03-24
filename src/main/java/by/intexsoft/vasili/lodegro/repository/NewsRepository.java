package by.intexsoft.vasili.lodegro.repository;

import by.intexsoft.vasili.lodegro.model.News;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for {@link News}
 */
@Repository
public interface NewsRepository extends CrudRepository<News, Integer> {
	
}
