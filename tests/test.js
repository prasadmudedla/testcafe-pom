import GoogleSearchPage from '../page-object/googlesearchpage';
import SearchResultsPage from '../page-object/searchresultspage';

const googlesearchpage = new GoogleSearchPage();
const searchresultspage = new SearchResultsPage();

fixture `Getting Started`
    .page `http://www.google.com`;

test('Verify Title', async t => {
    const title = await googlesearchpage.getTitle();
    await t.expect(title).eql('Google');
});

test('Google Search', async t => {
    await googlesearchpage.searchFor('Selenium');
    const seleniumText = await searchresultspage.getSeleniumText();
    await t.expect(seleniumText).contains('Selenium - Web Browser Automation');
});

