import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import RouteNavigator from './src/navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";


export default function App() {

  const [fontsLoaded] = useFonts({
      Poppins_SemiBold : require('./src/assets/fonts/Poppins-SemiBold.ttf'),
      Poppins_Medium : require('./src/assets/fonts/Poppins-Medium.ttf'),
      Poppins_Light : require('./src/assets/fonts/Poppins-Light.ttf')})
  
  // const onLayoutRootView = useCallback(async () => {
  //     //   if (fontsLoaded ) {
  //     //     await SplashScreen.hideAsync();
  //     //   }
  //      }, [fontsLoaded]
  //     )
    
  if (!fontsLoaded) {
        return null;
      }
    
  return (
    
      
      <SafeAreaProvider>
        <StatusBar/>
        <NavigationContainer>
        <RouteNavigator /> 
        </NavigationContainer>
      </SafeAreaProvider>
      
    

    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
