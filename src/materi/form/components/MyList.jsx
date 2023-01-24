import React from 'react';

const MyList = (props) => {
  const data = props.users;
  return (
    <>
      <table style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.nama}</td>
                <td>{el.role}</td>
                <td>{el.gender}</td>
                <td>{el.skills}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
};

export default MyList;
