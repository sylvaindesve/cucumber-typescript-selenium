import { After, Status } from 'cucumber';
import { WebTestingWorld } from './world';

After(async function(scenario) {
  const world = this as WebTestingWorld;
  const _this = this;

  if (scenario.result.status === Status.FAILED) {
    await world.driver.takeScreenshot().then((buffer) => {
      _this.attach(buffer, 'image/png');
    });
  }

  await world.driver.quit();
});
