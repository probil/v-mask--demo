// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  after(browser) {
    console.log('Closing down...');
    browser.end();
  },

  'Date and time'(browser) {
    const input = 'input#time-and-date-ex';

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.container', 5000)
      .assert.elementPresent(input)
      .setValue(input,'271020162315')
      .getValue(input, function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "27/10/2016 23:15");
      });
  },

  'Time with seconds'(browser) {
    const input = 'input#time-ex';

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.container', 5000)
      .assert.elementPresent(input)
      .setValue(input, '111515')
      .getValue(input, function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "11:15:15");
      });
  },

  'Credit Card'(browser) {
    const input = 'input#credit-cart-ex';

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.container', 5000)
      .assert.elementPresent(input)
      .setValue(input, '4444444444444444')
      .getValue(input, function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "4444 4444 4444 4444");
      });
  },

  'Phone Number'(browser) {
    const input = 'input#phone-number-ex';

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.container', 5000)
      .assert.elementPresent(input)
      .setValue(input, '9999999999')
      .getValue(input, function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "(999) 999-9999");
      });
  },

  'Phone Number (US)'(browser) {
    const input = 'input#us-phone-number-ex';

    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.container', 5000)
      .assert.elementPresent(input)
      .setValue(input, '9999999999')
      .getValue(input, function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.value, "+1(999)-999-9999");
      });
  },
};
