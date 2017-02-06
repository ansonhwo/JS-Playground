const React = require('react')
const { connect } = require('react-redux')

const Test = ({ message }) => {
  return (
    <div>
      <p>{ message }</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

module.exports = connect(mapStateToProps)(Test)
