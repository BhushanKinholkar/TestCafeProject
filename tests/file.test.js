import { Selector } from 'testcafe'
import testdatajson from '../testdata.json'
import testData from '../features/testData'
import FilePage from '../pageobject/FilePage'

fixture `Login page test cases`
    .page `${testData.toolQaURL}`


const filepage = new FilePage()

test('Login the application', async t =>
{

    await t.setTestSpeed(0.1)
    await filepage.firstname_Method(testdatajson.Firstname)
    await filepage.lastname_Method(testdatajson.Lastname)

})
