package skyglass.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import skyglass.demo.data.model.Authority;

public interface AuthorityData extends JpaRepository<Authority, Long> {
	
	public Authority findByName(String name);

}