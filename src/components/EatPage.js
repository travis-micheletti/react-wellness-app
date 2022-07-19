import { useState, useEffect } from 'react'
import searchOptions from '../App'

function EatPage () {
    const initialState = {
        search: ''
    }
    const searchOptions = {
        id: process.env.REACT_APP_app_id,
        key: process.env.REACT_APP_app_key
      }
    const [formState, setFormState] = useState(initialState)
    const [searchString, setSearchString] = useState('')
    const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     getRecipes(searchString)
    // }, [])

    function getRecipes(searchString) {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&calories=300-600&imageSize=REGULAR&random=true&field=label&field=images&field=url&field=dietLabels&field=healthLabels&field=calories&field=mealType&field=dishType&field=tags`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRecipes(res.hits)
            console.log(res.hits)
        })
    }

    const handleChange = (event) => {
        setSearchString(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        setFormState(initialState)
        getRecipes(searchString)
    }

    return (

        <div className='component'>
            <h3>EatPage component</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor='foodSearch'>Recipe Lookup</label>
                <input placeholder='Search' type='text' name='searchString' required onChange={handleChange} value={searchString}/>
                <button type='submit'>Find!</button>
            </form>
            <div className="gallery">
                {recipes.map(recipe => (
                <div key={recipe.recipe.label} className="gif">
                    <img src={recipe.recipe.images.THUMBNAIL.url} alt={recipe.recipe.label} />
                    <span>
                    <a href={recipe.recipe.url}>{recipe.recipe.label}</a>
                    </span>
                    
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default EatPage