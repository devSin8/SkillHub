package com.showcase.hub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class Comment {
    private long id;
    private long projectId;
    private String author;
    private String content;
    private LocalDateTime timestamp;
}