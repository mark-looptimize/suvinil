import { LitElement, TemplateResult, html } from "lit";
import { styles } from "./styles/compiled/styles.css.js";

export class FloatingActionButton extends LitElement{
  static styles = styles;

  protected render(): TemplateResult {
    return html`
      <div class="fabs" role="group" aria-label="Floating action buttons">
        <button data-icon="plus" class="fab" title="Add new action" aria-label="Add new action">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <button data-icon="heart" class="fab mini" title="Like action" aria-label="Like action">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" stroke="none" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    `;
  }
}

customElements.define('floating-action-button', FloatingActionButton);