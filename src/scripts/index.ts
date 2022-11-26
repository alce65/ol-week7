import { home } from './pages/home.js';
import { form } from './pages/form.js';
import { MenuOptionsType } from './tools/templates.js';
import { renderLayout } from './tools/render.js';

// IIFE
(() => {
    const menuOptions: Array<MenuOptionsType> = [
        { path: './index.html', label: 'Home' },
        { path: './form.html', label: 'Form' },
    ];

    document.addEventListener('DOMContentLoaded', () => {
        if (location.pathname.includes('index')) {
            renderLayout(menuOptions);
            home();
        } else {
            renderLayout(menuOptions);
            form();
        }
    });
})();
