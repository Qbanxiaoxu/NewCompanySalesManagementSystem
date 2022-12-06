package com.example.csms.bean;


/**
 * @author 徐兴盼
 */
public class Administrator {

  private long administratorId;
  private String administratorPassword;
  private String administratorName;
  private String administratorGender;
  private String administratorAddress;
  private String administratorEmail;


  public Administrator(){}

  public Administrator(String username, String password, String email) {
    this.administratorName = username;
    this.administratorPassword = password;
    this.administratorEmail = email;
    this.administratorId = 0;
    this.administratorGender = "M";
    this.administratorAddress = "";
  }

  public long getAdministratorId() {
    return administratorId;
  }

  public void setAdministratorId(long administratorId) {
    this.administratorId = administratorId;
  }


  public String getAdministratorPassword() {
    return administratorPassword;
  }

  public void setAdministratorPassword(String administratorPassword) {
    this.administratorPassword = administratorPassword;
  }


  public String getAdministratorName() {
    return administratorName;
  }

  public void setAdministratorName(String administratorName) {
    this.administratorName = administratorName;
  }


  public String getAdministratorGender() {
    return administratorGender;
  }

  public void setAdministratorGender(String administratorGender) {
    this.administratorGender = administratorGender;
  }


  public String getAdministratorAddress() {
    return administratorAddress;
  }

  public void setAdministratorAddress(String administratorAddress) {
    this.administratorAddress = administratorAddress;
  }


  public String getAdministratorEmail() {
    return administratorEmail;
  }

  public void setAdministratorEmail(String administratorEmail) {
    this.administratorEmail = administratorEmail;
  }

}
