package by.intexsoft.vasili.lodegro.security.model;

/**
 * User credentials model for {@link by.intexsoft.vasili.lodegro.security.filter.JWTLoginFilter}
 */
public class AccountCredentials {
    private String username;
    private String password;

    /**
     * @return String username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @return String password
     */
    public String getPassword() {
        return password;
    }
}
