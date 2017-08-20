import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subTitle}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  // title: 'Default Title'
};
