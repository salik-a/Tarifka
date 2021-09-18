import React from 'react';
import { Text, View } from 'react-native';
import useFetch from './../../hooks/useFetch/useFetch'

const Detail = ({ route }) => {

    const { loading, data, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.item}`)

    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
};

export default Detail;