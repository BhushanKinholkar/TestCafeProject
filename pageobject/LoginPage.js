import { Selector, t } from 'testcafe'

class LoginPage
{
    constructor()
    {
        this.usernameInput = Selector('#txtUsername')
        this.passwordInput = Selector('#txtPassword')
        this.buttonLogin = Selector('#btnLogin')
        this.adminClick = Selector('#menu_admin_viewAdminModule')
    }

    async username_method(username)
    {
        await t
        .typeText(this.usernameInput, username)
    }

    async password_method(password)
    {
        await t
        .typeText(this.passwordInput, password)
    }

    async button_LoginMethod()
    {
        await t.click(this.buttonLogin)
    }

    async admin_clickMethod()
    {
        await t.click(this.adminClick)
    }

}
export default LoginPage