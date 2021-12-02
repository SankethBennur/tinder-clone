import React, { useState } from 'react';
import './TinderCards.css';
import ReactTinderCard from 'react-tinder-card';

function TinderCards() {
     const [people, setPeople] = useState([
          {
               name: 'Elon Musk',
               url: 'https://static01.nyt.com/images/2021/05/07/arts/07snl-musk-preview1-1/merlin_186856077_a3ba4d89-323a-4c13-80cf-4b9f23c011b4-mediumSquareAt3X.jpg'
          },
          {
               name: 'Jeff Bezos',
               url: 'https://image.cnbcfm.com/api/v1/image/105907143-1557513032836gettyimages-1142462855.jpeg?v=1625506871'
          }
     ]);
     
     return (
          <div className='tinderCards'>
               <div className='tinderCards__cardContainer'> 
                    {people.map((person) => (
                         <ReactTinderCard className='card' // "swipe" - this is each card in the array 'cardContainer'
                              key={person.name}
                              preventSwipe={['up','down']}
                              onSwipe={(dir) => {console.log(`${person.name} is being swiped.`)}}
                              onCardLeftScreen={() => console.log(`${person.name} has left.`)}>

                              <div className='cardContent'  // "card"
                                   style={{backgroundImage: `url(${person.url})`}}>
                                   <h3>{person.name}</h3>
                              </div>

                         </ReactTinderCard>
                    ))}
               </div>
          </div>
     );
}

export default TinderCards
