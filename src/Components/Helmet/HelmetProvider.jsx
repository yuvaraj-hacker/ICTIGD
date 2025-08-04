import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="title" content="ICTIGD – International Conference on Technology Integration for Global Development" />
            <meta name="description" content="Join ICTIGD to explore the role of integrated technology in achieving sustainable global development. Submit your research or register to attend." />
            <meta name="keywords" content="ICTIGD, Technology Integration Conference, Global Development, Sustainable Development, Innovation Conference, Tech for Good, International Conference, Call for Papers" />
            <meta name="author" content="ICTIGD Organizing Committee" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ictigd.com/" />
            <meta property="og:title" content="ICTIGD – International Conference on Technology Integration for Global Development" />
            <meta property="og:description" content="Discover innovations in technology integration for sustainable global development at ICTIGD. Submit papers or register today." />
            <meta property="og:image" content="https://ictigd.com/assets/images/ictigd-logo.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://ictigd.com/assets/images/ictigd-logo.png" />

        </Helmet>
    );
};

export default HelmetComponent;
