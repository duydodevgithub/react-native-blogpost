import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
    navigation.setOptions({
        title: 'MY APP',
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('create')}><Feather name="plus" size={30} /></TouchableOpacity> 
    })
    const {state, getBlogPosts, deleteBlogPost} = useContext(Context);

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
        })

        return () => {
            listener.remove();
        }
    },[])

    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({item}) => {
                    return(
                      <TouchableOpacity onPress={() => navigation.navigate('show', {id: item.id})}>
                            <View style={styles.row }>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                            </View>
                      </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen;