/* =============== *\
   HOOKS
\* =============== */
module.exports.before = browser => {
  browser
    .url(process.env.VUE_DEV_SERVER_URL)
    .waitForElementVisible('.container', 5000)
};

module.exports.after = browser => {
  browser.end();
};


/* =============== *\
   TESTS
\* =============== */
module.exports['Real-world masks'] = browser => {
  const inputs = [
    {
      selector: 'input#time-and-date-ex',
      value: '271020162315',
      expected: '27/10/2016 23:15',
    },
    {
      selector: 'input#time-ex',
      value: '111515',
      expected: '11:15:15',
    },
    {
      selector: 'input#credit-cart-ex',
      value: '4444444444444444',
      expected: '4444 4444 4444 4444',
    },
    {
      selector: 'input#phone-number-ex',
      value: '9999999999',
      expected: '(999) 999-9999',
    },
    {
      selector: 'input#us-phone-number-ex',
      value: '9999999999',
      expected: '+1(999)-999-9999',
    },
  ];

  inputs.forEach(input => {
    browser
      .assert.elementPresent(input.selector)
      .setValue(input.selector, input.value)
      .expect.element(input.selector).to.have.value.that.equals(input.expected);
  });
};
