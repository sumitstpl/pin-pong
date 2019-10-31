import { connect } from 'react-redux'
import { getList } from 'actions/Matches'
import Matches from 'components/Matches'

const mapStateToProps = state => ({
  matches: state.matches
})

const mapDispatchToProps = dispatch => ({
  getList: (id) => dispatch(getList(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches)
