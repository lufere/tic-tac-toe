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
    document.querySelectorAll('.tile').forEach(tile => tile.addEventListener('click', getPosition));
    function getPosition(event) { 
        position = (event.target).dataset.spot;
        alert (position);
        return position;
      }
    return {render,getPosition}
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
player1.place(4);
