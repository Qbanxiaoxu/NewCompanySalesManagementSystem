package com.example.csms.serviceImpl;

import com.example.csms.bean.*;
import com.example.csms.mapper.AddMapper;
import com.example.csms.service.AddService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 管理员服务实现
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
@Service
public class AddServiceImpl implements AddService {
    @Resource
    private AddMapper addMapper;
    public void addAdministrator(Administrator administrator){
        addMapper.addAdministrator(administrator);
    }
    public void addClient(Client client){
        addMapper.addClient(client);
    }
    public void addOrder(Order order){
        addMapper.addOrder(order);
    }
    public void addOrderDetail(OrderDetail orderDetail){
        addMapper.addOrderDetail(orderDetail);
    }
    public void addProduct(Product product){
        addMapper.addProduct(product);
    }
    public void addSalesStaff(SalesStaff salesStaff){
        addMapper.addSalesStaff(salesStaff);
    }
}
