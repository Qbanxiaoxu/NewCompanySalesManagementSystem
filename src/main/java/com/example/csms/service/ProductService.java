package com.example.csms.service;

import com.example.csms.bean.Product;

public interface ProductService {
    Product getAllInfo();

    Product searchById(long pId);

}
