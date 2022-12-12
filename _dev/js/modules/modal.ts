export class modal {
  o: any;
  element: Element;
  focusAllElem: NodeListOf<HTMLElement>;
  topElm: number;
  modalClose: NodeListOf<HTMLElement>;
  modalContent: NodeListOf<HTMLElement>;
  modalOverlay: HTMLElement;
  activeModalId: string;
  targetContent: HTMLElement;
  /**
   * @param  {Element} element rootとなる要素
   * @returns void
   */
  constructor(element: Element) {
    const defaultOptions = {
      activeClass: 'is-active',
      moreShowContents: 'js-more-show',
      focusElem: 'a, input, button, option',
    };

    this.o = Object.assign(defaultOptions);
    this.element = element;
    this.modalClose = document.querySelectorAll<HTMLElement>('.js-modal-close');
    this.modalContent = document.querySelectorAll<HTMLElement>('.js-modal-content');
    const newOverlay: HTMLDivElement = document.createElement('div');
    this.focusAllElem = document.querySelectorAll<HTMLElement>(this.o.focusElem);
    const OVERLAY_ID = 'js-modal-overlay';
    let youtube;
    let targetContent = null;
    this.topElm = 0;
    this.activeModalId = '';
    this.targetContent = undefined;

    newOverlay.id = OVERLAY_ID;
    document.body.appendChild(newOverlay);

    this.modalOverlay = document.getElementById(OVERLAY_ID);

    this.init();
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

  clickHandler(e) {
    e.preventDefault();

    const href = this.element.getAttribute('href');

    this.targetContent = document.getElementById(href.substring(1));
    topElm = window.pageYOffset;

    // youtube動画がある場合、youtube APIを有効
    // if (targetContent.querySelector('.lyt-movie-a > .lyt-movie-inner > iframe')) {
    //   youtube = targetContent.querySelector('.lyt-movie-a > .lyt-movie-inner > iframe');
    //   const dataSrcFlg = youtube.hasAttribute('data-src');
    //   if (dataSrcFlg && !youtube.src) {
    //     youtube.src = youtube.dataset.src;
    //   }

    //   const srcAttr = dataSrcFlg ? 'data-src' : 'src';
    //   let srcTxt = youtube.getAttribute(srcAttr);
    //   const separator = srcTxt.indexOf('?') !== -1 ? '&' : '?';

    //   if (srcTxt.indexOf('enablejsapi=1') === -1) {
    //     srcTxt += `${separator}enablejsapi=1`;

    //     youtube.setAttribute(srcAttr, srcTxt);
    //   }
    // }

    this.activeModalId = this.targetContent.id;
    this.activeModal(targetContent);
  }

  /**
   * @param  {object} event 発火ボタンのイベント
   */

   // tabindexの付与処理
   setTabindex = () => {
     this.focusAllElem.forEach((elem: HTMLElement) => {
       const saveTabindex = elem.getAttribute('tabindex');

       if (saveTabindex) {
         elem.setAttribute('data-tabindex', saveTabindex);
       }
       elem.tabIndex = -1;
     });
   };

   // tabindexの削除処理
   removeTabIndex = () => {
     this.focusAllElem.forEach((elem: HTMLElement) => {
       const saveDataTabindex = elem.getAttribute('data-tabindex');

       if (saveDataTabindex) {
         elem.tabIndex = Number(saveDataTabindex);
         elem.removeAttribute('data-tabindex');

         return;
    }

       elem.removeAttribute('tabindex');
     });
   };

   // モーダル消去
   removeModal = () => {
     const targetHook: HTMLElement = document.querySelector(`[href="#${activeModalId}"]`);

     document.body.classList.remove('is-modal-fixed');
     document.body.style.top = '';
     window.scrollTo(0, this.topElm);

     this.removeTabIndex();
     this.modalContent.forEach((modalItem) => {
       if (modalItem.classList.contains(this.o.activeClass)) {
         modalItem.classList.remove(this.o.activeClass);
         this.modalOverlay.classList.remove(this.o.activeClass);
       }
     });

     // モーダル消去時youtube再生を停止する
     if (youtube) {
       youtube.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
     }
     targetHook.focus(); // フックにフォーカスを戻す
   };

   // escキーイベント
   /**
    * @param  {object} event ESCキーのイベント
    */
   escKeyEvent = (event) => {
     this.modalContent.forEach((modalItem) => {
       if (modalItem.classList.contains(this.o.activeClass)) {
         const keyEvent = event.key;

         if (keyEvent === 'Escape' || keyEvent === 'Esc') {
           this.removeModal();
         }
       }
     });
   };

   /**
    * @param  {object} targetElm 押下したa要素のhref属性と一致するid持つ要素
    */
   activeModal = (targetElm) => {
     const modalFocusItems = targetElm.querySelectorAll(FOCUS_ELEM);

     this.modalOverlay.classList.add(this.o.activeClass);
     targetElm.classList.add(this.o.activeClass);
     this.setTabindex();

     // 背景固定
     document.body.classList.add('is-modal-fixed');
     document.body.style.top = `-${this.topElm}px`;
     modalFocusItems.forEach((modalFocusItem) => {
       modalFocusItem.tabIndex = 0;
     });
   };

   // closeボタン押下時
   this.modalClose.forEach((closeItem) => {
     closeItem.addEventListener('click', () => {
       this.removeModal();
     });
   });

   // オーバーレイクリック時
   modalOverlay.addEventListener('click', removeModal);

   // escキー押下時のキーイベント
   win.addEventListener('keyup', escKeyEvent);
}
