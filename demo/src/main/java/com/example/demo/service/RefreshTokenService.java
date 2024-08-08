package com.example.demo.service;
import java.time.Instant;
import java.util.UUID;
import org.springframework.stereotype.Service;
import com.example.demo.model.RefreshToken;
import com.example.demo.model.Staffs;
import com.example.demo.repository.RefreshTokenRepository;
import com.example.demo.repository.StaffRepo;
@Service
public class RefreshTokenService {
    private final StaffRepo userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    public RefreshTokenService(StaffRepo userRepository, RefreshTokenRepository refreshTokenRepository) {
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public RefreshToken createRefreshToken(String username) {
        Staffs user = userRepository.findByEmail(username);
                // .orElseThrow(() -> new UsernameNotFoundException("User not found with email : " + username));
        RefreshToken refreshToken = user.getRefreshToken();

        if (refreshToken == null) {
            long refreshTokenValidity = 30 * 24 * 60 * 60 * 1000;
            refreshToken = RefreshToken.builder()
                    .refreshToken(UUID.randomUUID().toString())
                    .expirationTime(Instant.now().plusMillis(refreshTokenValidity))
                    .user(user)
                    .build();

            refreshTokenRepository.save(refreshToken);
        }
        return refreshToken;
    }

    public RefreshToken verifyRefreshToken(String refreshToken) {
        RefreshToken refToken = refreshTokenRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new RuntimeException("Refresh token not found!"));

        if (refToken.getExpirationTime().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(refToken);
            throw new RuntimeException("Refresh Token expired");
        }
        return refToken;
    }
}