import React from 'react'
import { FlexboxGrid } from 'rsuite'
import Details from './Details'
import Suggested from './Suggested'

const Activity = () => {
  return (
    <FlexboxGrid>
      <Suggested/>
      <Details/>
    </FlexboxGrid>
  )
}

export default Activity
