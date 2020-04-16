const Gameboard = (()=>{
    boardstatus = ["X","O","","","","","X","",""];
    const render = ()=>{
        for (i = 0; i<boardstatus.length;i++){
            // var string = "[data-spot="+i+"]";
            // var spot = document.querySelector(string);
            var grid = document.querySelectorAll(".tile");
            grid[i].innerHTML = boardstatus[i];
        }
    }
    return {render}
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
        } 
      }
})()

Gameboard.render();
const Player = (name, mark)=>{
    const place = (position)=>{
        boardstatus[position] = mark;
        Gameboard.render();
    }
    return {name, mark, place}
}

const player1 = Player("l","X");
const player2 = Player("r","O");
player1.place(4);
