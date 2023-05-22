export class FloatingActionButtonController {
    constructor(host) {
        this._originalButtonElements = {
            'accessibilityButton': document.getElementById('INDmenu-btn'),
            'oneTrustButton': document.getElementById('ot-sdk-btn-floating'),
            'helpButton': document.querySelector('div[class^=Helpstyle__HelpWrapper')
        };
        this._faqUrl = 'https://faq.suvinil.com.br/s/';
        (this.host = host).addController(this);
    }
    hostConnected() {
        this._hideOriginalButtons();
    }
    hostDisconnected() {
        this._showOriginalButtons();
    }
    _showOriginalButtons() {
        if (this._originalButtonElements.accessibilityButton !== null) {
            this._originalButtonElements.accessibilityButton.hidden = false;
        }
        if (this._originalButtonElements.oneTrustButton !== null) {
            this._originalButtonElements.oneTrustButton.hidden = false;
        }
        if (this._originalButtonElements.helpButton !== null) {
            this._originalButtonElements.helpButton.hidden = false;
        }
    }
    toggleOneTrustMenu() {
        var _a, _b;
        (_a = window.OneTrust) === null || _a === void 0 ? void 0 : _a.ToggleInfoDisplay();
        (_b = window.dataLayer) === null || _b === void 0 ? void 0 : _b.push({
            'event': 'toggle_cookie_menu'
        });
    }
    showEqualWebMenu() {
        var _a, _b;
        (_a = window.interdeal) === null || _a === void 0 ? void 0 : _a.a11y.openMenu();
        (_b = window.dataLayer) === null || _b === void 0 ? void 0 : _b.push({
            'event': 'open_accessibility_menu'
        });
    }
    navigateToFaq() {
        var _a;
        (_a = window.dataLayer) === null || _a === void 0 ? void 0 : _a.push({
            'event': 'click_faq_button'
        });
        window.open(new URL('https://faq.suvinil.com.br/s/'), '_blank');
    }
    _hideOriginalButtons() {
        if (this._originalButtonElements.accessibilityButton !== null) {
            this._originalButtonElements.accessibilityButton.hidden = true;
        }
        if (this._originalButtonElements.oneTrustButton !== null) {
            this._originalButtonElements.oneTrustButton.hidden = true;
        }
        if (this._originalButtonElements.helpButton !== null) {
            this._originalButtonElements.helpButton.hidden = true;
        }
    }
}
//# sourceMappingURL=floating-action-button-controller.js.map