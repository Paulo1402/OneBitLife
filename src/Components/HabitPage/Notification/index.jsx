import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default function Notification({
  notificationToogle,
  setNotificationToogle
}) {
  const toogleSwitch = () => {
    setNotificationToogle(previousState => !previousState)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Notificação</Text>
        <Switch
          trackColor={{ false: '#FF0044', true: '#2DBE56' }}
          thumColor={'#FFFFFF'}
          ios_backgroundColor="#3E3E3E"
          onValueChange={toogleSwitch}
          value={notificationToogle}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10
  },
  titleDisabled: {
    color: '#BBBB',
    fontSize: 20,
    marginRight: 10
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginRight: 10
  }
})
