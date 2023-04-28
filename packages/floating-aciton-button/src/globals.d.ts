interface OneTrust {
  ToggleInfoDisplay(): void;
}

interface EqualWebObject {
  openMenu(): void;
}

interface EqualWeb {
  a11y: EqualWebObject;
}

interface Window {
  dataLayer?: object[];
  OneTrust?: OneTrust;
  interdeal?: EqualWeb;
}