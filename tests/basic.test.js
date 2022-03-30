import { Selector } from 'testcafe'

fixture `Getting started the test casfe`
    .page `http://devexpress.github.io/testcafe/example`

    .before(async t => {
        //set the database condition

    })

    .beforeEach(async t => {
        // run beforeach test cases
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)

    })

    .after(async t => {
        // cleaning data

    })

    .afterEach(async t => {
        // run aftereach test case
    })




test("My first test cafe test case", async t => {

    const developer_input_name = Selector('#developer-name')
    const developer_submit_btn = Selector('#submit-button')
    const article_name = Selector('#article-header').innerText

    //await t.takeElementScreenshot(developer_submit_btn)
    await t.typeText(developer_input_name,'bhushan')
    await t.click(developer_submit_btn)
    

    //await t.takeScreenshot({fullPage:true})
    

    //asserations
    await t.expect(article_name).contains('bhushan!')


})
