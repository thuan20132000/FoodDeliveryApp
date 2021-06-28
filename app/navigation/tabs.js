import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons, SCREEN } from '../constants';
import { Home, OrderDelivery, Restaurant } from '../screens';




const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={SCREEN.Home}
                component={Home}
                options={{
                    tabBarIcon:({focused,size,color}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode={"contain"}
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={SCREEN.Search}
                component={Restaurant}
                options={{
                    tabBarIcon:({focused,size,color}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode={"contain"}
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={SCREEN.OrderDelivery}
                component={OrderDelivery}
                options={{
                    tabBarIcon:({focused,size,color}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode={"contain"}
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    )
                }}
            />
           
            
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})
