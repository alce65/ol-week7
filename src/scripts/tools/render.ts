import { createFooter, createHeader, MenuOptionsType } from './templates.js';

export const renderLayout = (menuOptions: Array<MenuOptionsType>) => {
    const templates = [createHeader(menuOptions), createFooter('ISDI Coders')];
    const slots = document.querySelectorAll('slot');
    slots.forEach((item, i) => (item.outerHTML = templates[i]));
};
