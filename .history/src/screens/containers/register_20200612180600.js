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
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            <>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleSubmit}
                    value={this.state.value}
                />
            </>
        );
    }
}
export default Register;