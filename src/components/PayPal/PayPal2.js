import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function PayPal2() {

  const paypal = useRef()
  useEffect(()=> {
    window.paypal.Buttons({
        createOrder: (data, actions , err) => {
          return actions.order.create({
            intent:"CAPTURE",
            purchase_units: [
              {
                description:"Provide the vaccin for a puppy",
                amount:{
                  curency_code: "EUR",
                  value: 15.00
                }
              }
            ]
          })
        },
        onApprove: async(data, actions) => {
          const order = await actions.order.capture()
          console.log(order)
        },
        onError: (err) => {
          console.log(err)
        }
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}
