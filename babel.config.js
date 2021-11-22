module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          screens: './src/components/screens',
          ui: './src/components/ui',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
