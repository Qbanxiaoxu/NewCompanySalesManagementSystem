package com.example.csms.service;

import com.example.csms.bean.*;

public interface FindService {
    Administrator findAdministratorById(int administratorId);
    Client findClientById(int clientId);
    SalesStaff findSalesStaffById(int salesStaffId);
    Order findOrder(int orderId);
    OrderDetail findOrderDetail(int orderDetailId);
    Product findProduct(int productId);
}
