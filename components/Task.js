import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
    return (
        <View>
            {/* <Text>Ini Task nya</Text> */}
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({

})


export default Task;