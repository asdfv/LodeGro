package by.intexsoft.vasili.lodegro.repository;

import by.intexsoft.vasili.lodegro.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Repository for {@link News}
 */
@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    @Query("select n from News n where n.isApproved = true")
    Iterable<News> findForAll();

    @Query("select n from News n where n.isApproved = false")
    Iterable<News> findForRedactor();
}
