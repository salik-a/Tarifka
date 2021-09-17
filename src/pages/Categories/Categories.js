import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './CategoriesStyle';
import useFetch from './../../hooks/useFetch/useFetch'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';

const Categories = () => {

    const { loading, data, error } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")


    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={(item) => <CategoriesCard category={item} />}
            />
        </View>
    )
};

export default Categories;