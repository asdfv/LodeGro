package by.intexsoft.vasili.lodegro.security.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Service for creating and verification token
 */
//@PropertySource("classpath:security.properties")
public class TokenAuthenticationService {

    public final static Logger LOGGER = LoggerFactory.getLogger(TokenAuthenticationService.class);

//    @Value("${security.expiration}")
    private long EXPIRATION_TIME_DAYS = 10;
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24 * EXPIRATION_TIME_DAYS;

//    @Value(value = "${security.secret}")
    private String SECRET = "678a613257189329f0020d62e0e25c8d56e6";

    private static final String TOKEN_PREFIX = "Bearer";
    private static final String TOKEN_HEADER = "Authorization";

    /**
     * Create token and passed it to response header
     */
    public void addAuthentication(HttpServletResponse response, Authentication authentication) {

        String username = authentication.getName();
        Set<String> authorities = AuthorityUtils.authorityListToSet(authentication.getAuthorities());

        Claims claims = Jwts.claims().setSubject(username);
        claims.put("scopes", authorities);

        String JWT = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        response.addHeader(TOKEN_HEADER, TOKEN_PREFIX + " " + JWT);

        LOGGER.info("Successfully login. Username: " + username + " Roles: " + authorities);
    }

    /**
     * Decode token with SECRET
     * @return Authentication
     */
    public Authentication getAuthentication(HttpServletRequest request) {

        String token = request.getHeader(TOKEN_HEADER);
        if (token != null) {
            String username = null;
            List authorities = null;
            try {
                username = Jwts.parser()
                        .setSigningKey(SECRET)
                        .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                        .getBody()
                        .getSubject();

                authorities = Jwts.parser()
                        .setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                        .getBody().get("scopes", List.class);
            } catch (NullPointerException exc) {
                LOGGER.info("Token parsing error");
            }

            if (username != null) {
                Authentication authentication = new UsernamePasswordAuthenticationToken(
                        username,
                        null,
                        AuthorityUtils.commaSeparatedStringToAuthorityList(StringUtils.join(authorities, ','))
                );
                return authentication;
            }
            return null;
        }
        LOGGER.debug("No token in header or wrong TOKEN_HEADER");
        return null;
    }
}
