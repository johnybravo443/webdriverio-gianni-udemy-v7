import BasePage from '../page'
import { PopupAlerts } from '../../enums-constants/enums'

class PopupAlertPage extends BasePage {

    get mainHeader() { return $('#main-header h1') }
    get clickJavaScriptAlertButton() { return $('#button1') }
    get clickModelPopupButton() { return $('#button2') }
    get clickAjaxLoaderButton() { return $('#button3') }
    get clickJavaScriptConfirmBoxButton() { return $('#button4') }
    get modelWindow() { return $('.modal-content') }
    get modelCloseButton() { return $("//button[text()='Close']") }
    get modelWindowHeader() { return $(".modal-header h4") }
    get confirmAlertText() { return $("#confirm-alert-text") }

    constructor() {
        super();
    }

    async clickPopupOrAlert(option) {
        allureReporter.addStep('click on an option ' + option)
        if(option === PopupAlerts.JavaScriptAlert) {
            await this.clickOnElementAsync(this.clickJavaScriptAlertButton)
        } else if(option === PopupAlerts.ModelPopup) {
            await this.clickOnElementAsync(this.clickModelPopupButton)
        } else if(option === PopupAlerts.JavaScriptConfirmBox) {
            await this.clickOnElementAsync(this.clickJavaScriptConfirmBoxButton)
        } else {
            new Error('no such option present ' + option)
        }
    }

    async closeWindowPopup() {
        allureReporter.addStep('close window popup')
        await this.clickOnElementAsync(this.modelCloseButton)
    }

    async getConfirmAlertText() {
        allureReporter.addStep('get confirm alert text')
        return await this.getElementTextAsync(this.confirmAlertText)
    }
}

export default PopupAlertPage