import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoriesCardStyle'
const CategoriesCard = ({ category }) => {
    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={{ uri: category.strCategoryThumb }}
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.strCategory}</Text>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard