import React from 'react';
import '../css/form.css';

const MyForm = (props) => {
  const handleChanges = props.handleChanges;
  const userInfo = props.userInfo;
  const handleSubmit = props.handleSubmit;
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='nama' placeholder='nama' value={userInfo.nama} onChange={handleChanges} />
        <input type='text' name='role' placeholder='role' value={userInfo.role} onChange={handleChanges} />
        <div className='genders'>
          <div className='gender-wrapper'>
            <label htmlFor='pria'>Pria</label>
            <input type='radio' id='pria' name='gender' value='pria' onChange={handleChanges} />
          </div>
          <div className='gender-wrapper'>
            <label htmlFor='wanita'>Wanita</label>
            <input type='radio' id='wanita' name='gender' value='wanita' onChange={handleChanges} />
          </div>
        </div>
        {/* <div className='form-control'>
          <select id='skills ' onChange={handleChanges}>
            <option value=''>Expert in</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='javascript'>Javascript</option>
            <option value='bootstrap'>Bootstrap</option>
          </select>
        </div> */}
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default MyForm;
