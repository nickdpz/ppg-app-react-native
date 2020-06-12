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


class Register extends React.Component {
    constructor(props) {
        [this.data, this.setData] = React.useState('Useless Placeholder');
    }

    handleChange = (text)=> {
        this.setData({ value: text});
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
                    value={this.state.value}
                />
            </>
        );
    }
}
export default Register;