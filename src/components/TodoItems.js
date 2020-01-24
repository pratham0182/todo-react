import React, { Component } from 'react'

export class TodoItems extends Component {

    getStyle = ()=>{
        return {
            textDecoration:this.props.todo.isComplete===true?'line-through':'none'
        }
    }

    render() {
        const {id} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                {this.props.todo.title}
            </div>
        )
    }
}

export default TodoItems
