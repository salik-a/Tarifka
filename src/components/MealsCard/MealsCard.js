import React from 'react';
import { Text, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import styles from './MealsCardStyle'

const MealsCard = ({ meals, onPress }) => {




    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={{ borderRadius: 15 }}
                        source={{ uri: meals.item.strMealThumb }}
                    >
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{meals.item.strMeal}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
};

export default MealsCard;