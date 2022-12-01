package com.example.csms.mapper;

/**
 * 删除映射器
 *
 * @author Q版小徐
 * @date 2022/11/30
 */
public interface DeleteMapper {
    void deleteAdministrator(int administratorId);
    void deleteClient(int clientId);
    void deleteSalesStaff(int salesStaffId);
    void deleteOrder(int orderId);
    void deleteProduct(int productId);
    void deleteOrderDetails();
    void deleteOrderDetailById(int orderDetailId);
}
