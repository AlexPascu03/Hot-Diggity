import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function PayPal() {

  const paypal = useRef()
  useEffect(()=> {
    window.paypal.Buttons({
        createOrder: (data, actions , err) => {
          return actions.order.create({
            intent:"CAPTURE",
            purchase_units: [
              {
                description:"Meal for a dog",
                amount:{
                  curency_code: "EUR",
                  value: 5.00
                }
              }
            ]
          })
        },
        onApprove: async(data, actions) => {
          const order = await actions.order.capture()
          alert("Thank you for making a donation!")
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
