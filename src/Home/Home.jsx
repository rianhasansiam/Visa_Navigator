import React from 'react'
import PropTypes from 'prop-types'
import Banner from './Banner'
import LatestVisa from './LatestVisa'

const Home = props => {
  return (
    <section>
        <Banner/>
        <LatestVisa/>
    </section>
  )
}

Home.propTypes = {}

export default Home