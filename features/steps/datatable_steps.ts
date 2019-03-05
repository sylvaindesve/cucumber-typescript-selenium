import { expect } from 'chai';
import { Given, TableDefinition, Then, When } from 'cucumber';

interface Person {
  firstName: string;
  lastName: string;
}
const people: Person[] = [];
let found: Person;

Given('les personnes suivantes:', (dataTable: TableDefinition) => {
  dataTable.hashes().forEach((row: any) => {
    people.push({
      firstName: row.Prénom,
      lastName: row.Nom,
    });
  });
});

When('je recherche le nom de {string}', (firstNameLookedFor) => {
  found = people.find((p) => p.firstName === firstNameLookedFor);
});

Then('j\'ai {string}', (expectedLastName) => {
  expect(found.lastName).to.equal(expectedLastName);
});
