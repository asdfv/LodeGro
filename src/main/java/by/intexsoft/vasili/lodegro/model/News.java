package by.intexsoft.vasili.lodegro.model;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

/**
 * model for Users table
 */
@Table
@Entity
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    /**
     * News title
     */
    @Column
    public String title;

    /**
     * News description
     */
    @Column
    public String description;

    /**
     * News content
     */
    @Column
    public String text;

    /**
     * Approving redactor
     */
    @Column(name = "is_approved")
    public boolean isApproved;

    /**
     * Date of creating news
     */
    @Column(name = "created_at")
    public Date createdAt;

    /**
     * Author
     */
    @Column(name = "created_by")
    public String createdBy;

    /**
     * Date to publish news
     */
    @Column(name = "start_date")
    public Date startDate;

    /**
     * Date to move news in archive
     */
    @Column(name = "end_date")
    public Date endDate;

    /**
     * Date of last editing
     */
    @Column(name = "last_edit")
    public Date lastEdit;

    @PrePersist
    protected void onCreate() {

        Date now = new Date();

        Calendar c = Calendar.getInstance();
        c.setTime(now);
        c.add(Calendar.YEAR, 1);
        Date nowAddYear = c.getTime();

        startDate = now;
        endDate = nowAddYear;
        createdAt = now;
        lastEdit = now;
    }

    @PreUpdate
    protected void onUpdate() {
        Date now = new Date();

        lastEdit = now;
    }

}
