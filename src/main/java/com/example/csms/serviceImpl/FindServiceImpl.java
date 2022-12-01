package com.example.csms.serviceImpl;

import com.example.csms.bean.*;
import com.example.csms.mapper.FindMapper;
import com.example.csms.service.FindService;

import javax.annotation.Resource;

public class FindServiceImpl implements FindService {
    @Resource
    private FindMapper findMapper;
    public Administrator findAdministratorById(int administratorId){
        return findMapper.findAdministratorById(administratorId);
    }
    public Client findClientById(int clientId){
        return findMapper.findClientById(clientId);
    }
    public SalesStaff findSalesStaffById(int salesStaffId){
        return findMapper.findSalesStaffById(salesStaffId);
    }
    public Order findOrder(int orderId){
        return findMapper.findOrder(orderId);
    }
    public OrderDetail findOrderDetail(int orderDetailId){
        return findMapper.findOrderDetail(orderDetailId);
    }
    public Product findProduct(int productId){
        return findMapper.findProduct(productId);
    }
}
