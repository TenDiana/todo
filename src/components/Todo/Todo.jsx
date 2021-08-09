import React from  'react';
import './Todo.css'

class Todo extends React.Component{
    render() {
        return(
            <div className='todo'>
                <p className='todo__item'>
                    {this.props.text}
                </p>
                <button className='btn' onClick={this.props.remove}>REMOVE</button>
            </div>
        )
    }
}


export default Todo;