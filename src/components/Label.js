import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Label = ({title, data}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{title}</Text>
      <View style = {styles.Label.container}>{
        data.map((item,id) =>(
            <Text key = {id} style = {styles.Label}>{item}</Text>
         ))
      }</View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        fontSize: 20,
    },
    LabelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    label: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'f1f1f1',
        borderColor: '#999',
        marginRight: 4,
        marginBottom: 4,
        padding: 5,
    }
})

export default Label