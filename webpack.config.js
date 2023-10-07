module.exports = {
  entry: "./src/simple-timezones.js",
  output: {
    filename: 'simple-timezones.js',
    libraryTarget: 'var',
    library: 'SimpleTimezones'
  },
  target: 'web',
  mode: 'production',
};