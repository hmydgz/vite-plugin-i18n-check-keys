import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      name: "esm"
    }
  ],
  plugins: [commonjs(), typescript()]
};