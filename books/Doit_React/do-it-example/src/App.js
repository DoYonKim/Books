import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent'
import StateExample from './03/StateExample'
import ForceUpdate from "./03/ForceUpdate";
import Quiz112 from "./03/Quiz112";
import LifeCycle from "./03/LifeCycle";
import Chap0308ListExample from "./03/Chap0308ListExample"
import Counter from "./03/Counter2"
import Chap0309ScrollSpy from "./03/Chap0309ScrollSpy"
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        count: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount(){
    this.setState(({count}) => ({ count: count + 1}));
  }

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
        <Chap0308ListExample/>
        <Counter count = {this.state.count} onAdd = {this.increaseCount}/>
        <Chap0309ScrollSpy/>
      </div>
    );
  }
}

export default App;