import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainSrc from './Views/MainSrc';
import IntroSrcreen from './Views/IntroScreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 5000)
  return (
    <View style={styles.container}>
      {isLoaded ? <MainSrc /> : <IntroSrcreen />}
      {/* <IntroSrcreen /> */}
    </View>
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
