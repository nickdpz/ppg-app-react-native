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
import { CommonActions } from '@react-navigation/native';

class Register extends React.Component {
    state = {
        name: null,
        age: null,
        isValidName: false,
        isValidAge: false,
    }
    handleName = (event) => {
        this.setState({ name: event.nativeEvent.text });
        if ((/^([A-Z\u00d1]{1,1}[a-záéíóú\u00f1]{2,12})[\s]?([A-Z\u00d1]?[a-z\u00d1]{2,12})?$/).test(event.nativeEvent.text)) {
            this.setState({ isValidName: true })
        } else {
            this.setState({ isValidName: false })
        }
    }

    handleAge = (event) => {
        this.setState({ age: parseInt(event.nativeEvent.text) });
        if ((/^([0-9]{1,2})$/).test(event.nativeEvent.text)) {
            this.setState({ isValidAge: true })
        } else {
            this.setState({ isValidAge: false })
        }
    }
    handleSubmit = () => {
        const name = this.state.name;
        const age = this.state.age;
        if (this.state.isValidAge && this.state.isValidName) {
            this.props.setUser(name, age);
            this.props.navigation.dispatch(
                CommonActions.navigate({
                    name: 'Main',
                    params: {
                        origin: 'register',
                    }
                }));
        }
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
                    />
                    <TextInput
                        placeholder="Edad"
                        name="age"
                        underlineColorAndroid='transparent'
                        style={styles.inputText}
                        keyboardType={'numeric'}
                        maxLength={2}
                        onChange={this.handleAge}
                    />
                    {(!this.state.isValidAge || !this.state.isValidName)&& (this.state.age !== null) && (
                        <Text> Datos Invalidos</Text>
                    )}
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
        setUser: (name, age) => {
            dispatch({
                type: 'SET_USER',
                payload: {
                    userName: name,
                    userAge: age,
                    initialRoute: 'Main',
                }
            })
        },
    }
}

export default connect(null, mapDispatchToProps)(Register)