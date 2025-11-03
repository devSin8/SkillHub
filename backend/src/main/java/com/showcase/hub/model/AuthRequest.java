package com.showcase.hub.model;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
}