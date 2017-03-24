package by.intexsoft.vasili.lodegro.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Web config
 */
@Configuration
@EnableWebMvc
@ComponentScan("by.intexsoft.vasili.lodegro.controller")
public class WebConfig extends WebMvcConfigurerAdapter {

    /**
     * Enable using {@link DefaultServletHandlerConfigurer} for load index.html
     * bypass {@link org.springframework.web.servlet.DispatcherServlet}
     */
    @Override
    public void configureDefaultServletHandling(
            DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
}
