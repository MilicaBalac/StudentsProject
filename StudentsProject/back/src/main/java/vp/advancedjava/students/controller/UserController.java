package vp.advancedjava.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import vp.advancedjava.students.dto.LoginDTO;
import vp.advancedjava.students.dto.TokenDTO;
import vp.advancedjava.students.security.TokenUtils;

@RestController
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    TokenUtils tokenUtils;

    @PostMapping(value = "/api/login")
    public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
        try {
            final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
            final Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
            final String genToken = tokenUtils.generateToken(details);

            return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
        }
    }
}
