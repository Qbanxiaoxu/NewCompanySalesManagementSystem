package com.example.csms.mapper;

import com.example.csms.bean.*;

/**
 * 添加映射器
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface AddMapper {
    void addAdministrator(Administrator administrator);
    void addClient(Client client);
    void addOrder(Order order);
    void addOrderDetail(OrderDetail orderDetail);
    void addProduct(Product product);
    void addSalesStaff(SalesStaff salesStaff);
}
