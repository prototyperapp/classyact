# Classyact
Very, very simple command line tool to create a new React Native class file with the correct imports.

## Installation
```
npm install -g classyact
```

## Usage
Go to the folder where you want to create the new class and then type:
```
classyact MyClassName
```
Where MyClassName is the name of your class (don't include .js or anything like that)

## Example of the class created
The class created for you will look something like this...
```javascript
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Example extends Component {
	render() {

	}
}

const localStyles = StyleSheet.create({

});
```
