import { Selector } from 'testcafe'
import testdatajson from '../testdata.json'
import testData from '../features/testData'
import FilePage from '../pageobject/FilePage'

fixture `Login page test cases`
    .page `${testData.toolQaURL}`


const filepage = new FilePage()

test('Enter the first username', async t =>
{
    await filepage.firstname_Method(testdatajson.Firstname)
})

test('Enter the Second username', async t =>
{
    await filepage.lastname_Method(testdatajson.Lastname)

})