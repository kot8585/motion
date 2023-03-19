import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const imageComponent = new ImageComponent("../assets/sample.png", "Coding");
    imageComponent.attachTo(appRoot, "beforeend");

    const noteComponent = new NoteComponent("typescipt", "재밌어져라");
    noteComponent.attachTo(appRoot, "beforeend");

    const todoComponent = new TodoComponent("Todo", "음료수 마시기");
    todoComponent.attachTo(appRoot, "beforeend");

    const videoComponent = new VideoComponent(
      "유튜브 영상",
      "https://youtu.be/d14cQHBtZc4"
    );
    videoComponent.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
