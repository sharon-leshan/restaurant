import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { PageHeader, Banner } from '../utils';
import contactImg from '../images/bcg/contactBcg.jpg';

const ContactPage = () => {
	return (
		<Layout>
			<Seo title="Contact" />
			<PageHeader img={contactImg}>
				<Banner title="contact us" subtitle="let's get in touch" />
			</PageHeader>
		</Layout>
	);
};

export default ContactPage;
