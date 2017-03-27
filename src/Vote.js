import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPoll, addVote } from './actions/poll';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/Chart';
import Voting from './components/Voting';

class App extends Component {
  // TODO: Add `onClick` handle
  // TODO: Execute `getPoll` on mount

  onClick = answerId => {
    this.props.addVote(answerId);
  }

  componentDidMount() {
    this.props.getPoll();
  }

  render() {
    const { poll } = this.props;

    if (!poll) {
      // TODO: Add a nice loading screen / message
      return (<Container><h1>Loading...</h1></Container>);
    }

    return (
      <Container>
        <Title>
          {poll.title}
        </Title>

        <Chart answers={poll.answer}/>

        <Voting
          answers={poll.answer}
          onClick={this.onClick}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // TODO: Add `poll` from `state`
  poll : state.poll
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // TODO: Add `getPoll` action creator
    getPoll: () => getPoll(),
    addVote: answerId => addVote(answerId)
  // TODO: Add `addVote` action creator
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
