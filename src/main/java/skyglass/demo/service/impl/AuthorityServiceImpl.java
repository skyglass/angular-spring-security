package skyglass.demo.service.impl;

import org.springframework.stereotype.Service;

import skyglass.demo.data.AuthorityData;
import skyglass.demo.data.model.Authority;
import skyglass.demo.service.AuthorityService;
import skyglass.demo.service.model.ServiceException;

@Service
public class AuthorityServiceImpl extends GenericServiceImpl<Authority, Long, AuthorityData> 
			implements AuthorityService {
	
	@Override
	public Authority save(Authority authority) throws ServiceException {
    	if (authority.getId() != null) {
    		Authority oldAuthority = findOne(authority.getId());
    		if (!oldAuthority.getName().equals(authority.getName())) {
    			checkNameExists(authority);
    		}
    	} else {
			checkNameExists(authority);    		
    	}
    	return super.save(authority);
	}
	
	private void checkNameExists(Authority authority) throws ServiceException {
		Authority test = repository.findByName(authority.getName());
		if (test != null) {
	        throw new ServiceException("saveRoleError",
	        		"Role with the name '" + authority.getName() + "' already exists");
		}		
	}	

}
