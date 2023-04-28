import { ReactiveController, ReactiveControllerHost } from "lit";

export class FloatingActionButtonController implements ReactiveController{
  host: ReactiveControllerHost

  private _originalButtonElements = {
    'accessibilityButton': document.getElementById('INDmenu-btn'),
    'oneTrustButton': document.getElementById('onetrust-consent-sdk'),
    'helpButton': document.querySelector('div[class^=Helpstyle__HelpWrapper') as HTMLElement | null
  };

  private _faqUrl = 'https://faq.suvinil.com.br/s/';

  constructor(host: ReactiveControllerHost){
    (this.host = host).addController(this);
  }

  hostConnected(): void {
    this._hideOriginalButtons();
  }

  hostDisconnected(): void {
    this._showOriginalButtons();
  }

  private _showOriginalButtons() {
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


  public toggleOneTrustMenu() {
    window.OneTrust?.ToggleInfoDisplay();
    window.dataLayer?.push({
      'event': 'toggle_cookie_menu'
    });
  }

  public showEqualWebMenu(){
    window.interdeal?.a11y.openMenu();
    window.dataLayer?.push({
      'event': 'open_accessibility_menu'
    });
  }

  public navigateToFaq(){
    window.dataLayer?.push({
      'event': 'click_faq_button'
    });
    window.open(new URL('https://faq.suvinil.com.br/s/'), '_blank');
  }

  private _hideOriginalButtons() {
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