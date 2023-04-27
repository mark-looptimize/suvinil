import { LitElement, TemplateResult, html } from "lit";
import { styles } from "./styles/compiled/styles.css.js";

export class FloatingActionButton extends LitElement{
  static styles = styles;

  protected render(): TemplateResult {
    return html`<h1>Hello World</h1>`;
  }
}

customElements.define('floating-action-button', FloatingActionButton);