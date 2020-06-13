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
    View
} from 'react-native';
import styles from '../assets/styles/register.style'
import { connect } from 'react-redux'


class Register extends React.Component {
    state = {
        data: {},
    }

    handleChange = (text) => {
        this.setState({ data: text });
    }

    handleSubmit() {
        alert('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            <SafeAreaView style={styles.containerGlobal}>
                <View style={styles.containerForm}>
                    <Text style={styles.labelForm}>Nombre</Text>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={this.handleChange}
                        value={this.data}
                    />
                    <Text style={styles.labelForm}>Edad</Text>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={this.handleChange}
                        value={this.data}
                    />
                    <TouchableOpacity onPress={() => Alert.alert(this.state.data)}>
                        <Text style={styles.buttonForm}>
                            button name</Text>
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