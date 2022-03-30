import { Selector } from 'testcafe'
import testData from '../features/testData'
import LoginPage from '../pageobject/LoginPage'
import testdatajson from '../testdata.json'

const loginpage = new LoginPage()

fixture `Login page test cases`
    .page `${testData.Devurl}`


test('Login the application', async t =>
{

    await t.setTestSpeed(1)

    await loginpage.username_method("Admin")
    await loginpage.password_method("admin123")
    await loginpage.button_LoginMethod()
    await loginpage.admin_clickMethod()
 
})

