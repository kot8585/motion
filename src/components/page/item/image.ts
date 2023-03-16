import { BaseComponent } from "../../component.js";

export class ImageComponent<T extends HTMLElement> extends BaseComponent<T> {
  constructor(htmlString: string, url: string, title: string) {
    super(htmlString);
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
