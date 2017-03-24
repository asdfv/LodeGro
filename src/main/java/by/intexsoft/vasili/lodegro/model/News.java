package by.intexsoft.vasili.lodegro.model;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

/**
 * model for Users table
 */
@Table
@Entity
public class News extends AbstractPersistable<Integer> {

	private static final long serialVersionUID = 1L;

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
}
