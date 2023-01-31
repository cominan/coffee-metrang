import React from 'react'
import ContactDistributor from './contact/ContactDistributor'
import Map from './map/Map'
import { inforContact } from './array-contact/infor'

export default function Distributor() {
   
  return (
    <div>
        <Map />
        {inforContact.map(items => {
            return <ContactDistributor key={items.name} items={items} />
        })}
    </div>
  )
}
