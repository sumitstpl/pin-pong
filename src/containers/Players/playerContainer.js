import { connect } from 'react-redux'
import { getList } from 'actions/Players'
import { addNewMatch, addNewMatchModal } from 'actions/Matches'
import Players from 'components/Players'

const mapStateToProps = state => ({
  players: state.players,
  addMatchModalValue: state.matches.addMatchModalValue
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  addNewMatch: (data) => dispatch(addNewMatch(data)),
  addNewMatchModal: () => dispatch(addNewMatchModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Players)
