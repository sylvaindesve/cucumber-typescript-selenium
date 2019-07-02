// tslint:disable:no-unused-expression
import { expect } from 'chai';
import { Given, TableDefinition, Then, When } from 'cucumber';
import { Calculatrice } from '../../src/calculatrice';
import { WebTestingWorld } from '../support/world';

Given('j\'ai démarré ma calculatrice', function() {
  const world = this as WebTestingWorld;
  world.calculatrice = new Calculatrice();
});

When(/je saisi "([^"]*)"/, function(saisie) {
  const valeur = Number(saisie);
  expect(isNaN(valeur)).to.be.false;
  if (!isNaN(valeur)) {
    const world = this as WebTestingWorld;
    world.calculatrice.entrerValeur(valeur);
  }
});

When(/j'appuie sur "([^"]*)"/, function(operation) {
  const world = this as WebTestingWorld;
  expect(['+'].includes(operation)).to.be.true;
  if (operation === '+') {
    world.calculatrice.additionner();
  }
});

When(/je met en mémoire à l'emplacement "([^"]*)"/, function(emplacement) {
  const world = this as WebTestingWorld;
  world.calculatrice.mettreEnMemoire(emplacement);
});

Then(/la valeur affichée est "([^"]*)"/, function(attendu) {
  const valeur = Number(attendu);
  expect(isNaN(valeur)).to.be.false;
  if (!isNaN(valeur)) {
    const world = this as WebTestingWorld;
    expect(world.calculatrice.lireValeur()).to.equal(valeur);
  }
});

Then('la mémoire contient:', function(dataTable: TableDefinition) {
  const world = this as WebTestingWorld;
  const memoireAttendue = dataTable.hashes().reduce((m: {[key: string]: number}, ligne: any) => {
    m[ligne.Emplacement as string] = parseInt(ligne.Valeur, 10);
    return m;
  }, {} as {[key: string]: number});
  expect(world.calculatrice.obtenirContenuMemoire()).to.deep.equal(memoireAttendue);
});
