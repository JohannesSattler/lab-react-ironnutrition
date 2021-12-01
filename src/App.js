import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json';

import FoodBox from './components/FoodBox';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData)
  const [showForm, setShowForm] = useState(false)
  const [todaysFood, setTodaysFood] = useState([])

  function handleShowAddFoodClick() {
    setShowForm(!showForm)
  }

  function handleAddFoodSubmit(event) {
    event.preventDefault()
    const newFood = {
      name: event.currentTarget.name.value,
      calories: event.currentTarget.numOfCalories.value,
      image: event.currentTarget.image.value,
      quantity: 0,
    }
    
    setFoods([newFood, ...foods])
  }

  function handleTodaysFoodClick(food) {
    setTodaysFood([food, ...todaysFood])
  }

  function handleSearchChange(event) {
    const word = event.currentTarget.value
    const filteredFoods = foodsData.filter(food => food.name.includes(word))
    setFoods(filteredFoods)
  }

  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange} ></Search>

      <button onClick={handleShowAddFoodClick}>
        { showForm ? "Hide" : "Add Food"}
      </button>
      {
        showForm ? 
        (
          <form onSubmit={handleAddFoodSubmit} action="">
            <input type="text" name="name" placeholder="Enter Name"/>
            <input type="number" name="numOfCalories" placeholder="Enter Calories"/>
            <input type="text" name="image" placeholder="Enter Image Url"/>
            <input type="submit"/>
          </form>
        ) : (<br/>)
      }

      <h1>TODAYS FOOD</h1>
      {
        todaysFood.map(food => {
          return (
            <FoodBox 
              food={food} 
              onTodaysFoodClick={handleTodaysFoodClick}
            />
          )
        })
      }
      
      <h1>ALL FOOD</h1>
      {
        foods.map(food => {
          return (
            <FoodBox 
              food={food} 
              onTodaysFoodClick={handleTodaysFoodClick}
            />
          )
        })
      }
    </div>
  );
}

export default App;
