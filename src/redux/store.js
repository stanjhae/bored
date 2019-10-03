import createHistory from 'history/createBrowserHistory'
import { init } from '@rematch/core'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { bored } from './models/bored'

export const history = createHistory()

export const store = init({
  models: {
    bored,
  },
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {},
  },
})
