import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ( props ) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushi.displayedSushi.map((sush, index) => {return <Sushi key={index} index={index} eatSushi={props.eatSushi} sushi={sush} eaten={false}/>})}
        <MoreButton getSushi={props.getSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer