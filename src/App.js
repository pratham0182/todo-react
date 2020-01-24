import React,{Component} from 'react';
import Todos from './components/Todos';


class App extends Component {

  state = {
    todos:[
      {
        id:1,
        title:"First Task",
        isComplete:false
      },
      {
        id:2,
        title:"Second Task",
        isComplete:true
      },
      {
        id:3,
        title:"Third Task",
        isComplete:false
      }
    ]
  }

  markComplete = (id)=>{

     this.setState({
       todos: this.state.todos.map(
         todo =>{
            if(todo.id === id){
              todo.isComplete=!todo.isComplete;
            }
            return todo;
         }
       )
     });

  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       
       <div>
         <Todos todo={this.state.todos} markComplete={this.markComplete} />
       </div>
    
      </header>
    </div>
  );
}
}

export default App;
