//❗️ 외부와 소통하는 api를 가진 클래스는 interface로 선언해주는게 좋다.
//❗️ element 변수는 내부적으로만 사용할것이기 때문에 interface에 선언해주지 않았다.
export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  protected element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"): void {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement): void {
    if (parent !== this.element.parentElement) {
      throw new Error("Parent mismatch");
    }
    parent.removeChild(this.element);
  }
}
