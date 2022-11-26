import { consoleDebug } from './debug.js';

export type MenuOptionsType = {
    path: string;
    label: string;
};
export const createMenu = (menuOptions: Array<MenuOptionsType>) => {
    let menuTemplate = `<nav class="menu"><ul>`;

    menuOptions.forEach((item) => {
        menuTemplate += `<li><a href="${item.path}">${item.label}</a></li>`;
    });

    menuTemplate += `</ul></nav>`;

    return menuTemplate;
};

export const createHeader = (menuOptions: Array<MenuOptionsType>) => {
    consoleDebug('Running createHeader');
    return `<header>
            <h1>Learning DOM</h1>
            ${createMenu(menuOptions)}
        </header>
    `;
};

export const createFooter = (owner: string) => {
    const today = new Date();
    return `
        <footer>
            <address>${owner}</address>
            <p>Madrid, ${today.toLocaleDateString()}</p>
        </footer>
    `;
};
