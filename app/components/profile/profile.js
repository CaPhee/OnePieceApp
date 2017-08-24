//import liraries
import React, { Component } from "react";
import { View, Text,Button, StyleSheet } from "react-native";

// create a component
class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.character}`,
    headerRight: <Button color="red" title="Info" onPress={()=>{title="Sanji"}} />
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>
          Profile {params.character}
        </Text>
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

//make this component available to the app
export default Profile;
