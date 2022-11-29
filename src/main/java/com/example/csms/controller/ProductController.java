package com.example.csms.controller;

import com.example.csms.bean.Product;
import com.example.csms.service.ProductService;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.csms.service.ProductService;
import javax.annotation.Resource;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

public class ProductController {
    @Resource
    ProductService productService;

    //映射到service层的getAllInfo方法
    @RequestMapping(value="/getAllInfo",method = POST)
    public Product getAllInfoMethod()
    {

    }
}
