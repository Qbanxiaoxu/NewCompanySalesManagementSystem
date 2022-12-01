package com.example.csms.bean;

/**
 * @author 徐兴盼
 */
public class OrderDetail {

  private long orderDetailId;
  private long productId;
  private long productNumber;
  private double totalPrice;


  public OrderDetail(){}
  public long getOrderDetailId() {
    return orderDetailId;
  }

  public void setOrderDetailId(long orderDetailId) {
    this.orderDetailId = orderDetailId;
  }


  public long getProductId() {
    return productId;
  }

  public void setProductId(long productId) {
    this.productId = productId;
  }


  public long getProductNumber() {
    return productNumber;
  }

  public void setProductNumber(long productNumber) {
    this.productNumber = productNumber;
  }


  public double getTotalPrice() {
    return totalPrice;
  }

  public void setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
  }

}
