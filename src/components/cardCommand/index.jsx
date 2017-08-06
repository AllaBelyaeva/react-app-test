import React from 'react';

function CardCommand(props) {
    const cardContent = (
        <div>
            {props.tasks.map((task) =>
                <div className="command-line" key={task.id}>
                    <div className="date-time">
                        {task.created_at}
                    </div>
                    <div className="command-content-wrap" onClick={ () => props.selectTask(task.id)  }>
                        <div className="command-loader" title="Complete tasks" onClick={ () => props.completeTask(task.id) }></div>
                        <div className="command-content" title="Read tasks"  onClick={ () => props.readTask(task.id) }>{task.title}</div>
                    </div>
                </div>
            )}
        </div>
    );
    return (
        <div className="commands">
            {cardContent}
        </div>
    );
}
export default CardCommand;