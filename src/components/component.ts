export class BaseComponent<T extends HTMLElement> {
  //음.. 초기화 어ㅓ게 해......외부에서 주입받는게 아니라 내부적으로 만들건데
  protected element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
