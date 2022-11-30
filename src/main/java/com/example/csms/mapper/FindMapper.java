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
    /**
     * 找到管理员
     *
     * @param username 用户名
     * @param password 密码
     * @return {@link Administrator}
     */
    Administrator findAdministrator(String username, String password);

    /**
     * 找到客户
     *
     * @param username 用户名
     * @param password 密码
     * @return {@link Client}
     */
    Client findClient(String username, String password);

    /**
     * 找到销售人员
     *
     * @param username 用户名
     * @param password 密码
     * @return {@link SalesStaff}
     */
    SalesStaff findSalesStaff(String username, String password);
    Order findOrder(int orderId);
    OrderDetail findOrderDetail(int orderDetailId);
    Product findProduct(int productId);
}
