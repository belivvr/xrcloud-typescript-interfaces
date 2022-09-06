import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-size'
import externals from 'rollup-plugin-node-externals'
import resolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'
import replace from '@rollup/plugin-replace'
import { defineConfig } from 'rollup'

const external = ['@xrcloud/interfaces']
const globals = {}
const inputSrcs = [
  ['src/index.ts', '@xrcloud/interfaces', 'index'],
  ['src/dto/index.ts', '@xrcloud/interfaces/dto', 'dto']
]
const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
const babelConfig = {
  extensions,
  babelHelpers: 'bundled'
}
const resolveConfig = { extensions }

const externalPeerDeps = () => externals({ deps: false, devDeps: false, peerDeps: true })

export default inputSrcs
  .map(([input, name, file]) => defineConfig([
    {
      input,
      output: {
        name,
        file: `dist/${file}.min.js`,
        format: 'umd',
        sourcemap: true,
        globals,
        intro: 'const global = typeof self !== undefined ? self : this;'
      },
      external,
      plugins: [
        replace({
          'process.env.NODE_ENV': '"production"',
          delimiters: ['', ''],
          preventAssignment: true
        }),
        externalPeerDeps(),
        resolve(resolveConfig),
        babel(babelConfig),
        commonJS(),
        terser(),
        size(),
        visualizer({
          filename: 'stats-react.json',
          json: true
        })
      ]
    }
  ]))
  .flat()
