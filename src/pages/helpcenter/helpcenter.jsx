import React, { Component } from 'react';
import PublicHeader from '@/components/header/header'; 
import { is, fromJS } from 'immutable';
import './helpcenter.less';

export default class HelpCenter extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render(){
    return (
      <main>
        <PublicHeader title="Help" record />
        <article className="context-con">
          <h2>Intro</h2>
          <p>This project use React + Redux</p>
          <h2>Package/Tech used:</h2>
          <p>react：v16.2</p>
          <p>redux：v3.7</p>
          <p>webpack：v3.8</p>
          <p>react-router：v4.2</p>
          <p>ES 6</p>
          <p>axios：v0.17</p>
          <p>less：v2.7</p>
          <p>immutable：v3.8</p>
          
        </article>
      </main>
    )
  }
}