export class xmlGetData {
  elements: HTMLElement;
  carouselBtn: HTMLElement;
  items: Array<Element>;
  ul_element: HTMLUListElement;
  /**
   * @param  {HTMLElement} elements rootとなる要素
   * @returns void
   */
  constructor(elements: HTMLElement) {
    this.elements = elements;
    this.carouselBtn = document.querySelector('.js-carousel-mv-btn');
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

    fetch('/common/data/newdata.xml')
      .then(response => response.text()) // (2) レスポンスデータを取得
      .then(data => { // (3)レスポンスデータを処理

        const parser = new DOMParser();
        const sitemap = parser.parseFromString(data, 'application/xml');

        this.items = sitemap.querySelectorAll('item') as unknown as Array<HTMLElement>;
        this.ul_element = document.createElement('ul');

        for(const dataElm of this.items) {
          const li_element = document.createElement('li');
          const url = dataElm.querySelector('loc');
          const last_update = dataElm.querySelector('lastmod');

          li_element.innerHTML = `URL：${url.textContent}<br>最終更新日：${last_update.textContent}`;
          this.ul_element.appendChild(li_element);
        }

        this.elements.appendChild(this.ul_element);
      });
  }
}
