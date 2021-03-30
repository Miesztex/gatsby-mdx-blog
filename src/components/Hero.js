import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Hero = ({ showPerson }) => {
	const {
		person: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query);

	return (
		<header className='hero'>
			{showPerson && <Image fluid={fluid} className='hero-person' />}
		</header>
	);
};

const query = graphql`
	{
		person: file(relativePath: { eq: "person.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default Hero;
