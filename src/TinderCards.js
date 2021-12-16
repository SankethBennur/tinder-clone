import React, { useState, useEffect } from 'react';
import './TinderCards.css';
import ReactTinderCard from 'react-tinder-card';
// const axios = require('./axios');
import axios from './axios';

function TinderCards() {
     const [people, setPeople] = useState([]);  // people variable is always followed by a setter variable.

     useEffect(() => {
          async function fetchData() {
               const req = await axios.get("/tinder/card");
               setPeople(req.data);
          }
          fetchData();
     }, []);  // useEffect is a react-hook that runs only once.

     console.log(people);
     
     return (
          <div className='tinderCards'>
               <div className='tinderCards__cardContainer'> 
                    {people.map((person) => (
                         <ReactTinderCard className='card' // "swipe" - this is each card in the array 'cardContainer'
                              key={person.name}
                              preventSwipe={['up','down']}
                              onSwipe={(dir) => {console.log(`${person.name} is being swiped.`)}}
                              onCardLeftScreen={() => console.log(`${person.name} has left.`)} >

                              <div className='cardContent'  // "card"
                                   style={{backgroundImage: `url(${person.imgUrl})`}}>
                                   <h3>{person.name}</h3>
                              </div>

                         </ReactTinderCard>
                    ))}
               </div>
          </div>
     );
}

export default TinderCards
