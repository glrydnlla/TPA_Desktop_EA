import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'


const QrGen = ({text}) => {

    const [source, setSource] = useState()

    useEffect(()=> {
        QRCode.toDataURL(text).then((data) => {
            setSource(data)
        })
    })

  return (
    <div>
        <img src={source}/>
    </div>
  )
}

export default QrGen