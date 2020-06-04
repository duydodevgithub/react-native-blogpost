import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Context} from '../context/BlogContext';
import {Feather} from "@expo/vector-icons";

const ShowScreen = ({route, navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
    navigation.setOptions({
        title: 'Show Details',
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('edit', {id: blogPost.id})}><Feather name="edit" size={30} /></TouchableOpacity> 
    })
    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ShowScreen;