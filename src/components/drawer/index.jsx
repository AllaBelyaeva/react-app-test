import React from 'react';
import IconButton from '../../components/button';


import Drawer from './../../../node_modules/material-ui/Drawer';
import TextField from './../../../node_modules/material-ui/TextField';
import closeImg from './../../images/close-icon.png';
import editImg from './../../images/edit-icon.png';
import deleteImg from './../../images/delete-icon.png';
import ContentDone from './../../../node_modules/material-ui/svg-icons/action/done';

const textFieldStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    borderColor: "#fff",
    width: 340
};
const textFieldStyleFocused = {
    color: "#6b6b99",
    borderColor: "#6b6b99",
};

const defaultValue = function (arr,props,value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === props){
            return arr[i][value]
        }
    }
};


function DrawerRight(props) {
    return (
        <Drawer
            width={500}
            open={props.open}
            actionType={props.action_type}
            openSecondary={true}
            docked={false}
            onRequestChange={props.onRequestChange}
            className="drawer-right">

                <span className="close-drawer control-but" onClick={props.onClose}>
                    <img src={closeImg} alt=""/>
                    ECS
                </span>
            <div className="content-drawer">
                {(props.actionType === 'ADD_PROJECT') ?
                    (<div>
                        <div className="title-drawer">Create new project</div>
                        <div className="create-project-content">
                            <TextField
                                floatingLabelText="Project name"
                                multiLine={true}
                                rows={1}
                                className="drawer-field"
                                style={textFieldStyle}
                                textareaStyle={textFieldStyle}
                                floatingLabelStyle={textFieldStyle}
                                floatingLabelFocusStyle={textFieldStyleFocused}
                                underlineFocusStyle={textFieldStyleFocused}
                                id="addNameProjectField"
                                onChange={(event, value) => props.onValidateButton(event, value)}
                            />
                            <IconButton
                                children={<ContentDone />}
                                onClick={props.callAction}
                                disabled={props.disabledButton === ""}
                            />
                        </div>
                    </div> ) :
                    (props.actionType === 'EDIT_PROJECT') ?
                        (<div>
                            <div className="title-drawer">Edit project</div>
                            <div className="edit-project-content">
                                <TextField
                                    floatingLabelText="Project name"
                                    defaultValue={defaultValue(props.projects,props.active_project, "title")}
                                    multiLine={true}
                                    rows={1}
                                    className="drawer-field"
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                    id="editNameProjectField"
                                    onChange={(event, value) => props.onValidateButton(event, value)}
                                />
                                <IconButton
                                    children={<ContentDone />}
                                    onClick={props.callAction}
                                    disabled={props.disabledButton === ""}
                                />
                            </div>
                        </div>) :
                        (props.actionType === 'READ_TASK') ?
                            (<div>
                                <div className="title-drawer">Read task</div>
                                <span className="edit-drawer control-but" onClick={props.editTask}>
                                    <img src={editImg} alt=""/>
                                </span>
                                    <span className="delete-drawer control-but" onClick={props.openDeleteModal}>
                                    <img src={deleteImg} alt=""/>
                                </span>
                                <div className="read-task-content">
                                    <p>
                                        {props.tasks.map(
                                            (task, id) => task.id === props.active_task ? task.description
                                                : ""
                                        )}
                                    </p>
                                </div>
                            </div> ) :
                            (props.actionType === 'ADD_TASK') ?
                                (<div>
                                    <div className="title-drawer">Create new task</div>
                                    <div className="create-task-content">
                                        <TextField
                                            floatingLabelText="Task name"
                                            multiLine={true}
                                            rows={1}
                                            className="drawer-field"
                                            style={textFieldStyle}
                                            textareaStyle={textFieldStyle}
                                            floatingLabelStyle={textFieldStyle}
                                            floatingLabelFocusStyle={textFieldStyleFocused}
                                            underlineFocusStyle={textFieldStyleFocused}
                                            id="addNameTaskField"
                                            onChange={(event, value) => props.onValidateButton(event, value)}
                                        />
                                        <TextField
                                            floatingLabelText="Description"
                                            multiLine={true}
                                            rows={1}
                                            className="drawer-field"
                                            style={textFieldStyle}
                                            textareaStyle={textFieldStyle}
                                            floatingLabelStyle={textFieldStyle}
                                            floatingLabelFocusStyle={textFieldStyleFocused}
                                            underlineFocusStyle={textFieldStyleFocused}
                                            id="addDescriptionTaskField"
                                        />
                                        <IconButton
                                            children={<ContentDone />}
                                            onClick={props.callAction}
                                            disabled={props.disabledButton === ""}
                                        />
                                    </div>
                                </div> ) :
                            (props.actionType === 'EDIT_TASK') ?
                                    (<div>
                                        <div className="title-drawer">Edit task</div>
                                        <span className="delete-drawer control-but" onClick={props.openDeleteModal}>
                                            <img src={deleteImg} alt=""/>
                                        </span>
                                        <div className="edit-task-content">
                            <span className="edit-drawer control-but">
                                <img src={editImg} alt=""/>
                            </span>
                            <span className="delete-drawer control-but" onClick={props.openDeleteModal}>
                                <img src={deleteImg} alt=""/>
                            </span>
                            <TextField
                                floatingLabelText="Task name"
                                defaultValue={defaultValue(props.tasks,props.active_task, "title")}
                                multiLine={true}
                                rows={1}
                                className="drawer-field"
                                style={textFieldStyle}
                                textareaStyle={textFieldStyle}
                                floatingLabelStyle={textFieldStyle}
                                floatingLabelFocusStyle={textFieldStyleFocused}
                                underlineFocusStyle={textFieldStyleFocused}
                                id="editNameTaskField"
                                onChange={(event, value) => props.onValidateButton(event, value)}
                            />
                            <TextField
                                floatingLabelText="Description"
                                defaultValue={defaultValue(props.tasks,props.active_task, "description")}
                                multiLine={true}
                                rows={1}
                                className="drawer-field"
                                style={textFieldStyle}
                                textareaStyle={textFieldStyle}
                                floatingLabelStyle={textFieldStyle}
                                floatingLabelFocusStyle={textFieldStyleFocused}
                                underlineFocusStyle={textFieldStyleFocused}
                                id="editDescriptionTaskField"
                            />
                        </div>
                        <IconButton
                            children={<ContentDone />}
                            onClick={props.callActionEdit}
                            disabled={props.disabledButton === ""}
                        />
                    </div>) :
                    null
                }
            </div>
        </Drawer>
    );
}

export default DrawerRight;