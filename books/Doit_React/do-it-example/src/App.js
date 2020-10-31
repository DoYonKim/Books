import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent'
import StateExample from './03/StateExample'
import ForceUpdate from "./03/ForceUpdate";
import Quiz112 from "./03/Quiz112";
import LifeCycle from "./03/LifeCycle";
class App extends Component {
  render() {
    return (
      <div>
        <div>안녕</div>
        <TodaysPlan/>
        <PropsComponent name= "프로퍼티 테스트"/>
        <StateExample/>
        <ForceUpdate/>
        <Quiz112/>
        <LifeCycle/>
      </div>
    );
  }
}

export default App;