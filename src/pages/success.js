import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
const Success = () => {
	return (
		<Layout>
			<section className='succes-page'>
				<div className='page-center'>
					<h2>Your submission was received!</h2>
					<Link to='/' className='btn'>
						Home page
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export default Success;
