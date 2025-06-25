// package com.anime.services;

// import com.anime.models.User;
// import com.anime.repositories.UserRepository;
// import com.anime.security.JWTUtils;
// //import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.util.Optional;

// @Service
// public class UserService {
//     private final UserRepository userRepository;
//     //private final BCryptPasswordEncoder passwordEncoder;
//     private final JWTUtils jwtUtils;

//     public UserService(UserRepository userRepository, JWTUtils jwtUtils) {
//         this.userRepository = userRepository;
//         //this.passwordEncoder = new BCryptPasswordEncoder();
//         this.jwtUtils = jwtUtils;
//     }

//     public String register(User user) {
//         //user.setPassword(passwordEncoder.encode(user.getPassword()));
//         userRepository.save(user);
//         return "User registered successfully!";
//     }

//     public String login(String email, String password) {
//         Optional<User> user = userRepository.findByEmail(email);
//         if (user.isPresent()) {
//             //if (passwordEncoder.matches(password, user.get().getPassword())) {
//             return jwtUtils.generateToken(email);
//             //}
//         }
//         return "Invalid email or password!";
//     }
// }