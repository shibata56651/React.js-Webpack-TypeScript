export class toggle {
  element: HTMLElement;
  elementItem: HTMLElement;
  elementBtn: HTMLElement;
  toggleRoots: NodeListOf<HTMLAnchorElement>;
  toggleJudge: string;
  targetContent: HTMLElement;
  fixedItem: HTMLElement;
  toggleId: string;
  openStyle: string;
  c: { animationClass: string; activeClass: string; closeClass: string; };
  toggleHeight: number;
  closeStyle: string;
  /**
   * @param  {Element} element rootとなる要素
   * @param  {Element} toggleRoots .js-toggle-roots
   * @returns void
   */
  constructor(element: HTMLElement, toggleRoots: NodeListOf<HTMLAnchorElement>, toggleJudge: string) {
    const classNames = {
      animationClass: 'is-animation',
      activeClass: 'is-active',
      closeClass: 'is-close',
    };

    this.c = classNames;
    this.element = element;
    this.toggleRoots = toggleRoots;
    this.toggleJudge = toggleJudge;
    this.elementItem = this.element.querySelector('.js-toggle-item');
    this.elementBtn = this.element.querySelector('.js-toggle-btn');
    this.targetContent = undefined;
    this.fixedItem = undefined;
    this.toggleHeight = 0;
    this.closeStyle = 'height: 0;';
    this.openStyle = '';
    this.toggleId = '';
    this.init();
  }
  /**
   * 初期化処理
   *
   * @returns void
   */
  init() {
    this.elementItem.addEventListener('click', this.clickHandler.bind(this));

    if (this.elementBtn) {
      this.elementBtn.addEventListener('click', this.clickHandler.bind(this));
    }
  }

  /**
 * トグル機能
 *
 * @param  {MouseEvent} e クリックした要素
 * @returns void
 */
  clickHandler(e: MouseEvent) {
    e.preventDefault();
    const href = this.elementItem.getAttribute('href').substring(1);
    this.targetContent = document.getElementById(href);
    this.toggleId = this.targetContent.id;

    if (this.toggleJudge === 'business') {
      if (this.elementItem.classList.contains(this.c.activeClass)) {
        this.targetContent.setAttribute('style', this.openStyle);

        setTimeout(() => {
          this.targetContent.setAttribute('style', this.closeStyle);
        }, 10);

        setTimeout(() => {
          this.elementItem.classList.remove(this.c.activeClass);
          this.elementItem.classList.remove(this.c.animationClass);
          this.elementItem.setAttribute('style', 'display: block');
          this.closeHandler();
        }, 400);
        return;
      } else if (!this.elementItem.classList.contains(this.c.activeClass)) {

        // 別のメガメニューテキストをクリックした際に、現在ついているカレントを外す
        this.toggleRoots.forEach(item => {
          if (item.classList.contains(this.c.animationClass)) {
            item.classList.remove(this.c.animationClass);
            item.setAttribute('style', '');
          }

          if (item.classList.contains(this.c.activeClass)) {
            item.classList.remove(this.c.activeClass);
            item.setAttribute('style', '');
          }
        });

        this.elementItem.classList.add(this.c.animationClass);

        setTimeout(() => {
          this.elementItem.setAttribute('style', 'display: none');
        }, 250);

        setTimeout(() => {
          this.elementItem.classList.add(this.c.activeClass);

          this.toggleHeight = this.targetContent.offsetHeight;
          this.targetContent.setAttribute('style', this.closeStyle);

          this.fixedItem = this.targetContent.querySelector('.js-toggle-content');
          this.fixedItem.setAttribute('style', 'position: absolute;bottom: 0;width: 100%;');

          this.openStyle = `height: ${this.toggleHeight}px;`;

          // 更新されたDOMをoffsetHeightで再度読みに行く。
          this.targetContent.offsetHeight;
          this.targetContent.setAttribute('style', this.openStyle);

          setTimeout(() => {
            this.closeHandler();
            this.fixedItem.setAttribute('style', '');
          }, 300);
        }, 250);
      }
    } else {
      if (this.element.classList.contains(this.c.activeClass)) {
        this.targetContent.setAttribute('style', this.openStyle);

        setTimeout(() => {
          this.targetContent.setAttribute('style', this.closeStyle);
        }, 10);

        setTimeout(() => {
          this.element.classList.remove(this.c.activeClass);
          this.element.classList.remove(this.c.animationClass);
          this.closeHandler();
        }, 400);

        this.openStyle = `height: ${this.toggleHeight}px;`;

        return;
      } else if (!this.element.classList.contains(this.c.activeClass)) {
        // 別のメガメニューテキストをクリックした際に、現在ついているカレントを外す

        setTimeout(() => {
          this.element.classList.add(this.c.activeClass);

          this.toggleHeight = this.targetContent.offsetHeight + 10;
          this.targetContent.setAttribute('style', this.closeStyle);
          this.openStyle = `height: ${this.toggleHeight}px;`;

          // 更新されたDOMをoffsetHeightで再度読みに行く。
          this.targetContent.offsetHeight;
          this.targetContent.setAttribute('style', this.openStyle);
        }, 50);
      }
    }
  }

  closeHandler() {
    this.targetContent.setAttribute('style', '');
  }
}
