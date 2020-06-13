import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
//import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    containerGlobal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    containerForm: {
        width: windowWidth * 0.86,
        height: windowHeight * 0.7,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#f1f1f1',
    },
    inputText: {
        color: '#000',
        width: 280,
        padding: 2,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'red',
        fontSize: 30,
    },
    labelForm: {
        fontSize: 25,
        color: '#000',
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    buttonForm: {
        backgroundColor: '#fff',
        color: 'red',
        borderRadius: 5,
        borderWidth: 5,
    }
})