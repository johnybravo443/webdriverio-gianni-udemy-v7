import BasePage from '../../../pageobjects/page'
import IframePage from "../../../pageobjects/webdriver-university-pageobjects/iframe.page";
import { NavbarIFrame } from '../../../enums-constants/enums'
import { IFRAME_PAGE_HEADER, IFRAME_POPUP_DIALOG_TITLE } from '../../../enums-constants/constants'

const basePage = new BasePage()
const iframePage = new IframePage()

describe('IFrames page tests', () => {
    before(async () => {
        allureReporter.addFeature('iframe')
    })

    beforeEach(async () => {
        await basePage.navigateToUrlAsync('/IFrame/index.html')
    })

    it('Home tab, click on Find Out More, @iframe, @smoke, @regression', async () => {
        await expect(iframePage.navTitles[0]).toBeDisplayed()
        await expect(iframePage.navTitles[0]).toHaveText(IFRAME_PAGE_HEADER)
        await iframePage.switchToIFrame()
        await iframePage.clickOnFindOutMore()
        await expect(iframePage.modelDialogWindow).toBeDisplayed()
        await expect(iframePage.modelTitle).toHaveText(IFRAME_POPUP_DIALOG_TITLE)
        await iframePage.browserPauseAsync(2000)
        await iframePage.closeModelDialog()
    })

    it('Our Products, @iframe, @sanity, @regression', async () => {
        await expect(iframePage.navTitles[0]).toBeDisplayed()
        await expect(iframePage.navTitles[0]).toHaveText(IFRAME_PAGE_HEADER)
        await iframePage.switchToIFrame()
        await iframePage.clickOptionOnNavbar(NavbarIFrame.OutProducts)
        await expect(iframePage.ourProductsSpecialOffers).toBeDisplayed()
        await iframePage.browserPauseAsync(2000)
    })
})