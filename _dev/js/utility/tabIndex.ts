import {TAB_INDEX_ELEMENTS} from '../utility/config';

const FOCUS_ALL_ELEM = document.querySelectorAll(TAB_INDEX_ELEMENTS.FOCUS_ELEMENT) as unknown as Array<HTMLElement>;

/**
 * Tabindexを付与する処理
 */
export const setTabIndex = (spMenuFlg, targetElems) => {
  if (FOCUS_ALL_ELEM) {
    for (const elem of FOCUS_ALL_ELEM) {
      const saveTabindex = elem.getAttribute('tabindex');

      if (saveTabindex) {
        elem.setAttribute('data-tabindex', saveTabindex);
      }
      elem.tabIndex = -1;

      if (spMenuFlg) {
        for (const item of targetElems) {
          item.tabIndex = 0;
        }
      }
    }
  }
};

/**
 * Tabindexを削除する処理
 */
export const removeTabIndex = () => {
  if (FOCUS_ALL_ELEM) {
    for (const elem of FOCUS_ALL_ELEM) {
      const saveDataTabindex = Number(elem.getAttribute('data-tabindex'));

      if (saveDataTabindex) {
        elem.tabIndex = saveDataTabindex;
        elem.removeAttribute('data-tabindex');

        continue;
      }

      elem.removeAttribute('tabindex');
    }
  }
};
