package com.example.csms.controller;

import com.example.csms.bean.Client;
import com.example.csms.bean.Order;
import com.example.csms.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class ClientController {
    @Resource
    private FindService findService;
    private AddService addService;
    private DeleteService deleteService;
    private QueryService queryService;
    private ModifyService modifyService;
    private GetService getService;
    private LoginVerifyService loginVerifyService;

    /**
     * 查看订单信息
     *
     * @return {@link String}
     */
    @RequestMapping(value = "/QueryClientOrders", name = "查看与自己相关订单信息")
    public String viewOrdersInfo(HttpServletRequest request) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        Client client = loginVerifyService.verifyClient(username, password);
        if (client == null) return "404.html";
        long clientId = client.getClientId();
        return getString(clientId, queryService);
    }

    static String getString(long clientId, QueryService queryService) {
        List<Order> orders = queryService.queryOrders();
        StringBuilder json = new StringBuilder();
        json.append("[");
        String jsonStr = "";
        for (Order order : orders) {
            if (order.getClientId() == clientId) {
                json.append("{\"orderId\":");
                json.append(order.getOrderId());
                json.append(",\"orderTime\":\"");
                json.append(order.getOrderTime());
                json.append("\",\"clientId\":");
                json.append(order.getClientId());
                json.append(",\"salesStaffId\":");
                json.append(order.getSalesStaffId());
                json.append(",\"consumption\":");
                json.append(order.getConsumption());
                json.append("},");
            }
        }
        jsonStr = json.substring(0, json.length() - 1) + "]";
        return jsonStr;
    }

    /**
     * 下订单
     */
    @RequestMapping(value = "/PlaceOrder", name = "下单")
    public void placeOrder(){

    }

    @RequestMapping(value = "/ModifyClient", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modify(Client client){
        modifyService.modifyClient(client);
    }
}
