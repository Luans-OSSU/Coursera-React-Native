import React, { Component } from 'react'
import { DISHES } from '../assets/objects/dishes';
import { Menu, DishDetail } from '../components';
import { ScrollView, Text } from "react-native";

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onSelectDish(dishId) {
        this.setState({ selectedDish: dishId})
    }
    render() {
        return (
            <ScrollView>
                <Text>Nain</Text>
                <Menu 
                    dishes={this.state.dishes}
                    onPress={(dishId) => this.onSelectDish(dishId)}
                />
                <DishDetail 
                    dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} 
                />
            </ScrollView>
        )
    }
}

export default MainContainer;
