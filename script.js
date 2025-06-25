let user_score =0;
let computer_score = 0;
const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randNo= Math.floor(Math.random() * 3);
    let choice = document.getElementById(options[randNo]);
    choice.classList.remove("animate-highlight");
    void choice.offsetWidth;
    choice.classList.add("animate-highlight");
    return options[randNo];
}
const animation =()=>{
    const result = document.querySelector("#msg");
    result.classList.remove("animate-highlight");
    void result.offsetWidth; // Trigger reflow to restart animation
    result.classList.add("animate-highlight");
}
const draw = () => {
    const result = document.querySelector("#msg");
    result.innerText = "It's a draw!";
    animation();
}
const showWinner= (user,userChoice,compChoice) =>{
    const result = document.querySelector("#msg");
    if(user){
        result.innerText = `You win! ${userChoice} beats ${compChoice}`;
        let score = document.querySelector("#user-score");
        score.innerText = parseInt(score.innerText) + 1; 
    }
    else{
        result.innerText = `AI wins! ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        let score = document.querySelector("#ai-score");
        score.innerText = parseInt(score.innerText) + 1;
    }
    animation();
}
const playGame =(user)=>{
    let comp = genCompChoice();
    if(user === comp){
        draw();
    }else{
        let user_win = false;
        if (user=== "rock"){
            user_win = comp === "scissors"? true : false;
        }
        else if (user === "paper"){
            user_win = comp === "rock"? true : false;
        }
        else {
            user_win = comp === "paper"? true : false;
        }
        showWinner(user_win,user,comp); 
    }
}
const click = new Audio("sounds/click.mp3");
choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        let id = choice.getAttribute("id");
        click.play();
        playGame(id);
    }); 
})