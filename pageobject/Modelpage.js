import { Selector, t } from "testcafe"

class Modelpage{

    constructor() {
        this.search = Selector('#searchTerm')
        this.searchbtn = Selector('#signin_button')
    }

    async searchMethod(name) {
        t.log('entername')
        await t.typeText(this.search, name)
    }

    async searchbtn_Method() 
    {
        t.log('serchbtn')
        await t.click(this.searchbtn)
    }



}
export default Modelpage