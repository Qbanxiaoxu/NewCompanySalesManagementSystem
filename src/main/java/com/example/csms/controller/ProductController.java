package com.example.csms.controller;

import com.example.csms.bean.Product;
import com.example.csms.service.ProductService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;
import com.google.gson.Gson;
@Controller
@ResponseBody
@RequestMapping("/product")
public class ProductController {
    ProductService productService;

//    @GetMapping("/getIsonOne")
//    public String getProductById(@Param("id") long id){
//        Product product= productService.getProductById(id);
//        Gson gson
//    }

    @GetMapping("/getAllInfor")
    public  String getAll() {
        List <Product> products=productService.getAllProducts();
        Gson gson=new Gson();
        return gson.toJson(products);
    }

}
