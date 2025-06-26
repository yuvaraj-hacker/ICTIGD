import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Conference on Intelligent Systems and Computational Methods, ICISCM, Intelligent Systems conference, Computational Methods conference, AI conference, Smart Computing conference, Machine Learning conference" />
            <meta name="description" content="The International Conference on Intelligent Systems and Computational Methods (ICISCM) brings together researchers and professionals to share innovations in AI, intelligent systems, computational methods, and related technologies." />
            <meta name="author" content="ICISCM Organizing Committee" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Intelligent Systems and Computational Methods (ICISCM)" />
            <meta property="og:description" content="The International Conference on Intelligent Systems and Computational Methods (ICISCM) brings together researchers and professionals to share innovations in AI, intelligent systems, computational methods, and related technologies." />
            <meta property="og:url" content="https://www.iciscm.com/" />
            <meta property="og:image" content="https://www.iciscm.com/assets/Images/ICISCM.png" />
            <link rel="canonical" href="https://www.iciscm.com/" />
            <link rel="icon" type="image/png" href="https://www.iciscm.com/assets/Images/Favicon.png" />

        </Helmet>
    );
};

export default HelmetComponent;
