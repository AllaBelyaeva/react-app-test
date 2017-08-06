import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/App.css';
import SideBar from '../sidebar';
import Header from '../header';
import Content from '../content';
import { selectProject } from '../../actions/ProjectActions';
class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="App">
        <SideBar />
        <Header  />
        <Content />
      </div>
    );
  }
}

export default connect(
    state => ({
        projects: state.projects.projectsList,
        active_project: state.projects.active_project
    }),
    dispatch => ({
        onSelectProject: (active_project) => {
            console.log('active_project App dispatch ', active_project);
            dispatch(selectProject(active_project));
        }
    })
)(App);
