import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;
class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`
      <li class="page-item">
        <section class="page-item__body"></section>
        <div class="page-item__controls">
          <button class="close">x</button>
        </div>
      </li>
    `);

    const closeButton = this.element.querySelector(
      ".close"
    ) as HTMLButtonElement;

    closeButton.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  /** ❗️ closeListener를 생성자에서 안받고 set으로 받는 이유
   * 보통 이벤트 관련 등록 함수들은 생성자보다는 별도로 등록하는 함수를 만들고있다.
   * 이유는 추후에 유동성 있게 추가 될  수 있도록 만들기 위해서
   * 생성자는 인스턴스를 만들기 위해서 정말 꼭! 필요한 요소들만 인자로 받아오는 것이 좋다.
   */

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");

    /** ❗️ pageItemComponent에서 element.remove를 하지않고 removeFrom(parent)를 하는 이유
          - 페이지 (노트들을 가지고 있는 부모) 단에서 모든 아이템에 대해서 어떤 특정한 처리를 해줘야 해서 데이터를 가지고 있다면, 부모에게도 자신이 삭제 될 거라는걸 꼭 알려줘야 해요 :)
          - 그래서 데이터는 직접 자신이 삭제하기 보다는, 전체적으로 관리 하고 있는 대상에서 위임하는것이 더 안전한 코딩 방법이랍니다.
    */
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
