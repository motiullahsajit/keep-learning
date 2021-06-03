import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import courseData from '../../Fakedata/courseData.json'

export default function HomeDataLoad() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(courseData)
    }, [])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
