package skyglass.demo.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import skyglass.demo.data.model.Token;

public interface TokenData extends JpaRepository<Token, String> {
	
    List<Token> findByUserLogin(String userLogin);
	
}
