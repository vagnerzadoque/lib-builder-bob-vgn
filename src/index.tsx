const LibBuilderBobVgn = require('./NativeLibBuilderBobVgn').default;

export function multiply(a: number, b: number): number {
  return LibBuilderBobVgn.multiply(a, b);
}
