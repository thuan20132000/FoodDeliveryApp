import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import { COLORS, icons, LAYOUTS, SIZES, FONTS } from '../constants';

const Restaurant = ({ route, navigation }) => {

    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        let { restaurant, currentLocation } = route.params;
        setRestaurant(restaurant);
        setCurrentLocation(currentLocation);
    })

    function renderHeader() {
        return (
            <View
                style={{
                    ...LAYOUTS.row
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode={'contain'}
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.lightGray,
                        borderRadius: SIZES.radius,
                        marginHorizontal: 22
                    }}
                >
                    <Text>{restaurant?.name}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.list}
                        resizeMode={'contain'}
                        style={{
                            width: 30,
                            height: 30,
                        }}

                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderInfo() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }],{useNativeDriver:false}
                )}
            >
                {
                    restaurant?.menu.map((item, index) => (
                        <View
                            key={`menu-${index}`}
                            style={{ alignItems: 'center' }}
                        >


                            <View style={{ height: SIZES.height * 0.35 }} >
                                <Image
                                    source={item?.photo}
                                    resizeMode={'cover'}
                                    style={{
                                        width: SIZES.width,
                                        height: '100%'
                                    }}
                                />

                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: -20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 25,
                                            borderBottomLeftRadius: 25
                                        }}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>-</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>5</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 25,
                                            borderBottomRightRadius: 25
                                        }}
                                        activeOpacity={0.8}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}> {item?.name} - ${item?.price} </Text>
                                <Text style={{ ...FONTS.body3 }} >{item?.description}</Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10

                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                />
                                <Text style={{ ...FONTS.body3, color: COLORS.darkgray }} >{item?.calories.toFixed(2)} cal</Text>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        )
    }


    function renderDots() {
        const dotPosition = Animated.divide(scrollX, SIZES.width);
        dotPosition.addListener((val) => {
            console.log('scrox devidi: ',val);
            console.log('scrollX: ',scrollX);
            console.log('Width: ',SIZES.width)
        })

        return (
            <View
                style={{ height: 30 }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding,
                    }}
                >
                    {restaurant?.menu.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        });

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: 'clamp'
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, 1, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    opacity: opacity,
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )

                    })}
                </View>

            </View>
        )
    }


    function renderOrder() {
        return (
            <View>
                {
                    renderDots()
                }
            </View>
        )
    }



    return (
        <SafeAreaView
            style={styles.container}
        >
            {renderHeader()}

            {renderInfo()}


            {renderOrder()}
        </SafeAreaView>
    )
}

export default Restaurant

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.lightGray3
    }
})
