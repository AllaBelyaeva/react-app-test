import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommandsList from '../../components/commands';
import IconButton from '../../components/button';
import DrawerRight from '../../components/drawer';
import ModalDialog from '../../components/modal';
import ContentAdd from './../../../node_modules/material-ui/svg-icons/content/add';

import { fetchTasks, addTask, editTask, deleteTask, completeTask, selectTask, readTask } from '../../actions/TaskActions';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openModal: false,
            action_type: "",
            edit_task: false,
            task_count: this.props.task_count,
            field_value: ""
        };
        this.props.onFetchTasks();
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.selectTask = this.selectTask.bind(this);
        this.readTask = this.readTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }
    handleToggle(action_type){
        this.setState({
            open: !this.state.open,
            action_type: action_type
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
    handleEditTask(action_type){
        this.setState({
            action_type: action_type
        });
    }
    addTask() {
        let titleInput = document.getElementById("addNameTaskField");
        let descriptionInput = document.getElementById("addDescriptionTaskField");
        let d = new Date();
        let curr_date = ('0' + (d.getDate())).slice(-2);
        let curr_month = ('0' + (d.getMonth() + 1)).slice(-2);
        let curr_year = d.getFullYear();

        let formatDate = curr_date + "-" + curr_month + "-" + curr_year;
        this.props.onAddTask(this.props.tasks_length.length,titleInput.value, descriptionInput.value,this.props.active_project,formatDate);
        this.setState({
            open: !this.state.open,
            task_count: this.props.task_count + 1,
            field_value: ""
        });
        titleInput.value = '';
        descriptionInput.value = '';

    }
    editTask() {
        let titleInput = document.getElementById("editNameTaskField");
        let descriptionInput = document.getElementById("editDescriptionTaskField");
        this.props.onEditTask(this.props.active_task, titleInput.value, descriptionInput.value);
        this.setState({
            open: !this.state.open,
            field_value: ""
        });
    }
    deleteTask() {
        this.props.onDeleteTask(this.props.active_task);
        this.setState({
            open: !this.state.open,
            openModal: !this.state.openModal
        });
    }
    completeTask(id) {
        this.props.onCompleteTask(id);
    }
    selectTask (id) {
        this.props.onSelectTask(id);
    }
    readTask (id) {
        this.props.onReadTask(id);
        this.setState({
            open: !this.state.open,
            action_type: "READ_TASK"
        });
    }
    validateButton(event, value) {
        this.setState({
            field_value: value
        });
    }
    render() {
        console.log('tasks list',this.props.tasks);
        return (

            <div className="content">
                <CommandsList
                    tasks={this.props.tasks}
                    readTask={ (e) => this.readTask(e) }
                    completeTask={ (e) => this.completeTask(e) }
                    selectTask={ (e) => this.selectTask(e) }
                />
                <IconButton
                    onClick={ () => this.handleToggle('ADD_TASK') }
                    children={<ContentAdd />}
                />
                <DrawerRight
                    open={this.state.open}
                    callAction={this.addTask}
                    callActionEdit={this.editTask}
                    onRequestChange={(open) => this.setState({open})}
                    actionType={this.state.action_type}
                    onClose={ () => this.handleToggle() }
                    openDeleteModal={ () => this.handleOpenModal() }
                    editTask={ () => this.handleEditTask("EDIT_TASK") }
                    tasks={this.props.tasks_length}
                    active_task={this.props.active_task}
                    onValidateButton={ (event, value) => this.validateButton(event, value) }
                    disabledButton={this.state.field_value}
                />
                <ModalDialog
                    openModal={this.state.openModal}
                    onRequestClose={ () => this.handleCloseModal() }
                    handleCloseModal={ () => this.handleCloseModal() }
                    okOption={this.deleteTask}
                />
            </div>
        );
    }

}
export default connect(
    state => ({
        projects: state.projects.projectsList,
        active_project: state.projects.active_project,
        active_task: state.tasks.active_task,
        tasks: state.tasks.tasksList.filter(task => (task.project_id===state.projects.active_project) && task.title.toLowerCase().includes(state.tasks.search_value)),
        tasks_length: state.tasks.tasksList
    }),
    dispatch => ({
        onFetchTasks: () => {
            dispatch(fetchTasks());
        },
        onAddTask: (id,title,description,project_id,date) => {
            dispatch(addTask(id,title,description,project_id,date));
        },
        onEditTask: (id,title,description) => {
            dispatch(editTask(id,title,description));
        },
        onDeleteTask: (id) => {
            dispatch(deleteTask(id));
        },
        onCompleteTask: (id) => {
            dispatch(completeTask(id));
        },
        onSelectTask: (id) => {
            dispatch(selectTask(id));
        },
        onReadTask: (id) => {
            dispatch(readTask(id));
        }
    })
)(Content);