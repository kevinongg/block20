// TODO: this file! :)

// step 1: when user clicks the add number button, the number they enetered should be added to the number bank
// grab the button
const addNumber = document.querySelector(`#addNumButton`);
// add event listener for the add number button when it is clicked
addNumber.addEventListener(`click`, (event) =>{
  // prevent the form from refreshing
  event.preventDefault();
  // console.log(event.target.addNumber)
  // grab the input
  const userInput = document.querySelector(`#number`);
  // convert input into a number
  const userInputValue = Number(userInput.value);
  // console.log(userInputValue)

  // grab output
  const numberBankOutput = document.querySelector(`#numberBankOutput`);
  // create an LI
  const newNumberBankLI = document.createElement(`li`);
  // set innerHTML to userInputValue
  newNumberBankLI.innerHTML = `${userInputValue}`;
  // append new LI to output
  numberBankOutput.append(newNumberBankLI);
    // console.log(newNumberBankLI)
  // clear input field 
  userInput.value = ``;

// step 2: when "sort 1" button is clicked, the first number in the number bank should be removed and placed 
//         into either the odd or even category
// grab the sort one button
  const sortOneButton = document.querySelector(`#sortOne`);
  // add event listener to the "sort 1" button for when it is clicked
  sortOneButton.addEventListener(`click`, (event) => {
    // console.log(event.target.sortOneButton)
    // check if target is a button, use if event.target.tagName === button
    if(event.target.tagName === `BUTTON`) {
      // use if to event.target.innerText === `Sort 1`
      if(event.target.innerText === `Sort 1`) {
        // grab LI from number bank output
        const numberBankOutputLI = numberBankOutput.querySelector(`li`);
        // turn the LI into a number
        const numberBankOutputValue = Number(numberBankOutputLI.innerHTML);
        // grab the even number output  
        const evenNumberOutput = document.querySelector(`#evenNumberOutput`) ; 
        // grab the odd number output
        const oddNumberOutput = document.querySelector(`#oddNumberOutput`);
        // remove the LI from the number bank
        numberBankOutput.removeChild(numberBankOutputLI)
        // use if statement to determine if number is even or odd, then sort them
        if(numberBankOutputValue % 2 === 0) {
          // append numberbankoutputvalue to even output
          evenNumberOutput.append(numberBankOutputValue);
          // else append to odd number output
        } else {
          oddNumberOutput.append(numberBankOutputValue);
        }
      }  
    }
  })
    

    // number bank should display all the numbers user has entered
    
    
    
    
    

    
    
    // step 3: when the "sort all" button is clicked, all the numbers in the number bank should be moved into 
    //         either the odd or even category
    
    
    
    
  })
  







