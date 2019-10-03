import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './redux/store'
import Activity from './components/Activity/Activity'
import List from './components/List'
import 'rsuite/dist/styles/rsuite-default.css'
import Navbarr from './components/Navbar'

const { dispatch } = store

const App = () => {
  useEffect(() => {
    const init = async () => {
      const activities = await localStorage.getItem('activities')
      if (activities) dispatch.bored.saveActivitySuccess(JSON.parse(activities))
      dispatch.bored.getActivity()
    }
    init().then()
  }, [])

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Navbarr/>
        <Switch>
          <Route exact path='/' component={Activity}/>
          <Route exact path='/list' component={List}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
