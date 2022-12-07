package com.example.csms.controller;

import com.example.csms.bean.Client;
import com.example.csms.bean.Order;
import com.example.csms.bean.OrderDetail;
import com.example.csms.bean.Product;
import com.example.csms.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
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
     * 下订单细节
     *
     * @param request 请求
     */
    @RequestMapping(value = "/PlaceOrderDetail", name = "生成订单明细")
    public void placeOrderDetail(HttpServletRequest request){
        int productId= Integer.parseInt(request.getParameter("productId"));
        int productNum= Integer.parseInt(request.getParameter("productNum"));
        int orderDetailId=0;
        Product product=findService.findProduct(productId);
        long totalPrice= (long) (productNum*product.getProductPrice());
        OrderDetail orderDetail=new OrderDetail(orderDetailId,productId,productNum,totalPrice);
        addService.addOrderDetail(orderDetail);
        placeOrder(totalPrice);
    }

    /**
     * 下订单
     *
     * @param consumption 消费
     *///@RequestMapping(value = "/PlaceOrder", name = "生成订单")
    public void placeOrder(long consumption){
        int orderId=0;
        Date date = new Date();
        Timestamp orderTime = new Timestamp(date.getTime());

        int clientId=(int)(1+Math.random()*(getService.getClientsNumber()-1+1));
        int salesStaffId=(int)(1+Math.random()*(getService.getSalesStaffsNumber()-1+1));
        Order order=new Order(orderId,orderTime,clientId,salesStaffId,consumption);
        addService.addOrder(order);
    }

    @RequestMapping(value = "/ModifyClient", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modify(Client client){
        modifyService.modifyClient(client);
    }
}
