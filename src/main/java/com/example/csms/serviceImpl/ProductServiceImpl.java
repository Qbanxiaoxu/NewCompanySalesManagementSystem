package com.example.csms.serviceImpl;

import com.example.csms.bean.Product;
import com.example.csms.mapper.ProductMapper;
import com.example.csms.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductMapper productMapper;
    @Override
    public Product getProductById(long id) {
        return productMapper.getProductById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return productMapper.getAllProducts();
    }
}
