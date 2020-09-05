import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [title, setTitle] = useState("Hello World")
  return (
    <HeaderContainer title={title} />
  )
}

const HeaderContainer = (props) => {
  const { title } = props;
  return (
    <HeaderBackground>
      <HeaderTitle title={title} />
    </HeaderBackground>
  )
}


const HeaderBackground = (props) => {
  return (
    <div className="header-image">{props.children}</div>
  )
}

const HeaderTitle = (props) => {
  const { title } = props;

  return (
    <p>{title}</p>
  )
}


export default App;
