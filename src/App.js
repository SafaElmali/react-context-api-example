/* eslint-disable no-unused-vars */
import React, { useState, createContext } from 'react';
import './App.css';

// Our Header Context
const Context = createContext();

const ContextProvider = (props) => {
  const [title, setTitle] = useState("Hello World")

  return (
    <Context.Provider value={title}>
      {props.children}
    </Context.Provider>
  )
}

const App = () => {
  return (
    <ContextProvider>
      <HeaderContainer />
    </ContextProvider>
  )
}

const HeaderContainer = () => {
  return (
    <HeaderBackground>
      <HeaderTitle />
    </HeaderBackground>
  )
}

const HeaderBackground = (props) => {
  return (
    <div className="header-image">{props.children}</div>
  )
}

const HeaderTitle = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <p>{context}</p>
      )}
    </Context.Consumer>
  )
}


export default App;
