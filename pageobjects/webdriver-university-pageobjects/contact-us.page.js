import BasePage from '../page'
import { CONTACT_US_SUCCESS_MSG, ERROR_ALL_FIELD_REQUIRED, ERROR_INVALID_EMAIL } from '../../enums-constants/constants'

class ContactUsPage extends BasePage {

    get contactUsFormLocator() { return $("#contact_form") }
    get firstNameLocator() { return $("[name='first_name']")}
    get lastNameLocator() { return $("[name='last_name']") }
    get emailLocator() { return $("[name='email']") }
    get commentsLocator() { return $("[name='message']") }
    get submitButtonLocator() { return $("[type='submit']") }
    get resetButtonLocator() { return $("[type='reset']") }
    get contactSubmittedSuccessMsgLocator() { return $("#contact_reply h1") }
    get unsuccessfulSubmitErrorMsgLocator() { return $('body') }

    constructor() {
        super();
    }

    async isContactUsFormDisplayed() {
        allureReporter.addStep('validate if contact us page is displayed')
        return await this.isElementVisibleAsync(this.contactUsFormLocator)
    }

    async setFirstName(firstName) {
        allureReporter.addStep('set firstname')
        await this.enterTextIntoFieldAsync(this.firstNameLocator, firstName)
    }

    async setLastName(lastName) {
        allureReporter.addStep('set lastname')
        await this.enterTextIntoFieldAsync(this.lastNameLocator, lastName)
    }

    async setEmail(email) {
        allureReporter.addStep('set email')
        await this.enterTextIntoFieldAsync(this.emailLocator, email)
    }

    async setComments(comments) {
        allureReporter.addStep('set comments')
        await this.enterTextIntoFieldAsync(this.commentsLocator, comments)
    }

    async clickSubmit() {
        allureReporter.addStep('click submit')
        await this.clickOnElementAsync(this.submitButtonLocator)
    }

    async clickReset() {
        allureReporter.addStep('click reset')
        await this.clickOnElementAsync(this.resetButtonLocator)
    }

    async getSuccessMessage() {
        const txt = await this.getElementTextAsync(this.contactSubmittedSuccessMsgLocator)
        console.log('success message is -> ' + txt)
        return txt
    }

    async isSuccessMessageValid() {
        const txt = await this.getElementTextAsync(this.contactSubmittedSuccessMsgLocator)
        return txt === CONTACT_US_SUCCESS_MSG
    }

    async isErrorMessageDisplayed() {
        allureReporter.addStep('Validate if error message is displayed')
        const txt = await this.getElementTextAsync(this.unsuccessfulSubmitErrorMsgLocator)
        return txt.includes(ERROR_ALL_FIELD_REQUIRED) || txt.includes(ERROR_INVALID_EMAIL)
    }
}

export default ContactUsPage