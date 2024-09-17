import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'poc-gaya-builder-bob-vgn';
import GayaButton from '../../src/components/Button/GayaButton';
const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <GayaButton title="Ola Gaya" onPress={() => 'oi'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
