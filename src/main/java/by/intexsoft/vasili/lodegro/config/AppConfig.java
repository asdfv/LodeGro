package by.intexsoft.vasili.lodegro.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Application config
 */
@Configuration
@ComponentScan(basePackages = {
        "by.intexsoft.vasili.lodegro.service.impl",
        "by.intexsoft.vasili.lodegro.security.service.impl"
})
public class AppConfig {
}
