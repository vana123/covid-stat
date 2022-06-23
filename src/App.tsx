import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import { GeneralInformation } from './pages/GeneralInformation'
import { GeneralInformationForThePeriod } from './pages/GeneralInformationForThePeriod'
import { GeneralInformationForThePeriodCountri } from './pages/GeneralInformationForThePeriodСountry'

import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import './Style.scss'

const ROUTES = {
  DATE: '/date',
  COUNTRY: '/country',
  MAIN: '/*',
}

const App: React.FC = (): JSX.Element => {
  return (
    <div className='App'>
      <div className='container'>
        <BrowserRouter>
          <header>
            <nav className='NavBar'>
              <NavLink to={ROUTES.MAIN}>Main</NavLink>
              <NavLink to={ROUTES.DATE}>Date</NavLink>
              <NavLink to={ROUTES.COUNTRY}>Country</NavLink>
            </nav>
          </header>
          <div className='content'>
            <Routes>
              <Route path='/*' element={<GeneralInformation />} />
              <Route path='/date' element={<GeneralInformationForThePeriod />} />
              <Route path='/country' element={<GeneralInformationForThePeriodCountri />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
