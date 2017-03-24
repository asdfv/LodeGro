package by.intexsoft.vasili.lodegro.security.service.impl;

import by.intexsoft.vasili.lodegro.security.model.User;
import by.intexsoft.vasili.lodegro.security.repository.UserRepository;
import by.intexsoft.vasili.lodegro.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Implementation for {@link UserService}
 */
@Service
public class UserServiceImpl implements UserService {

    final private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User loadUser(String username) {
        return userRepository.findByUsername(username);
    }
}
