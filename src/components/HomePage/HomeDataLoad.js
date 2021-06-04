import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {middleware} from '../../Redux/Actions/Actions';
import HomeDataShow from './HomeDataShow';

const HomeDataLoad = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(middleware());
  }, [dispatch]);

  const courses = useSelector(state => {
    return state.course.courseData;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {courses.map(course => (
          <HomeDataShow
            key={course.id}
            navigation={navigation}
            course={course}></HomeDataShow>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeDataLoad;
