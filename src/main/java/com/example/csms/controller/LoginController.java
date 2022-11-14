package com.example.csms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author 徐兴盼
 */
@Controller
public class LoginController {
    @RequestMapping("/")
    public String show(){
        return "loginView";
    }
    //@RequestMapping(value = "/LoginInformationVerification",method = RequestMethod.POST)
    //public String loginMethod(String username,String password){
    //
    //}
}
