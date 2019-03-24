import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements'



const DishDetailComponent = ({dish}) => {

    if ( dish != null) {

        return (
            <Card
                featuredTitle={dish.name}
                image={require("../assets/food/uthappizza.png")}
            >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        )
    } else {

        return <View></View>
    }
}

export default DishDetailComponent;
