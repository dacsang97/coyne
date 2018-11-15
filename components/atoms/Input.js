import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { SPACING } from '../../constants/unit'

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    borderRadius: SPACING / 2,
    padding: SPACING / 2,
  },
})

const Input = ({ placeholder }) => <TextInput style={styles.input} placeholder={placeholder} />

Input.defaultProps = {
  placeholder: '',
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

export default Input
