package com.example.csms.service;

import com.example.csms.bean.Product;

import java.util.List;

public interface ProductService {
    Product getProductById(long id);
    List<Product> getAllProducts();
}
