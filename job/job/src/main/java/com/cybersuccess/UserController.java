package com.cybersuccess;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/signup")
@CrossOrigin("http://localhost:5173/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/insert")
    public String insertUser(@RequestParam("name") String name,
                             @RequestParam("email") String email,
                             @RequestParam("education") String education,
                             @RequestParam("college") String college,
                             @RequestParam("marks") String marks,
                             @RequestParam("role") String role,
                             @RequestParam("resume") MultipartFile resumeFile) {
        try {
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setEducation(education);
            user.setCollege(college);
            user.setMarks(marks);
            user.setRole(role);

            userService.saveUser(user, resumeFile);
            return "User data submitted successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error submitting user data";
        }
    }
}
