Feature('search');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
  I.fillField('Search GitHub', 'test');
  I.click('[data-item-type="global_search"]');
  I.seeInCurrentUrl("https://github.com/search?q=test");
});
