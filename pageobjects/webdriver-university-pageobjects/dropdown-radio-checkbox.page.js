import BasePage from '../page'
import { CheckboxesOptions, Radiobuttons } from '../../enums-constants/enums'

class DropdownRadioCheckboxPage extends BasePage {

    get navbarHeader() { return $(".navbar-header") }
    get dropdownone() { return $("#dropdowm-menu-1") }
    get dropdowntwo() { return $("#dropdowm-menu-2") }
    get dropdownthree() { return $("#dropdowm-menu-3") }
    get checkboxes() { return $("#checkboxes") }
    get option1Checkbox() { return $("[value='option-1']") }
    get option2Checkbox() { return $("[value='option-2']") }
    get option3Checkbox() { return $("[value='option-3']") }
    get option4Checkbox() { return $("[value='option-4']") }
    get radiobuttons() { return $("#radio-buttons") }
    get greenRadiobutton() { return $("[value='green']") }
    get blueRadiobutton() { return $("[value='blue']") }
    get orangeRadiobutton() { return $("[value='orange']") }
    get yellowRadiobutton() { return $("[value='yellow']") }
    get purpleRadiobutton() { return $("[value='purple']") }
    get radiobuttonSelectedDisabled() { return $("#radio-buttons-selected-disabled") }
    get lettuceRadiobutton() { return $("[value='lettuce']") }
    get cabbageRadiobutton() { return $("[value='cabbage']") }
    get pumpkinRadiobutton() { return $("[value='pumpkin']") }
    get fruitsDropdown() { return $("#fruit-selects") }

    constructor() {
        super();
    }

    async selectFromDropdownOne(option) {
        allureReporter.addStep('choose from dropdownone option ' + option)
        await this.selectElementByAttribute(this.dropdownone, 'value', option.toLowerCase())
    }

    async selectFromDropdownTwo(option) {
        allureReporter.addStep('choose from dropdowntwo option ' + option)
        await this.selectElementByAttribute(this.dropdowntwo, 'value', option.toLowerCase())
    }

    async selectFromDropdownThree(option) {
        allureReporter.addStep('choose from dropdownthree option ' + option)
        await this.selectElementByVisibleText(this.dropdownthree, option)
    }

    async asyncSelectCheckbox(option) {
        allureReporter.addStep('choose from checkbox option ' + option)
        if(option === CheckboxesOptions.Option1) {
            await this.clickOnElementAsync(this.option1Checkbox)
        } else if(option === CheckboxesOptions.Option2) {
            await this.clickOnElementAsync(this.option2Checkbox)
        } else if(option === CheckboxesOptions.Option3) {
            await this.clickOnElementAsync(this.option3Checkbox)
        } else if(option === CheckboxesOptions.Option4){
            await this.clickOnElementAsync(this.option4Checkbox)
        } else {
            throw Error('No checkbox option found to be clicked.')
        }
    }

    async selectRadiobutton(option) {
        allureReporter.addStep('choose from radiobutton option ' + option)
        if(option === Radiobuttons.Green){
            await this.clickOnElementAsync(this.greenRadiobutton)
        } else if(option === Radiobuttons.Blue){
            await this.clickOnElementAsync(this.blueRadiobutton)
        } else if(option === Radiobuttons.Yellow){
            await this.clickOnElementAsync(this.yellowRadiobutton)
        } else if(option === Radiobuttons.Orange){
            await this.clickOnElementAsync(this.orangeRadiobutton)
        } else if(option === Radiobuttons.Purple){
            await this.clickOnElementAsync(this.purpleRadiobutton)
        } else {

        }
    }
}

export default DropdownRadioCheckboxPage