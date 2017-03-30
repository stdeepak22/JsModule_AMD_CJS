
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

    module.exports = { setPlayerName : setPlayerName, getPlayerName : getPlayerName };
