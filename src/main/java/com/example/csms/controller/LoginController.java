package com.example.csms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
    @RequestMapping(value = "/LoginVerify",method = RequestMethod.POST)
    public String loginMethod(@RequestParam("username")String username,@RequestParam("password")String password,@RequestParam("identity")String identity){
        return "redirect:loginView?error=yes";
    }
}
