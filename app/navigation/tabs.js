import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons, SCREEN } from '../constants';
import { Home, OrderDelivery, Restaurant } from '../screens';
import Svg, { Path } from 'react-native-svg'



const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState?.selected
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    {/* <View style={{ flex: 1, backgroundColor: COLORS.white }}></View> */}
                    <Svg
                        width={70}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M52.52,26.064c-1.612,0-3.149,0.336-4.544,0.939L43.179,15.89c-0.122-0.283-0.337-0.484-0.58-0.637  c-0.212-0.147-0.459-0.252-0.738-0.252h-8.897c-0.743,0-1.347,0.603-1.347,1.347c0,0.742,0.604,1.345,1.347,1.345h6.823  c0.331,0.018,1.022,0.139,1.319,0.825l0.54,1.247l0,0L41.747,20c0.099,0.291,0.139,0.749-0.604,0.749H22.428  c-0.857,0-1.262-0.451-1.434-0.732l-0.11-0.221v-0.003l-0.552-1.092c0,0,0,0,0-0.001l-0.006-0.011l-0.101-0.2l-0.012-0.002  l-0.225-0.405c-0.049-0.128-0.031-0.337,0.65-0.337h2.601c0,0,1.528,0.127,1.57-1.274c0.021-0.722-0.487-1.464-1.166-1.464  c-0.68,0-9.149,0-9.149,0s-1.464-0.17-1.549,1.369c0,0.688,0.571,1.369,1.379,1.369c0.295,0,0.7-0.003,1.091-0.007  c0.512,0.014,1.389,0.121,1.677,0.679l0,0l0.117,0.219c0.287,0.564,0.751,1.473,1.313,2.574c0.04,0.078,0.083,0.166,0.126,0.246  c0.107,0.285,0.188,0.807-0.208,1.483l-2.403,4.082c-1.397-0.606-2.937-0.947-4.559-0.947c-6.329,0-11.463,5.131-11.463,11.462  S5.15,48.999,11.479,48.999c5.565,0,10.201-3.968,11.243-9.227l5.767,0.478c0.235,0.02,0.453-0.04,0.654-0.127  c0.254-0.043,0.507-0.128,0.713-0.311l13.976-12.276c0.192-0.164,0.874-0.679,1.151-0.039l0.446,1.035  c-2.659,2.099-4.372,5.343-4.372,8.995c0,6.329,5.131,11.461,11.462,11.461c6.329,0,11.464-5.132,11.464-11.461  C63.983,31.196,58.849,26.064,52.52,26.064z M11.479,46.756c-4.893,0-8.861-3.968-8.861-8.861s3.969-8.859,8.861-8.859  c1.073,0,2.098,0.201,3.051,0.551l-4.178,7.098c-0.119,0.202-0.167,0.418-0.183,0.633c-0.003,0.022-0.015,0.036-0.016,0.054  c-0.007,0.091,0.02,0.172,0.03,0.258c0.008,0.054,0.004,0.105,0.018,0.158c0.132,0.559,0.592,1,1.193,1.05l8.782,0.727  C19.397,43.655,15.802,46.756,11.479,46.756z M15.169,36.423c-0.003-0.002-0.003-0.002-0.006-0.002  c-1.326-0.109-0.482-1.621-0.436-1.704l2.224-3.78c1.801,1.418,3.037,3.515,3.32,5.908L15.169,36.423z M25.607,37.285l-2.688-0.223  c-0.144-3.521-1.87-6.626-4.493-8.629l1.085-1.842c0.938-1.593,1.756,0.001,1.756,0.001l0,0c1.772,3.48,3.65,7.169,4.745,9.331  C26.012,35.924,26.746,37.379,25.607,37.285z M43.249,24.273L30.78,35.225c0,0.002,0,0.002,0,0.002  c-1.464,1.285-2.177-0.104-2.188-0.127l-5.297-10.517l0,0c-0.471-0.936,0.41-1.062,0.805-1.073h17.926c0,0,1.232-0.012,1.354,0.267  v0.002C43.458,23.961,43.473,24.077,43.249,24.273z M52.52,46.745c-4.891,0-8.86-3.968-8.86-8.858c0-2.625,1.146-4.976,2.962-6.599  l2.232,5.174c0.421,0.977,0.871,1.061,0.978,1.065h0.023h1.674c0.9,0,0.592-0.913,0.473-1.199l-2.862-6.631  c1.043-0.43,2.184-0.672,3.381-0.672c4.891,0,8.861,3.967,8.861,8.861C61.381,42.777,57.41,46.745,52.52,46.745z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    {/* <View style={{ flex: 1, backgroundColor: COLORS.white }}></View> */}
                </View>

                {/* <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity> */}
            </View>
        )
    } else {
        return (
            <TouchableOpacity
            style={{
                flex: 1,
                height: 60,
                backgroundColor: COLORS.white
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name={SCREEN.Home}
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode={"contain"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={SCREEN.Search}
                component={Restaurant}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Image
                            source={icons.search}
                            resizeMode={"contain"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={SCREEN.Like}
                component={OrderDelivery}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Image
                            source={icons.like}
                            resizeMode={"contain"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={SCREEN.User}
                component={OrderDelivery}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Image
                            source={icons.user}
                            resizeMode={"contain"}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})
