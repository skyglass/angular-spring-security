package skyglass.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import skyglass.demo.data.model.User;


public interface UserData extends JpaRepository<User, Long> {
    User findByLogin(String login);

}
