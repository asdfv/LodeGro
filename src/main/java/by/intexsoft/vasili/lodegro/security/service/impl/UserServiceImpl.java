package by.intexsoft.vasili.lodegro.security.service.impl;

import by.intexsoft.vasili.lodegro.security.model.User;
import by.intexsoft.vasili.lodegro.security.repository.UserRepository;
import by.intexsoft.vasili.lodegro.security.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Implementation for {@link UserService}
 */
@Service
public class UserServiceImpl implements UserService {

    public final static Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    final private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Load user by username
     * @return {@link User}
     */
    @Override
    public User load(String username) {
        return userRepository.findByUsername(username);
    }

    /**
     * Save user to db
     * @param user {@link User}
     * @return User
     */
    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    /**
     * Update user
     * @param user {@link User}
     * @return User
     */
    @Override
    public User update(User user) {
        try {
            User userToUpdate = load(user.username);
            userToUpdate.authorities = user.authorities;
            userToUpdate.enabled = user.enabled;
            userToUpdate.password = user.password;
            User newUser = save(userToUpdate);
            LOGGER.info("Update successfully: " + newUser.toString());
            return newUser;
        } catch (Exception e) {
            LOGGER.error("Error while updating user: " + e.getLocalizedMessage());
            return null;
        }
    }

    /**
     * Load all user from db
     * @return Iterable<User>
     */
    @Override
    public Iterable<User> loadAll() {
        return userRepository.findAll();
    }

    /**
     * Delete user by id from db
     */
    @Override
    public void delete(int id) {
        userRepository.delete(id);
    }
}
