import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/search';
import NavMenu from '../../components/menu';
import DrawerRight from '../../components/drawer';
import ModalDialog from '../../components/modal';


import { editProject, deleteProject } from '../../actions/ProjectActions';
import { searchTasks } from '../../actions/TaskActions';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            visible: false,
            openModal: false,
            action_type: "",
            field_value: ""
        };
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.searchTasks = this.searchTasks.bind(this);
    }
    editProject() {
        console.log('I try to edit project!!!');
        let titleInput = document.getElementById("editNameProjectField");
        this.props.onEditProject(this.props.active_project, titleInput.value);
        this.setState({
            open: !this.state.open,
            field_value: ""
        });
    }
    deleteProject() {
        this.props.onDeleteProject(this.props.active_project);
        this.setState({
            openModal: !this.state.openModal,
            field_value: ""
        });
    }

    handleToggle(action_type){
        this.setState({
            open: !this.state.open,
            action_type: action_type
        });
    }
    openSearch() {
        this.setState({
            visible:!this.state.visible
        });
    }
    handleOpenModal() {
        this.setState({
            openModal:!this.state.openModal
        });
    };

    handleCloseModal() {
        this.setState({openModal: false});
    };
    searchTasks(event, value) {
        console.log('search in header', value);
        this.props.onSearchTasks(value);
    }
    validateButton(event, value) {
        this.setState({
            field_value: value
        });
    }
    render() {
        const modalClass = this.state.visible ? "open" : "";
        return (
            <div className="header">
                <Search onClick={ () => this.openSearch() }
                        onSearchTasks={ (event, value) => this.searchTasks(event, value) }
                        className={modalClass} />
                <NavMenu
                    onClick={ () => this.handleToggle('EDIT_PROJECT') } openDeleteModal={ () => this.handleOpenModal() }
                    active_project={this.props.active_project}
                />
                <DrawerRight
                    open={this.state.open}
                    actionType={this.state.action_type}
                    onRequestChange={(open) => this.setState({open})}
                    callAction={this.editProject}
                    onClose={ () => this.handleToggle() }
                    onValidateButton={ (event, value) => this.validateButton(event, value) }
                    disabledButton={this.state.field_value}
                    projects={this.props.projects}
                    active_project={this.props.active_project}
                />

                <ModalDialog
                    openModal={this.state.openModal}
                    onRequestClose={ () => this.handleCloseModal() }
                    handleCloseModal={ () => this.handleCloseModal() }
                    okOption={this.deleteProject}
                />
            </div>
        );
    }

}
export default connect(
    state => ({
        projects: state.projects.projectsList,
        active_project: state.projects.active_project,
        tasks_length: state.tasks.tasksList
    }),
    dispatch => ({
        onEditProject: (id,title) => {
            dispatch(editProject(id,title));
        },
        onDeleteProject: (id) => {
            dispatch(deleteProject(id));
        },
        onSearchTasks: (value) => {
            dispatch(searchTasks(value));
        }
    })
)(Header);