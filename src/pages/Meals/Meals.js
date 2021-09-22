import React from 'react';
import { Text, View, FlatList } from 'react-native';
import useFetch from './../../hooks/useFetch/useFetch'
import MealsCard from '../../components/MealsCard/MealsCard'
import styles from './MealsStyle'
import LottieView from 'lottie-react-native';

const Meals = ({ route, navigation }) => {

    const { loading, data, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.item}`)

    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop />;
    };

    if (error) {
        return <LottieView source={require('./../../assets/animation/error.json')} autoPlay loop />;
    };


    const handleSelect = (item) => {

        navigation.navigate('DetailPage', { item })
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={(item) => <MealsCard meals={item} onPress={() => handleSelect(item.item.idMeal)} />}
            />
        </View>
    )
};

export default Meals;