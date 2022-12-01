package com.example.csms.mapper;

import com.example.csms.bean.Product;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Mapper
@Repository
public interface ProductMapper {
    Product getProductById(long id);
    List<Product> getAllProducts();
}
