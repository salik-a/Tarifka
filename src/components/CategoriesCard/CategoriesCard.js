import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoriesCardStyle'
const CategoriesCard = ({ category, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{ uri: category.item.strCategoryThumb }}
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.item.strCategory}</Text>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard