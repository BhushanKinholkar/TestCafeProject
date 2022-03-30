import { Selector } from "testcafe"
import Modelpage from '../pageobject/Modelpage'

fixture `zero bank application`
    .page `http://zero.webappsecurity.com/`


const mp = new Modelpage()

test('enter the name', async t => {

    //const search = Selector('#searchTerm')

    //await t.setTestSpeed(0.1)
    //await t.typeText(search,'Online bank')

   //await t.typeText(mp.search, 'Online bank')
    //t.debug()
    mp.searchMethod('Online bank')
    mp.searchbtn_Method()

});