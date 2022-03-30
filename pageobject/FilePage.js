import { Selector, t } from 'testcafe'

class FilePage{
    constructor(){
        this.firstname = Selector("#firstName")
        this.lastname = Selector("#lastName")

    }

    async firstname_Method(firstname){
        await t
        .typeText(this.firstname,firstname)

    }

    async lastname_Method(lastname){
        await t
        .typeText(this.lastname,lastname)

    }

}
export default FilePage