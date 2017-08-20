import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

import {Players} from './../api/players';

const renderPlayers = (playersList) =>  {
  return playersList.map( (player) => {
    return <Player key={player._id} player={player}/>;
  });
};

export default class PlayerList extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}
