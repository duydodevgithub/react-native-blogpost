import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {Context} from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({route,navigation}) => {
    navigation.setOptions({
        title: 'Edit',
    })
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === route.params.id
    )
    return(
        <BlogPostForm 
            initialValues = {{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(blogPost.id, title, content, () => navigation.pop());
            }} 
        />
    )
}

const styles = StyleSheet.create({
})

export default EditScreen;