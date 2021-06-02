import React from 'react'

const Card = ({ image, title, calories, time, portion }) => {
    return (
        <div className="glass relative">
            <div className="absolute w-100 dish_container">
                <div className="flex justify">
                    <img
                        className="dish_image"
                        src={image}
                        alt="egg-breakfast"
                    />
                </div>
                <div className="w-100 text-center">
                    <p>{title}</p>
                    <p className="font-weight-light subheading mt-2 mb-3">
                        {calories} calories
                    </p>
                    <div className="details p-3">
                        <div className="flex spaceBetween subheading">
                            <p>Time</p>
                            <p>Portion</p>
                        </div>
                        <div className="flex spaceBetween heading mt-1">
                            <p>{time} minutes</p>
                            <p>{portion} person</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
