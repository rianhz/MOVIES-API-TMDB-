import React from 'react';
import { useState } from 'react';

const Contactz = () => {
  const manusia = [];
  const [orang, setOrang] = useState(manusia);
  const [user, setUser] = useState({
    nama: '',
    username: '',
    pesan: '',
  });

  const handleChange = (e) => {
    let data = { ...user };
    data[e.target.name] = e.target.value;
    setUser(data);
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const datas = [...orang];

    datas.push({ nama: user.nama, username: user.username, pesan: user.pesan });

    setOrang(datas);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nama' onChange={handleChange} value={user.nama} />
        <input type='text' name='username' onChange={handleChange} value={user.username} />
        <textarea type='text' name='pesan' onChange={handleChange} value={user.pesan} />
        <button type='submit'>Send</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>nama</th>
            <th>username</th>
            <th>pesan</th>
          </tr>
        </thead>
        <tbody>
          {orang.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.nama}</td>
                <td>{el.username}</td>
                <td>{el.pesan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contactz;
