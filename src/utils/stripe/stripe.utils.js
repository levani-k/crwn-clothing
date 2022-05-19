import { loadStripe } from '@stripe/stripe-js'
import config from 'config/config'

export const stripePromise = loadStripe(config.STRIPE_PUBLIC_KEY)
