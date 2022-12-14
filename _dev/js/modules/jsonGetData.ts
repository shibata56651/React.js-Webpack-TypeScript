export class jsonGetData {
  elements: HTMLElement;
  carouselBtn: any;
  timer: any;
  jsonPath: string;
  jsonObj: any;
  obj: XMLHttpRequest;
  json_data: any;
  ul_element: HTMLUListElement;
  o: { activeClass: string; changeClass: string; pauseClass: string; count: number; };
  /**
   * @param  {HTMLElement} elements rootとなる要素
   * @returns void
   */
  constructor(elements: HTMLElement) {
    const defaultOptions = {
      activeClass: 'is-active',
      changeClass: 'is-changing',
      pauseClass: 'is-pause',
      count: 0,
    };

    this.o = defaultOptions;
    this.elements = elements;
    this.carouselBtn = document.querySelector('.js-carousel-mv-btn');
    this.timer;
    this.init();
  }

  /**
   * 初期化処理
   *
   * @returns void
   */
  init() {
    window.addEventListener('DOMContentLoaded', this.getDataFunc.bind(this));
  }

  /**
   * ページロード時にスライドショーを再生する
   *
   * @returns void
   */
  getDataFunc() {
    // 取得したレスポンスをページに表示

    this.jsonPath = '/common/data/newdata.json';
    this.jsonObj = {};
    this.obj = new XMLHttpRequest();

    this.obj.open('get', this.jsonPath, false);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const targetJson = this;
    this.obj.onreadystatechange = function () {
      try {
        targetJson.jsonObj = JSON.parse(this.responseText);
      } catch (e) {
        return;
      }
    };
    this.obj.send(null);

    this.json_data = JSON.parse(JSON.stringify(this.jsonObj));
    this.ul_element = document.createElement('ul');

    for (const data in this.json_data) {
      const li_element = document.createElement('li');
      li_element.classList.add('list-person');
      li_element.innerHTML = `<div class="list-person__content">
      <p class="person-name">${this.json_data[data].name}</p>
      <p class="release-day">(リリース日：${this.json_data[data].details.photo_number})</p>
      </div>`;

      this.ul_element.appendChild(li_element);
    }

    this.elements.appendChild(this.ul_element);
  }
}
