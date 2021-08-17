import React from 'react'
import Header from './Components/Header/Header'
import './assets/app.scss'
import Main from './Components/Main/Main'
const App = () => {
  return (
    <div className={'wrapper'}>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
