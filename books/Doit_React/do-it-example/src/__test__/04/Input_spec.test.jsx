import React from 'react';
import {shallow} from 'enzyme';

import Input from '../../03/Input';

describe('<Input/>' , ()=>{
    it('renders without crashing', ()=>{
        expect(()=>{
            shallow(<Input name="test_name"/>);
        }).not.toThrow();
    });
    
    describe('contains <input>', () => {
        //element 존재여부 확인
        it('renders one input', () =>{
            const wrapper = shallow(<Input name = "test_name"/>);//shallow() 함수는 컴포넌트를 출력 후 컴포넌트 검사할 수 있는 enzyme 객체 반환
            expect(wrapper.find('input')).toHaveLength(1);//find 인자로 'input' 을 전달하여 출력된 DOM 의 input 엘리먼트를 찾는다. toHaveLength()는 엘리먼트의 개수를 검증함
            expect(wrapper.find('label')).toHaveLength(1);
        });
        //prop 전달 확인
        it('assings the prop value and type', () => {
            const expectedValue ='123';
            const wrapper = shallow(<Input name = "test_name" value ={expectedValue}/>);
            expect(wrapper.find('input').prop('value')).toBe(expectedValue);
            const{type, value} = wrapper.find('input').props();
            expect(value).toBe(expectedValue);
            expect(type).toBe('text');
        });
        //prop 변화 확인
        it('renders errrorMessage', ()=>{
            const wrapper = shallow(<Input name="test_name"/>);
            expect(wrapper.find('.error')).toHaveLength(0);
            const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
            wrapper.setProps({errorMessage: expectedErrorMessage});
            expect(wrapper.find('span').prop('className')).toBe('error');
            expect(wrapper.find('.error')).toHaveLength(1);
            expect(wrapper.html()).toContain(expectedErrorMessage);
        });
        //가상 이벤트 검사
        it('calls back onChange on input change', ()=>{
            const changeStub = jest.fn();//fn은 감시함수
            const wrapper = shallow(<Input name = "test_name" onChange={changeStub} />);
            expect(changeStub).not.toHaveBeenCalled();//콜백함수가 호출되지 않은 상태를 기대함
            const expectedTargetValue = 'updated input';
            wrapper.find('input').simulate('change', {target: {value: expectedTargetValue}});//input 값을 변경
            expect(changeStub).toHaveBeenCalledTimes(1);
            expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
        });
    });
});