package by.intexsoft.vasili.lodegro.security.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * Custom implementation for {@link UserDetails}
 */
public class CustomUserDetails extends User implements UserDetails {

    /**
     * Constructor for {@link by.intexsoft.vasili.lodegro.security.service.CustomUserDetailService}
     * @param user
     */
    public CustomUserDetails(User user) {
        super(user);
    }

    /**
     * @see UserDetails
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    /**
     * @see UserDetails
     */
    @Override
    public String getPassword() {
        return this.password;
    }

    /**
     * @see UserDetails
     */
    @Override
    public String getUsername() {
        return this.username;
    }

    /**
     * @see UserDetails
     */
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * @see UserDetails
     */
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * @see UserDetails
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * @see UserDetails
     */
    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
