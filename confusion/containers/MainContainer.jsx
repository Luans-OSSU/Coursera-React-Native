import React, { Component } from 'react'
import { DISHES } from '../assets/objects/dishes';
import { Menu } from '../components';
import { View, Text } from "react-native";

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    render() {
        return (
            <View>
                <Text>Nain</Text>
                <Menu dishes={this.state.dishes}  />
            </View>
        )
    }
}

export default MainContainer;
