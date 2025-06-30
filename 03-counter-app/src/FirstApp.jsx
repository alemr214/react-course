import PropTypes from "prop-types";

const getName = (name) => {
    return name;
};

const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>{getName("Alejandro")}</h1>
            <h2>Soy un subtitulo</h2>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default FirstApp;
