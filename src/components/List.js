import React from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'rsuite'
import { store } from '../redux/store'

const { dispatch } = store
const { Column, HeaderCell, Cell } = Table

const List = ({ lists }) => {
  const clearAllActivities = () => {
    dispatch.bored.removeActivity()
  }

  const clearActivity = ({ key }) => {
    const handleAction = () => {
      dispatch.bored.removeActivity(key)
    }
    return (
      <Button onClick={handleAction}>Remove</Button>
    )
  }
  return (
    <>
      <Table height={400} data={lists}>
        <Column flexGrow align="center">
          <HeaderCell>Activity</HeaderCell>
          <Cell dataKey="activity"/>
        </Column>
        <Column flexGrow align="center">
          <HeaderCell>Participants</HeaderCell>
          <Cell dataKey="participants"/>
        </Column>
        <Column width={120} fixed="right">
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {clearActivity}
          </Cell>
        </Column>
      </Table>
      <Button onClick={clearAllActivities}>Clear All</Button>
    </>
  )
}

const mapState = state => {
  return {
    lists: state.bored.lists,
  }
}

export default connect(mapState)(List)
