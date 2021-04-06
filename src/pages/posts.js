import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
	const {
		allMdx: { nodes: posts },
	} = data;
	return (
		<>
			<Hero />
			<Posts posts={posts} title='all posts' />
		</>
	);
};

export const query = graphql`
	{
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				excerpt
				frontmatter {
					title
					date(formatString: "MMMM Do, YY")
					slug
					readTime
					image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				id
			}
		}
	}
`;

export default PostsPage;
