// SDK V2
import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago.v2('APP_USR-d45ec243-e2cf-4ced-9e7b-38c4f8eb35b4', {
        locale: 'en-US'
    });

    let preference = {
        items: [
          {
            title: 'Meu produto',
            unit_price: 100,
            quantity: 1,
          }
        ]
      };
      
    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: '6410978120028098'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pagar',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )
}