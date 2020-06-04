import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"
import CreateScreen from "./src/screens/CreateScreen"
import EditScreen from "./src/screens/EditScreen"
import {Provider} from "./src/context/BlogContext"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen 
          name="index" 
          component={IndexScreen} 
          options={{ 
            title:'Index'
           }}
        />

        <Stack.Screen 
          name="show" 
          component={ShowScreen} 
          options={{ 
            title:'Show Screen' 
          }}
        />

          <Stack.Screen 
          name="edit" 
          component={EditScreen} 
          options={{ 
            title:'Edit Screen' 
          }}
        />  

         <Stack.Screen 
          name="create" 
          component={CreateScreen} 
          options={{ 
            title:'Create Screen' 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return  <Provider><App /></Provider>;
}