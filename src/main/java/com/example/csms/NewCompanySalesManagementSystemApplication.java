package com.example.csms;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author xx
 */
@SpringBootApplication
@MapperScan("com.example.csms.mapper")
public class NewCompanySalesManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewCompanySalesManagementSystemApplication.class, args);
    }

}
