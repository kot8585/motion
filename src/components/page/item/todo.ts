import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, text: string) {
    super(`
      <section class="todo">
          <h3 class="todo__title"></h3>
          <input type="checkbox" class="todo-checkbox"></input>
      </section>`);
    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const textElement = this.element.querySelector(
      ".todo-checkbox"
    )! as HTMLInputElement;
    textElement.insertAdjacentText("afterend", text);
  }
}
