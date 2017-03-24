package by.intexsoft.vasili.lodegro.security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

/**
 * Model for authority table
 */
@Table
@Entity
public class Authority implements GrantedAuthority {

    @Id
    @Column
    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    /**
     * Role name
     */
    @Column
    public String name;

    /**
     * @see  GrantedAuthority
     */
    @Override
    @JsonIgnore
    public String getAuthority() {
        return this.name;
    }
}
