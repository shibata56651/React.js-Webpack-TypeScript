export class tab {
  element: HTMLAnchorElement;
  roots: NodeListOf<HTMLAnchorElement>;
  tabItem: HTMLElement;
  displayItem: NodeListOf<HTMLElement>;
  content: HTMLElement;
  activeClass: string;
  /**
   * @param  {HTMLAnchorElement} element ターゲットとなる要素
   * @param  {NodeListOf<HTMLAnchorElement>} roots rootとなる要素
   * @returns void
   */
  constructor(element: HTMLAnchorElement, roots: NodeListOf<HTMLAnchorElement>) {
    this.element = element;
    this.roots = roots;
    this.tabItem = null;
    this.displayItem = document.querySelectorAll('.js-tab-item');
    this.content = document.getElementById(this.element.hash.substring(1));
    this.activeClass = 'is-active';

    this.init();

    window.addEventListener('load', () => {
      this.loadHandler();
    });
  }

  /**
   * 初期化処理
   *
   * @returns void
   */
  init() {
    // モーダル発火
    this.element.addEventListener('click', this.clickHandler.bind(this));
  }

  /**
   * @param {MouseEvent} e 発火ボタンのイベント
   */
  clickHandler(e: MouseEvent) {
    e.preventDefault();

    this.roots.forEach(item => {
      item.parentElement.classList.remove(this.activeClass);
    });

    this.displayItem.forEach(item => {
      item.classList.remove(this.activeClass);
    });

    const href = this.element.getAttribute('aria-controls');
    this.tabItem = document.getElementById(href);

    this.element.parentElement.classList.add(this.activeClass);
    this.content.classList.add(this.activeClass);
  }

  loadHandler() {
    const param = location.search.substring(1);
    const hooks = document.querySelectorAll('.js-tab-hook');
    const hookItems = document.querySelectorAll('.js-tab-item');

    if (param.indexOf('tab') === 0) {
      this.roots.forEach(item => {
        item.parentElement.classList.remove(this.activeClass);
      });

      this.displayItem.forEach(item => {
        item.classList.remove(this.activeClass);
      });
    }

    hooks.forEach(hook => {
      if (hook.getAttribute('href') === `#${param}`) {
        hook.parentElement.classList.add(this.activeClass);
      }
    });

    hookItems.forEach(hookItem => {
      if (hookItem.getAttribute('id') === `${param}`) {
        hookItem.classList.add(this.activeClass);
      }
    });
  }
}
