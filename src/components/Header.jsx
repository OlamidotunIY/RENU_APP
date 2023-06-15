import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, desc, header}) => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.arrow} name="arrowleft" size={24} color="black" />
      {header && <View style={styles.textContainer}>
        <Text style={[styles.title, { fontFamily : 'Montserrat_700Bold' }]}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        alignItems: 'center',
    },
    arrow : {
        position: 'absolute',
        left: 30,
    },
    textContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        fontSize: 20,
    },
    desc : {
        fontSize: 14,
    },
})