import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
import { loadStripe } from '@stripe/stripe-js'

const Public_Key =
  'pk_test_51JCJRwADpZuSdOvvWWH2Kel7kUtRilI2BF1TaRwz9JKEN5ns0dv9vnH5dwA7DXqTJNyuLDGg3Mud0DkUJyUS2ZM800eVgP4QbN'
const stripeTestPromise = loadStripe(Public_Key)
const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}
export default StripeContainer
