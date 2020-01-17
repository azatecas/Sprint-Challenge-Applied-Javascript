// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    let headerDiv = document.createElement('div');
    let dateSpan = document.createElement('span');
    let headerH1 = document.createElement('h1');
    let tempSpan = document.createElement('span');

    //adding classes to elements
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //setting text content
    dateSpan.textContent = 'SMARCH 28, 2019';
    headerH1.textContent = 'Lambda Times';
    tempSpan.textContent = '98 &#xb0';

    //appending elements to top div
    headerDiv.append(dateSpan);
    headerDiv.append(headerH1);
    headerDiv.append(tempSpan);


    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
const myHeader = Header();

headerContainer.append(myHeader);