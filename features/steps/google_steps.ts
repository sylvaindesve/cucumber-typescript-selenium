// tslint:disable:no-unused-expression
import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { By, Key, until } from 'selenium-webdriver';
import { WebTestingWorld } from '../support/world';

Given('je vais sur Google', { timeout: 10000 }, async function() {
  const world = this as WebTestingWorld;
  world.driver.get('https://www.google.fr');
  await world.driver.wait(until.elementLocated(By.name('q')), 10000);
});

When('je recherche {string}', async function(searchTerm) {
  const world = this as WebTestingWorld;
  await world.driver.findElement(By.name('q')).sendKeys(searchTerm, Key.RETURN);
});

Then(/je vois une liste de (\d+) résultats?/, async function(nbResults) {
  const world = this as WebTestingWorld;
  await world.driver.wait(until.titleContains('Recherche Google'));
  const results = await world.driver.findElements(By.css('h3.LC20lb'));
  expect(results.length).to.equal(nbResults);
});

Then('{string} fait partie de la liste des résultats', async function(searchResult: string) {
  const world = this as WebTestingWorld;
  const results = await world.driver.findElements(By.css('h3.LC20lb'));
  const results_text = await Promise.all(results.map((r) => r.getText()));
  expect(results_text.some((t) => t.includes(searchResult))).to.be.true;
});

// https://www.npmjs.com/package/selenium-webdriver
