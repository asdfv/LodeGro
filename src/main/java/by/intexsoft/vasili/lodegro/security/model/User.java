package by.intexsoft.vasili.lodegro.security.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

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
            name = "users_authority",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_id")}
    )
    public Set<Authority> authorities;
}
