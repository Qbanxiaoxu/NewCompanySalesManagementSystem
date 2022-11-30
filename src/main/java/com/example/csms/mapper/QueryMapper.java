package com.example.csms.mapper;

import com.example.csms.bean.*;

import java.util.List;

/**
 * 查询映射器
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface QueryMapper {
    List<Administrator> queryAdministrators();
    List<Client> queryClients();
    List<SalesStaff> querySalesStaffs();
    List<Order> queryOrders();
    List<Product> queryProducts();
    List<OrderDetail> queryOrderDetails();
}
