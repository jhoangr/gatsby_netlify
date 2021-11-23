import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const AboutPage = () => {
 return(
   <Layout pageTitle="About Me Page">
    <main >
        <p>Hi there! I'm de proud creator of this site, wich I built with Gatsby</p>
        <p>My name is:</p>
        <p>You can find me on:</p>
    </main>
    </Layout>
 )
}

export default AboutPage