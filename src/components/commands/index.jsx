import React from 'react';
import CardCommand from '../../components/cardCommand';

function CommandsList(props) {
    return (
        <CardCommand
            tasks={props.tasks}
            readTask={ (e) => props.readTask(e) }
            selectTask={ (e) => props.selectTask(e) }
            completeTask={ (e) => props.completeTask(e) }  />
    );
}

export default CommandsList;