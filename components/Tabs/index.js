// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res => {
        // console.log(res.data.topics);
        let myTopic = document.querySelector('.topics');
        let topicArray = res.data.topics;
        topicArray.forEach(item => {
            let mySpan = document.createElement('span');
            mySpan.classList.add('tab');
            mySpan.textContent = item;
            myTopic.append(mySpan);
        })
    })
    .catch(error =>{
        console.log(`this is an error: ${error}`);
    })