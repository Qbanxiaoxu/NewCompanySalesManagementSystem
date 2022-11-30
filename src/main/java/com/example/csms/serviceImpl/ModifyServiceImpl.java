package com.example.csms.serviceImpl;

import com.example.csms.bean.*;
import com.example.csms.mapper.ModifyMapper;
import com.example.csms.service.ModifyService;

import javax.annotation.Resource;

/**
 * 系统服务impl
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public class ModifyServiceImpl implements ModifyService {
    @Resource
    private ModifyMapper modifyMapper;
    public void modifyAdministrator(Administrator administrator){
        modifyMapper.modifyAdministrator(administrator);
    }
    public void modifyClient(Client client){
        modifyMapper.modifyClient(client);
    }
    public void modifyOrder(Order order){
        modifyMapper.modifyOrder(order);
    }
    public void modifyOrderDetail(OrderDetail orderDetail){
        modifyMapper.modifyOrderDetail(orderDetail);
    }
    public void modifyProduct(Product product){
        modifyMapper.modifyProduct(product);
    }
    public void modifySalesStaff(SalesStaff salesStaff){
        modifyMapper.modifySalesStaff(salesStaff);
    }
}
