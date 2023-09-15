import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import RouteNavigator from './src/navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import store from './src/redux/store'
// import Login from './src/screens/loginScreen';


export default function App() {

  const [fontsLoaded] = useFonts({
      Poppins_SemiBold : require('./src/assets/fonts/Poppins-SemiBold.ttf'),
      Poppins_Medium : require('./src/assets/fonts/Poppins-Medium.ttf'),
      Poppins_Light : require('./src/assets/fonts/Poppins-Light.ttf'),
      Poppins_Regular : require('./src/assets/fonts/Poppins-Regular.ttf'),
      NotoSerifTamil_Regular : require('./src/assets/fonts/NotoSerifTamil-Regular.ttf'),
      NotoSansSinhala : require('./src/assets/fonts/NotoSansSinhala.ttf')

    })
  
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
    
      <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar/>
        <NavigationContainer>
        <RouteNavigator /> 
        </NavigationContainer>
      </SafeAreaProvider>
      </Provider>
      
    

    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>

    //   <StatusBar style="auto" /> */}
    //   <Login/>
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
