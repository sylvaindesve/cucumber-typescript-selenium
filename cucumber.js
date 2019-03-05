let common = [
  '--require-module ts-node/register',
  '--require "./features/support/**/*.ts"',
  '--require "./features/steps/**/*.ts"',
  '--format json:./reports/report.json',
  '--format progress',
].join(' ');

module.exports = {
  default: common + ' --tags "not @ignore"',
  selected: common + ' --tags "@selected and not @ignore"'
};
