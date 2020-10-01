import React from 'react';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent'
import ChildComponent from './03/ChildComponent'
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropscomponent from './03/DefaultPropscomponent';

function App() {

  const array = [1,2,3];
  const obj = {name: "제목", age: 30}
  const node = <h1>노드</h1>
  const func = ()=>{console.log('메시지')}

  return (
    <div className="App">
      <h1 className = "title">두잇! 리액트 시작하기</h1>
      <img src= "http://www.easyspub.co.kr/images/logo_footer.png" alt = "tag"/>
      <div className = "body">
        <TodaysPlan/>
      </div>
      <PropComponent name="프로퍼티 테스트"/>
      <ChildComponent
        boolValue = {true}
        numValue = {1}
        arrayValue = {array}
        objValue = {obj}
        nodeValue = {node}
        funcValue = {func}
      />
      <div>
        <div><b>지루할 때:</b><BooleanComponent bored /></div>
        <div><b>지루할 때:</b><BooleanComponent /></div>
      </div>
      <div>
        <ChildComponent2 
          objValue = {{age:20}}
          requiredStringValue = "필수값 문자"
        />
      </div>
      <div>
        <DefaultPropscomponent />
      </div>
    </div>
    
  );
}

export default App;
