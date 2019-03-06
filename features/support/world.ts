// tslint:disable:ban-types
import { setWorldConstructor, World } from 'cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';

export class WebTestingWorld implements World {

  public driver: WebDriver;
  public attach: Function;
  public parameters: {[key: string]: any};

  constructor({attach, parameters}: {attach: Function, parameters: {[key: string]: any}}) {
    this.attach = attach;
    this.parameters = parameters;
  }
}

setWorldConstructor(WebTestingWorld);
