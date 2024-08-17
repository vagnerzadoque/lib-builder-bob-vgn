const LibBuilderBobVgn = require('./NativeLibBuilderBobVgn').default;
import Button from './components/Button/GayaButton';
export function multiply(a: number, b: number): number {
  return LibBuilderBobVgn.multiply(a, b);
}

export { Button };
