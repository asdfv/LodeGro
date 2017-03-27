package by.intexsoft.vasili.lodegro.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

import static org.springframework.orm.jpa.vendor.Database.POSTGRESQL;

/**
 * Datasource configuration
 */
@Configuration
@EnableJpaRepositories(basePackages = {
        "by.intexsoft.vasili.lodegro.repository",
        "by.intexsoft.vasili.lodegro.security.repository"
})
@PropertySource("classpath:application.properties")
public class PersistenceConfig {

    @Value("${datasource.driver-class-name}")
    private String driverClassName;
    @Value("${datasource.url}")
    private String url;
    @Value("${datasource.username}")
    private String username;
    @Value("${datasource.password}")
    private String password;
    @Value("${datasource.schema}")
    private String schema;

    /**
     * Connection settings
     * @return DataSource
     */
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setSchema(schema);

        return dataSource;
    }

    /**
     * JPA provider
     * @return JpaVendorAdapter
     */
    @Bean
    public JpaVendorAdapter adapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setDatabase(POSTGRESQL);
        adapter.setShowSql(false);
        return adapter;
    }

    /**
     * Manager for entities
     * @param dataSource
     * @param adapter
     * @return LocalContainerEntityManagerFactoryBean
     */
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource,
                                                                       JpaVendorAdapter adapter) {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setJpaVendorAdapter(adapter);
        factoryBean.setPackagesToScan(
                "by.intexsoft.vasili.lodegro.model",
                "by.intexsoft.vasili.lodegro.security.model"
        );
        return factoryBean;
    }

    /**
     * Transaction support
     * @return PlatformTransactionManager
     */
    @Bean
    public PlatformTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }
}
