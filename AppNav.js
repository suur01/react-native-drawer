// import 'react-native-gesture-handler';

// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';
// import empat from './pages/empat';
// import lima from './pages/lima';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="empat" component={empat} />
//                 <Drawer.Screen name="lima" component={lima} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

// export default MyDrawer


// App.js
import React from 'react';
import MyDrawer from './Navigation';

function App() {
  return <MyDrawer />;
}

export default App;
