import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from 'gatsby-image';
import Banner from '../components/Banner';

const PostTemplate = ({ data }) => {
	const {
		mdx: {
			frontmatter: { title, slug, category, image, date },
			body,
		},
	} = data;
	return (
		<Layout>
			<Hero />
			<Wrapper>
				<article>
					<Image fluid={image.childImageSharp.fluid} />
					<div className='post-info'>
						<span>{category}</span>
						<h2>{title}</h2>
						<p>{date}</p>
						<MDXRenderer>{body}</MDXRenderer>
					</div>
				</article>
				<article>
					<Banner />
				</article>
			</Wrapper>
		</Layout>
	);
};
export const query = graphql`
	query GetPostQuery($slug: String) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				category
				date(formatString: "MMMM Do, YYYY")
				readTime
				slug
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			body
		}
	}
`;

const Wrapper = styled.section`
	width: 85vw;
	max-width: 1100px;
	margin: 0 auto;
	margin-bottom: 4rem;
	.post-info {
		margin: 2rem 0 4rem 0;
		text-align: center;
		span {
			background: var(--clr-primary-5);
			color: var(--clr-white);
			border-radius: var(--radius);
			padding: 0.25rem 0.5rem;
			text-transform: uppercase;
			letter-spacing: var(--spacing);
		}
		h2 {
			margin: 1.25rem 0;
			font-weight: 400;
		}
		p {
			color: var(--clr-grey-5);
		}
		.underline {
			width: 5rem;
			height: 1px;
			background: var(--clr-grey-9);
			margin: 0 auto;
			margin-bottom: 1rem;
		}
	}
	@media (min-width: 992px) {
		& {
			width: 92vw;
		}
	}
	@media (min-width: 1170px) {
		& {
			display: grid;
			grid-template-columns: 1fr 200px;
			column-gap: 4rem;
		}
	}
`;

export default PostTemplate;
