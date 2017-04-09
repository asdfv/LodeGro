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

    @Query("select new Map(n.id as id, n.title as title, n.description as description, n.createdAt as createdAt, n.createdBy as createdBy, n.startDate as startDate, n.lastEdit as lastEdit) from News n where n.isApproved = true and n.startDate <= CURRENT_DATE order by n.createdAt desc")
    Iterable<News> findApprovedAndStarted();

    @Query("select new Map(n.id as id, n.title as title, n.description as description, n.createdAt as createdAt, n.createdBy as createdBy, n.startDate as startDate, n.lastEdit as lastEdit) from News n where n.isApproved = false order by n.createdAt desc")
    Iterable<News> findForApproving();

    @Query("select new Map(n.id as id, n.title as title, n.description as description, n.createdAt as createdAt, n.createdBy as createdBy, n.startDate as startDate, n.lastEdit as lastEdit) from News n where n.startDate > CURRENT_DATE order by n.createdAt desc")
    Iterable<News> findFuture();
}
