package by.intexsoft.vasili.lodegro.service;

import by.intexsoft.vasili.lodegro.model.News;
import by.intexsoft.vasili.lodegro.repository.NewsRepository;

/**
 * Service for {@link NewsRepository}
 */
public interface NewsService {
	
	/**
	 * Find one {@link News} by id
	 */	
	News findOne(int id);
	/**
	 * Find all {@link News}
	 */	
	Iterable<News> findAll();
	
}
