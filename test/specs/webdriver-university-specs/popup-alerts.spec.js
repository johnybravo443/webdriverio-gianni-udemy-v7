import BasePage from '../../../pageobjects/page'
import PopUpAlertPage from '../../../pageobjects/webdriver-university-pageobjects/popup-alert.page'
import { POPUP_ALERT_PAGE_HEADER, POPUP_ALERT_MODEL_WINDOW_HEADER, POPUP_ALERT_TEXT } from "../../../enums-constants/constants";
import { PopupAlerts } from '../../../enums-constants/enums'

const basePage = new BasePage()
const popUpAlertsPage = new PopUpAlertPage()

const confirmAlertText = 'You pressed OK!'
const cancelAlertText = 'You pressed Cancel!'

describe('Popup and alerts', () => {
    before(async () => {
        allureReporter.addFeature('popup alert')
    })

    beforeEach(async () => {
        await basePage.navigateToUrlAsync('/Popup-Alerts/index.html')
    })

    it('Javascript alert test, @popupalerts, @smoke, @regression', async () => {
        await expect(popUpAlertsPage.mainHeader).toBeDisplayed()
        await expect(popUpAlertsPage.mainHeader).toHaveText(POPUP_ALERT_PAGE_HEADER)
        await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.JavaScriptAlert)
        await popUpAlertsPage.browserPauseAsync(3000)
        await popUpAlertsPage.acceptAlert()
        await popUpAlertsPage.browserPauseAsync(2000)
    })

    it('model popup test, @popupalerts, @sanity, @regression', async () => {
        await expect(popUpAlertsPage.mainHeader).toBeDisplayed()
        await expect(popUpAlertsPage.mainHeader).toHaveText(POPUP_ALERT_PAGE_HEADER)
        await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.ModelPopup)
        await popUpAlertsPage.browserPauseAsync(3000)
        await expect(popUpAlertsPage.modelWindow).toBeDisplayed()
        await expect(popUpAlertsPage.modelWindowHeader).toHaveText(POPUP_ALERT_MODEL_WINDOW_HEADER)
        await popUpAlertsPage.browserPauseAsync(2000)
        await popUpAlertsPage.closeWindowPopup()
    })

    it('Javascript confirm box test when you accept it, @popupalerts, @regression', async () => {
        await expect(popUpAlertsPage.mainHeader).toBeDisplayed()
        await expect(popUpAlertsPage.mainHeader).toHaveText(POPUP_ALERT_PAGE_HEADER)
        await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.JavaScriptConfirmBox)
        await popUpAlertsPage.browserPauseAsync(3000)
        await expect(await popUpAlertsPage.getAlertText()).toEqual(POPUP_ALERT_TEXT)
        await popUpAlertsPage.acceptAlert()
        await popUpAlertsPage.browserPauseAsync(2000)
        await expect(await popUpAlertsPage.getConfirmAlertText()).toEqual(confirmAlertText)
    })

    it('Javascript confirm box test when you cancel it, @popupalerts', async () => {
        await expect(popUpAlertsPage.mainHeader).toBeDisplayed()
        await expect(popUpAlertsPage.mainHeader).toHaveText(POPUP_ALERT_PAGE_HEADER)
        await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.JavaScriptConfirmBox)
        await popUpAlertsPage.browserPauseAsync(3000)
        await expect(await popUpAlertsPage.getAlertText()).toEqual(POPUP_ALERT_TEXT)
        await popUpAlertsPage.dismissAlert()
        await popUpAlertsPage.browserPauseAsync(2000)
        await expect(await popUpAlertsPage.getConfirmAlertText()).toEqual(cancelAlertText)
    })
})