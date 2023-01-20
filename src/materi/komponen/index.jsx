import React from 'react';
import MyClassComponent from './pembahasan/MyClassComponent';
import MyFunctionalComponent from './pembahasan/MyFunctionalComponent';

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
