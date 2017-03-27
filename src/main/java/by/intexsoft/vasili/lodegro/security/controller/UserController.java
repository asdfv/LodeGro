package by.intexsoft.vasili.lodegro.security.controller;

import by.intexsoft.vasili.lodegro.security.model.User;
import by.intexsoft.vasili.lodegro.security.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    final private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Save
     */
    @RequestMapping(method = RequestMethod.POST)
    private ResponseEntity<User> save(@RequestBody User user) {
        LOGGER.info("Attempt to save user to database");
        try {
            User userToSave = userService.save(user);
            LOGGER.info("User to save authority: " + AuthorityUtils.authorityListToSet(userToSave.authorities));
            return new ResponseEntity<>(userToSave, HttpStatus.CREATED);
        } catch (NullPointerException e) {
            LOGGER.error("Error while saving user: " + e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Load one
     */
    @RequestMapping("/{username}")
    private ResponseEntity<User> load(@PathVariable String username) {
        LOGGER.info("Loading user: " + username);
        try {
            User user = userService.load(username);
            LOGGER.info("Found in db: " + user);
            return new ResponseEntity<>(userService.load(username), HttpStatus.OK);
        } catch (NullPointerException e) {
            LOGGER.error("User not found " + e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
