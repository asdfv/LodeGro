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

	/**
	 * Save Eintity to DB
	 * @return saved {@link News}
	 */
	News save(News news);

	/**
	 * Find all approved {@link News}
	 */
	Iterable<News> findApprovedAndStarted();

	/**
	 * Get {@link News} with startDate later then today
	 */
	Iterable<News> findFuture();

	/**
	 * Find not approved {@link News}
	 */
	Iterable<News> findToApproving();

    /**
     * Delete {@link News} by id
     */
    void delete(int id);

}
