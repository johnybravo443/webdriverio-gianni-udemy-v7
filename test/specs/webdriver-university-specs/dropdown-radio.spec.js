import BasePage from '../../../pageobjects/page'
import DropdownRadioCheckboxPage from "../../../pageobjects/webdriver-university-pageobjects/dropdown-radio-checkbox.page";
import { CheckboxesOptions, Radiobuttons } from '../../../enums-constants/enums'

const basePage = new BasePage()
const dropdownRadioCheckboxPage = new DropdownRadioCheckboxPage()

describe('Dropdown, checkbox and radiobutton tests', () => {
    before(async () => {
        allureReporter.addFeature('dropdown-radiobutton-checkbox')
    })

    beforeEach(async () => {
        await basePage.navigateToUrlAsync('/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Choose values from a dropdown one, two and three, @dropdownradiocheckbox, @smoke, @regression', async () => {
        await expect(dropdownRadioCheckboxPage.navbarHeader).toBeDisplayed()
        await dropdownRadioCheckboxPage.selectFromDropdownOne('Python')
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.selectFromDropdownTwo('JUnit')
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.selectFromDropdownThree('CSS')
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
    })

    it('select a checkbox, @dropdownradiocheckbox, @sanity, @regression', async () => {
        await expect(dropdownRadioCheckboxPage.navbarHeader).toBeDisplayed()
        await dropdownRadioCheckboxPage.asyncSelectCheckbox(CheckboxesOptions.Option1)
        await expect(dropdownRadioCheckboxPage.option1Checkbox).toBeChecked()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.asyncSelectCheckbox(CheckboxesOptions.Option2)
        await expect(dropdownRadioCheckboxPage.option2Checkbox).toBeChecked()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.asyncSelectCheckbox(CheckboxesOptions.Option3)
        await expect(dropdownRadioCheckboxPage.option3Checkbox).not.toBeChecked()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.asyncSelectCheckbox(CheckboxesOptions.Option4)
        await expect(dropdownRadioCheckboxPage.option4Checkbox).toBeChecked()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
    })

    it('select a radiobutton, @dropdownradiocheckbox, @regression', async() => {
        await expect(dropdownRadioCheckboxPage.navbarHeader).toBeDisplayed()
        await dropdownRadioCheckboxPage.selectRadiobutton(Radiobuttons.Green)
        await expect(dropdownRadioCheckboxPage.greenRadiobutton).toBeSelected()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.selectRadiobutton(Radiobuttons.Yellow)
        await expect(dropdownRadioCheckboxPage.yellowRadiobutton).toBeSelected()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
        await dropdownRadioCheckboxPage.selectRadiobutton(Radiobuttons.Purple)
        await expect(dropdownRadioCheckboxPage.purpleRadiobutton).toBeSelected()
        await dropdownRadioCheckboxPage.browserPauseAsync(2000)
    })
})