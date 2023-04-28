import { LitElement, TemplateResult } from "lit";
export declare class FloatingActionButton extends LitElement {
    static styles: import("lit").CSSResult;
    menuOpened: boolean;
    private _controller;
    private _renderOneTrustButton;
    private _renderAccessibilityButton;
    private _renderQuestionsButton;
    private _renderFloatingSettingsButton;
    private _renderFloatingCloseButton;
    private toggleMenuState;
    private _renderOpenMenuState;
    private _renderClosedMenuState;
    protected render(): TemplateResult;
}
