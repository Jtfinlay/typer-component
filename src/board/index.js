import Board from './board';
import { connect } from 'react-redux';
import { keyPressed } from '../actions';

const mapDispatchToProps = dispatch => ({
    keyPressed: key => dispatch(keyPressed(key))
});

const connector = connect(
    null,
    mapDispatchToProps
)( Board );

export default connector;