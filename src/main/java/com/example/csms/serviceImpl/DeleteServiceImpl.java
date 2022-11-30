package com.example.csms.serviceImpl;

import com.example.csms.mapper.DeleteMapper;
import com.example.csms.service.DeleteService;

import javax.annotation.Resource;

/**
 * 客户服务impl
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public class DeleteServiceImpl implements DeleteService {
    @Resource
    private DeleteMapper deleteMapper;
    public void deleteAdministrator(int administratorId){
        deleteMapper.deleteAdministrator(administratorId);
    }
    public void deleteClient(int clientId){
        deleteMapper.deleteClient(clientId);
    }
    public void deleteSalesStaff(int salesStaffId){
        deleteMapper.deleteSalesStaff(salesStaffId);
    }
    public void deleteOrder(int orderId){
        deleteMapper.deleteOrder(orderId);
    }
    public void deleteProduct(int productId){
        deleteMapper.deleteProduct(productId);
    }
    public void deleteOrderDetails(){
        deleteMapper.deleteOrderDetails();
    }
    public void deleteOrderDetailById(int orderDetailId){
        deleteMapper.deleteOrderDetailById(orderDetailId);
    }
}
