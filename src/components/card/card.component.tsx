import React from 'react';
import { Monster } from '../../App';
import './card-style.css';

type CardProps = {
  monster: Monster;

}

const Card = ({ monster }: CardProps) => {
  return (
    <div className='card-container'>
		<img alt='monster' src={`https://robohash.org/${ monster.id }?set=set2&size=180x180`}/>
      	<h2>{ monster.name }</h2>
		<p>{ monster.email }</p>
    </div>
  )
}

export default Card;