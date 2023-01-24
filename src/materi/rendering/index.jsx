import React from 'react';
import { listData } from './list/list';

const Rendering = () => {
  const length = listData.length;

  const fetchDatas = () => {};
  return (
    <ol>
      {length > 1 &&
        listData.map((el, i) => {
          return (
            <>
              <li key={i}>{el.nama}</li>
            </>
          );
        })}
    </ol>
  );
};

export default Rendering;
