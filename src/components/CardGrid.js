import React, { useState,useEffect } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

function CardGrid() {

    const [cardDeck, addCards] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    useEffect(() => {

        
        let cardArray = [];
        let twentyCards = [];
        let rowOne = [];
        let rowTwo = [];
        let rowThree = [];
        let rowFour = [];

        async function cardDeckCreation() {

            //P1 Results
            let response = await fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=latest');
            let data = await response.json();
            data = data.hits;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                cardArray.push(data[i])
            }

            //P2 Results
            let response2 = await fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=2&per_page=200&order=latest');
            let data2 = await response2.json();
            data2 = data2.hits;
            console.log(data2);
            for (let i = 0; i < data2.length; i++) {
                cardArray.push(data2[i])
            }

            //Popular Results
            let response3 = await fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=popular');
            let data3 = await response3.json();
            data3 = data3.hits;
            console.log(data3);
            for (let i = 0; i < data3.length; i++) {
                cardArray.push(data3[i])
            }

            cardArray = shuffleArray(cardArray);

            for (let i = 0; i < 20; i++) {
                twentyCards.push(cardArray[i]);
            }

            //Splitting cards into 4 rows 5 columns
            for (let i = 0; i < 5; i++) {
                rowOne.push(twentyCards[i]);
            }

            for (let i = 5; i < 10; i++) {
                rowTwo.push(twentyCards[i]);
            }

            for (let i = 10; i < 15; i++) {
                rowThree.push(twentyCards[i]);
            }

            for (let i = 15; i < 20; i++) {
                rowFour.push(twentyCards[i]);
            }

            // return response;

            addCards([rowOne, rowTwo, rowThree, rowFour]);
        }
        cardDeckCreation();
    }, []);

    if (cardDeck.length !== 0) {
        return(
            <div className="container">

                <div className="columns">
                    { cardDeck[0].map( (card) => (
                            <div className="column">
                                <p>hahahahah {card.id}</p>
                            </div>
                        ))}
                </div>

                <div className="columns">
                    { cardDeck[1].map( (card) => (
                            <div className="column">
                                <p>hahahahah {card.id}</p>
                            </div>
                        ))}
                </div>

                <div className="columns">
                    { cardDeck[2].map( (card) => (
                            <div className="column">
                                <p>hahahahah {card.id}</p>
                            </div>
                        ))}
                </div>

                <div className="columns">
                    { cardDeck[3].map( (card) => (
                            <div className="column">
                                <p>hahahahah {card.id}</p>
                            </div>
                        ))}
                </div>


            </div>
        )
    } else {
        return(
            <h1> LOADING...</h1>
        )
    }
}

export default CardGrid;

// https://daveceddia.com/usestate-hook-examples/
// https://stackoverflow.com/questions/53715465/can-i-set-state-inside-a-useeffect-hook
// https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp