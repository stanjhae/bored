import boredApi from '../../api/boredApi'

const boredState = {
  details: {
    type: 'education',
    participants: 1,
    price: 0
  },
  activity: {},
  lists: []
}

export const bored = {
  state: { ...boredState },
  reducers: {
    getActivitySuccess: (state, payload) => {
      const activity = payload
      activity.price = payload.price ? 'Expensive' : 'Cheap'
      return {
        ...state,
        activity
      }
    },
    saveActivitySuccess: (state, payload) => {
      return {
        ...state,
        lists: payload
      }
    }
  },
  effects: dispatch => ({
    getActivity: async (payload) => {
      const result = await boredApi.getActivity(payload)
      dispatch.bored.getActivitySuccess(result)
    },
    saveActivity: (payload, state) => {
      const lists = [...state.bored.lists, state.bored.activity]
      localStorage.setItem('activities', JSON.stringify(lists))
      dispatch.bored.saveActivitySuccess(lists)
    },
    removeActivity: (payload, state) => {
      const lists = payload ? state.bored.lists.filter(list => list.key !== payload) : []
      localStorage.setItem('activities', JSON.stringify(lists))
      dispatch.bored.saveActivitySuccess(lists)
    },
  }),
}
