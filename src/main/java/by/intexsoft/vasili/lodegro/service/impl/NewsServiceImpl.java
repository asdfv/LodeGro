package by.intexsoft.vasili.lodegro.service.impl;

import by.intexsoft.vasili.lodegro.model.News;
import by.intexsoft.vasili.lodegro.repository.NewsRepository;
import by.intexsoft.vasili.lodegro.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Implementation for {@link NewsService}
 */
@Service
public class NewsServiceImpl implements NewsService {

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
		return newsRepository.save(news);
	}
}
