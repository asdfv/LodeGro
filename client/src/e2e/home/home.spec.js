describe('Home page test', () => {
    it('test not null list of news', () => {

        browser.get('http://localhost:3000/');

        let newsList = element.all(by.repeater('let news of newsList'));
        expect(newsList.count()).toEqual(0);
        // expect(newsList.get(0).title.getText()).toEqual('Готовим ножки к лету!');
    });
});
