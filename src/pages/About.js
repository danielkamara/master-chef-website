import { Component } from "react";

class About extends Component {
  state = {
    recipe: "",
  };

  async componentDidMount() {
    console.log("Component did Mount");
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      this.setState({ recipe: data.meals[0] });
      console.log(this.state.recipe);
      console.log(this.state.recipe.strMeal);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h1>About Our Recipes</h1>
        <h2>Category</h2>
        {this.state.recipe && this.state.recipe.strCategory}

        <div>
          <img
            src={this.state.recipe.strMealThumb}
            alt="meal photo"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        {this.state.recipe && this.state.recipe.strMeal}
        <div>
          <h2>Ingredients</h2>
          <ul style={{ listStyleType: "none" }}>
            {this.state.recipe && <li>{this.state.recipe.strIngredient1}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient2}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient3}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient4}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient5}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient6}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient7}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient8}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient9}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient10}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient11}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient12}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient13}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient14}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient15}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient16}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient17}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient18}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient19}</li>}
            {this.state.recipe && <li>{this.state.recipe.strIngredient20}</li>}
          </ul>
        </div>
        <div>
          <h2>Instructions</h2>
          {this.state.recipe && this.state.recipe.strInstructions}
        </div>
      </div>
    );
  }
}

export default About;
