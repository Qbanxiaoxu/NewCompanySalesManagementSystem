package com.example.csms.bean;

import java.sql.Timestamp;

/**
 * @author 徐兴盼
 */
public class Order {

  private long orderId;
  private java.sql.Timestamp orderTime;
  private long clientId;
  private long salesStaffId;
  private double consumption;


  public Order(){}

  public Order(int orderId, Timestamp orderTime, int clientId, int salesStaffId, long consumption) {
    this.orderId=orderId;
    this.orderTime=orderTime;
    this.clientId=clientId;
    this.salesStaffId=salesStaffId;
    this.consumption=consumption;
  }

  public long getOrderId() {
    return orderId;
  }

  public void setOrderId(long orderId) {
    this.orderId = orderId;
  }


  public java.sql.Timestamp getOrderTime() {
    return orderTime;
  }

  public void setOrderTime(java.sql.Timestamp orderTime) {
    this.orderTime = orderTime;
  }


  public long getClientId() {
    return clientId;
  }

  public void setClientId(long clientId) {
    this.clientId = clientId;
  }


  public long getSalesStaffId() {
    return salesStaffId;
  }

  public void setSalesStaffId(long salesStaffId) {
    this.salesStaffId = salesStaffId;
  }


  public double getConsumption() {
    return consumption;
  }

  public void setConsumption(double consumption) {
    this.consumption = consumption;
  }

}
