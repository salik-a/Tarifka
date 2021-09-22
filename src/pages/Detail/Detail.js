import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import useFetch from './../../hooks/useFetch/useFetch'
import LottieView from 'lottie-react-native';
import styles from './DetailStyle';
import { NavigationContainer } from '@react-navigation/native';
const Detail = ({ route }) => {


    const { loading, data, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.item}`)
    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop />;
    };

    if (error) {
        return <LottieView source={require('./../../assets/animation/error.json')} autoPlay loop />;
    };


    return (

        <ScrollView>
            <View View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: data.meals[0].strMealThumb }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{data.meals[0].strArea}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{data.meals[0].strInstructions}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                    //onPress={() => navigation.navigate("WatchPage", data.meals[0].strYoutube)}
                    >
                        <Text style={styles.buttonText}>Watch on Youtube</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
};

export default Detail;