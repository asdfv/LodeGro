package by.intexsoft.vasili.lodegro.security.service;

import by.intexsoft.vasili.lodegro.security.model.CustomUserDetails;
import by.intexsoft.vasili.lodegro.security.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomUserDetailService.class);

    final
    UserService userService;

    @Autowired
    public CustomUserDetailService(UserService userService) {
        this.userService = userService;
    }

    /**
     * @see UserDetailsService
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LOGGER.debug("Try to get from db user: " + username);
        try {
            User user = userService.loadUser(username);
            return new CustomUserDetails(user);
        } catch (Exception e) {
            LOGGER.error("Getting user from DB error. StackTrace: \n");
            e.printStackTrace();
        }
        return null;
    }
}
