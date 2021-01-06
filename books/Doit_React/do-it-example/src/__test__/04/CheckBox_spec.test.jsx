import React from 'react';
import {shallow, mount} from 'enzyme';

import CheckBox from '../../04/CheckBox';

describe('<CheckBox>', ()=>{
    it('renders without crashing', ()=>{
        expect(()=>{
            shallow(<CheckBox name="requuired">테스트</CheckBox>);
        }).not.toThrow();
    });

    it('displays errorMessage', ()=>{
        const errorMessage = 'Error message';
        const errorHtml = shallow(<CheckBox name="name" errorMessage={errorMessage}>테스트</CheckBox>)
        .dive()
        .find('span')
        .html();
        expect(errorHtml).toContain(errorMessage);
    });

    it('calls back onChage on clicked', ()=>{
        const changeStub = jest.fn();
        expect (changeStub).toHaveBeenCalledTimes(0);
        const input = shallow(<CheckBox name="test_name" onChange={changeStub}>테스트</CheckBox>)
        .dive()
        .find('input');
        expect(input).toHaveLength(1);
        input.simulate('click', {target: {checked: true}});
        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith('test_name', true);
        input.simulate('click', {target: {checked: false}});
        expect(changeStub).toHaveBeenCalledWith('test_name', false);
    });
});