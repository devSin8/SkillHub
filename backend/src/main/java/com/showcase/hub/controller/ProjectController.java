package com.showcase.hub.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.showcase.hub.model.AuthRequest;
import com.showcase.hub.model.Comment;
import com.showcase.hub.model.Project;
import com.showcase.hub.model.UserProfile;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://project-showcase-hub.firebaseapp.com"
})
public class ProjectController {

    private final List<Project> projects = new ArrayList<>();
    private final List<Comment> comments = new ArrayList<>();

    // Initialize with some mock data
    public ProjectController() {
        projects.add(new Project(1L, "Smart Attendance System", "An automated attendance system using QR codes.", "Alice", List.of("Java", "React", "SQL"), "#", 24, "https://via.placeholder.com/400x250.png?text=Smart+Attendance"));
        projects.add(new Project(2L, "IoT Weather Station", "A device that collects and displays real-time weather data.", "Bob", List.of("IoT", "Python", "API"), "#", 42, "https://via.placeholder.com/400x250.png?text=IoT+Weather"));
        projects.add(new Project(3L, "E-commerce Platform", "A fully functional online store for electronics.", "Charlie", List.of("Web Dev", "JavaScript", "MongoDB"), "#", 15, "https://via.placeholder.com/400x250.png?text=E-commerce"));

        comments.add(new Comment(1L, 1L, "David", "This is a fantastic concept! How did you handle the QR generation?", LocalDateTime.now().minusDays(1)));
        comments.add(new Comment(2L, 1L, "Eve", "Great UI. I'd suggest adding an export-to-CSV feature.", LocalDateTime.now()));
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projects;
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable long id) {
        return projects.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }

    @GetMapping("/{id}/comments")
    public List<Comment> getCommentsByProjectId(@PathVariable long id) {
        return comments.stream().filter(c -> c.getProjectId() == id).collect(Collectors.toList());
    }

    @PostMapping
    public Project createProject(@RequestBody Project newProject) {
        long newId = projects.stream().mapToLong(Project::getId).max().orElse(0L) + 1;
        newProject.setId(newId);

        if (newProject.getMediaUrl() == null || newProject.getMediaUrl().isEmpty()) {
            newProject.setMediaUrl("https://via.placeholder.com/400x250.png?text=New+Project");
        }

        projects.add(0, newProject);
        System.out.println("Added new project: " + newProject.getTitle());
        return newProject;
    }

    @PostMapping("/api/profile")
    public void saveProfile(@RequestBody UserProfile profile) {
        System.out.println("Received profile update:");
        System.out.println("Name: " + profile.getName());
        System.out.println("Register No: " + profile.getCollegeRegisterNumber());
        System.out.println("Phone: " + profile.getPhoneNumber());
        System.out.println("Languages: " + profile.getLanguages());
        System.out.println("GitHub: " + profile.getGithubUrl());
        System.out.println("LinkedIn: " + profile.getLinkedinUrl());
    }

    @PostMapping("/api/signup")
    public void handleSignup(@RequestBody AuthRequest authRequest) {
        System.out.println("Received new signup request:");
        System.out.println("Email: " + authRequest.getEmail());
        System.out.println("Password: " + authRequest.getPassword());
    }

    @PostMapping("/api/login")
    public void handleLogin(@RequestBody AuthRequest authRequest) {
        System.out.println("Received login attempt:");
        System.out.println("Email: " + authRequest.getEmail());
        System.out.println("Password: " + authRequest.getPassword());
    }
}
