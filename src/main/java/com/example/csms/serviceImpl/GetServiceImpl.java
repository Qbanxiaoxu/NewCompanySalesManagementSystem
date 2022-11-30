package com.example.csms.serviceImpl;

import com.example.csms.mapper.GetMapper;
import com.example.csms.service.GetService;

import javax.annotation.Resource;

/**
 * 销售人员服务impl
 *
 * @author Q版小徐
 * @date 2022/11/22
 */
public class GetServiceImpl implements GetService {
    @Resource
    private GetMapper getMapper;
    public int getOrderQuantity(){
        return getMapper.getOrderQuantity();
    }
    public int getAdministratorsNumber(){
        return getMapper.getAdministratorsNumber();
    }
    public int getClientsNumber(){
        return getMapper.getClientsNumber();
    }
    public int getSalesStaffsNumber(){
        return getMapper.getSalesStaffsNumber();
    }
    public int getOrderDetailsNumber(){
        return getMapper.getOrderDetailsNumber();
    }
    public int getProductsNumber(){
        return getMapper.getProductsNumber();
    }
}
