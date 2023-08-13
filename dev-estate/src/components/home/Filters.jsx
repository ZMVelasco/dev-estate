import React from 'react'
import allIcon from '../../assets/building-icon.svg'
import Bed from '../../assets/bed-icon.svg'
import House from '../../assets/house-icon.svg'
import Lot from '../../assets/layer-landcover.svg'
import Screen from '../../assets/desktop.svg'

const Filters = () => {
  return (
    <section>
        <article id='filter-container' className='flex'>
            <div id='all-container'>
                <div id='circle-all' className='rounded-full bg-slate-400'>
                    <img src={allIcon} alt='building icon' className='w-6 h-6' />
                </div>
                <p>All</p>
            </div>
            <div id='apartments-container'>
                <div id='circle-apartments' className='rounded-full bg-slate-400'>
                    <img src={Bed} alt='bed icon' className='w-6 h-6' />
                </div>
                <p>Apartments</p>
            </div>
            <div id='lots-container'>
                <div id='circle-apartments' className='rounded-full bg-slate-400'>
                    <img src={Lot} alt='Lot icon' className='w-6 h-6'/>
                </div>
                <p>Lots</p>
            </div>
            <div id='houses-container'>
                <div id='circle-apartments ' className='rounded-full bg-slate-400'>
                    <img src={House} alt='House icon' className='w-6 h-6'/>
                </div>
                <p>Houses</p>
            </div>
            <div id='offices-container'>
                <div id='circle-apartments' className='rounded-full bg-slate-400'>
                    <img src={Screen} alt='Desktop computer icon' className='w-6 h-6'/>
                </div>
                <p>Offices</p>
            </div>
        </article>
    </section>
  )
}

export default Filters
