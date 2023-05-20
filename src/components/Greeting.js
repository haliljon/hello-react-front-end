import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRandomGreeting } from '../redux/actions';

const Greeting = ({ greeting, getRandomGreeting }) => {
    useEffect(() => {
        getRandomGreeting();
    }, [getRandomGreeting]);

    return (
        <div>
            <h1>Random Greeting:</h1>
            <p>{greeting}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    greeting: state.greeting,
});

const mapDispatchToProps = {
    getRandomGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
