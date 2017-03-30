define([], function(){
    var playerName = "";
    function setPlayerName(name)
    {
        playerName = name;
        console.log('Player name is ' + getPlayerName());
    }

    function getPlayerName()
    {
        return playerName;
    }

    return { setPlayerName : setPlayerName, getPlayerName : getPlayerName };
})