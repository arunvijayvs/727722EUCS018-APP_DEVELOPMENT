package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.Staffs;
import com.example.demo.repository.StaffRepo;
import com.example.demo.utils.AuthResponse;
import com.example.demo.utils.LoginRequest;
import com.example.demo.utils.RegisterRequest;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final StaffRepo userRepository;
    private final JwtService jwtService;
    private final RefreshTokenService refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {
        // No role assignment needed
        var user = Staffs.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .phoneNo(registerRequest.getPhoneNo())
                .email(registerRequest.getEmail())
                .department(registerRequest.getDepartment())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();

        Staffs savedUser = userRepository.save(user);
        var accessToken = jwtService.generateToken(savedUser);
        var refreshToken = refreshTokenService.createRefreshToken(savedUser.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }

    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        var user = userRepository.findByEmail(loginRequest.getEmail());
                // .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
        
        var accessToken = jwtService.generateToken(user);
        var refreshToken = refreshTokenService.createRefreshToken(loginRequest.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }

    public List<Staffs> staffdata()
    {
        return userRepository.findAll();
    }
}
