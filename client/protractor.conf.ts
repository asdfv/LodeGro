import {Config, ProtractorBrowser} from 'protractor';

export let config: Config  = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    specs: [ './src/test/e2e/app-spec.ts' ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
        browser.manage().window().maximize();
    }

};

