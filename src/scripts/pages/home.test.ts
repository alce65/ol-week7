import fs from 'fs/promises';
import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { home } from './home';
import { consoleDebug } from '../tools/debug';

jest.mock('../tools/debug');
const log = jest.spyOn(global.console, 'log');

const extractBody = (str: string) => {
    const inicio = str.indexOf('<body>');
    const fin = str.indexOf('</body>');
    const body = str.slice(inicio + 6, fin);
    return body;
};

describe('Given "home" function', () => {
    describe('When it is call inside a HTML document', () => {
        let homeHTML = '';
        beforeAll(async () => {
            homeHTML = await fs.readFile('./dist/index.html', {
                encoding: 'utf-8',
            });
            document.body.innerHTML = extractBody(homeHTML);
            home();
        });
        test('A paragrah with "saludos" should be in the document ', () => {
            const pText = /Saludos/i;
            const element = screen.getByText(pText);
            expect(element).toBeInTheDocument();
            expect(consoleDebug).toHaveBeenCalledWith('App');
        });
        test(`A button with "Click" should be in the document
                and if user click it a console log should be call`, () => {
            const cText = 'Haz Click - 1';
            const button = screen.getByText(cText);
            expect(button).toBeInTheDocument();
            fireEvent.click(button);
            expect(consoleDebug).toHaveBeenCalledWith('click 1');
        });
        test(`A submit button should be  in the document
                and if user click it a console log should be call`, async () => {
            const user = userEvent.setup();
            const inputName = screen.getByPlaceholderText('Dime tu nombre');
            const inputAge = screen.getByPlaceholderText('Dime tu edad');
            await user.type(inputName, 'Pepe');
            await user.type(inputAge, '33');
            expect(inputName).toHaveValue('Pepe');
            expect(inputAge).toHaveValue(33);
            const cText = 'Enviar';
            const buttonSubmit = screen.getByText(cText);
            expect(buttonSubmit).toBeInTheDocument();
            await userEvent.click(buttonSubmit);
            const hiddenText = /Encantados/i;
            const hidden = screen.getByText(hiddenText);
            expect(hidden).toBeInTheDocument();
        });
        test(`A input "Buscar" should be  in the document
                and if user type it a console log should be call`, async () => {
            const user = userEvent.setup();
            const searchText = 'Que quieres buscar';
            const inputSearch = screen.getByPlaceholderText(searchText);
            expect(inputSearch).toBeInTheDocument();
            const inputText = 'Test';
            await user.type(inputSearch, inputText);
            expect(inputSearch).toHaveValue(inputText);
            const output = screen.getByText('Buscando ' + inputText);
            expect(output).toBeInTheDocument();
        });
    });
    describe(`When it is call inside a HTML document 
                without "greetings"`, () => {
        test('should ', async () => {
            const homeHTML = await fs.readFile('./dist/index.html', {
                encoding: 'utf-8',
            });
            document.body.innerHTML = extractBody(homeHTML);
            const pText = /Saludos/i;
            const element = screen.getByText(pText);
            element.outerHTML = '';
            home();
        });
    });
    describe(`When it is call inside a HTML document 
                without form`, () => {
        test('should ', async () => {
            const homeHTML = await fs.readFile('./dist/index.html', {
                encoding: 'utf-8',
            });
            document.body.innerHTML = extractBody(homeHTML);
            const element = screen.getByRole('form');
            element.outerHTML = '';
            home();
        });
    });
});
