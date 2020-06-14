import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Main from './screens/main';
import Register from './screens/register';

const Stack = createStackNavigator();

function AppLayout(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.initialRoute}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    initialRoute: state.initialRoute,
  }
}

export default connect(mapStateToProps)(AppLayout)