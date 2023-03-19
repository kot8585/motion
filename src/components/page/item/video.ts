import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video">
      <div class="video__player">
      <iframe class="video__iframe"></iframe>
      </div> 
      <h3 class="video__title"></h3>
      </section>`);
    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const iframeElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframeElement.src = this.convertToEmbeddedURL(url);
  }
  private convertToEmbeddedURL(url: string) {
    const stringList: string[] = url.split("/");
    const videoId = stringList[stringList.length - 1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

//<iframe width="1280" height="720" src="https://www.youtube.com/embed/d14cQHBtZc4" title="25년차고요, 제 직업은 개발자를 키우는 개발자입니다 | 오늘의집 CTO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
