const LibBuilderBobVgn = require('./NativeLibBuilderBobVgn').default;
import { GayaButton } from './components/GayaButton/GayaButton';
export function multiply(a: number, b: number): number {
  return LibBuilderBobVgn.multiply(a, b);
}

export { GayaButton };
