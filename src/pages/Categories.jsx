import { useState,useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {getFilteredCategorie} from '../api';
import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealList'

function Categories() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory()

    useEffect(() => {
        getFilteredCategorie(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className='btn' onClick={goBack}>Go back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
}

export {Categories}