const rawPlayerData = require('./data.json');
const teamData = require('./team_json.json');

const addTeamID = () => {
  let newPlayersArray = [];

  rawPlayerData.map((rawPlayerItem) => {
    let newPlayerObject = {
      ...rawPlayerItem,
    };
    teamData.map((teamItem) => {
      if (rawPlayerItem.country === teamItem.teamName.toLowerCase()) {
        newPlayerObject.teamID = teamItem.teamID;
        newPlayersArray.push(newPlayerObject);
      }
    });
  });
  console.log('newPlayersArray', JSON.stringify(newPlayersArray));
};
addTeamID();
