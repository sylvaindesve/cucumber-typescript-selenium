import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { By } from 'selenium-webdriver';
import { WebTestingWorld } from '../support/world';

Given('je vais sur le site {string}', async function(url) {
  const world = this as WebTestingWorld;
  await world.driver.get(url);
});

When('je déplace {string} vers {string}', async function(from_id, to_id) {
  const world = this as WebTestingWorld;
  const fromElement = await world.driver.findElement(By.id(from_id));
  const toElement = await world.driver.findElement(By.id(to_id));

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28464
  // @ts-ignore
  const actions = world.driver.actions({bridge: true});

  // const actions = world.driver.actions();
  await actions.dragAndDrop(fromElement, toElement).perform();
});

Then('je ne vois plus {string}', async function(element_id) {
  const world = this as WebTestingWorld;
  const results = await world.driver.findElements(By.id(element_id));
  expect(results).to.be.empty;
});
