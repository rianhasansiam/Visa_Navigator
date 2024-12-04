import React from 'react'
import PropTypes from 'prop-types'
import Banner from './Banner'
import LatestVisa from './LatestVisa'
import TopCountries from './TopCountries'
import VisaApplicationSteps from './VisaApplicationSteps'

const Home = props => {
  return (
    <section>
        <Banner/>
        <LatestVisa/>
        <TopCountries/>
        <VisaApplicationSteps/>
    </section>
  )
}

Home.propTypes = {}

export default Home