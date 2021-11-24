import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo'
import { PageHeader } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpg'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <PageHeader img={aboutImg}>
                <h3>About Page</h3>
            </PageHeader>
        </Layout>
    )
}

export default AboutPage