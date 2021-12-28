import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';// for react default default exported component
import { Todos } from "./MyComponents/Todos"; // for react const functional exported component
import { Footer } from "./MyComponents/Footer";// for react functional exported component
import PropTypes from 'prop-types'; // for passing the properties
import React, { useState, useEffect } from 'react'; // for changing the state of todo items
import { AddTodo } from './MyComponents/AddTodo';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete!", todo);

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding " + title + desc)
    let sno;
    if(todos.length===0)
    {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
    const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      console.log(myTodo)
      setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="Todos list" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );

  Header.defaultProps = {
    title: "Your title here"
  }
  Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
  }
}
export default App;