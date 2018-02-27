import {connect} from 'react-redux'
import {Counter} from '../components/counter'
import * as actions from '../actions/counter'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => ({
    tab: state.counters.tab,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)