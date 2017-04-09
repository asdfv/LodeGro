package by.intexsoft.vasili.lodegro;

import by.intexsoft.vasili.lodegro.config.AppConfig;
import by.intexsoft.vasili.lodegro.config.PersistenceConfig;
import by.intexsoft.vasili.lodegro.config.SecurityConfig;
import by.intexsoft.vasili.lodegro.config.WebConfig;
import by.intexsoft.vasili.lodegro.security.model.Authority;
import by.intexsoft.vasili.lodegro.security.model.User;
import by.intexsoft.vasili.lodegro.security.service.UserService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.AnnotationConfigWebContextLoader;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.HashSet;
import java.util.Set;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {AppConfig.class, PersistenceConfig.class, SecurityConfig.class, WebConfig.class},
        loader = AnnotationConfigWebContextLoader.class)
public class UserServiceTest {

    private static final String USERNAME = "Gendalf";
    private static final String PASSWORD = "132";
    private static final String ROLE = "ROLE_ADMIN";
    private static final int ROLE_ID = 1;
    private static User user = new User();

    @Autowired
    private UserService userService;

    @Test
    public void notNullUserServiceTest() {
        assertNotNull(userService);
    }

    @Before
    public void createUser() {
        Authority authority = new Authority();
        authority.id = ROLE_ID;
        authority.name = ROLE;
        Set<Authority> authoritySet = new HashSet<>();
        authoritySet.add(authority);
        user.authorities = authoritySet;
        user.username = USERNAME;
        user.password = PASSWORD;
        userService.save(user);
    }

    @After
    public void deleteTest() {
        int id = userService.load(USERNAME).id;
        userService.delete(id);
    }

    @Test
    public void loadTest() {
        assertNotNull(userService.load(user.username));
    }
}
