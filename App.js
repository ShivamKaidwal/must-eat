import React from "react";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{   
    headerTitleStyle: {
      color: 'black',
      fontSize: 20,
    },
    headerTitleAlign: 'center',
  }}
>
 
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Basket" component={BasketScreen}
      options={{
        presentation: "modal",
        headerShown: false,
      }}
      />

      <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}
      options={{
        presentation: "fullScreenModal",
        headerShown: false,
      }}
      />

      <Stack.Screen name="Delivery" component={DeliveryScreen}
      options={{
        presentation: "fullScreenModal",
        headerShown: false,
      }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}


// jcnksfjnfwrjnfnkfwnjfwjnfj