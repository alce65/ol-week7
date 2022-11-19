import { home } from './home.js';
import { form } from './form.js';

// IIFE
(() => {
    type MenuOptionsType = {
        path: string;
        label: string;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const menuOptions: Array<MenuOptionsType> = [
        { path: './index.html', label: 'Home' },
        { path: './form.html', label: 'Form' },
    ];

    const today = new Date();
    let headerTemplate = `
        <header>
            <h1>Learning DOM</h1>
            <nav class="menu">
                <ul>`;

    menuOptions.forEach((item) => {
        headerTemplate += `<li><a href="${item.path}">${item.label}</a></li>`;
    });

    headerTemplate += `
            </ul>
        </nav>
    </header>
    `;

    const footerTemplate = `
    <footer>
        <address>ISDI Coders</address>
        <p>Madrid, ${today.toLocaleDateString()}</p>
    </footer>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        const templates = [headerTemplate, footerTemplate];
        const slots = document.querySelectorAll('slot');
        slots.forEach((item, i) => (item.outerHTML = templates[i]));

        if (location.pathname.includes('index')) {
            home();
        } else {
            form();
        }
    });
})();
