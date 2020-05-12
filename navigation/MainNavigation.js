import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import {THEME} from "../util/THEME";
//screens
import HomeScreen, { ScreenOptions as HomeScreenOptions } from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import StateScreen, { ScreenOptions as StateScreenOptions } from "../screens/IndiaScreen";
import WorldScreen, { ScreenOptions as WorldScreenOptions } from "../screens/WorldScreen";
import StatsScreen, { ScreenOptions as StatsScreenOptions } from "../screens/StatsScreen";
import EssentialsScreen, { ScreenOptions as EssentialsScreenOptions } from "../screens/EssentialsScreen";
import AboutScreen, { ScreenOptions as AboutScreenOptions} from '../screens/AboutScreen';
const Stack = createStackNavigator();

const headerStyle = {
    headerStyle: {
        elevation: 0,
        backgroundColor: THEME.DARK
    },
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    ...TransitionPresets.SlideFromRightIOS,
                    headerStyle:{
                        backgroundColor: THEME.DARK,
                    },
                    headerTintColor:THEME.WHITE
                }
            }>
                <Stack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions} />
                <Stack.Screen name="TestScreen" component={TestScreen} options={{headerShown:false}} />
                <Stack.Screen name="StateScreen" component={StateScreen} options={StateScreenOptions} />
                <Stack.Screen name="WorldScreen" component={WorldScreen} options={WorldScreenOptions} />
                <Stack.Screen name="StatsScreen" component={StatsScreen} options={StatsScreenOptions} />
                <Stack.Screen name="EssentialsScreen" component={EssentialsScreen} options={EssentialsScreenOptions} />
                <Stack.Screen name="AboutScreen" component={AboutScreen} options={AboutScreenOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;