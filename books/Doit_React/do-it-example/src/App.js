import React, { Component } from 'react';
import TodaysPlan from './03/TodaysPlan';
import PropsComponent from './03/PropsComponent'

class App extends Component {
  render() {
    return (
      <div>
        <div>안녕</div>
        <TodaysPlan/>
        <PropsComponent name= "프로퍼티 테스트"/>
      </div>
    );
  }
}

export default App;