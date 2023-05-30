import React from "react";
import './Styles.css';

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card_recipe">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image_recipe"
            />
            <div className="card-body_recipe">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard;