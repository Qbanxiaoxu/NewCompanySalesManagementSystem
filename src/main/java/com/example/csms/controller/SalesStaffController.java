package com.example.csms.controller;

import com.example.csms.bean.Client;
import com.example.csms.bean.Order;
import com.example.csms.bean.SalesStaff;
import com.example.csms.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static com.example.csms.controller.ClientController.getString;

@Controller
public class SalesStaffController {
    @Resource
    private FindService findService;
    private AddService addService;
    private DeleteService deleteService;
    private QueryService queryService;
    private ModifyService modifyService;
    private GetService getService;
    private LoginVerifyService loginVerifyService;

    @RequestMapping(value = "/CheckTakeOrders",name = "查看接单信息")
    public String viewTakeOrdersInfo(HttpServletRequest request){
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        SalesStaff salesStaff = loginVerifyService.verifySalesStaff(username, password);
        if (salesStaff == null) return "404.html";
        long salesStaffId = salesStaff.getSalesStaffId();
        return getString(salesStaffId, queryService);
    }
    @RequestMapping(value = "/ModifySalesStaff", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modify(SalesStaff salesStaff){
        modifyService.modifySalesStaff(salesStaff);
    }
}
