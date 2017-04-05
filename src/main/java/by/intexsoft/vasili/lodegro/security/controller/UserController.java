package by.intexsoft.vasili.lodegro.security.controller;

import by.intexsoft.vasili.lodegro.security.model.User;
import by.intexsoft.vasili.lodegro.security.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        LOGGER.info("Attempt to save user: " + user);
        if (userService.load(user.username) != null) return new ResponseEntity<>(HttpStatus.CONFLICT);
        try {
            User userToSave = userService.save(user);
            LOGGER.info("Save successfully: " + user);
            return new ResponseEntity<>(userToSave, HttpStatus.CREATED);
        } catch (Exception e) {
            LOGGER.error("Error while saving user. Duplicate username? " + e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

     /**
     * Update
     */
    @RequestMapping(method = RequestMethod.PUT)
    private ResponseEntity<User> update(@RequestBody User user) {
        LOGGER.info("Attempt to update user");
        return new ResponseEntity<>(userService.update(user), HttpStatus.OK);
    }

    /**
     * Load one
     */
    @RequestMapping("/{username}")
    private ResponseEntity<User> load(@PathVariable String username) {
        LOGGER.info("Loading user: " + username);
        try {
            return new ResponseEntity<>(userService.load(username), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("User not found " + e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Load all
     */
    @RequestMapping("/all")
    private ResponseEntity<Iterable<User>> loadAll() {
        try {
            return new ResponseEntity<>(userService.loadAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete
     */
    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.DELETE
    )
    private ResponseEntity delete(@PathVariable int id) {
        LOGGER.info("Deleting user with id: " + id);
        try {
            userService.delete(id);
            LOGGER.info("Delete successfully");
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Deleting error " + e.getLocalizedMessage());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
