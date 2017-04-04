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

    @Query("select new Map(n.id as id, n.title as title, n.description as description) from News n where n.isApproved = true")
    Iterable<News> findApproved();

    @Query("select new Map(n.id as id, n.title as title, n.description as description) from News n where n.isApproved = false")
    Iterable<News> findForApproving();

}
