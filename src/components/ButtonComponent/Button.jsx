import './Button.css';
import React from 'react';
import { dataFetch } from '../../helpers/dataFetch';

const Button = ({background, endPoint, setUser}) => {

    const handleChangeUser = async () => setUser(await dataFetch(endPoint));

    return (
      <div className='Button'>
          <button
          className='shuffle-button'
          style={{background}}
          onClick={handleChangeUser}
          >
              <i className="fa-solid fa-shuffle"></i>
          </button>
      </div>
    );

}

export default Button;
