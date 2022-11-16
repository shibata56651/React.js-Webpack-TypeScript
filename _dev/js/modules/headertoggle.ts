export class headertoggle {
  o: any;
  element: HTMLAnchorElement;
  toggleRoots: NodeListOf<HTMLAnchorElement>;
  targetContent: HTMLElement;
  toggleId: string;
  toggleFlg: boolean;
  openStyle: string;
  activeClass: string;
  closeClass: string;
  closeStyle: string;
  /**
   * @param  {HTMLAnchorElement} element rootとなる要素
   * @param  {NodeListOf<HTMLAnchorElement>} toggleRoots aタグ
   * @returns void
   */
  constructor(element: HTMLAnchorElement, toggleRoots: NodeListOf<HTMLAnchorElement>) {
    const defaultOptions = {
      toggleHeight: 0,
    };

    this.o = defaultOptions;
    this.element = element;
    this.toggleRoots = toggleRoots;
    this.targetContent = undefined;
    this.toggleId = '';
    this.openStyle = '';
    this.toggleFlg = true;
    this.activeClass = 'is-active';
    this.closeClass = 'is-close';
    this.closeStyle = 'height: 0;';
    this.init();
  }
  /**
   * 初期化処理
   *
   * @returns void
   */
  init() {
    this.element.addEventListener('click', this.clickHandler.bind(this));
  }

  /**
   * トグル機能
   *
   * @param  {MouseEvent} e クリックした要素
   * @returns void
   */
  clickHandler(e: MouseEvent) {
    e.preventDefault();
    const href = this.element.getAttribute('aria-controls');
    this.targetContent = document.getElementById(href);
    this.toggleId = this.targetContent.id;

    if (this.element.classList.contains(this.activeClass)) {
      this.targetContent.setAttribute('style', this.openStyle);

      setTimeout(() => {
        this.targetContent.setAttribute('style', this.closeStyle);
      }, 10);

      setTimeout(() => {
        this.element.classList.remove(this.activeClass);
        this.closeHandler();
      }, 400);

      return;
    } else if (!this.element.classList.contains(this.activeClass)) {

      // 別のメガメニューテキストをクリックした際に、現在ついているカレントを外す
      this.toggleRoots.forEach(item => {
        const targetContent = item.parentNode.querySelector('.header-menu-contents');
        if (item.classList.contains(this.activeClass)) {
          item.classList.remove(this.activeClass);
          targetContent.setAttribute('style', '');
        }
      });

      this.element.classList.add(this.activeClass);
      this.o.toggleHeight = this.targetContent.offsetHeight;
      this.targetContent.setAttribute('style', this.closeStyle);
      this.openStyle = `height: ${this.o.toggleHeight}px;`;

      // 更新されたDOMをoffsetHeightで再度読みに行く。
      this.targetContent.offsetHeight;
      this.targetContent.setAttribute('style', this.openStyle);

      setTimeout(() => {
        this.closeHandler();
      }, 300);
    }
  }

  closeHandler() {
    this.targetContent.setAttribute('style', '');
  }
}
