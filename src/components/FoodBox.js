import React, {useState} from 'react'

function FoodBox(props) {
    const {name, calories, image, qty} = props.food
    const [quantity, setQuantity] = useState(qty)

    return (
        <div className="box">
        <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={image} alt=""/>
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{name}</strong> <br />
                <small>{calories * quantity || 0} cal</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                <input 
                    className="input" 
                    type="number" 
                    onChange={(eve) => {
                        setQuantity(eve.currentTarget.value)
                        props.food.quantity = eve.currentTarget.value
                    }}    
                />
                </div>
                <div className="control">
                <button onClick={() => props.onTodaysFoodClick(props.food)} className="button is-info">
                    +
                </button>
                </div>
            </div>
            </div>
        </article>
        </div>
    )
}

export default FoodBox
