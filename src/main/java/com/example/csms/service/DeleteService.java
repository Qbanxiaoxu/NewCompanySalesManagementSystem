package com.example.csms.service;

/**
 * 客户服务
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public interface DeleteService {
    void deleteAdministrator(int administratorId);
    void deleteClient(int clientId);
    void deleteSalesStaff(int salesStaffId);
    void deleteOrder(int orderId);
    void deleteProduct(int productId);
    void deleteOrderDetails();
    void deleteOrderDetailById(int orderDetailId);
}
