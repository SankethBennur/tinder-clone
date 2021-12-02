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
               url: 'https://www.google.com'
          }
     ]);
     
     return (
          <div className='tinderCards'>\
               <div className='tinderCards__cardContainer'>
                    {people.map((person) => (
                         <ReactTinderCard className='cardSwipe'
                              key={person.name}
                              preventSwipe={['up','down']}
                              onSwipe={(dir) => {console.log(`${person.name} is being swiped.`)}}
                              onCardLeftScreen={() => console.log(`${person.name} has left.`)}
                         >

                              <div className='cards'>
                                   {person.name}<br />{person.url}<br /><br />
                              </div>

                         </ReactTinderCard>
                    ))}
               </div>
          </div>
     );
}

export default TinderCards
