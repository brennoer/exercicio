import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  @api id;
  @api nome;
  @api valor;
  @api fase;
}
