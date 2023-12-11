// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>third page</Text>
            <Button
              title="Go to Detail Page"
              onPress={() => navigation.navigate('DetailStack')}
            />
            
          </View>
      </View>
    </SafeAreaView>
    );
}

export default ThirdPage;