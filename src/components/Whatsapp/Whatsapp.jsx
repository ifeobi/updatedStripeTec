import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from './J.jpg'

const Whatsapp = () => {
  return (
    <div>
       <FloatingWhatsApp
            phoneNumber="+2347088336937"
            accountName="Stripe-tec"
            allowEsc
            allowClickAway
            notification
            notificationSound
            placeholder
            avatar={avatar}
            // chatboxHeight={400}
            // chatboxStyle={{width:"35%"}}
          />
    </div>
  )
}

export default Whatsapp
