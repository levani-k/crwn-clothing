let config = {
  STRIPE_PUBLIC_KEY:
    'pk_test_51J9qV1E1eRLqknq29WcHEBuUkCjPW1bOI7ghsZWIZxUBs4ugskvg0uqSBUExcNNvrkDyFz3mGgBAvMVxnx0GN8rF00pDogv59r',
}

switch (process.env.REACT_APP_STAGE) {
  case 'development':
    config = {
      STRIPE_PUBLIC_KEY:
        'pk_test_51J9qV1E1eRLqknq29WcHEBuUkCjPW1bOI7ghsZWIZxUBs4ugskvg0uqSBUExcNNvrkDyFz3mGgBAvMVxnx0GN8rF00pDogv59r',
    }
    break
  case 'production':
    config = {
      STRIPE_PUBLIC_KEY:
        'pk_test_51J9qV1E1eRLqknq29WcHEBuUkCjPW1bOI7ghsZWIZxUBs4ugskvg0uqSBUExcNNvrkDyFz3mGgBAvMVxnx0GN8rF00pDogv59r',
    }
    break
  default:
    config = {
      STRIPE_PUBLIC_KEY:
        'pk_test_51J9qV1E1eRLqknq29WcHEBuUkCjPW1bOI7ghsZWIZxUBs4ugskvg0uqSBUExcNNvrkDyFz3mGgBAvMVxnx0GN8rF00pDogv59r',
    }
    break
}

export default config
