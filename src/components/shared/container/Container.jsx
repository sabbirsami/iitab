import PropTypes from "prop-types";

const Container = ({ children }) => {
    return <section className="container mx-auto px-6">{children}</section>;
};

export default Container;

Container.propTypes = {
    children: PropTypes.node,
};
