// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to


const enterNumber = () => {
    return new Promise((resolve , reject) =>{
        const userNumber = Number(window.prompt("Enter a number (1 - 6):"));
        const randomNumber = Math.ceil(Math.random() * 6 );
        
        if(isNaN(userNumber)){
            reject(new Error("Wrong Input Type"));
        }
        if(userNumber > 6 || userNumber < 1){
            reject(new Error("Number out of range"));
        }
        if(userNumber === randomNumber){
            resolve({
                points: 2,
                randomNumber,
            });
        }else if(userNumber === randomNumber-1 || userNumber === randomNumber + 1) { 
            resolve({
                points: 1,
                randomNumber,
            });

        }else{
            resolve({
                points: 0,
                randomNumber,
            })
        }

    });
};



const continueGame = () => {
    return new Promise((resolve) => {
      if (window.confirm("Do you want to continue?")) { 
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };


// const handleGuess = () => {
//     enterNumber() 
//       .then((result) => {
//         alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
      
//         continueGame().then((result) => {
//           if (result) {
//             handleGuess(); 
//           } else {
//             alert("Game ends"); 
//           }
//         });
//       })
//       .catch((error) => alert(error));

      
//   };


const handleGuess = async () => {
    try{
      const result = await enterNumber();
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
      const isContinuing = await continueGame();

      if(isContinuing){
        handleGuess();
      }
      else alert("Game Ends");
    }
    catch(error){
      alert(error);
 }
    alert("will this work");
}



const start = () => {
   handleGuess();
};

start();
