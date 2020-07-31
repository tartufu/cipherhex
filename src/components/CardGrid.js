import React, { useState,useEffect } from 'react';

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

        //P1 Results
        fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=latest')
            .then(response => response.json())
            .then( (data) => {
                let arr = data.hits
                for (let i = 0; i < data.hits.length; i++) {
                    cardArray.push(data.hits[i]);
                }
                let shuffledArray = shuffleArray(cardArray);
                console.log(cardArray);
                addCards(shuffledArray);
            });

        //P2 Results
        fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=2&per_page=200&order=latest')
        .then(response => response.json())
        .then( (data) => {
            let arr = data.hits
            for (let i = 0; i < data.hits.length; i++) {
                cardArray.push(data.hits[i]);
            }
            let shuffledArray = shuffleArray(cardArray);
            console.log(cardArray);
            addCards(shuffledArray);
        });

        //All Time popular results
        fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=popular')
        .then(response => response.json())
        .then( (data) => {
            let arr = data.hits
            for (let i = 0; i < data.hits.length; i++) {
                cardArray.push(data.hits[i]);
            }
            let shuffledArray = shuffleArray(cardArray);
            console.log(cardArray);
            addCards(shuffledArray);
        });

        console.log(cardArray);

    }, []);

    if (cardDeck.length !== 0) {
        return(
            <div>
                <p>asdasdsdasd</p>
                <h1> {cardDeck[0].id}</h1>
                <img src={cardDeck[0].webformatURL}></img>
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


// fetch('https://pixabay.com/api/?key=2469399-5399347fa64ad7f4980f9b701&image_type=illustration&orientation=horizontal&q=fantasy&page=1&per_page=200&order=latest')
// .then(response => response.json())
// .then( (data) => {
//     // let arr = data.hits
//     // let shuffledArray = shuffleArray(arr);
//     for (let i = 0; i < data.hits.length; i++) {
//         cardArray.push(data.hits[i]);
//     }
//     //     console.log(cardArray);
//     // addCards(cardArray);
// })