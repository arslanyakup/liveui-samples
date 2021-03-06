// host configuration
module.exports = {
  shares: {
    react: require('react'),
    "react-dom": require('react-dom'),
    "react-redux": require('react-redux'),
    "react-router-dom": require('react-router-dom'),
    'bookReducer': require('./redux/bookReducer'),
  },
  remotes: {
    payment: 'http://localhost:5001/payment',
    cart: 'http://localhost:5001/cart',
    home: 'http://localhost:5001/home'
  },
}
