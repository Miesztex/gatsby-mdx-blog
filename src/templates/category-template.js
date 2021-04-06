import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const CategoryTemplate = ({ data, pageContext: { category } }) => {
	const {
		allMdx: { nodes: posts },
	} = data;
	return (
		<Layout>
			<Hero />
			<Posts posts={posts} title={`category / ${category}`} />
		</Layout>
	);
};

export const query = graphql`
	query MyQuery($category: String) {
		allMdx(
			sort: { fields: frontmatter___date, order: DESC }
			filter: { frontmatter: { category: { eq: $category } } }
		) {
			nodes {
				excerpt
				id
				frontmatter {
					title
					author
					category
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
			}
		}
	}
`;

export default CategoryTemplate;
