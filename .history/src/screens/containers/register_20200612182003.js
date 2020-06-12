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
    TextInput
} from 'react-native';
import { connect } from 'react-redux'

class Register extends React.Component {
    state = {
        data: {},
    }

    handleChange = (text) => {
        this.setData({ value: text });
    }

    handleSubmit() {
        alert('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            <>
                <Text>Ingresa Tu Nombre</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleChange}
                    value={this.data}
                />
                <Button
                    onPress={() => Alert.alert('Cannot press this one')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </>
        );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)