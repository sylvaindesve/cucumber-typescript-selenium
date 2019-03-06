import { After, Before, Status } from 'cucumber';
import { Builder } from 'selenium-webdriver';
import { WebTestingWorld } from './world';

Before({tags: '@web'}, function() {
  const world = this as WebTestingWorld;
  world.driver = new Builder().forBrowser('chrome').build();
});

After({tags: '@web'}, async function(scenario) {
  const world = this as WebTestingWorld;
  const _this = this;

  if (scenario.result.status === Status.FAILED) {
    await world.driver.takeScreenshot().then((buffer) => {
      _this.attach(buffer, 'image/png');
    });
  }

  await world.driver.quit();
});
