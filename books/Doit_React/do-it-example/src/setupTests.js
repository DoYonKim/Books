// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({adapter: new Adapter()});

//console.error() 함수 객체에 spyOn() 함수로 추가된 가상의 감지 코드를 제거
afterEach(()=>{
    console.error.mockClear();
});

beforeAll(()=>{
    jest.spyOn(console, 'error').mockImplementation((e)=>{
        throw new Error(e);
    });
});