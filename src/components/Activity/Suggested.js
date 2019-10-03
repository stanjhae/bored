import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../redux/store'
import { FlexboxGrid, Button } from 'rsuite'

const { dispatch } = store

const Suggested = ({ activity }) => {
  const saveActivity = () => {
    dispatch.bored.saveActivity()
  }

  return (
    <FlexboxGrid.Item colspan={6}>
      <h3>You should: </h3>
      <p>{activity.activity}</p>
      <Button onClick={saveActivity}>Save for later</Button>
    </FlexboxGrid.Item>
  )
}

const mapState = state => {
  return {
    activity: state.bored.activity,
  }
}

export default connect(mapState)(Suggested)
