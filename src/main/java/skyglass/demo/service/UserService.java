package skyglass.demo.service;

import skyglass.demo.data.UserData;
import skyglass.demo.data.model.User;

public interface UserService extends GenericService<User, Long, UserData> {
	
	public User setAuthorities(Long userId, Long[] authorityIds);

}
