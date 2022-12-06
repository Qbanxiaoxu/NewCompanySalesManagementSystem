package com.example.csms.controller;

import com.example.csms.bean.Administrator;
import com.example.csms.bean.Client;
import com.example.csms.bean.SalesStaff;
import com.example.csms.service.AddService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;


/**
 * @author 徐兴盼
 */
@Controller
public class LoginController {
    @Resource
    AddService addService;
    @RequestMapping("/")
    public String show(){
        return "loginView";
    }
    @RequestMapping("/loginView")
    public String loginView(){
        return "loginView";
    }
    @RequestMapping("/SignUp")
    public String signup(HttpServletRequest request) {
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");
        String identity = request.getParameter("identity");
        if (("".equals(password)) || identity == null || ("".equals(username))) {
            return "redirect:/loginView?empty=yes";
        }
        if (!password.equals(confirmPassword)) {
            return "redirect:/loginView?equal=no";
        } else {
            switch (identity) {
                case "manager" -> {
                    Administrator administrator = new Administrator(username,password,email);
                    addService.addAdministrator(administrator);
                    return "redirect:/administratorInterface?username="+username+"&"+"password="+password;
                }
                case "client" -> {
                    Client client=new Client(username,password,email);
                    addService.addClient(client);
                    return "redirect:/clientInterface?username="+username+"&"+"password="+password;

                }
                case "sales staff" -> {
                    SalesStaff salesStaff=new SalesStaff(username,password,email);
                    addService.addSalesStaff(salesStaff);
                    return "redirect:/salesStaffInterface?username="+username+"&"+"password="+password;

                }
                default -> {}
            }
        }
        return "redirect:/loginView?result=defeat";
    }
}
