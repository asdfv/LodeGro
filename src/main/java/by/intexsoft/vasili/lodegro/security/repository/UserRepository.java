package by.intexsoft.vasili.lodegro.security.repository;

import by.intexsoft.vasili.lodegro.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for working with {@link User}
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    /**
     * Find {@link User} by username
     * @param username
     * @return
     */
    User findByUsername(String username);
}