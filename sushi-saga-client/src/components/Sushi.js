import React from 'react'

const Sushi = (props) => {

  const {name, price, img_url} = props.sushi
  const {eaten} = props.eaten
  const {index} = props.index
  
  

  console.log(props)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatSushi(index, price)}>
        {eaten ?
          null
          :
          <img src={img_url} alt="a sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi