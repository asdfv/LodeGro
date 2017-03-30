package by.intexsoft.vasili.lodegro.model;

import javax.persistence.*;

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
     * News content
     */
    @Column
    public String text;

    /**
     * Approving redactor
     */
    @Column(name = "is_approved")
    public boolean isApproved;
}
