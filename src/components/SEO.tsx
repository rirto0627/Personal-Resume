import {Helmet} from 'react-helmet';

export const SEO = () => (
    <Helmet>
        <title>Rx-bear｜全端開發工程師</title>
        <meta name="description" content="全端開發工程師 Rx-bear，專注於高效 Web 應用與 DevOps 自動化。"/>
        <meta name="keywords" content="Rx-bear, 全端開發, React, TypeScript, Python, DevOps"/>
        <meta name="author" content="HSU MAO LIN"/>

        <meta property="og:title" content="Rx-bear｜全端開發工程師"/>
        <meta property="og:description" content="專注於構建高效、響應式的網頁應用與自動化流程。"/>
        <meta property="og:image" content="https://resume.rx-bear.work/preview.webp"/>
        <meta property="og:url" content="https://resume.rx-bear.work"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="resume.rx-bear.work"/>
        <meta property="twitter:url" content="https://resume.rx-bear.work"/>
        <meta name="twitter:title" content="Rx-bear｜全端開發工程師"/>
        <meta name="twitter:description" content="專注於構建高效、響應式的網頁應用與自動化流程。"/>
        <meta name="twitter:image" content="https://resume.rx-bear.work/preview.webp"/>
    </Helmet>
);
