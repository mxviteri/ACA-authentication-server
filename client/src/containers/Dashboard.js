import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { updateUser, updatePassword } from '../redux/actions'

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userName) => dispatch(updateUser(userName)),
    updatePassword: (password) => dispatch(updatePassword(password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)