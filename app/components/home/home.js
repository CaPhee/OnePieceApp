//import liraries
import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import TabNews from "./tab-news-home";
class HomeScreen extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate("Profile", { character: "Luffy" })}
          title="Room Lucy"
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

const HomeScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  News: { screen: TabNews }
});

//make this component available to the app
export default HomeScreenNavigator;
