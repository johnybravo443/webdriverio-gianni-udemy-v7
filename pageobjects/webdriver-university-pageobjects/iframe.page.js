import BasePage from '../page'
import { NavbarIFrame } from '../../enums-constants/enums'

class IframePage extends BasePage {

    get navTitles() { return $$("#nav-title") }
    get iframeLocator() { return $("#frame") }
    get homeNavBarLocator() { return $("//a[text()='Home']") }
    get OurProductsNavBarLocator() { return $("//a[text()='Our Products']") }
    get ContactUsNavBarLocator() { return $("//a[text()='Contact Us']") }
    get findOutMoreButtonLocator() { return $("#button-find-out-more") }
    get modelDialogWindow() { return $(".modal-content") }
    get modelDialogFindOutMoreButton() { return $("//button[text()='Find Out More']") }
    get modelTitle() { return $(".modal-content .modal-title") }
    get modelDialogCloseButton() { return $("//button[text()='Close']") }
    get ourProductsSpecialOffers() { return $('#special-offers') }

    constructor() {
        super();
    }

    async getNavTitle() {
        allureReporter.addStep('get iframe nav bar title')
        return await this.getElementTextAsync(this.navTitles[0])
    }

    async switchToIFrame() {
        allureReporter.addStep('switch to an iframe')
        await this.switchToElementIFrame(this.iframeLocator)
    }

    async clickOptionOnNavbar(option) {
        allureReporter.addStep('click option on navbar ' + option)
        if(option === NavbarIFrame.Home) {
            await this.clickOnElementAsync(this.homeNavBarLocator)
        } else if(option === NavbarIFrame.OutProducts) {
            await this.clickOnElementAsync(this.OurProductsNavBarLocator)
        } else if(option === NavbarIFrame.ContactUs) {
            await this.clickOnElementAsync(this.ContactUsNavBarLocator)
        } else {
            new Error('No such option ' + option)
        }
    }

    async clickOnFindOutMore() {
        allureReporter.addStep('click on Find Out More under Home tab')
        await this.clickOnElementAsync(this.findOutMoreButtonLocator)
    }

    async closeModelDialog() {
        allureReporter.addStep('Close model dialog')
        await this.clickOnElementAsync(this.modelDialogCloseButton)
    }
}

export default IframePage