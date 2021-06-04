import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setEnrolledCourse} from '../../Redux/Actions/Actions';

const HomeDataShow = ({course, navigation}) => {
  const {id, image, title, author, rating, person, price, enroll} = course;
  const dispatch = useDispatch();

  const handleEnrollBtn = () => {
    dispatch(setEnrolledCourse(course));
    navigation.navigate('Enrolled');
  };

  return (
    <SafeAreaView style={styles.boxContent}>
      <View>
        <Image style={styles.img} source={{uri: image}} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.price}>$ {price}</Text>
          </View>
          <View style={styles.enrollRatingContent}>
            <Text style={styles.enroll}>Enrolled: {enroll}</Text>
            <Text style={styles.rating}>
              Rating: {rating} ({person})
            </Text>
          </View>
        </View>

        <Button onPress={handleEnrollBtn} title="Enroll now" color="#841584" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  img: {
    width: 250,
    height: 100,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    marginTop: 8,
  },
  author: {
    // marginTop: 8,
  },
  price: {
    marginTop: 8,
    fontSize: 20,
  },
  enrollRatingContent: {
    marginLeft: 30,
    padding: 5,
  },
});

export default HomeDataShow;
