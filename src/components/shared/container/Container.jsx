import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <section className="container mx-auto xl:px-16 px-6">
            {children}
        </section>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node,
};
