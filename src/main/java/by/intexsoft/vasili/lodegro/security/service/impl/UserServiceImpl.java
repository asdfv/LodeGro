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

    @Override
    public User load(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public Iterable<User> loadAll() {
        return userRepository.findAll();
    }
}
