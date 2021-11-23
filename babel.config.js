module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          features: './src/components/features',
          screens: './src/components/screens',
          ui: './src/components/ui',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
