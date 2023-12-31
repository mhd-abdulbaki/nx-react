module.exports = {
  displayName: 'react-app-components',

  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/react-app/components',
  preset: '../../../jest.preset.ts',
};
