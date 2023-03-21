import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const imageComponent = new ImageComponent("../assets/sample.png", "Coding");
    this.page.addChild(imageComponent);

    const noteComponent = new NoteComponent("typescipt", "재밌어져라");
    this.page.addChild(noteComponent);

    const todoComponent = new TodoComponent("Todo", "음료수 마시기");
    this.page.addChild(todoComponent);

    const videoComponent = new VideoComponent(
      "유튜브 영상",
      "https://youtu.be/d14cQHBtZc4"
    );
    this.page.addChild(videoComponent);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
