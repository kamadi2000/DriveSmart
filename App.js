import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RouteNavigator from './src/navigation/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/themed"

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar/>
        <NavigationContainer>
          <RouteNavigator />
        </NavigationContainer>

      
    </GluestackUIProvider>

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
