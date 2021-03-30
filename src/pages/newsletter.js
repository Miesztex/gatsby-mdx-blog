import React from 'react';
import Layout from '../components/Layout';
const NewsLetter = () => {
	return (
		<Layout>
			<section className='newsletter-page'>
				<div className='page-center'>
					<h2>Get all the latest stories to your inbox</h2>
					<h4>I write to my friends every few week</h4>
					{/*  === HANDLE NETLIFY EMAIL === */}
					<form
						className='contact-form'
						name='contact'
						method='post'
						netlify-honeypot='bot-field'
						data-netlify='true'
						action='/success' // redirect
					>
						<input type='hidden' name='bot-field' />
						<input type='hidden' name='form-name' value='contact' />
						{/*  ====================== */}
						<input
							className='contact-form'
							type='text'
							className='form-control'
							placeholder='Your name'
							name='name'
						/>
						<input
							type='email'
							className='form-control'
							placeholder='Your email'
							name='email'
						/>
						<button type='submit' className='btn form-control'>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default NewsLetter;
