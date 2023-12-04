module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "expo-router/babel",
      "@babel/plugin-proposal-export-namespace-from",

      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-transform-optional-chaining",

      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-transform-nullish-coalescing-operator",

      "react-native-reanimated/plugin"
    ]
  };
};
