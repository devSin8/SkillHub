package com.showcase.hub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class Project {
    private long id;
    private String title;
    private String description;
    private String author;
    private List<String> technologies;
    private String demoLink;
    private int upvotes;
    private String mediaUrl; // URL to a placeholder image
}