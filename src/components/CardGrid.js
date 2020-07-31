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

            console.log("asdasdas", cardArray);
            console.log("game startoooo", twentyCards);
            // return response;
        }

        cardDeckCreation();

        //P1 Results
        // fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=latest')
        //     .then(response => response.json())
        //     .then( (data) => {
        //         let arr = data.hits
        //         for (let i = 0; i < data.hits.length; i++) {
        //             cardArray.push(data.hits[i]);
        //         }
        //         let shuffledArray = shuffleArray(cardArray);
        //         console.log(cardArray);
        //         addCards(shuffledArray);
        //     });

        // //P2 Results
        // fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=2&per_page=200&order=latest')
        // .then(response => response.json())
        // .then( (data) => {
        //     let arr = data.hits
        //     for (let i = 0; i < data.hits.length; i++) {
        //         cardArray.push(data.hits[i]);
        //     }
        //     let shuffledArray = shuffleArray(cardArray);
        //     console.log(cardArray);
        //     addCards(shuffledArray);
        // });

        // //All Time popular results
        // fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=popular')
        // .then(response => response.json())
        // .then( (data) => {
        //     let arr = data.hits
        //     for (let i = 0; i < data.hits.length; i++) {
        //         cardArray.push(data.hits[i]);
        //     }
        //     let shuffledArray = shuffleArray(cardArray);
        //     console.log(cardArray);
        //     addCards(shuffledArray);
        // });

        // console.log(cardArray);
    }, []);

    if (cardDeck.length !== 0) {
        return(
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[0].webformatURL}></img> 
                    </div>

                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[1].webformatURL}></img> 
                    </div>

                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[2].webformatURL}></img> 
                    </div>

                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[3].webformatURL}></img> 
                    </div>

                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[4].webformatURL}></img> 
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[2].webformatURL}></img> 
                    </div>

                    <div className="column">
                        <button className="button is-large is-primary">asdasd </button>
                        <img src={cardDeck[3].webformatURL}></img> 
                    </div>
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

{/* <p>asdasdsdasd</p>
<h1> {cardDeck[0].id}</h1>
<img src={cardDeck[0].webformatURL}></img> */}


// let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let data = await response.json();
// console.log(data);

// let response1 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
// let data2 = await response1.json();
// console.log(data2);
