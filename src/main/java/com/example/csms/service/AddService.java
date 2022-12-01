package com.example.csms.service;

import com.example.csms.bean.*;

/**
 * 管理员服务
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface AddService {
    void addAdministrator(Administrator administrator);
    void addClient(Client client);
    void addOrder(Order order);
    void addOrderDetail(OrderDetail orderDetail);
    void addProduct(Product product);
    void addSalesStaff(SalesStaff salesStaff);
}
