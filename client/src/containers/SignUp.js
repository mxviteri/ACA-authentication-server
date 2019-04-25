import { connect } from 'react-redux'
import SignUp from '../components/auth/SignUp'
import { signUp } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)