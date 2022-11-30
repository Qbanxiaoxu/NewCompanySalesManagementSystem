package com.example.csms.mapper;

import com.example.csms.bean.*;

/**
 * 修改映射器
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface ModifyMapper {
    void modifyAdministrator(Administrator administrator);
    void modifyClient(Client client);
    void modifyOrder(Order order);
    void modifyOrderDetail(OrderDetail orderDetail);
    void modifyProduct(Product product);
    void modifySalesStaff(SalesStaff salesStaff);
}
