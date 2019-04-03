import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

class TextBox extends Component {
  static propTypes = {
    classes: PropTypes.object,
    icon: PropTypes.node,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object,
  };

  render () {
    const { classes, placeholder, inputProps, icon } = this.props;
    return (
      <Container>
        <IconContainer>{icon}</IconContainer>
        <InputBase
          classes={{ root: classes.root, input: classes.input }}
          placeholder={placeholder}
          inputProps={inputProps}
          {...this.props}
        />
      </Container>
    );
  }
}

const styles = ({
  input: {
    paddingTop: 4,
    color: '#555',
  },
  root: {
    width: '100%',
  },
});

const Container = styled.div`
  border-radius: 32px;
  min-width: 100px;
  width: 100%;
  display: flex;
  padding: 12px 16px;
  background: rgb(243, 243, 247);
  text-align: left;
  padding-bottom: 8px;
  margin-bottom: 1em;
`;

const IconContainer = styled.div`
  color: rgb(107, 122, 155);
  padding-right: 4px;
`;

export default withStyles(styles)(TextBox);
