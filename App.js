/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CallDetectorManager from 'react-native-call-detection'

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
	this.callDetector = new CallDetectorManager((event)=> {
	// For iOS event will be either "Connected",
	// "Disconnected","Dialing" and "Incoming"
	
	// For Android event will be either "Offhook",
	// "Disconnected", "Incoming" or "Missed"
	

	if (event === 'Disconnected') {
    console.log('termino llamada')
	// Do something call got disconnected
	} 
	else if (event === 'Connected') {
    console.log('HOLa')

	// Do something call got connected
	// This clause will only be executed for iOS
	} 
	else if (event === 'Incoming') {
    console.log('HOLa2')

	// Do something call got incoming
	}
	else if (event === 'Dialing') {
    console.log('HOLa3')

	// Do something call got dialing
	// This clause will only be executed for iOS
	} 
	else if (event === 'Offhook') {
    console.log('HOLa4')

	//Device call state: Off-hook. 
	// At least one call exists that is dialing,
	// active, or on hold, 
	// and no calls are ringing or waiting.
	// This clause will only be executed for Android
	}
	else if (event === 'Missed') {
    console.log('HOLa5')

    	// Do something call got missed
    	// This clause will only be executed for Android
    }
},
false, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
{
title: 'Phone State Permission',
message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
} // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
)

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
