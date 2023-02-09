const nextTranslate = require('next-translate');

// @ts-ignore
module.exports = nextTranslate({
  reactStrictMode: true,
});

// module.exports = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// 	i18n: {
// 		locales: ['en-US', 'fr'],
// 		defaultLocale: 'en-US',
// 	},
// 	// ...withMDX({
// 	// 	// Append the default value with md extensions
// 	// 	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// 	// })
// }
