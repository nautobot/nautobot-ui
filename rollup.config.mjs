import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

import pkg from './package.json' assert { type: 'json' };

const external = Object.keys(pkg.peerDependencies);

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    external,
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [commonjs(), eslint(), resolve(), typescript()],
  },
  {
    external,
    input: 'dist/declaration/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [
      dts({ respectExternal: true }),
      del({ hook: 'buildEnd', targets: ['dist/**/declaration'] }),
    ],
  },
];
