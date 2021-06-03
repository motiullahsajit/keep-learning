import React from 'react'
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import courseData from '../../Fakedata/courseData.json'
import HomeDataShow from '../HomeDataShow/HomeDataShow';

export default function HomeDataLoad() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(courseData)
    }, [])
    return (
        <View style={styles.container}>
            {
                courses.map(course => <HomeDataShow course={course} ></HomeDataShow>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
})
