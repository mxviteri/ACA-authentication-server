import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

class Dashboard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Wrapper>
        <Card>
          <CardHeader
            title={`Welcome ${this.props.user.userName}`}
            subheader="Please review your details below:"
          />
          <CardContent>
            <p>Username: {this.props.user.userName}</p>
            <p>Password: {this.props.user.password}</p>
          </CardContent>
        </Card>
      </Wrapper>
    );
  }
}

export default Dashboard;