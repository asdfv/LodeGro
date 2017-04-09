describe('login page', () => {
    it('test login', () => {

        browser.get('http://localhost:3000/');

        let h1 = element(by.css("h1"));
        // browser.pause();

        // let loginLink = element(by.css("h1"));
        // let username = element(by.id('username'));
        // let password = element(by.id('password'));
        // let loginButton = element(by.id('loginButton'));
        //
        //
        // loginLink.click();
        // browser.driver.sleep(5000);
        // browser.pause();
        // username.sendKeys("adm");
        // password.sendKeys("a");
        // loginButton.click();

        // var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test');
        //
        // // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);
    });
});
