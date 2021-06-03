import React from 'react'
import './style.css'
import bg from './assets/perfect.jpeg'
import dish1 from './assets/1-removebg.png'
import dish2 from './assets/2-removebg.png'
import dish3 from './assets/3-removebg.png'
import dish4 from './assets/4-removebg.png'
import Card from './Card'

const App = () => {
    return (
        <div className="relative">
            <div className="absolute mainDiv">
                <nav className="my-5">
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
            <div className="absolute bottom mb-6 px-6 w-100">
                <div className="grid">
                    <Card
                        image={dish1}
                        title="Eggs Breakfast"
                        calories={110}
                        time={15}
                        portion={2}
                    />
                    <Card
                        image={dish2}
                        title="Croissant"
                        calories={280}
                        time={5}
                        portion={1}
                    />
                    <Card
                        image={dish3}
                        title="Spaghetti"
                        calories={158}
                        time={20}
                        portion={1}
                    />
                    <Card
                        image={dish4}
                        title="Vegetable Salad"
                        calories={124}
                        time={5}
                        portion={1}
                    />
                </div>
            </div>
            <img className="mainBg" src={bg} alt="background" />
        </div>
    )
}

export default App
