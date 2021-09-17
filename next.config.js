const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* bydefault config  option Read For More Options
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
});

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
