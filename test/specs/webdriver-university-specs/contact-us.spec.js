import { CONTACT_US_SUCCESS_MSG } from '../../../enums-constants/constants'
import BasePage from '../../../pageobjects/page'
import ContactUsPage from '../../../pageobjects/webdriver-university-pageobjects/contact-us.page'

const basePage = new BasePage()
const contactUsPage = new ContactUsPage()

describe('webdriver university - contact us page',() => {
    before(async () => {
        allureReporter.addFeature('webdriver university - contact us page')
    })

    beforeEach(async () => {
        await basePage.navigateToUrlAsync('/Contact-Us/contactus.html')
    })

    it('valid submission - submit all information, @contactus, @smoke, @regression', async () => {
        expect(await contactUsPage.isContactUsFormDisplayed()).toBeDisplayed()
        await contactUsPage.setFirstName('John')
        await contactUsPage.setLastName('Man')
        await contactUsPage.setEmail('johnman@email.com')
        await contactUsPage.setComments('this is it')
        await contactUsPage.clickSubmit()
        await expect(contactUsPage.contactSubmittedSuccessMsgLocator).toHaveText(CONTACT_US_SUCCESS_MSG)
        await contactUsPage.browserPauseAsync(2000)
    })

    it('invalid submission - email missing, @contactus, @sanity, @regression', async () => {
        expect(await contactUsPage.isContactUsFormDisplayed()).toBeDisplayed()
        await contactUsPage.setFirstName('John')
        await contactUsPage.setLastName('Man')
        await contactUsPage.setComments('this is it')
        await contactUsPage.clickSubmit()
        expect(await contactUsPage.isErrorMessageDisplayed()).toBeTruthy()
        await contactUsPage.browserPauseAsync(2000)
    })

    it('invalid submission - anything other than email missing, @contactus, @regression', async () => {
        expect(await contactUsPage.isContactUsFormDisplayed()).toBeDisplayed()
        await contactUsPage.setFirstName('John')
        await contactUsPage.setEmail('johnman@email.com')
        await contactUsPage.setComments('this is it')
        await contactUsPage.clickSubmit()
        expect(await contactUsPage.isErrorMessageDisplayed()).toBeTruthy()
        await contactUsPage.browserPauseAsync(2000)
    })

    it('invalid submission - anything other than email missing 1, @contactus, @regression', async () => {
        expect(await contactUsPage.isContactUsFormDisplayed()).toBeDisplayed()
        await contactUsPage.setFirstName('John')
        await contactUsPage.setEmail('johnman@email.com')
        await contactUsPage.setComments('this is it')
        await contactUsPage.clickSubmit()
        await expect(contactUsPage.unsuccessfulSubmitErrorMsgLocator).toHaveTextContaining('invalid actual text')
        await contactUsPage.browserPauseAsync(2000)
    })
})