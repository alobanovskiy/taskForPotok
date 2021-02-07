const { setHeadlessWhen, setWindowSize} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1920, 1080);

exports.config = {
  tests: './demo/*_test.js',
  output: './demo/logs',
  helpers: {
    Puppeteer: {
      url: 'https://github.com/',
      show: true,
      windowSize: '1920, 1080'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests',
  plugins: {
    'allure': {
      enabled:true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      screenshotsForAllureReport: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
