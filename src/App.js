import React from 'react'
import './style.css'
import bg from './assets/perfect_1.jpeg'
import dish1 from './assets/1-removebg.png'

const App = () => {
    return (
        <div className="relative">
            <div className="absolute mainDiv">
                <nav className="mt-4">
                    <div>
                        <div className="active">Home</div>
                        <div className="inactive">About Us</div>
                        <div className="inactive">Menu</div>
                    </div>
                </nav>
                <div className="px-6 mt-4 headline">
                    <div>SIMPLE</div>
                    <div>&</div>
                    <div>QUICK</div>
                </div>
            </div>
            <div className="absolute bottom mb-5 px-6 w-100">
                <div className="grid">
                    <div className="glass relative">
                        <div className="absolute w-100 dish_container">
                            <div className="flex justify">
                                <img
                                    className="dish_image"
                                    src={dish1}
                                    alt="egg-breakfast"
                                />
                            </div>
                            <div className="w-100 text-center">
                                <p>Eggs Breakfast</p>
                                <p className="font-weight-light subheading mt-2 mb-3">
                                    110 calories
                                </p>
                                <div className="details p-3">
                                    <div className="flex spaceBetween subheading">
                                        <p>Time</p>
                                        <p>Portion</p>
                                    </div>
                                    <div className="flex spaceBetween heading mt-1">
                                        <p>15 minutes</p>
                                        <p>2 person</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass">2</div>
                    <div className="glass">3</div>
                    <div className="glass">4</div>
                </div>
            </div>
            <img className="mainBg" src={bg} alt="background" />
        </div>
    )
}

export default App
