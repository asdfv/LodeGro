package by.intexsoft.vasili.lodegro.config;

import by.intexsoft.vasili.lodegro.security.filter.JWTAuthenticationFilter;
import by.intexsoft.vasili.lodegro.security.filter.JWTLoginFilter;
import by.intexsoft.vasili.lodegro.security.service.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Configuration security
 */
@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses = CustomUserDetailService.class)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    /**
     * Ignoring root path and resources
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers("/*.html")
                .antMatchers("/bundles/**")
                .antMatchers("/assets/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.headers().cacheControl();
        http.csrf().disable()
            .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.GET, "/api/news/all", "/api/news/*").permitAll()
                .antMatchers(HttpMethod.GET, "/api/news/forApproving").hasAnyAuthority("ROLE_AUTHOR", "ROLE_REDACTOR")
                .antMatchers(HttpMethod.POST, "/api/news").hasAnyAuthority("ROLE_AUTHOR", "ROLE_REDACTOR")
                .antMatchers(HttpMethod.PUT, "/api/news").hasAnyAuthority("ROLE_AUTHOR", "ROLE_REDACTOR")
                .antMatchers(HttpMethod.DELETE, "/api/news/*").hasAnyAuthority("ROLE_AUTHOR", "ROLE_REDACTOR")
                .antMatchers("/api/**").hasAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }
}
