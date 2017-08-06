import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card';
import ListView from '../../components/listView';
import DrawerRight from '../../components/drawer';

import { addProject, fetchProjects, selectProject } from '../../actions/ProjectActions';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            action_type: "",
            active_project: props.active_project,
            field_value: ""
        };
        this.addProject = this.addProject.bind(this);
        this.props.onFetchProjects();
    }
    selectProject (id) {
        this.props.onSelectProject(id);
    }
    handleToggle(action_type){
        this.setState({
            open: !this.state.open,
            action_type: action_type
        });
    }
    addProject() {
        let titleInput = document.getElementById("addNameProjectField");
        this.props.onAddProject(titleInput.value,this.props.projects.length);
        this.setState({
            open: !this.state.open,
            field_value: ""
        });
        titleInput.value = '';
    }
    validateButton(event, value) {
        this.setState({
            field_value: value
        });
    }
    render() {
        return (
            <div className="sidebar">
                <Card active_project={this.props.active_project} />
                <ListView projects={this.props.projects}
                          active_project={this.props.active_project}
                          onClick={ () => {this.handleToggle('ADD_PROJECT')  }}
                          selectProject={ (e) => this.selectProject(e) }
                />
                <DrawerRight
                    open={this.state.open}
                    callAction={this.addProject}
                    actionType={this.state.action_type}
                    onRequestChange={(open) => this.setState({open})}
                    onClose={ () => this.handleToggle() }
                    onValidateButton={ (event, value) => this.validateButton(event, value) }
                    disabledButton={this.state.field_value}
                />

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
        onFetchProjects: () => {
            dispatch(fetchProjects());
        },
        onAddProject: (title, length) => {
            dispatch(addProject(title, length));
        },
        onSelectProject: (id) => {
            dispatch(selectProject(id));
        }

    })
)(SideBar);