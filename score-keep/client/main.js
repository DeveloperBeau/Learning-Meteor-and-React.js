import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) =>  {
  return playersList.map( (player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.update(player._id,{ $inc: { score: -1 }})}>-1</button>
        <button onClick={() => Players.update(player._id,{ $inc: { score: 1 }})}>+1</button>
        <button onClick={() => Players.remove({ _id: player._id })}>X</button>
      </p>);
  });
};
const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  let playerArray = [];
  Tracker.autorun(() => {
    playerArray = Players.find().fetch();

    let title = 'Score Keep';
    let name = 'Beau';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(playerArray)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
