import { LitElement, html } from "lit";
import { styles } from "./styles/compiled/styles.css.js";
class FloatingActionButton extends LitElement {
    render() {
        return html `<h1>Hello World</h1>`;
    }
}
FloatingActionButton.styles = styles;
export { FloatingActionButton };
customElements.define('floating-action-button', FloatingActionButton);
//# sourceMappingURL=floating-action-button.js.map