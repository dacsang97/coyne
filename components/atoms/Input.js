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

const Input = ({ placeholder, value, onChange }) => (
  <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChange} returnKeyType="go" />
)

Input.defaultProps = {
  placeholder: '',
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
