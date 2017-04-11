describe('login page', () => {
    it('admin login', () => {

        browser.get('http://localhost:3000/#/login');

        let username = element(by.id('username'));
        let password = element(by.id('password'));
        let loginButton = element(by.id('loginButton'));

        username.sendKeys("adm");
        password.sendKeys("a");

        loginButton.click();
    });

    // it('add news and assert', () => {
    //
    //     browser.get('http://localhost:3000/#/redactor');
    //     let newsList = element.all(by.id('news-list'));
    //
    //     let countBefore;
    //     let countAfter;
    //
    //     newsList.count().then(
    //         count => {
    //             countBefore = count;
    //             addNews();
    //             browser.get('http://localhost:3000/#/redactor');
    //             newsList = element.all(by.id('news-list'));
    //             newsList.count().then(
    //                 count => {
    //                     countAfter = count;
    //                     expect(countAfter).toEqual(countBefore + 1);
    //                 }
    //             );
    //         }
    //     );
    //
    //     let addNews = () => {
    //         browser.get('http://localhost:3000/#/author');
    //
    //         let title = element(by.id('title'));
    //         let description = element(by.id('description'));
    //         let content = element(by.id('content'));
    //         let saveButton = element(by.id('save_button'));
    //         let newsList = element.all(by.id('news-list'));
    //
    //         title.sendKeys("Test news title");
    //         description.sendKeys("Test news description");
    //         content.sendKeys("Test news content");
    //         saveButton.click();
    //         browser.pause();
    //         browser.pause();
    //     };
    // });

    // it('Description of the test', function(){
    //     browser.get('http://localhost:3000/#/redactor');
    //
    //     let list = element.all(element.all(by.id('news-list')));
    //
    //     list.count().then(function(amount) {
    //
    //                 browser.get('http://localhost:3000/#/author');
    //
    //                 let title = element(by.id('title'));
    //                 let description = element(by.id('description'));
    //                 let content = element(by.id('content'));
    //                 let saveButton = element(by.id('save_button'));
    //
    //                 title.sendKeys("Test news title");
    //                 description.sendKeys("Test news description");
    //                 content.sendKeys("Test news content");
    //                 saveButton.click();
    //
    //         let secondList = element.all(by.repeater('list in listData.myLists'));
    //         secondList.count().then(secondAmount => {
    //             "use strict";
    //             expect(secondAmount).toEqual(amount + 1);
    //
    //         });
    //
    //     });
    // });
});
