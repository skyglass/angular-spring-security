package skyglass.demo.service.impl;

import org.springframework.stereotype.Service;

import skyglass.demo.data.TokenData;
import skyglass.demo.data.model.Token;
import skyglass.demo.service.TokenService;

@Service
public class TokenServiceImpl extends GenericServiceImpl<Token, String, TokenData> 
			implements TokenService {

}
