package com.cybersuccess;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user, MultipartFile resumeFile) throws Exception {
        if (resumeFile != null) {
            user.setResume(resumeFile.getBytes());
        }
        return userRepository.save(user);
    }
}
