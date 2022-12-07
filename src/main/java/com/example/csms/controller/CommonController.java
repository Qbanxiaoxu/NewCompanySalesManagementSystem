package com.example.csms.controller;

import com.example.csms.bean.*;
import com.example.csms.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class CommonController {
    @Resource
    private FindService findService;
    private AddService addService;
    private DeleteService deleteService;
    private QueryService queryService;
    private ModifyService modifyService;
    private GetService getService;

    public CommonController(QueryService queryService) {
        this.queryService = queryService;
    }

    /**
     * 查询客户信息、产品信息、销售人员信息、订单信息
     *
     * @return {@link String}
     */
    @RequestMapping(value = "/Query", name = "query")
    @ResponseBody
    public String query(HttpServletRequest request){
        String object=request.getParameter("object");
        StringBuilder json=new StringBuilder();
        json.append("[");
        String jsonStr="";
        if(object.equals("Administrator")){
            List<Administrator> administrators=queryService.queryAdministrators();
            for(Administrator administrator:administrators){
                json.append("{\"administratorId\":");
                json.append(administrator.getAdministratorId());
                json.append(",\"administratorPassword\":\"");
                json.append(administrator.getAdministratorPassword());
                json.append("\",\"administratorName\":\"");
                json.append(administrator.getAdministratorName());
                json.append("\",\"administratorGender\":\"");
                json.append(administrator.getAdministratorGender());
                json.append("\",\"administratorAddress\":\"");
                json.append(administrator.getAdministratorAddress());
                json.append("\",\"administratorEmail\":\"");
                json.append(administrator.getAdministratorEmail());
                json.append("\"},");
            }
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        if(object.equals("Client")){
            List<Client> clients=queryService.queryClients();
            for(Client client:clients){
                json.append("{\"clientId\":");
                json.append(client.getClientId());
                json.append(",\"clientPassword\":\"");
                json.append(client.getClientPassword());
                json.append("\",\"clientName\":\"");
                json.append(client.getClientName());
                json.append("\",\"clientGender\":\"");
                json.append(client.getClientGender());
                json.append("\",\"clientAddress\":\"");
                json.append(client.getClientAddress());
                json.append("\",\"clientEmail\":\"");
                json.append(client.getClientEmail());
                json.append("\"},");
            }
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        if(object.equals("SalesStaff")){
            List<SalesStaff> salesStaffs=queryService.querySalesStaffs();
            for(SalesStaff salesStaff:salesStaffs){
                json.append("{\"salesStaffId\":");
                json.append(salesStaff.getSalesStaffId());
                json.append(",\"salesStaffPassword\":\"");
                json.append(salesStaff.getSalesStaffPassword());
                json.append("\",\"salesStaffName\":\"");
                json.append(salesStaff.getSalesStaffName());
                json.append("\",\"salesStaffGender\":\"");
                json.append(salesStaff.getSalesStaffGender());
                json.append("\",\"salesStaffAddress\":\"");
                json.append(salesStaff.getSalesStaffAddress());
                json.append("\",\"salesStaffEmail\":\"");
                json.append(salesStaff.getSalesStaffEmail());
                json.append("\",\"salesStaffSalary\":");
                json.append(salesStaff.getSalesStaffSalary());
                json.append("},");
            }
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        if(object.equals("Product")){
            List<Product> products=queryService.queryProducts();
            for(Product product:products){
                json.append("{\"productId\":");
                json.append(product.getProductId());
                json.append(",\"productName\":\"");
                json.append(product.getProductName());
                json.append("\",\"productDescription\":\"");
                json.append(product.getProductDescription());
                json.append("\",\"productPrice\":");
                json.append(product.getProductPrice());
                json.append(",\"productInventory\":");
                json.append(product.getProductInventory());
                json.append("},");
            }
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        if(object.equals("Order")){
            List<Order> orders=queryService.queryOrders();
            for(Order order:orders){
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
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        if(object.equals("orderDetail")){
            List<OrderDetail> orderDetails=queryService.queryOrderDetails();
            for(OrderDetail orderDetail:orderDetails){
                json.append("{\"orderDetailId\":");
                json.append(orderDetail.getOrderDetailId());
                json.append(",\"productId\":");
                json.append(orderDetail.getProductId());
                json.append(",\"productNumber\":");
                json.append(orderDetail.getProductNumber());
                json.append(",\"totalPrice\":");
                json.append(orderDetail.getTotalPrice());
                json.append("},");
            }
            jsonStr=json.substring(0,json.length()-1)+"]";
            return jsonStr;
        }
        return "404.html";
    }

    /**
     * 查找客户、销售人员、管理人员、订单、订单明细、产品
     *
     * @return {@link String}
     */
    @RequestMapping(value = "/Find", name = "find")
    public String find(HttpServletRequest request) {
        String object = request.getParameter("object");
        int id = Integer.parseInt(request.getParameter("ID"));
        StringBuilder json = new StringBuilder();
        json.append("[");
        String jsonStr = "";
        if (object.equals("Administrator")) {
            Administrator administrator = findService.findAdministratorById(id);

            json.append("{\"administratorId\":");
            json.append(administrator.getAdministratorId());
            json.append(",\"administratorPassword\":\"");
            json.append(administrator.getAdministratorPassword());
            json.append("\",\"administratorName\":\"");
            json.append(administrator.getAdministratorName());
            json.append("\",\"administratorGender\":\"");
            json.append(administrator.getAdministratorGender());
            json.append("\",\"administratorAddress\":\"");
            json.append(administrator.getAdministratorAddress());
            json.append("\",\"administratorEmail\":\"");
            json.append(administrator.getAdministratorEmail());
            json.append("\"},");
            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        if (object.equals("Client")) {
            Client client = findService.findClientById(id);

            json.append("{\"clientId\":");
            json.append(client.getClientId());
            json.append(",\"clientPassword\":\"");
            json.append(client.getClientPassword());
            json.append("\",\"clientName\":\"");
            json.append(client.getClientName());
            json.append("\",\"clientGender\":\"");
            json.append(client.getClientGender());
            json.append("\",\"clientAddress\":\"");
            json.append(client.getClientAddress());
            json.append("\",\"clientEmail\":\"");
            json.append(client.getClientEmail());
            json.append("\"},");
            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        if (object.equals("SalesStaff")) {
            SalesStaff salesStaff = findService.findSalesStaffById(id);

            json.append("{\"salesStaffId\":");
            json.append(salesStaff.getSalesStaffId());
            json.append(",\"salesStaffPassword\":\"");
            json.append(salesStaff.getSalesStaffPassword());
            json.append("\",\"salesStaffName\":\"");
            json.append(salesStaff.getSalesStaffName());
            json.append("\",\"salesStaffGender\":\"");
            json.append(salesStaff.getSalesStaffGender());
            json.append("\",\"salesStaffAddress\":\"");
            json.append(salesStaff.getSalesStaffAddress());
            json.append("\",\"salesStaffEmail\":\"");
            json.append(salesStaff.getSalesStaffEmail());
            json.append("\",\"salesStaffSalary\":");
            json.append(salesStaff.getSalesStaffSalary());
            json.append("},");

            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        if (object.equals("Product")) {
            Product product = findService.findProduct(id);

            json.append("{\"productId\":");
            json.append(product.getProductId());
            json.append(",\"productName\":\"");
            json.append(product.getProductName());
            json.append("\",\"productDescription\":\"");
            json.append(product.getProductDescription());
            json.append("\",\"productPrice\":");
            json.append(product.getProductPrice());
            json.append(",\"productInventory\":");
            json.append(product.getProductInventory());
            json.append("},");

            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        if (object.equals("Order")) {
            Order order = findService.findOrder(id);

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

            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        if (object.equals("orderDetail")) {
            OrderDetail orderDetail = findService.findOrderDetail(id);

            json.append("{\"orderDetailId\":");
            json.append(orderDetail.getOrderDetailId());
            json.append(",\"productId\":");
            json.append(orderDetail.getProductId());
            json.append(",\"productNumber\":");
            json.append(orderDetail.getProductNumber());
            json.append(",\"totalPrice\":");
            json.append(orderDetail.getTotalPrice());
            json.append("},");

            jsonStr = json.substring(0, json.length() - 1) + "]";
            return jsonStr;
        }
        return "404.html";
    }
}
