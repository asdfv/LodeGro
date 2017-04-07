package by.intexsoft.vasili.lodegro.service.impl;

import by.intexsoft.vasili.lodegro.model.News;
import by.intexsoft.vasili.lodegro.repository.NewsRepository;
import by.intexsoft.vasili.lodegro.service.NewsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Implementation for {@link NewsService}
 */
@Service
public class NewsServiceImpl implements NewsService {

	public final static Logger LOGGER = LoggerFactory.getLogger(NewsServiceImpl.class);

	private final NewsRepository newsRepository;

	@Autowired
	public NewsServiceImpl(NewsRepository newsRepository) {
		this.newsRepository = newsRepository;
	}

	@Override
	public News findOne(int id) {
		return newsRepository.findOne(id);
	}

	@Override
	public Iterable<News> findAll() {
		return newsRepository.findAll();
	}

	@Override
	public News save(News news) {
		News newsForSave = newsRepository.save(news);
		LOGGER.info(news.title + " has been saved");
		return newsForSave;
	}

	@Override
	public Iterable<News> findApproved() {
		return newsRepository.findApproved();
	}

	@Override
	public Iterable<News> findToApproving() {
		return newsRepository.findForApproving();
	}

    @Override
    public void delete(int id) {
		LOGGER.info("Deleting news with id = " + id);
        newsRepository.delete(id);
    }
}
