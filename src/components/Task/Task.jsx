import React, {Component} from 'react';
import Todo from "../Todo/Todo";
import './Task.css'
import {nanoid} from "nanoid";

class Task extends Component {
    state = {
        task:[
            {id: 1, text: 'купить молоко'},
            {id: 2, text: 'уборка'},
            {id: 3, text: 'сделать дз'},
        ],
        newTask: ''
    };
    removeTask = (id) =>{
        const task = [...this.state.task];
        task.splice(id, 1);
        this.setState({ task })
    };
    addTask = () =>{
        let task = this.state.newTask;
        let newTask = {
            id: nanoid(),
            text: task,
        };
        let newTodos = [...this.state.task];
        newTodos.push(newTask);
        this.setState({task: newTodos})
    };
    changeTask=(event)=>{
        this.setState({newTask: event.target.value})
    }
    render() {
        return (
            <div className='task'>
                <input
                       type="text"
                       onChange={this.changeTask}
                       value={this.state.newTask}
                />
                <button className='btn' onClick={this.addTask}>ADD</button>
                {this.state.task.map((task,id) =>
                    <Todo
                        key={id}
                        text={task.text}
                        remove={() => this.removeTask(id)}/>
                        )}
            </div>
        );
    }
}

export default Task;