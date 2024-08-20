const LibBuilderBobVgn = require('./NativeLibBuilderBobVgn').default;
import GayaButton from './components/Button/GayaButton';
export function multiply(a: number, b: number): number {
  return LibBuilderBobVgn.multiply(a, b);
}

export { GayaButton };
