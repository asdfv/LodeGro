package by.intexsoft.vasili.lodegro;

import by.intexsoft.vasili.lodegro.config.AppConfig;
import by.intexsoft.vasili.lodegro.config.PersistenceConfig;
import by.intexsoft.vasili.lodegro.config.SecurityConfig;
import by.intexsoft.vasili.lodegro.config.WebConfig;
import by.intexsoft.vasili.lodegro.model.News;
import by.intexsoft.vasili.lodegro.service.NewsService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.Date;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {AppConfig.class, PersistenceConfig.class, SecurityConfig.class, WebConfig.class},
        loader = AnnotationConfigWebContextLoader.class)
public class NewsServiceTest {

    private static final String TITLE = "Test news title";
    private static final String DESC = "Test news description";
    private static final String TEXT = "Test news content";
    private static final String CREATED_BY = "admin";
    private static News news = new News();
    private static final Date TODAY = new Date();


    @Autowired
    private NewsService newsService;

    @Before
    public void createNews() {
        news.title = TITLE;
        news.description = DESC;
        news.text = TEXT;
        news.createdBy = CREATED_BY;
    }

    @Test
    public void notNullNewsServiceTest() {
        assertNotNull(newsService);
    }

    @Test
    public void loadTest() {
        int id = newsService.save(news).id;
        assertNotNull(newsService.findOne(id));
        newsService.delete(id);
    }
//
//    @Test
//    public void addToApprovedTest() {
//        Iterable<News> newsList = newsService.findApprovedAndStarted();
//        int count = newsList.
//        news.startDate = TODAY;
//        news.isApproved = true;
//        newsService.save(news);
//        assertNotNull(newsService.);
//    }
}
