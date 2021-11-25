import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { PageHeader, Banner } from '../utils';
import contactImg from '../images/bcg/contactBcg.jpg';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
	return (
		<Layout>
			<Seo title="Contact" />
			<PageHeader img={contactImg}>
				<Banner title="contact us" subtitle="let's get in touch" />
			</PageHeader>
			<Contact />
		</Layout>
	);
};

export default ContactPage;
