export class PageComponent {
  private _element: HTMLUListElement;
  constructor() {
    this._element = document.createElement("ul");
    this._element.setAttribute("class", "page");
    this._element.textContent = "This is PageComponent";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this._element);
  }

  element(): HTMLUListElement {
    return this._element;
  }
}
