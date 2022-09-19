import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  @api primeironome;
  @api sobrenome;
  @api idade;
  @api email;
  @api classificação;
  @api empresa;
  @api receitaanual;
}
