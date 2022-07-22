export default class Page {

  /**
   * Default constructor.
   */
  constructor() {};

  /**
   * To enter text into an input field.
   * @param element The WebElement.
   * @param {*} text The text to enter.
   */
  enterTextIntoField(element, text) {
    this.text = text;
    this.waitUntilVisible(element, 5000);
    let value = element.getValue();
    if (this.text !== value) {
      element.clearValue();
      element.setValue(text);
    }
  }

  /**
   * To enter text into an input field.
   * @param element The WebElement.
   * @param {*} text The text to enter.
   */
  async enterTextIntoFieldAsync(element, text) {
    await this.waitUntilVisibleAsync(element, 5000);
    let value = await this.getElementValueAsync(element)
    if (text !== value) {
      await this.clearElementValueAsync(element)
      await this.setElementValueAsync(element, text)
    }
  }

  /**
   * Sets a value in an element.
   * @param {*} element - The WebElement.
   * @param {string} value - Value to be set.
   */
  setElementValue(element, value) {
    element.setValue(value);
  }

  /**
   * Sets a value in an element.
   * @param {*} element - The WebElement.
   * @param {string} value - Value to be set.
   */
  async setElementValueAsync(element, value) {
    const elem = await element
    await elem.setValue(value);
  }

  /**
   * Sets a value in a selector.
   * @param {any} selector The selector.
   * @param {string} value - Value to be set.
   */
  setSelectorValue(selector, value) {
    $(selector).setValue(value);
  }

  /**
   * Sets a value in a selector.
   * @param {any} selector The selector.
   * @param {string} value - Value to be set.
   */
  async setSelectorValueAsync(selector, value) {
    const elem = await $(selector)
    await elem.setValue(value)
  }

  /**
   * Wrapper around webdriverio waitUntil() method.
   * @param element The WebElement
   * @param {number} maxTimeOut The timeout in ms.
   */
  waitUntilVisible(element, maxTimeOut = 5000) {
    try {
      browser.waitUntil(() => {
        // return this.isElementVisible(element)
        return element.isDisplayed();
      }, { timeout: maxTimeOut, timeoutMsg: 'Wait for element to be visible' });
    } catch (err) {}
  }

  /**
   * Wrapper around webdriverio waitUntil() method.
   * @param element The WebElement
   * @param {number} maxTimeOut The timeout in ms.
   */
  async waitUntilVisibleAsync(element, maxTimeOut = 5000) {
    const elem = await element;
    try {
      await browser.waitUntil(async () => {
        // return this.isElementVisible(element)
        return await elem.isDisplayed();
      }, { timeout: maxTimeOut, timeoutMsg: 'Wait for element to be visible' });
    } catch (err) {}
  }

  /**
   * Wrapper around webdriverio waitForDisplayed() method.
   * @param {*} element
   * @param {number} maxTimeOut
   * @param {number} interval
   */
  waitUntilNotVisible(element, maxTimeOut = 5000, interval = 1000) {
    element.waitForDisplayed({ timeout: maxTimeOut, reverse: true, timeoutMsg: `Element::${element} is still displayed which shouldn't be`, interval: interval });
  }

  /**
   * Wrapper around webdriverio waitForDisplayed() method.
   * @param {*} element
   * @param {number} maxTimeOut
   * @param {number} interval
   */
  async waitUntilNotVisibleAsync(element, maxTimeOut = 5000, interval = 1000) {
    const elem = await element
    await elem.waitForDisplayed({ timeout: maxTimeOut, reverse: true, timeoutMsg: `Element::${elem} is still displayed which shouldn't be`, interval: interval });
  }

  /**
   * Wrapper around webdriverio waitForClickable() method.
   * @param element - The WebElement
   * @param maxTimeOut - the timeout
   */
  waitForClickable(element, maxTimeOut = 5000) {
    element.waitForClickable({ timeout: maxTimeOut, reverse: false, timeoutMsg: `Element::${element} is still not clickable which should be` })
  }

  /**
   * Wrapper around webdriverio waitForClickable() method.
   * @param element - The WebElement
   * @param maxTimeOut - the timeout
   */
  async waitForClickableAsync(element, maxTimeOut = 5000) {
    const elem = await element;
    await elem.waitForClickable({ timeout: maxTimeOut, reverse: false, timeoutMsg: `Element::${elem} is still not clickable which should be` })
  }

  /**
   * Wrapper around webdriverio waitForClickable() method.
   * @param selector - The selector (xpath or css etc.).
   * @param maxTimeOut - The timeout
   */
  waitForSelectorToBeClickable(selector, maxTimeOut = 5000) {
    $(selector).waitForClickable({ timeout: maxTimeOut, reverse: false, timeoutMsg: `Selector::${selector} is still not clickable which should be` })
  }

  /**
   * Wrapper around webdriverio waitForClickable() method.
   * @param selector - The selector (xpath or css etc.).
   * @param maxTimeOut - The timeout
   */
  async waitForSelectorToBeClickableAsync(selector, maxTimeOut = 5000) {
    const elem = await $(selector)
    await elem.waitForClickable({ timeout: maxTimeOut, reverse: false, timeoutMsg: `Selector::${selector} is still not clickable which should be` })
  }

  /**
   * Clicks on a selector(Button or Link etc.).
   * @param selector The selector (xpath or css etc.).
   * @returns {*}
   */
  clickOnSelector(selector) {
    $(selector).click();
  }

  /**
   * Clicks on a selector(Button or Link etc.).
   * @param selector The selector (xpath or css etc.).
   * @returns {*}
   */
  async clickOnSelectorAsync(selector) {
    const elem = await $(selector)
    await elem.click()
  }

  /**
   * Clicks on a WebElement(Button or Link etc.).
   * @param element The WEbElement
   */
  clickOnElement(element) {
    element.click();
  }

  /**
   * Clicks on a WebElement(Button or Link etc.).
   * @param element The WEbElement
   */
  async clickOnElementAsync(element) {
    const elem = await element;
    await elem.click();
  }

  /**
   * To navigate to a url or a path.
   * @param {String} path URL or a path.
   */
  navigateToUrl(path) {
    browser.url(path);
  }

  /**
   * To navigate to a url or a path.
   * @param {String} path URL or a path.
   */
  async navigateToUrlAsync(path) {
    await browser.url(path);
  }

  /**
   * Verifies whether an element is displayed on the UI or not.
   * @param element The WebElement
   * @returns {Boolean} true if selector is displayed. Else false.
   */
  isElementVisible(element) {
    return element.isDisplayed();
  }

  /**
   * Verifies whether an element is displayed on the UI or not.
   * @param element The WebElement
   * @returns {Promise<Boolean>} true if selector is displayed. Else false.
   */
  async isElementVisibleAsync(element) {
    const elem = await element;
    return await elem.isDisplayed();
  }

  /**
   * Wrapper around waitForDisplayed
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForDisplayed(element, options = { timeout: 5000 }) {
    element.waitForDisplayed(options);
  }

  /**
   * Wrapper around waitForDisplayed
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForDisplayedAsync(element, options = { timeout: 5000 }) {
    const elem = await element;
    await elem.waitForDisplayed(options);
  }

  /**
   * Wrapper around waitForDisplayed
   * @param {*} selector - The selector (xpath, css etc.)
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForDisplayedSelector(selector, options= { timeout: 5000 }) {
    $(selector).waitForDisplayed(options);
  }

  /**
   * Wrapper around waitForDisplayed
   * @param {*} selector - The selector (xpath, css etc.)
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForDisplayedSelectorAsync(selector, options) {
    const elem = await $(selector)
    await elem.waitForDisplayed(options)
  }

  /**
   * Verifies whether a selector is displayed on the UI or not.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is displayed. Else false.
   */
  isSelectorVisible(selector) {
    return $(selector).isDisplayed();
  }

  /**
   * Verifies whether a selector is displayed on the UI or not.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is displayed. Else false.
   */
  async isSelectorVisibleAsync(selector) {
    const elem = await $(selector)
    return await elem.isDisplayed();
  }

  /**
   * To close the current active browser.
   */
  closeBrowser() {
    this.closeWindow();
  }

  /**
   * To close the current active browser.
   */
  async closeBrowserAsync() {
    await this.closeWindowAsync();
  }

  /**
   * Returns the current page UTL.
   * @returns {string} The URL of the page.
   */
  getUrl() {
    return browser.getUrl();
  }

  /**
   * Returns the current page UTL.
   * @returns {Promise<string>} The URL of the page.
   */
  async getUrlAsync() {
    return await browser.getUrl();
  }

  /**
   * This wrapper method can be used to switch to another browser window using window handle.
   * Comes from WebDriver Protocol.
   * @param {String} handle
   */
  switchWindow(handle) {
    browser.switchToWindow(handle);
  }

  /**
   * This wrapper method can be used to switch to another browser window using window handle.
   * Comes from WebDriver Protocol.
   * @param {String} handle
   */
  async switchWindowAsync(handle) {
    await browser.switchToWindow(handle);
  }

  /**
   * Returns the current window handle.
   * @returns {string}
   */
  getCurrentWindowHandle() {
    return browser.getWindowHandle();
  }

  /**
   * Returns handles for all the open browser sessions.
   * @returns {Promise<string[]>} Handles as an String Array.
   */
  getWindowHandles() {
    return browser.getWindowHandles();
  }

  /**
   * Async method to returns handles for all the open browser sessions.
   * @returns {Promise<string[]>} Handles as an String Array.
   */
  async getWindowHandlesAsync() {
    let windowHandles = await browser.getWindowHandles();
    return windowHandles;
  }

  /**
   * Wait untile the new tab opens.
   */
  waitUntilNewTabToOpen() {
    try {
      browser.waitUntil(() => {
        return browser.getWindowHandles().length === 2
      }, { timeout: 30000, timeoutMsg: 'New tab not opened', interval: 2000 });
    } catch (err) {}
  }

  /**
   * Wait untile the new tab opens.
   */
  async waitUntilNewTabToOpenAsync() {
    try {
      await browser.waitUntil( () => {
        return browser.getWindowHandles().length === 2
      }, { timeout: 30000, timeoutMsg: 'New tab not opened', interval: 2000 });
    } catch (err) {}
  }

  /**
   * To perform browser refresh.
   */
  browserRefresh(timeout = 10000) {
    browser.refresh();
    browser.pause(timeout);
  }

  /**
   * To perform browser refresh.
   */
  async browserRefreshAsync() {
    await browser.refresh();
    await browser.pause(10000);
  }

  /**
   * Simulates browser back button.
   */
  browserBack() {
    browser.back();
  }

  /**
   * Simulates browser back button.
   */
  async browserBackAsync() {
    await browser.back();
  }

  runInBrowser = function(argument) {
    argument.click();
  };

  /**
   * Should be used to click on elements which have 'not able to interact errors'
   * @param element The WebElement.
   */
  executeClick(element) {
    return browser.execute(this.runInBrowser, element);
  }

  /**
   * Should be used to click on elements which have 'not able to interact errors'
   * @param element The WebElement.
   */
  executeClickAsync(element) {
    return browser.executeAsync(this.runInBrowser, element);
  }

  /**
   * @param engageHandle
   * @return {*}
   * returns first handle from the array containing non engage window handles.
   */
  getNonEngageWindowHandle(engageHandle) {
    let allHandles = browser.getWindowHandles();
    return allHandles.filter(handle => handle !== engageHandle)[0];
  }

  /**
   * Returns a specific CSS property values of an element.
   * @param {*} element - the WebElement.
   * @param {*} property - the selectors CSS property value(s).
   */
  getCSSProperty(element, property) {
    return element.getCSSProperty(property);
  }

  /**
   * Returns a specific CSS property values of an element.
   * @param {*} element - the WebElement.
   * @param {*} property - the selectors CSS property value(s).
   */
  async getCSSPropertyAsync(element, property) {
    const elem = await element
    return await elem.getCSSProperty(property);
  }

  /**
   * Returns a specific CSS property values of a selector.
   * @param {any} selector - The selector (xpath or css etc.)
   * @param {*} property - the selectors CSS property value(s).
   */
  getCSSPropertyOfSelector(selector, property) {
    return $(selector).getCSSProperty(property);
  }

  /**
   * Returns a specific CSS property values of a selector.
   * @param {any} selector - The selector (xpath or css etc.)
   * @param {*} property - the selectors CSS property value(s).
   */
  async getCSSPropertyOfSelectorAsync(selector, property) {
    const elem = await $(selector)
    return await elem.getCSSProperty(property);
  }

  /**
   * This method can be used to close or remove a popup overlay
   * @param {Element} element
   */
  removeElement(element) {
    browser.execute((ele) => {
      ele.remove();
    }, element)
  }

  /**
   * This method can be used to close or remove a popup overlay
   * @param {Element} element
   */
  removeElementAsync(element) {
    browser.executeAsync((ele) => {
      ele.remove();
    }, element)
  }

  /**
   * This wrapper method can be used to switch to another browser window using url or title.
   * Comes from webdriverio v7.
   * @param {String} urlOrTitleToMatch
   */
  switchWindowUsingUrlOrTitle(urlOrTitleToMatch) {
    browser.switchWindow(urlOrTitleToMatch);
  }

  /**
   * This wrapper method can be used to switch to another browser window using url or title.
   * Comes from webdriverio v7.
   * @param {String} urlOrTitleToMatch
   */
  async switchWindowUsingUrlOrTitleAsync(urlOrTitleToMatch) {
    await browser.switchWindow(urlOrTitleToMatch);
  }

  /**
   * This wrapper method can be used to close a browser window.
   * Comes from WebDriver Protocol.
   */
  closeWindow() {
    browser.closeWindow();
  }

  /**
   * This async wrapper method can be used to close a browser window.
   * Comes from WebDriver Protocol.
   */
   async closeWindowAsync() {
    await browser.closeWindow();
  }

  /**
   * Returns the visible text contained within an element.
   * @param element
   * @returns {*}
   */
  getElementText(element) {
    return element.getText();
  }

  /**
   * Returns the visible text contained within an element.
   * @param element
   * @returns {*}
   */
  async getElementTextAsync(element) {
    const elem = await element
    return await elem.getText();
  }

  /**
   * Returns the visible text contained within an element.
   * @param {any} selector - The selector as string.
   * @returns {String} - the visible text.
   */
  getSelectorText(selector) {
    return $(selector).getText();
  }

  /**
   * Returns the visible text contained within an element.
   * @param {any} selector - The selector as string.
   * @returns {String} - the visible text.
   */
  async getSelectorTextAsync(selector) {
    const elem = await $(selector)
    return await elem.getText();
  }

  /**
   * Scrolls the element into into view.
   * @param element
   */
  scrollElementIntoView(element) {
    element.scrollIntoView();
  }

  /**
   * Scrolls the element into into view.
   * @param element
   */
  async scrollElementIntoViewAsync(element) {
    const elem = await element
    await elem.scrollIntoView();
  }

  /**
   * Scrolls the selector into view.
   * @param selector
   */
  scrollSelectorIntoView(selector) {
    $(selector).scrollIntoView();
  }

  /**
   * Scrolls the selector into view.
   * @param selector
   */
  async scrollSelectorIntoViewAsync(selector) {
    const elem = await $(selector)
    await elem.scrollIntoView();
  }

  /**
   * Returns true or false whether an element is clickable or not.
   * @param element The Web Element ($).
   * @returns {*}
   */
  isElementClickable(element) {
    return element.isClickable();
  }

  /**
   * Returns true or false whether an element is clickable or not.
   * @param element The Web Element ($).
   * @returns {*}
   */
  async isElementClickableAsync(element) {
    const elem = await element
    return await elem.isClickable();
  }

  /**
   * Returns true or false whether a selector is clickable or not.
   * @param {any} selector The selector.
   * @returns {boolean} - true/false.
   */
  isSelectorClickable(selector) {
    return $(selector).isClickable();
  }

  /**
   * Returns true or false whether a selector is clickable or not.
   * @param {any} selector The selector.
   * @returns {boolean} - true/false.
   */
  async isSelectorClickableAsync(selector) {
    const elem = await $(selector)
    return await elem.isClickable();
  }

  /**
   * moves the customer to the element.
   * @param element The Web Element ($).
   * @returns {*}
   */
  moveToElement(element) {
    element.moveTo();
  }

  /**
   * moves the customer to the element.
   * @param element The Web Element ($).
   * @returns {*}
   */
  async moveToElementAsync(element) {
    const elem = await element
    await elem.moveTo()
  }

  /**
   * moves the cursor to the selector.
   * @param {any} selector The selector.
   * @returns {*}
   */
  moveToSelector(selector) {
    $(selector).moveTo();
  }

  /**
   * moves the cursor to the selector.
   * @param {any} selector The selector.
   * @returns {*}
   */
 async  moveToSelectorAsync(selector) {
    const elem = await $(selector)
    await elem.moveTo();
  }

  /**
   * To press specific key on the keyboard.
   * @param {String} key - The key to be pressed.
   */
  sendKeys(key) {
    browser.keys(key);
  }

  /**
   * To press specific key on the keyboard.
   * @param {String} key - The key to be pressed.
   */
  async sendKeysAsync(key) {
    await browser.keys(key);
  }

  /**
   * To hard pause the webdriver.
   * @param {number} pauseTime - time in milliseconds
   */
  browserPause(pauseTime = 5000) {
    browser.pause(pauseTime);
  }

  /**
   * To hard pause the webdriver.
   * @param {number} pauseTime - time in milliseconds
   */
  async browserPauseAsync(pauseTime = 5000) {
    await browser.pause(pauseTime);
  }

  /**
   * to get the values of an attribute for a WebElement.
   * @param {*} element - The WebElement
   * @param {String} attributeName - The name of the attribute.
   * @returns {String} - all the attribute values as a string.
   */
  getElementAttribute(element, attributeName) {
    return element.getAttribute(attributeName);
  }

  /**
   * to get the values of an attribute for a WebElement.
   * @param {*} element - The WebElement
   * @param {String} attributeName - The name of the attribute.
   * @returns {Promise<String>} - all the attribute values as a string.
   */
  async getElementAttributeAsync(element, attributeName) {
    const elem = await element
    return await elem.getAttribute(attributeName);
  }

  /**
   * to get the values of an attribute for a selector.
   * @param {any} selector - The selector as string.
   * @param {String} attributeName - The name of the attribute.
   * @returns {String} - all the attribute values as a string.
   */
  getSelectorAttribute(selector, attributeName) {
    return $(selector).getAttribute(attributeName);
  }

  /**
   * to get the values of an attribute for a selector.
   * @param {any} selector - The selector as string.
   * @param {String} attributeName - The name of the attribute.
   * @returns {String} - all the attribute values as a string.
   */
  async getSelectorAttributeAsync(selector, attributeName) {
    const elem = await $(selector)
    return elem.getAttribute(attributeName);
  }

  /**
   * to clear value from an input field for a WebElement.
   * @param {*} element - The WebElement
   */
  clearElementValue(element) {
    element.clearValue();
  }

  /**
   * to clear value from an input field for a WebElement.
   * @param {*} element - The WebElement
   */
  async clearElementValueAsync(element) {
    const elem = await element
    await elem.clearValue();
  }

  /**
   * to clear value from an input field for a selector.
   * @param {any} selector - The selector
   */
  clearSelectorValue(selector) {
    $(selector).clearValue();
  }

  /**
   * to clear value from an input field for a selector.
   * @param {any} selector - The selector
   */
  async clearSelectorValueAsync(selector) {
    const elem = await $(selector)
    await elem.clearValue();
  }

  /**
   * Return true or false if the selected DOM-element is enabled.
   * @param {*} element - The WebElement
   * @returns {boolean} - true if enabled else false.
   */
  isElementEnabled(element) {
    return element.isEnabled();
  }

  /**
   * Return true or false if the selected DOM-element is enabled.
   * @param {*} element - The WebElement
   * @returns {boolean} - true if enabled else false.
   */
  async isElementEnabledAsync(element) {
    const elem = await element
    return await elem.isEnabled();
  }

  /**
   * Return true or false if the selected DOM-element is enabled.
   * @param {any} selector - The selector
   * @returns {boolean} - true if enabled else false.
   */
  isSelectorEnabled(selector) {
    return $(selector).isEnabled();
  }

  /**
   * Return true or false if the selected DOM-element is enabled.
   * @param {any} selector - The selector
   * @returns {boolean} - true if enabled else false.
   */
  async isSelectorEnabledAsync(selector) {
    const elem = await $(selector)
    return await elem.isEnabled();
  }

  /**
   * Wrapper around waitForExist
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForElementExist(element, options= { timeout: 5000 }) {
    return element.waitForExist(options);
  }

  /**
   * Wrapper around waitForExist
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForElementExistAsync(element, options= { timeout: 5000 }) {
    const elem = await element
    return await elem.waitForExist(options);
  }

  /**
   * Wrapper around waitForExist
   * @param {any} selector - The selector
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForSelectorExist(selector, options) {
    return $(selector).waitForExist(options);
  }

  /**
   * Wrapper around waitForExist
   * @param {any} selector - The selector
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForSelectorExistAsync(selector, options) {
    const elem = await $(selector)
    return await elem.waitForExist(options);
  }

  /**
   * Wrapper around wdoi .getValue() when passing an element
   * @param {any} element - The element
   * @return {any} string/int/boolean
   */
  getElementValue(element) {
    return element.getValue() ;
  }

  /**
   * Wrapper around wdoi .getValue() when passing an element
   * @param {any} element - The element
   * @return {any} string/int/boolean
   */
  async getElementValueAsync(element) {
    let elem = await element
    return await elem.getValue()
  }

  /**
   * Wrapper around wdoi .getValue() when passing an selector
   * @param {any} selector - The selector
   * @return {any} string/int/boolean
   */
  getSelectorValue(selector) {
    return $(selector).getValue();
  }

  /**
   * Wrapper around wdoi .getValue() when passing an selector
   * @param {any} selector - The selector
   * @return {any} string/int/boolean
   */
  async getSelectorValueAsync(selector) {
    const elem = await $(selector)
    return await elem.getValue();
  }

    /**
   * Wrapper around webdriverio waitUntil() method to wait for an element's attribute value to get updated.
   * @param element The WebElement
   * @param attribute WebElement's attribute
   * @param value {string} value to be present in attribute
   * @param {number} maxTimeOut The timeout in ms.
   */
    waitUntilAttributeValueIsPresent(element, attribute, value, maxTimeOut = 9000) {
      try {
        browser.waitUntil(() => {
          return this.getElementAttribute(element, attribute).includes(value);
        }, { timeout: maxTimeOut, timeoutMsg: `Attribute value not present` });
      } catch (err) {}
    }

  /**
   * Wrapper around webdriverio waitUntil() method to wait for an element's attribute value to get updated.
   * @param element The WebElement
   * @param attribute WebElement's attribute
   * @param value {string} value to be present in attribute
   * @param {number} maxTimeOut The timeout in ms.
   */
  async waitUntilAttributeValueIsPresentAsync(element, attribute, value, maxTimeOut = 9000) {
    try {
      await browser.waitUntil(async () => {
        const attr = await this.getElementAttributeAsync(element, attribute)
        return attr.includes(value);
      }, { timeout: maxTimeOut, timeoutMsg: `Attribute value not present` });
    } catch (err) {}
  }

  /**
   * Verifies whether an element is existing in the DOM.
   * @param element The WebElement
   * @returns {Boolean} true if selector is existing. Else false.
   */
  doesElementExist(element) {
    return element.isExisting();
  }

  /**
   * Verifies whether an element is existing in the DOM.
   * @param element The WebElement
   * @returns {Boolean} true if selector is existing. Else false.
   */
  async doesElementExistAsync(element) {
    const elem = await element
    return await elem.isExisting();
  }

  /**
   * Verifies whether a selector is existing in the DOM.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is existing. Else false.
   */
  doesSelectorExist(selector) {
    return $(selector).isExisting();
  }

  /**
   * Verifies whether a selector is existing in the DOM.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is existing. Else false.
   */
 async  doesSelectorExistAsync(selector) {
    const elem = await $(selector)
    return await elem.isExisting();
  }

  /**
   * Verifies whether an element currently have focus.
   * @param element The WebElement
   * @returns {Boolean} true if selector is focused. Else false.
   */
  isElementFocused(element) {
    return element.isFocused();
  }

  /**
   * Verifies whether an element currently have focus.
   * @param element The WebElement
   * @returns {Boolean} true if selector is focused. Else false.
   */
  async isElementFocusedAsync(element) {
    const elem = await element
    return await elem.isFocused();
  }

  /**
   * Verifies whether a selector currently have focus.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is focused. Else false.
   */
  isSelectorFocused(selector) {
    return $(selector).isFocused();
  }

  /**
   * Verifies whether a selector currently have focus.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is focused. Else false.
   */
  async isSelectorFocusedAsync(selector) {
    const elem = await $(selector)
    return await elem.isFocused();
  }

  /**
   * Will return true or false whether an <option> or <input> element of type checkbox or radio is currently selected.
   * @param element The WebElement
   * @returns {Boolean} true if selector is focused. Else false.
   */
  isElementSelected(element) {
    return element.isSelected();
  }

  /**
   * Will return true or false whether an <option> or <input> element of type checkbox or radio is currently selected.
   * @param element The WebElement
   * @returns {Boolean} true if selector is focused. Else false.
   */
  async isElementSelectedAsync(element) {
    const elem = await element
    return await elem.isSelected();
  }

  /**
   * Will return true or false whether an <option> or <input> selector of type checkbox or radio is currently selected.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is focused. Else false.
   */
  isSelectorSelected(selector) {
    return $(selector).isSelected();
  }

  /**
   * Will return true or false whether an <option> or <input> selector of type checkbox or radio is currently selected.
   * @param selector The selector (xpath or css etc.).
   * @returns {Boolean} true if selector is focused. Else false.
   */
  async isSelectorSelectedAsync(selector) {
    const elem = await $(selector)
    return await elem.isSelected();
  }

  /**
   * Waits for an element to be clickable and then click on it.
   * @param element - The WebElement
   * @param timeout - maxTimeOut
   */
  waitForClickableAndClickOnElement(element, timeout = 5000) {
    this.waitForClickable(element, timeout);
    this.clickOnElement(element);
  }

  /**
   * Waits for an element to be clickable and then click on it.
   * @param element - The WebElement
   * @param timeout - maxTimeOut
   */
  async waitForClickableAndClickOnElementAsync(element, timeout = 5000) {
    await this.waitForClickableAsync(element, timeout);
    await this.clickOnElementAsync(element);
  }

  /**
   * Waits for a selector to be clickable and then click on it.
   * @param selector - The selector (xpath or css etc.).
   * @param timeout - maxTimeOut
   */
  waitForClickableAndClickOnSelector(selector, timeout = 5000) {
    this.waitForSelectorToBeClickable(selector, timeout);
    this.clickOnSelector(selector);
  }

  /**
   * Waits for a selector to be clickable and then click on it.
   * @param selector - The selector (xpath or css etc.).
   * @param timeout - maxTimeOut
   */
  async waitForClickableAndClickOnSelectorAsync(selector, timeout = 5000) {
    await this.waitForSelectorToBeClickableAsync(selector, timeout);
    await this.clickOnSelectorAsync(selector);
  }

  /**
   * Waits for an element to be displayed on DOM and then click on it.
   * @param element - The WebElement
   * @param {*} option - the options object
   */
   waitForDisplayedAndClickOnElement(element, option = {timeout: 5000}) {
    this.waitForDisplayed(element, option);
    this.clickOnElement(element);
  }

  /**
   * Waits for an element to be displayed on DOM and then click on it.
   * @param element - The WebElement
   * @param {*} options - the options object
   */
  async waitForDisplayedAndClickOnElementAsync(element, options = { timeout: 5000 }) {
    await this.waitForDisplayedAsync(element, options);
    await this.clickOnElementAsync(element);
  }

  /**
   * To maximize browser window.
   */
  maximizeWindow() {
     browser.maximizeWindow();
  }

  /**
   * To switch to a parent frame.
   */
  switchToParentFrame() {
    browser.switchToParentFrame();
  }

  /**
   * Wrapper around waitForDisplayed
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForElementEnabled(element, options) {
    element.waitForEnabled(options);
  }

  /**
   * Wrapper around waitForEnabled
   * @param {*} element - The WebElement.
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForElementEnabledAsync(element, options) {
    const elem = await element;
    await elem.waitForEnabled(options);
  }

  /**
   * Wrapper around waitForEnabled
   * @param {*} selector - The selector (xpath, css etc.)
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  waitForSelectorEnabled(selector, options) {
    $(selector).waitForEnabled(options);
  }

  /**
   * Wrapper around waitForEnabled
   * @param {*} selector - The selector (xpath, css etc.)
   * @param {Object} options { timeout: 3000, reverse: true, timeoutMsg: '', interval: 1000 }
   */
  async waitForSelectorEnabledAsync(selector, options) {
    const elem = await $(selector)
    await elem.waitForEnabled(options);
  }

  /**
   * Returns the title of the webpage
   * @returns {string} - webpage title
   */
  getTitle() {
    return browser.getTitle();
  }

  /**
   * To move to an element and click on it
   * @param {*} element - The WebElement.
   */
  moveToElementAndClick(element) {
    this.moveToElement(element)
    this.clickOnElement(element)
  }

  /**
   * (Async) To move to an element and click on it
   * @param {*} element - The WebElement.
   */
  async moveToElementAndClickAsync(element) {
    await this.moveToElementAsync(element)
    await this.clickOnElementAsync(element)
  }

  /**
   * To move to a selector and click on it
   * @param selector - The selector (xpath or css etc.).
   */
  moveToSelectorAndClick(selector) {
    this.moveToSelector(selector);
    this.clickOnSelector(selector);
  }

  /**
   * (Async) To move to a selector and click on it
   * @param selector - The selector (xpath or css etc.).
   */
  async moveToSelectorAndClickAsync(selector) {
    await this.moveToSelectorAsync(selector);
    await this.clickOnSelectorAsync(selector);
  }

  /**
   * To double-click on an element
   * @param {*} element - The WebElement.
   */
  doubleClickOnElement(element) {
    element.doubleClick()
  }

  /**
   * To move to an element and double click on it
   * @param {*} element - The WebElement.
   */
  moveToElementAndDoubleClick(element) {
    this.moveToElement(element)
    this.doubleClickOnElement(element)
  }

  /**
   * (Async) To double-click on an element
   * @param {*} element - The WebElement.
   */
  async doubleClickOnElementAsync(element) {
    const elem = await element;
    await elem.doubleClick()
  }

  /**
   * To double-click on a selector
   * @param selector - The selector (xpath or css etc.).
   */
  doubleClickOnSelector(selector) {
    $(selector).doubleClick()
  }

  /**
   * To double-click on a selector
   * @param selector - The selector (xpath or css etc.).
   */
  async doubleClickOnSelectorAsync(selector) {
    const elem = await $(selector)
    await elem.doubleClick()
  }

  /**
   * Method to create a new  session with current capabilities
   */
  reloadSession() {
    browser.reloadSession();
    browser.maximizeWindow();
  }

  /**
   * To select an element from a dropdown using attribute name and value
   * @param element - The WebElement.
   * @param attributeName - The attribute name
   * @param attributeValue - The attribute value
   * @returns {Promise<void>}
   */
  async selectElementByAttribute(element, attributeName, attributeValue) {
    const elem = await element
    await elem.selectByAttribute(attributeName, attributeValue)
  }

  /**
   * To select an element from a dropdown using visible text
   * @param element - The WebElement.
   * @param visibleText - The visible text of the option to be selected
   * @returns {Promise<void>}
   */
  async selectElementByVisibleText(element, visibleText) {
    const elem = await element;
    await elem.selectByVisibleText(visibleText)
  }

  /**
   * Switch to an iframe
   * Comes from WebDriver Protocol.
   * @param element - The iFrame element
   */
  async switchToElementIFrame(element) {
    const iframe = await element
    await browser.switchToFrame(iframe)
  }

  async acceptAlert() {
    await browser.acceptAlert()
  }

  async getAlertText() {
    return await browser.getAlertText()
  }

  async dismissAlert() {
    await browser.dismissAlert()
  }
}
