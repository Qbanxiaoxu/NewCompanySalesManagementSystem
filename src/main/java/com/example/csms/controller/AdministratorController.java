package com.example.csms.controller;

import com.example.csms.bean.*;
import com.example.csms.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
public class AdministratorController {
    @Resource
    private FindService findService;
    private AddService addService;
    private DeleteService deleteService;
    private QueryService queryService;
    private ModifyService modifyService;
    private GetService getService;

    /**
     * 添加客户、产品、销售人员、管理人员
     *
     */
    @RequestMapping(value = "/AddAdministrator", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addAdmin(Administrator administrator){
        if (administrator==null)
            return "404.html";
        addService.addAdministrator(administrator);
        return null;
    }
    @RequestMapping(value = "/AddClient", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addClient(Client client){
        if (client==null)
            return "404.html";
        addService.addClient(client);
        return null;
    }
    @RequestMapping(value = "/AddSalesStaff", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addCSalesStaff(SalesStaff salesStaff){
        if (salesStaff==null)
            return "404.html";
        addService.addSalesStaff(salesStaff);
        return null;
    }
    @RequestMapping(value = "/AddOrder", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addOrder(Order order){
        if (order==null)
            return "404.html";
        addService.addOrder(order);
        return null;
    }
    @RequestMapping(value = "/AddOrderDetail", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addOrderDetail(OrderDetail orderDetail){
        if (orderDetail==null)
            return "404.html";
        addService.addOrderDetail(orderDetail);
        return null;
    }
    @RequestMapping(value = "/AddProduct", name="add",method= RequestMethod.POST)
    @ResponseBody
    public String addProduct(Product product){
        if (product==null)
            return "404.html";
        addService.addProduct(product);
        return null;
    }
    /**
     * 删除管理人员、客户、销售人员、订单、订单明细、产品
     */
    @RequestMapping(value = "/Delete", name = "delete")
    public void delete(HttpServletRequest request){
        int ID= Integer.parseInt(request.getParameter("ID"));
        String object=request.getParameter("object");
        if(object.equals("Administrator"))
            deleteService.deleteAdministrator(ID);
        if (object.equals("Client"))
            deleteService.deleteClient(ID);
        if (object.equals("SalesStaff"))
            deleteService.deleteSalesStaff(ID);
        if (object.equals("Order"))
            deleteService.deleteOrder(ID);
        if (object.equals("OrderDetail"))
            deleteService.deleteOrderDetailById(ID);
        if (object.equals("Product"))
            deleteService.deleteProduct(ID);
    }

    /**
     * 获得营业额
     *
     * @return {@link String}
     */
    @RequestMapping(value = "/CheckTurnover", name = "查看公司营业额")
    public String getTurnover(){return "";}

    /**
     * 查看产品销售
     *
     * @return {@link String}
     */
    @RequestMapping(value = "/CheckProductSales", name = "查看产品销售情况")
    public String viewProductSales(){return "";}

    @RequestMapping(value = "/ModifyAdministrator", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modifyAdmin(Administrator administrator){
        modifyService.modifyAdministrator(administrator);
    }
    @RequestMapping(value = "/ModifyOrder", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modifyOrder(Order order){
        modifyService.modifyOrder(order);
    }
    @RequestMapping(value = "/ModifyProduct", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modifyProduct(Product product){
        modifyService.modifyProduct(product);
    }
    @RequestMapping(value = "/ModifyOrderDetail", name = "modify",method = RequestMethod.POST)
    @ResponseBody
    public void modifyOrderDetail(OrderDetail orderDetail){
        modifyService.modifyOrderDetail(orderDetail);
    }
}
