package com.example.csms.service;

import com.example.csms.bean.*;

import java.util.List;

public interface QueryService {
    List<Administrator> queryAdministrators();
    List<Client> queryClients();
    List<SalesStaff> querySalesStaffs();
    List<Order> queryOrders();
    List<Product> queryProducts();
    List<OrderDetail> queryOrderDetails();
}
