describe('Home page test', () => {
    it('test not null list of news', () => {

        browser.get('http://localhost:3000/#/');

        let newsList = element.all(by.id('news-list'));
        expect(newsList.count()).toEqual(1);
    });
});
