// package com.anime.controllers;

// import com.anime.models.User;
// import com.anime.services.UserService;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping("/api/auth")
// public class UserController {
//     private final UserService userService;

//     public UserController(UserService userService) {
//         this.userService = userService;
//     }

//     @PostMapping("/register")
//     public String registerUser(@RequestBody User user) {
//         return userService.register(user);
//     }

//     @PostMapping("/login")
//     public String loginUser(@RequestBody User user) {
//         return userService.login(user.getEmail(), user.getPassword());
//     }
// }
