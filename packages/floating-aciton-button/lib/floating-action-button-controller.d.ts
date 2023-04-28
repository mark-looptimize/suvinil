import { ReactiveController, ReactiveControllerHost } from "lit";
export declare class FloatingActionButtonController implements ReactiveController {
    host: ReactiveControllerHost;
    private _originalButtonElements;
    private _faqUrl;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
    private _showOriginalButtons;
    toggleOneTrustMenu(): void;
    showEqualWebMenu(): void;
    navigateToFaq(): void;
    private _hideOriginalButtons;
}
