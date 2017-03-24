package by.intexsoft.vasili.lodegro.security.model;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User extends AbstractPersistable<Integer> {

    /**
     * Default constructor
     */
    public User() {
    }

    /**
     * Constructor for {@link CustomUserDetails}
     * @param user
     */
    public User(User user) {
        this.username = user.username;
        this.password = user.password;
        this.enabled = user.enabled;
        this.authorities = user.authorities;
    }

    /**
     * username
     */
    @Column
    public String username;

    /**
     * password
     */
    @Column
    public String password;

    /**
     * Enable account
     */
    @Column
    public boolean enabled;

    /**
     * List of roles for {@link User}
     */
    @ManyToMany(targetEntity = Authority.class, fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_id")}
    )
    public Set<Authority> authorities;
}
