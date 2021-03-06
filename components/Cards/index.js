// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//selects where the cards will be attached in the DOM
let attachDom = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        // console.log(res.data.articles);
        let myKeys = Object.keys(res.data.articles);
        // myKeys.forEach((item, index) => {
        //     console.log(item, myKeys[item[item]]);
        // })

        for(let i = 0; i < myKeys.length; i++){
            let myVar = res.data.articles[myKeys[i]];
            console.log(myVar);
            myVar.forEach(item => {
                attachDom.append(articleCard(item));
            });
        }
    })
    
    .catch(error => {
        console.log(`This is an Cards index.js error: ${error}`);
    });

function articleCard(obj) {

    //creates HTML Elements
    let cardCont = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgDivCont = document.createElement('div');
    let myImg = document.createElement('img');
    let authorSpan = document.createElement('span');

    //add css classes to created elements
    cardCont.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDivCont.classList.add('img-container');

    //setting content
    headlineDiv.textContent = obj.headline;  
    authorSpan.textContent = obj.authorName;
    
    //img src attribute
    myImg.src = obj.authorPhoto;

    //appending html elements to each other
    cardCont.append(headlineDiv);
    cardCont.append(authorDiv);
    authorDiv.append(imgDivCont);
    authorDiv.append(myImg);
    authorDiv.append(authorSpan);   

    return cardCont;
}
