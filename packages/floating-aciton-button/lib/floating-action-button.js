import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { property } from 'lit/decorators.js';
import { styles } from "./styles/compiled/styles.css.js";
import { FloatingActionButtonController } from "./floating-action-button-controller.js";
class FloatingActionButton extends LitElement {
    constructor() {
        super(...arguments);
        this.menuOpened = false;
        this._controller = new FloatingActionButtonController(this);
    }
    _renderOneTrustButton() {
        return html `
      <button data-icon="heart" @click=${this._controller.toggleOneTrustMenu} class="fab mini" title="Definições de cookies" aria-label="Definições de cookies">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="M420 496q25 0 42.5-17.5T480 436q0-25-17.5-42.5T420 376q-25 0-42.5 17.5T360 436q0 25 17.5 42.5T420 496Zm-80 200q25 0 42.5-17.5T400 636q0-25-17.5-42.5T340 576q-25 0-42.5 17.5T280 636q0 25 17.5 42.5T340 696Zm260 40q17 0 28.5-11.5T640 696q0-17-11.5-28.5T600 656q-17 0-28.5 11.5T560 696q0 17 11.5 28.5T600 736ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-84 36-164t100.5-138q64.5-58 153-85t193.5-5q-9 45 6 84.5t45 66.5q30 27 71 37t86-5q-31 69 11 118t96 51q9 89-19 169t-82.5 140q-54.5 60-131 95.5T480 976Zm0-80q122 0 216.5-84T800 598q-50-22-78.5-60T683 453q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201 412 180.5 469T160 576q0 133 93.5 226.5T480 896Zm0-324Z"/>
        </svg>
      </button>
    `;
    }
    _renderAccessibilityButton() {
        return html `
      <button data-icon="heart" @click=${this._controller.showEqualWebMenu} class="fab mini" title="Explore suas opções de acessibilidade" aria-label="Explore suas opções de acessibilidade">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="M480 256q-33 0-56.5-23.5T400 176q0-33 23.5-56.5T480 96q33 0 56.5 23.5T560 176q0 33-23.5 56.5T480 256ZM360 856V376q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820 256l20 80q-56 15-118 25t-122 15v480h-80V616h-80v240h-80Zm-40 200q-17 0-28.5-11.5T280 1016q0-17 11.5-28.5T320 976q17 0 28.5 11.5T360 1016q0 17-11.5 28.5T320 1056Zm160 0q-17 0-28.5-11.5T440 1016q0-17 11.5-28.5T480 976q17 0 28.5 11.5T520 1016q0 17-11.5 28.5T480 1056Zm160 0q-17 0-28.5-11.5T600 1016q0-17 11.5-28.5T640 976q17 0 28.5 11.5T680 1016q0 17-11.5 28.5T640 1056Z"/>
        </svg>
      </button>
    `;
    }
    _renderQuestionsButton() {
        return html `
      <button data-icon="heart" @click=${this._controller.navigateToFaq} class="fab mini" title="Fale com a gente" aria-label="Fale com a gente">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m480 976-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800 516q0 75-24.5 144t-67 128q-42.5 59-101 107T480 976Zm80-146q71-60 115.5-140.5T720 516q0-109-75.5-184.5T460 256q-109 0-184.5 75.5T200 516q0 109 75.5 184.5T460 776h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460 336q-44 0-74 24.5T344 420l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480 498q-35 30-42.5 47.5T430 608Zm30-65Z"/>
      </svg>
      </button>
    `;
    }
    _renderFloatingSettingsButton() {
        return html `
      <button data-icon="plus" @click=${this.toggleMenuState} class="fab" title="Configurações" aria-label="Configurações">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m370 976-16-128q-13-5-24.5-12T307 821l-119 50L78 681l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78 471l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12l-16 128H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342 576q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422 576q0-25 17.5-42.5T482 516q25 0 42.5 17.5T542 576q0 25-17.5 42.5T482 636Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639 729l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533 362l-13-106h-79l-14 106q-31 8-57.5 23.5T321 423l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427 790l13 106Z"/>
        </svg>
      </button>
    `;
    }
    _renderFloatingCloseButton() {
        return html `
      <button data-icon="plus" @click=${this.toggleMenuState} class="fab" title="Fechar" aria-label="Fechar">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m256 856-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </button>
    `;
    }
    async toggleMenuState() {
        var _a, _b;
        this.menuOpened = !this.menuOpened;
        await this.updateComplete;
        if (this.menuOpened) {
            (_a = window.dataLayer) === null || _a === void 0 ? void 0 : _a.push({
                "event": "floating_action_menu_opened"
            });
        }
        else {
            (_b = window.dataLayer) === null || _b === void 0 ? void 0 : _b.push({
                "event": "floating_action_menu_closed"
            });
        }
    }
    _renderOpenMenuState() {
        return html `
      ${this._renderFloatingCloseButton()}
      ${this._renderOneTrustButton()}
      ${this._renderAccessibilityButton()}
      ${this._renderQuestionsButton()}
    `;
    }
    _renderClosedMenuState() {
        return html `
      ${this._renderFloatingSettingsButton()}
    `;
    }
    render() {
        if (this.menuOpened) {
            return html `
      <div class="fabs" role="group" aria-label="Ajustes">
        ${this._renderOpenMenuState()}
      </div>
    `;
        }
        else {
            return html `
      <div class="fabs" role="group" aria-label="Ajustes">
        ${this._renderClosedMenuState()}
      </div>
    `;
        }
    }
}
FloatingActionButton.styles = styles;
__decorate([
    property({ type: Boolean })
], FloatingActionButton.prototype, "menuOpened", void 0);
export { FloatingActionButton };
customElements.define('floating-action-button', FloatingActionButton);
//# sourceMappingURL=floating-action-button.js.map