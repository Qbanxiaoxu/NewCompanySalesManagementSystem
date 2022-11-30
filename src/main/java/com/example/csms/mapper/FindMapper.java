package com.example.csms.mapper;

import com.example.csms.bean.*;
import org.apache.ibatis.annotations.Mapper;


/**
 * 找到映射器
 *
 * @author Q版小徐
 * {@code @date} 2022/11/20
 */
@Mapper
public interface FindMapper {
    Administrator findAdministrator(String username, String password);
    Client findClient(String username, String password);
    SalesStaff findSalesStaff(String username, String password);
    Administrator findAdministratorById(int administratorId);
    Client findClientById(int clientId);
    SalesStaff findSalesStaffById(int salesStaffId);
    Order findOrder(int orderId);
    OrderDetail findOrderDetail(int orderDetailId);
    Product findProduct(int productId);
}
