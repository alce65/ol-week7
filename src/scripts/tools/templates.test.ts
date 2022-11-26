import { createFooter, createHeader, MenuOptionsType } from './templates';

describe(`Given "createHeader"`, () => {
    describe('When it is call', () => {
        test('Then, its return should include "Learning DOM"', () => {
            const expected = 'Learning DOM';
            const result = createHeader([]);
            expect(result).toContain(expected);
        });
    });
    describe('When the argument is a menu options array', () => {
        const menuOptionsMock: Array<MenuOptionsType> = [
            { label: 'Test option', path: '' },
        ];
        test('Then, its return should include the options', () => {
            const expected = menuOptionsMock[0].label;
            const result = createHeader(menuOptionsMock);
            expect(result).toContain(expected);
        });
    });
});

describe(`Given "createFooter", 
            When it is call with "Coders" as argument`, () => {
    test('Then, its return should include "Coders"', () => {
        const expected = 'Coders';
        const result = createFooter(expected);
        expect(result).toContain(expected);
    });
});
