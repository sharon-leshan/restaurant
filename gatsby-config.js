module.exports = {
	siteMetadata: {
		title: `Restaurant Site`,
		description: `The Restaurant Site`,
		author: `@shazyleshan`,
		siteUrl: `https://maleo-restaurant.netlify.app/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,		
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
			  cssLoaderOptions: {
				camelCase: false,
			  },
			},
		  },
		  
		  {
			resolve: `gatsby-plugin-sass`,
			options: {
			  implementation: require("node-sass"),
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
