import React, { Component } from 'react'
import {TodoItems } from './TodoItems';

export class Todos extends Component {
 
    render() {
        return this.props.todo.map((todo)=>(
            <TodoItems  key={todo.id} todo={todo} markComplete={this.props.markComplete} />
        ));
    }
}

export default Todos
