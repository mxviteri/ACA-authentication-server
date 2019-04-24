import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(Dashboard)