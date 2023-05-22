import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApiProvider} from '../context/ApiContext';
//StackList
import StackList from './StackList';

export default function App(props) {
  return (
    <ApiProvider>
      <StackList />
    </ApiProvider>
  );
}
