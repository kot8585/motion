import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
  private readonly page: PageComponent<HTMLUListElement>;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent<HTMLUListElement>(`<ul class="page"></ul>`);
    this.page.attachTo(appRoot);

    const imageHtmlString = `
      <section class="image">
        <div class="image__holder">
          <img class="image__thumbnail">
          <p class="image__title"></p>
        </div>
      </section>`;
    const imageComponent = new ImageComponent(
      imageHtmlString,
      "../assets/sample.png",
      "Coding"
    );
    imageComponent.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
