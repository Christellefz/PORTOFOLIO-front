import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import axios from 'axios'
import { useState } from 'react'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883'
      },
      '::placeholder': {
        color: '#87bbfd'
      }
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee'
    }
  }
}
const PaymentForm = () => {
  const [success, setSucces] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async e => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post('http://localhost:3000/payment', {
          amount: 1000,
          id
        })
        if (response.data.success) {
          console.log('success'), setSucces(true)
        }
      } catch (error) {
        console.log('error', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className='formGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>PAY</button>
        </form>
      ) : (
        <div>
          <h2>You just gave 10€</h2>
        </div>
      )}
    </div>
  )
}
export default PaymentForm
