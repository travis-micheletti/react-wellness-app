import { useState, useEffect } from 'react'
import searchOptions from '../App'

function EatPage () {
    const initialState = {
        search: ''
    }

   

    const [formState, setFormState] = useState(initialState)
    const [searchString, setSearchString] = useState('')
    const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     getRecipes(searchString)
    // }, [])

    function getRecipes(searchString) {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=2203061e&app_key=ea2a69d027e1ff0806e79d4a301ea7e2&calories=300-600&imageSize=REGULAR&random=true&field=label&field=images&field=url&field=dietLabels&field=healthLabels&field=calories&field=mealType&field=dishType&field=tags`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRecipes(res.hits)
            console.log(res.hits)
        })
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
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
                <label htmlFor='foodSearch'>Food Search</label>
                <input type='text' id='search' onChange={handleChange} value={formState.search}/>
                <button type='submit'>Search!</button>
            </form>
            <div className="gallery">
                {recipes.map(recipe => (
                <div key={recipe.id} className="gif">
                    <img src={recipe.recipe.images.SMALL.url} alt={recipe.recipe.label} />
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