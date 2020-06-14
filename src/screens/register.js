import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
    FormLabel,
    FormInput,
    FormValidationMessage,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import styles from '../assets/styles/register.style'
import { connect } from 'react-redux'


class Register extends React.Component {
    constructor(props) {
        state = {
            name: null,
            age: null,
            navigation: props.navigation
        }
    }

    handleName = (event) => {
        this.setState({ name: event.nativeEvent.text });
    }

    handleAge = (event) => {
        this.setState({ age: parseInt(event.nativeEvent.text) });
        this.state.navigation.navigate('Main')
    }
    handleSubmit = () => {
        const name = this.state.name;
        const age = this.state.age;
        this.props.dispatch({
            type: 'SET_USER',
            payload: {
                user: {
                    name,
                    age
                },
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.containerGlobal}>
                <Image
                    source={require('../assets/images/ecg.png')}
                    style={styles.iconECG}
                />
                <View style={styles.containerForm}>
                    <TextInput
                        name="name"
                        placeholder="Nombre"
                        style={styles.inputText}
                        onChange={this.handleName}
                        value={this.data}
                        require
                    />
                    <TextInput
                        placeholder="Edad"
                        name="age"
                        underlineColorAndroid='transparent'
                        style={styles.inputText}
                        keyboardType={'numeric'}
                        maxLength={2}
                        onChange={this.handleAge}
                        require
                    />
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <Text style={styles.buttonForm}>
                            Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(null, mapDispatchToProps)(Register)