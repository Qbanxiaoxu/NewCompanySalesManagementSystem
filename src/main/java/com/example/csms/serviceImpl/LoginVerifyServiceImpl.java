package com.example.csms.serviceImpl;

import com.example.csms.bean.Administrator;
import com.example.csms.bean.Client;
import com.example.csms.bean.SalesStaff;
import com.example.csms.mapper.FindMapper;
import com.example.csms.service.LoginVerifyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 登录验证服务impl
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
@Service
public class LoginVerifyServiceImpl implements LoginVerifyService {
    @Resource
    private FindMapper loginVerifyMapper;
    public Administrator verifyAdministrator(String username, String password){
        return loginVerifyMapper.findAdministrator(username,password);
    }
    public Client verifyClient(String username, String password){
        return loginVerifyMapper.findClient(username,password);
    }
    public SalesStaff verifySalesStaff(String username, String password){
        return loginVerifyMapper.findSalesStaff(username,password);
    }
}
