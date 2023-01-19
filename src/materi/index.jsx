import React from 'react';
import MyClassComponent from './komponen/MyClassComponent';
import MyFunctionalComponent from './komponen/MyFunctionalComponent';

class Komponen extends React.Component {
  render() {
    return (
      <>
        <MyClassComponent nama='Joko' />
        <MyFunctionalComponent nama='Rian' />
      </>
    );
  }
}

export default Komponen;
