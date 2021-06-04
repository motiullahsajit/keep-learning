import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const EnrolledCourse = () => {
  const enrolled = useSelector(state => {
    return state.course.enrolledCourse;
  });
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17, marginBottom: 10}}>
        {' '}
        Courses{'                                             '} Price
      </Text>
      {enrolled?.map(course => (
        <View style={styles.coView} key={course.id}>
          <Text>
            {' '}
            {course.title}                               {course.price}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  coView: {
    borderWidth: 2,
    padding: 10,
    margin: 1,
    borderRadius: 10,
    backgroundColor: '#E6E6FA',
  },
});
export default EnrolledCourse;
