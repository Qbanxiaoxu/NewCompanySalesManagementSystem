package com.example.csms.mapper;

import com.example.csms.bean.Product;

public interface ProductMapper {
    Product getAll();

    Product searchById(long pId);
}
