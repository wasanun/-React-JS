import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework',date: '2018-3-14'},
               {id: 2, task: 'Read book',date: '2018-6-14'}],
       id:3
   }

   addTask = (task,date) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,date } ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
           </div>
       );
   }
}

export default App;