package com.example.csms.serviceImpl;

import com.example.csms.bean.Product;
import com.example.csms.mapper.ProductMapper;
import com.example.csms.service.ProductService;

import javax.annotation.Resource;

public class ProduceServiceImpl implements ProductService {
    @Resource
    private ProductMapper productMapper;

    public Product getAllInfo()
    {
        return productMapper.getAll();
    }

    public Product searchById(long pId){
        return productMapper.searchById(pId);
    }
}
