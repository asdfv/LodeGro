package by.intexsoft.vasili.lodegro.model;

import javax.persistence.*;
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
    @Column(nullable = false)
    public String title;

    /**
     * News description
     */
    @Column
    public String description;

    /**
     * News content
     */
    @Column(nullable = false)
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
    public Date createdAt = new Date();

    /**
     * Author
     */
    @Column(name = "created_by")
    public String createdBy;

    /**
     * Date to publish news
     */
    @Column(name = "start_date")
    public Date startDate = new Date();

    /**
     * Date of last editing
     */
    @Column(name = "last_edit")
    public Date lastEdit;

    /**
     * Set edit data on entity is updated
     */
    @PreUpdate
    protected void onUpdate() {
        Date now = new Date();
        lastEdit = now;
    }
}
