import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  @api name;
  @api empresa;
  @api status;

  
}