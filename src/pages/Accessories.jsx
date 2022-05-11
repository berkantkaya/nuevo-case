import React from 'react'
import ChooseNext from '../components/ChooseNext'
import PackageFeature from '../components/PackageFeature'

const Accessories = () => {
  return (
      <>
    <div className='accessories'>
    <p style={{marginBottom:'25px'}} className='colors__text'>Seçtiğin araca ait özellikler, konforun ve yaşam stilini belirler.</p>
        <div className='accessories__card'>
        <PackageFeature title="SEAT FREE SYNC PACK EASY JET" price = "7.500 TL" color="#292929" textColor="#FFFFFF"/>
        <PackageFeature title="Maintenance Program Upgrade" price = "7.500 TL" color="#F2F2F2" textColor="#0F0F0F"/>
        <PackageFeature title="SEAT FREE SYNC PACK EASY JET" price = "13.700 TL" color="#292929" textColor="#FFFFFF"/>
        </div>
        <div className='accessories__card'>
        <PackageFeature title="SEAT FREE SYNC PACK EASY JET" price = "7.500 TL" color="#F2F2F2" textColor="#0F0F0F"/>
        <PackageFeature title="Maintenance Program Upgrade" price = "7.500 TL" color="#F2F2F2" textColor="#0F0F0F"/>
        <PackageFeature title="SEAT FREE SYNC PACK EASY JET" price = "13.700 TL" color="#F2F2F2" textColor="#0F0F0F"/>
        </div>
    </div>
    <ChooseNext buttonText="SUMMARY"/>

    </>
  )
}

export default Accessories