import { StyleSheet, View, Text } from 'react-native';
import { GayaButton } from '../../src/components/GayaButton/GayaButton';
import { ThemeProvider } from 'styled-components/native';

import { buildTheme } from '../../src/common/theme';

const naturaV3 = buildTheme('natura_v3', 'light');
const avonV2 = buildTheme('avon_v2', 'light');
const forcaDeVendas = buildTheme('forcaDeVendas', 'light');
export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={naturaV3}>
        <Text>Casa e Estilo</Text>
        <GayaButton
          brand="casaEestilo"
          text="GayaButton"
          onPress={() => 'oi'}
          size="medium"
        />
      </ThemeProvider>
      <ThemeProvider theme={naturaV3}>
        <Text>Natura V3</Text>
        <GayaButton text="GayaButton" onPress={() => 'oi'} size="medium" />
      </ThemeProvider>
      <ThemeProvider theme={avonV2}>
        <Text>Avon V2</Text>
        <GayaButton text="GayaButton" onPress={() => 'oi'} size="medium" />
      </ThemeProvider>
      <ThemeProvider theme={forcaDeVendas}>
        <Text>Força de Vendas</Text>
        <GayaButton text="GayaButton Fv" onPress={() => 'oi'} size="medium" />
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
