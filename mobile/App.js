import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllApartments from './src/screens/AllApartmentsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ApartmentDetails from './src/screens/ApartmentDetails';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="AllApartments" component={AllApartments} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
