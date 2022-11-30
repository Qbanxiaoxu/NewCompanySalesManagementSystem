package com.example.csms.serviceImpl;

import com.example.csms.bean.*;
import com.example.csms.mapper.QueryMapper;
import com.example.csms.service.QueryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class QueryServiceImpl implements QueryService {
    @Resource
    private QueryMapper queryMapper;
    public List<Administrator> queryAdministrators(){
        return queryMapper.queryAdministrators();
    }
    public List<Client> queryClients(){
        return queryMapper.queryClients();
    }
    public List<SalesStaff> querySalesStaffs(){
        return queryMapper.querySalesStaffs();
    }
    public List<Order> queryOrders(){
        return queryMapper.queryOrders();
    }
    public List<Product> queryProducts(){
        return queryMapper.queryProducts();
    }
    public List<OrderDetail> queryOrderDetails(){
        return queryMapper.queryOrderDetails();
    }
}
