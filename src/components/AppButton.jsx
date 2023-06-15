import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from './colors'

const AppButton = ({fill, title, outline, onPress}) => {
  return (
    <TouchableOpacity style={{
        width: 382,
        height: 48,
        backgroundColor: fill ? colors.primary : "transparent",
        borderColor: outline ? colors.primary : "transparent",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }} onPress={onPress}>
        <Text style={{
            fontSize: 17,
            fontFamily : 'Inter_600SemiBold',
        }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({})