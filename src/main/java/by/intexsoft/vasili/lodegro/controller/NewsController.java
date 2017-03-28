package by.intexsoft.vasili.lodegro.controller;

import by.intexsoft.vasili.lodegro.model.News;
import by.intexsoft.vasili.lodegro.service.NewsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for {@link News}
 */
@RestController
@RequestMapping("/api/news")
public class NewsController {

	public final static Logger LOGGER = LoggerFactory.getLogger(NewsController.class);

	@Autowired
	private NewsService newsService;

    @RequestMapping(method = RequestMethod.POST)
	private News save(@RequestBody News news) {
		return newsService.save(news);
	}

	@RequestMapping("/all")
	private ResponseEntity<Iterable<News>> searchAllUsers() {
		LOGGER.info("Mapping news/all works");
		Iterable<News> list = newsService.findAll();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@RequestMapping(value = "/get", params = "id")
	private ResponseEntity<News> searchUser(@RequestParam("id") int id) {
		LOGGER.info("Mapping news?id working");
		News news = newsService.findOne(id);
		if (news == null) {
			LOGGER.info("Not found News with id = " + id);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(news, HttpStatus.OK);
    }


	@RequestMapping("/redactor")
	private String redactorTest(){
		return "Redactor secured data from server";
	}
	@RequestMapping("/admin")
	private String adminTest(){
		return "Admin secured data from server";
	}
}
