package com.example.csms.bean;

/**
 * @author 徐兴盼
 */
public class SalesStaff {

  private long salesStaffId;
  private String salesStaffPassword;
  private String salesStaffName;
  private String salesStaffGender;
  private String salesStaffAddress;
  private String salesStaffEmail;
  private long salesStaffSalary;

  public SalesStaff(){}

    public SalesStaff(String username, String password, String email) {
      this.salesStaffName = username;
      this.salesStaffPassword = password;
      this.salesStaffEmail = email;
      this.salesStaffId=0;
      this.salesStaffAddress="";
      this.salesStaffGender="M";
      this.salesStaffSalary=3000;
    }
    public long getSalesStaffId() {
    return salesStaffId;
  }

  public void setSalesStaffId(long salesStaffId) {
    this.salesStaffId = salesStaffId;
  }


  public String getSalesStaffPassword() {
    return salesStaffPassword;
  }

  public void setSalesStaffPassword(String salesStaffPassword) {
    this.salesStaffPassword = salesStaffPassword;
  }


  public String getSalesStaffName() {
    return salesStaffName;
  }

  public void setSalesStaffName(String salesStaffName) {
    this.salesStaffName = salesStaffName;
  }


  public String getSalesStaffGender() {
    return salesStaffGender;
  }

  public void setSalesStaffGender(String salesStaffGender) {
    this.salesStaffGender = salesStaffGender;
  }


  public String getSalesStaffAddress() {
    return salesStaffAddress;
  }

  public void setSalesStaffAddress(String salesStaffAddress) {
    this.salesStaffAddress = salesStaffAddress;
  }


  public String getSalesStaffEmail() {
    return salesStaffEmail;
  }

  public void setSalesStaffEmail(String salesStaffEmail) {
    this.salesStaffEmail = salesStaffEmail;
  }


  public long getSalesStaffSalary() {
    return salesStaffSalary;
  }

  public void setSalesStaffSalary(long salesStaffSalary) {
    this.salesStaffSalary = salesStaffSalary;
  }

}
