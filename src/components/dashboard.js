import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link, IndexLink } from 'react-router'
import ReactAnimate from 'react-addons-css-transition-group'
import ExpensesApp from '../containers/ExpensesApp.js'
import BudgetApp from '../containers/BudgetApp'
import Navbar from './Navbar'
import '../css/dashboard.css'

// import UploadApp from '../containers/UploadApp'

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if(!this.props.isAuth){
      this.context.router.push('/login')
    }

  }
  // componentDidMount(){
  //   document.body.style.backgroundColor = 'white'
  // }

  render() {
    return (
      <div classNam="dash">
        <div className="nav">
          <Navbar />
        </div>
        <div className="dash-nested-paths-nav">
          <ul className="dash-paths">
            <li className="dash-link"><IndexLink to='/dashboard'>TRANSACTIONS</IndexLink></li>
            <li className="dash-link"><Link to='/budget'>BUDGET</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }

}

export default connect(
  (state)=>{
    return {
      isAuth: state.isAuth
    }
  }
)(Dashboard)
