import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'poc-gaya-builder-bob-vgn';
import { GayaButton } from '../../src/components/GayaButton/GayaButton';
import { ThemeProvider } from 'styled-components/native';
const result = multiply(3, 7);
import { buildTheme } from '../../src/common/theme';

const theme = buildTheme('theBodyShop', 'light');
export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <Text>Result: {result}</Text>
        <GayaButton text="GayaButton" onPress={() => 'oi'} size="medium" />
      </ThemeProvider>
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
