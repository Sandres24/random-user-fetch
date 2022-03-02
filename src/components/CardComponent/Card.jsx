import './Card.css';
import React, { useState, useEffect } from 'react';
import { dataFetch } from '../../helpers/dataFetch';
import { colorGenerator } from '../../helpers/generator';
import Loading from '../LoadingComponent/Loading';
import InfoContent from '../InfoContentComponent/InfoContent';
import Button from '../ButtonComponent/Button';

const Card = () => {

    const [user, setUser] = useState([]);
    let url = 'https://randomuser.me/api/';
    let color = document.body.style.background = colorGenerator();

    useEffect(() => {
        (async (endPoint) => setUser(await dataFetch(endPoint)))(url);
    }, [url]);

    return (
      <div className='Card'>
          {user.length === 0 ? <Loading /> : user && <InfoContent background={color} user={user} />}
          {user.length === 0 ? <></> : <Button background={color} endPoint={url} setUser={setUser} />}
      </div>
    );

}

export default Card;
