import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function HomeDataShow(props) {
    const { image, title, author, rating, person, price, enroll } = props.course;
    return (
        <View style={styles.boxContent}>
            <Image style={styles.img} source={image}></Image>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            {/* <View style={styles.enrollRatingContent}>
                <Text style={styles.enroll}>Enroll {enroll}</Text>
                <Text style={styles.rating}>Rating {rating}</Text>
            </View> */}
            <Text style={styles.price}>$ {price}</Text>
            <Text style={styles.addToCart}>Add To Cart</Text>
            <Text style={styles.buyNow}>Buy Now</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContent: {
        width: 350,
        height: 480,
        // backgroundColor: 'silver',
        margin: 16,
        boxSizing: 'border-box',
        border: '1px solid silver',
        alignItems: 'center',
        borderRadius: 5,
    },
    img: {
        width: 330,
        height: 200,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        border: '1px solid silver',
        marginTop: 10,
    },
    title: {
        fontSize: 23,
        marginTop: 8,

    },
    author: {
        marginTop: 8,
    },
    price: {
        marginTop: 8,
        fontSize: 30,
        fontWeight: 500,
    },
    // enrollRatingContent:{
    //     flex: 1,
    // },
    addToCart: {
        border: '1px solid silver',
        width: 280,
        height: 50,
        textAlign: 'center',
        backgroundColor: '#E61B1B',
        color: 'white',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        paddingTop: 6,
        marginTop: 8,
    },
    buyNow: {
        border: '1px solid silver',
        width: 280,
        height: 50,
        textAlign: 'center',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        paddingTop: 6,
        marginTop: 8,
    }
})