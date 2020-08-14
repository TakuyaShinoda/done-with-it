import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
]

const MessagesScreen = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={messages => messages.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log(item.title)}
          renderRightActions={ListItemDeleteAction}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
