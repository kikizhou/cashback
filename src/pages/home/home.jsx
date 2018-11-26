import React, { Component } from 'react';
//import PropTypes from 'prop?-types';
import PublicHeader from '@/components/header/header';

import './home.less';


class Home extends Component {
  
  render() {
    
    return (
      <main className="home-container">
        <PublicHeader title='HOME' record />
        <div>
        <img src={require("../../assets/img/welcome.gif")} className="avatar-img" alt="welcome"/>
        </div>
      </main>
    );
  }
}

export default Home;
