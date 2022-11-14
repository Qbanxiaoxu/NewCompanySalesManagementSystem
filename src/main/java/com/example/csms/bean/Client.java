package com.example.csms.bean;

/**
 * @author 徐兴盼
 */
public class Client {

  private long clientId;
  private String clientPassword;
  private String clientName;
  private String clientGender;
  private String clientAddress;
  private String clientEmail;


  public long getClientId() {
    return clientId;
  }

  public void setClientId(long clientId) {
    this.clientId = clientId;
  }


  public String getClientPassword() {
    return clientPassword;
  }

  public void setClientPassword(String clientPassword) {
    this.clientPassword = clientPassword;
  }


  public String getClientName() {
    return clientName;
  }

  public void setClientName(String clientName) {
    this.clientName = clientName;
  }


  public String getClientGender() {
    return clientGender;
  }

  public void setClientGender(String clientGender) {
    this.clientGender = clientGender;
  }


  public String getClientAddress() {
    return clientAddress;
  }

  public void setClientAddress(String clientAddress) {
    this.clientAddress = clientAddress;
  }


  public String getClientEmail() {
    return clientEmail;
  }

  public void setClientEmail(String clientEmail) {
    this.clientEmail = clientEmail;
  }

}
