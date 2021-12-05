import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { PageHeader, Banner } from '../utils';
import menuImg from '../images/bcg/menuBcg.jpg';
import Gallery from '../components/HomeComponents/Gallery';
import Menu from '../components/HomeComponents/Menu';

const MenuPage = () => {
	return (
		<Layout>
			<Seo title="Menu" />
			<PageHeader img={menuImg}>
				<Banner title="our menu" subtitle="The best in town" />
			</PageHeader>
			<Gallery />
			<Menu />
		</Layout>
	);
};

export default MenuPage;
