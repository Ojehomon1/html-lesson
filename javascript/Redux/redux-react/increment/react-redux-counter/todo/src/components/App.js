import React,{Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

class App extends Component{
  render(){
    return(

      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </div>
    )
  }
}

export default App
