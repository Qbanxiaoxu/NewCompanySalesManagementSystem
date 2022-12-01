package com.example.csms.service;

import com.example.csms.bean.*;

/**
 * 系统服务
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface ModifyService {
    void modifyAdministrator(Administrator administrator);
    void modifyClient(Client client);
    void modifyOrder(Order order);
    void modifyOrderDetail(OrderDetail orderDetail);
    void modifyProduct(Product product);
    void modifySalesStaff(SalesStaff salesStaff);
}
