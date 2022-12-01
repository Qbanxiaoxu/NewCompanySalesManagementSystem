package com.example.csms.bean;

/**
 * @author 徐兴盼
 */
public class Product {

  private long productId;
  private String productName;
  private String productDescription;
  private double productPrice;
  private long productInventory;


  public Product(){}
  public long getProductId() {
    return productId;
  }

  public void setProductId(long productId) {
    this.productId = productId;
  }


  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }


  public String getProductDescription() {
    return productDescription;
  }

  public void setProductDescription(String productDescription) {
    this.productDescription = productDescription;
  }


  public double getProductPrice() {
    return productPrice;
  }

  public void setProductPrice(double productPrice) {
    this.productPrice = productPrice;
  }


  public long getProductInventory() {
    return productInventory;
  }

  public void setProductInventory(long productInventory) {
    this.productInventory = productInventory;
  }

}
