import { connect } from 'react-redux'
import { getList } from 'actions/Players'
import Players from 'components/Players'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Players)
