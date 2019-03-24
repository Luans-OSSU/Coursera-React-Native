import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem } from 'react-native-elements'


const MenuComponent = ({dishes, onPress}) => {

    const renderMenuItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => onPress(item.id)}
                leftAvatar={{source: require("../assets/food/uthappizza.png")}}
            />
        )
    }

    return (
        <FlatList
            data={dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default MenuComponent;