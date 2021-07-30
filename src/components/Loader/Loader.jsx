import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';

import s from './Loader.module.css';
class Loader extends Component {
  render() {
    return (
      <Spinner
        className={s.Loader}
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={200}
      />
    );
  }
}

export default Loader;
