const Gameboard = (()=>{
    boardstatus = ["","","","","","","","",""];
    winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const render = ()=>{
        for (i = 0; i<boardstatus.length;i++){
            // var string = "[data-spot="+i+"]";
            // var spot = document.querySelector(string);
            var grid = document.querySelectorAll(".tile");
            grid[i].innerHTML = boardstatus[i];
        }
    }

    const checkWin = ()=>{
        for (i = 0; i<winConditions.length;i++){
            var a = winConditions[i][0];
            var b = winConditions[i][1];
            var c = winConditions[i][2];
            if (boardstatus[a]!="" && boardstatus[a] == boardstatus[b] && boardstatus[b] == boardstatus[c]) return boardstatus[a];
        }
    }

    const checkFinish = ()=>{
        for (i = 0; i<boardstatus.length;i++){
            if(!boardstatus[i]){
                return false
            }
        }
        return true;
    }
    return {render,checkFinish,checkWin}
})()

Gameflow = (()=>{
    document.querySelectorAll('.tile').forEach(tile => tile.addEventListener('click', getPosition));
    var turn = true;
    function toggleTurn(){
        turn = !turn;
    }
    function getPosition(event) { 
        position = event.target.dataset.spot;
        if(event.target.innerHTML == ""){
            turn? player1.place(position): player2.place(position);
            toggleTurn();
            console.log(Gameboard.checkWin());
            if (Gameboard.checkFinish()) alert("It's a tie!");
        } 
      }
    return{toggleTurn}
})()

const Player = (name, mark)=>{
    const place = (position)=>{
        boardstatus[position] = mark;
        Gameboard.render();
    }
    return {name, mark, place}
}

Gameboard.render();
const player1 = Player("l","X");
const player2 = Player("r","O");
//player1.place(4);
