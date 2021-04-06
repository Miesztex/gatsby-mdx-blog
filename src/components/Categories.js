import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const Categories = () => {
	const {
		allMdx: { distinct },
	} = useStaticQuery(query);
	return (
		<ul className='categories'>
			{distinct.map((cat, idx) => (
				<li key={idx}>
					<Link to={`/${cat}`} className='category'>
						{cat}
					</Link>
				</li>
			))}
		</ul>
	);
};

const query = graphql`
	{
		allMdx {
			distinct(field: frontmatter___category)
		}
	}
`;

export default Categories;
