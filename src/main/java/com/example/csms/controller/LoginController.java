package com.example.csms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Objects;

/**
 * @author 徐兴盼
 */
@Controller
public class LoginController {
    @RequestMapping("/")
    public String show(){
        return "loginView";
    }
    @RequestMapping("/loginView")
    public String loginView(){
        return "loginView";
    }
}
