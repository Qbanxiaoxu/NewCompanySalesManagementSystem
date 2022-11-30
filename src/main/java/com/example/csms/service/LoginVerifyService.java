package com.example.csms.service;

import com.example.csms.bean.Administrator;
import com.example.csms.bean.Client;
import com.example.csms.bean.SalesStaff;

public interface LoginVerifyService {
    Administrator verifyAdministrator(String username,String password);
    Client verifyClient(String username,String password);
    SalesStaff verifySalesStaff(String username,String password);
}
