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

    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    /**
     * Save
     *
     * @param news {@link News}
     * @return {@link News}
     */
    @RequestMapping(method = RequestMethod.POST)
    private ResponseEntity<News> save(@RequestBody News news) {
        try {
            return new ResponseEntity<>(newsService.save(news), HttpStatus.CREATED);
        } catch (Exception e) {
            LOGGER.error("Save news error");
            return new ResponseEntity<News>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update
     *
     * @param news {@link News}
     * @return {@link News}
     */
    @RequestMapping(method = RequestMethod.PUT)
    private ResponseEntity<News> update(@RequestBody News news) {
        News newsToUpdate = null;
        try {
            newsToUpdate = newsService.findOne(news.id);
            newsToUpdate.title = news.title;
            newsToUpdate.description = news.description;
            newsToUpdate.text = news.text;
            newsToUpdate.isApproved = news.isApproved;
            return new ResponseEntity<>(newsService.save(newsToUpdate), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("News not found: " + e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * Get all approved news
     *
     * @return list of {@link News}
     */
    @RequestMapping("/all")
    private ResponseEntity<Iterable<News>> searchApprovedNews() {
        LOGGER.debug("Getting all news");
        Iterable<News> list = newsService.findApproved();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    /**
     * Load news for approving
     *
     * @return list of {@link News}
     */
    @RequestMapping("/forApproving")
    private ResponseEntity<Iterable<News>> searchNotApprovedNews() {
        LOGGER.debug("Getting news for approving");
        Iterable<News> list = newsService.findToApproving();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    /**
     * Load news by id
     *
     * @param id
     * @return {@link News}
     */
    @RequestMapping(value = "/{id}")
    private ResponseEntity<News> searchNews(@PathVariable int id) {
        LOGGER.info("Get news id = " + id);
        News news = newsService.findOne(id);
        if (news == null) {
            LOGGER.info("Not found News with id = " + id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(news, HttpStatus.OK);
    }

    /**
     * Delete news by id
     *
     * @param id
     * @return {@link News}
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private ResponseEntity deleteNews(@PathVariable int id) {
        LOGGER.info("Deleting news with id = " + id);
        try {
            newsService.delete(id);
        } catch (Exception e) {
            LOGGER.error("News with id = " + id + " not found.");
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
