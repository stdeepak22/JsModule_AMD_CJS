var game = function(){
    function Render(id)
    {
        var root = document.getElementById(id);
        root.className = 'gameBoard';

        var playerName = document.createElement('input');
        playerName.setAttribute('type','text');
        playerName.setAttribute('id',"_"+id+"_playerName");
        playerName.setAttribute('placeholder','Player Name');
        root.appendChild(playerName);

        var setPlayerName = document.createElement('input');
        setPlayerName.setAttribute('type','button');
        setPlayerName.setAttribute('value','Set Player Name');
         setPlayerName.addEventListener("click",function(){
            player.setPlayerName(playerName.value);            
        });
        root.appendChild(setPlayerName);

        var startGame = document.createElement('input');
        startGame.setAttribute('type','button');
        startGame.setAttribute('value','Start Game');
         startGame.addEventListener("click",function(){
            alert(player.getPlayerName());
        });
        root.appendChild(startGame);
    }
    return{ Render : Render };
}();