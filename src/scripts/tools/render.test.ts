import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { renderLayout } from './render';
import { MenuOptionsType } from './templates';

describe('Given "renderLayout"', () => {
    const menuOptionsMock: Array<MenuOptionsType> = [
        { label: 'Test option', path: '' },
    ];

    document.body.innerHTML = `
            <slot name="header"></slot>
            <slot name="footer"></slot>
        `;
    renderLayout(menuOptionsMock);
    const elements = [
        screen.getByRole('banner'), // <header />
        screen.getByRole('heading', { name: 'Learning DOM' }), // <h1>
        screen.getByRole('navigation'), // <nav class="menu"/>
        screen.getByRole('list'), // <ul />
        screen.getByRole('listitem'), // <li />
        screen.getByRole('link', { name: 'Test option' }),
        screen.getByRole('contentinfo'), //<footer />
    ];
    describe.each(elements)(
        'When it is call with a DOM implementation',
        (element: HTMLElement) => {
            test(`Then ${element.tagName} should be render`, () => {
                expect(element).toBeInstanceOf(HTMLElement);
                expect(element).toBeInTheDocument();
            });
        }
    );
});
