require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Restaurant Site`,
		description: `The Restaurant Site`,
		author: `@shazyleshan`,
		siteUrl: `https://maleo-restaurant.netlify.app/`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://maleo-restaurant.netlify.app/`,
				sitemap: `https://maleo-restaurant.netlify.app/sitemap.xml`,
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `G-C5YNSJCNVK`,
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-C5YNSJCNVK', // Google Analytics / GA
				],
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
				apiKey: process.env.SNIPCART_API,
				autopop: true,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
	],
};
