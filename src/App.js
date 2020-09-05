/* eslint-disable no-unused-vars */
import React, { useState, createContext } from 'react';
import './App.css';

// Our Header Context
const Context = createContext();

const ContextProvider = (props) => {
  const [title, setTitle] = useState("Hello World")

  const handleTitleChange = () => setTitle('Yeyyy! Title Changed!🥳');

  return (
    <Context.Provider value={{
      title,
      setHeaderTitle: handleTitleChange
    }}>
      {props.children}
    </Context.Provider >
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
      <HeaderButton />
    </HeaderBackground>
  )
}

const HeaderBackground = (props) => {
  return (
    <div className="header">{props.children}</div>
  )
}

const HeaderTitle = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <p>{context.title}</p>
      )}
    </Context.Consumer>
  )
}

const HeaderButton = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <button onClick={context.setHeaderTitle}>Click me to change Title</button>
      )}
    </Context.Consumer>
  )
}

export default App;
