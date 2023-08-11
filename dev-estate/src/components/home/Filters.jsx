import React from 'react'
import allIcon from '../../assets/building-icon.svg'
import Bed from '../../assets/bed-icon.svg'

const Filters = () => {
  return (
    <section>
        <article id='filter-container'>
            <div id='all-container'>
                <div id='circle-all'>
                    <img src={allIcon} alt='building icon' />
                </div>
                <p>All</p>
            </div>
            <div id='apartments-container'>
                <div id='circle-apartments'>
                    <img src={Bed} alt='bed icon' />
                </div>
                <p>All</p>
            </div>
        </article>
    </section>
  )
}

export default Filters
