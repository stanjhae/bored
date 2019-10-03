import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { store } from '../../redux/store'
import { FlexboxGrid, Button, SelectPicker, Input, Slider } from 'rsuite'
import {types} from './types'

const { dispatch } = store

const pickerValues = types.map(type => ({ label: type, value: type })) //convert types to label and value pair

const Details = ({ details }) => {
  const getActivity = (values) => {
    dispatch.bored.getActivity(values)
  }

  return (
    <FlexboxGrid.Item colspan={6}>
      <Formik
        initialValues={details}
        onSubmit={getActivity}>
        {({ handleSubmit, handleChange, values }) => (
          <>
            <h3>Activity details: </h3>
            <p>Type:</p>
            <SelectPicker onChange={handleChange('type')} value={values.type} data={pickerValues}
                          style={{ width: 224 }}/>
            <p>Participants:</p>
            <Input onChange={handleChange('participants')} value={values.participants} style={{ width: 300 }}/>
            <p>Budget:</p>
            <Slider onChange={handleChange('price')} min={0} max={1} value={values.price}/>
            <Button onClick={handleSubmit}>Hit me with a new one</Button>
          </>
        )}
      </Formik>
    </FlexboxGrid.Item>
  )
}

const mapState = state => {
  return {
    details: state.bored.details,
  }
}

export default connect(mapState)(Details)
