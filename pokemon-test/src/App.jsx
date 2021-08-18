import React from 'react'
import Header from './Components/Header/Header'
import './assets/app.scss'
import Main from './Components/Main/Main'
const App = () => {
  return (
    <>
      <Header/>
      <div className={'wrapper'}>
      <Main/>
    </div>
    </>
  )
}

export default App
