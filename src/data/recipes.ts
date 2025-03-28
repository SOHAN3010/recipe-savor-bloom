
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  ingredientSubstitutions?: { [ingredient: string]: string[] };
  instructions: string[];
  category: string;
  mealTime?: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert";
  featured?: boolean;
  likes?: number;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description: "A simple yet delicious traditional Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
    imageUrl: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    ingredients: [
      "500g pizza dough",
      "1 cup tomato sauce",
      "200g fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    ingredientSubstitutions: {
      "200g fresh mozzarella cheese, sliced": ["200g vegan mozzarella cheese, sliced", "200g dairy-free cheese alternative"],
      "500g pizza dough": ["500g gluten-free pizza dough", "500g cauliflower pizza crust"]
    },
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Transfer the dough to a baking sheet or pizza stone.",
      "Spread tomato sauce evenly over the dough, leaving a small border for the crust.",
      "Arrange mozzarella slices on top of the sauce.",
      "Bake for 12-15 minutes, or until the crust is golden and the cheese is bubbly.",
      "Remove from the oven and top with fresh basil leaves.",
      "Drizzle with olive oil, and season with salt and pepper.",
      "Slice and serve hot."
    ],
    category: "Italian",
    mealTime: "Dinner",
    featured: true,
    likes: 24
  },
  {
    id: "2",
    title: "Creamy Butternut Squash Soup",
    description: "A warm and comforting soup perfect for fall evenings, made with roasted butternut squash and a touch of cream.",
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ba2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    ingredients: [
      "2 lbs butternut squash, peeled and cubed",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "4 cups vegetable broth",
      "1/2 cup heavy cream",
      "2 tablespoons olive oil",
      "1 teaspoon nutmeg",
      "Salt and pepper to taste",
      "Toasted pumpkin seeds for garnish"
    ],
    ingredientSubstitutions: {
      "1/2 cup heavy cream": ["1/2 cup coconut cream", "1/2 cup cashew cream"],
      "4 cups vegetable broth": ["4 cups chicken broth", "4 cups bone broth"]
    },
    instructions: [
      "Preheat the oven to 400°F (200°C).",
      "Toss butternut squash cubes with 1 tablespoon olive oil, salt, and pepper.",
      "Roast the squash for 25-30 minutes, until tender and slightly caramelized.",
      "In a large pot, heat the remaining olive oil over medium heat.",
      "Add the onion and cook until translucent, about 5 minutes.",
      "Add the garlic and cook for another minute.",
      "Add the roasted squash and vegetable broth to the pot.",
      "Bring to a simmer and cook for 10 minutes.",
      "Using an immersion blender, blend the soup until smooth.",
      "Stir in the heavy cream and nutmeg.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with toasted pumpkin seeds."
    ],
    category: "Soups",
    mealTime: "Lunch",
    featured: true,
    likes: 16
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a gooey, molten chocolate center that flows like lava when you cut into them.",
    imageUrl: "https://images.unsplash.com/photo-1617191880520-c6022639ff2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    ingredients: [
      "113g dark chocolate, chopped",
      "113g unsalted butter",
      "2 large eggs",
      "2 large egg yolks",
      "50g granulated sugar",
      "1 teaspoon vanilla extract",
      "30g all-purpose flour",
      "Pinch of salt",
      "Powdered sugar for dusting",
      "Vanilla ice cream for serving (optional)"
    ],
    ingredientSubstitutions: {
      "113g dark chocolate, chopped": ["113g dairy-free dark chocolate, chopped", "113g carob chips"],
      "113g unsalted butter": ["113g coconut oil", "113g vegan butter"],
      "30g all-purpose flour": ["30g gluten-free flour blend", "30g almond flour"]
    },
    instructions: [
      "Preheat the oven to 425°F (220°C). Butter and lightly flour four 6-ounce ramekins.",
      "In a microwave-safe bowl, combine the chocolate and butter. Microwave in 30-second intervals, stirring between each, until melted and smooth.",
      "In a separate bowl, whisk together the eggs, egg yolks, sugar, and vanilla extract until pale and thick.",
      "Fold the melted chocolate mixture into the egg mixture.",
      "Gently fold in the flour and salt until just combined.",
      "Divide the batter evenly among the prepared ramekins.",
      "Place the ramekins on a baking sheet and bake for 12 minutes, or until the edges are set but the center is still soft.",
      "Let the cakes cool in the ramekins for 1 minute, then run a knife around the edges and invert onto serving plates.",
      "Dust with powdered sugar and serve immediately, with vanilla ice cream if desired."
    ],
    category: "Desserts",
    mealTime: "Dessert",
    featured: true,
    likes: 32
  },
  {
    id: "4",
    title: "Fresh Greek Salad",
    description: "A crisp and refreshing salad with cucumbers, tomatoes, olives, and feta cheese, dressed in a simple olive oil and lemon dressing.",
    imageUrl: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      "1 large cucumber, diced",
      "4 large tomatoes, diced",
      "1 red onion, thinly sliced",
      "1 green bell pepper, diced",
      "200g feta cheese, cubed",
      "100g kalamata olives",
      "2 tablespoons extra virgin olive oil",
      "1 tablespoon lemon juice",
      "1 teaspoon dried oregano",
      "Salt and freshly ground black pepper to taste"
    ],
    ingredientSubstitutions: {
      "200g feta cheese, cubed": ["200g plant-based feta alternative", "200g firm tofu, crumbled"],
      "1 red onion, thinly sliced": ["1 shallot, thinly sliced", "3 green onions, chopped"]
    },
    instructions: [
      "In a large bowl, combine the cucumber, tomatoes, red onion, and green bell pepper.",
      "Add the feta cheese and olives to the bowl.",
      "In a small bowl, whisk together the olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss gently to combine.",
      "Let the salad sit for about 10 minutes before serving to allow the flavors to meld.",
      "Serve chilled or at room temperature."
    ],
    category: "Salads",
    mealTime: "Lunch",
    likes: 19
  },
  {
    id: "5",
    title: "Spicy Thai Basil Chicken",
    description: "A quick and flavorful Thai stir-fry with chicken, fresh basil, and chili peppers that pack a punch.",
    imageUrl: "https://images.unsplash.com/photo-1527596845196-b54e03fc7c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      "500g boneless chicken thighs, thinly sliced",
      "4 cloves garlic, minced",
      "3-4 Thai chili peppers, finely chopped",
      "1 red bell pepper, sliced",
      "1 cup fresh Thai basil leaves",
      "2 tablespoons vegetable oil",
      "1 tablespoon oyster sauce",
      "1 tablespoon soy sauce",
      "1 teaspoon fish sauce",
      "1 teaspoon sugar",
      "Cooked jasmine rice for serving"
    ],
    ingredientSubstitutions: {
      "500g boneless chicken thighs, thinly sliced": ["500g firm tofu, pressed and cubed", "500g tempeh, sliced"],
      "1 tablespoon oyster sauce": ["1 tablespoon vegetarian oyster sauce", "1 tablespoon hoisin sauce"],
      "1 teaspoon fish sauce": ["1 tablespoon soy sauce", "1 tablespoon coconut aminos"]
    },
    instructions: [
      "Heat the vegetable oil in a large wok or skillet over high heat.",
      "Add the minced garlic and chili peppers, stir-fry for 30 seconds until fragrant.",
      "Add the sliced chicken and stir-fry until it starts to brown, about 3-4 minutes.",
      "Add the red bell pepper and stir-fry for another 2 minutes.",
      "In a small bowl, mix together the oyster sauce, soy sauce, fish sauce, and sugar.",
      "Pour the sauce mixture over the chicken and stir to coat evenly.",
      "Cook for another 1-2 minutes, until the chicken is fully cooked and the sauce has thickened slightly.",
      "Remove from heat and stir in the fresh basil leaves until wilted.",
      "Serve hot over jasmine rice."
    ],
    category: "Asian",
    mealTime: "Dinner",
    likes: 28
  },
  {
    id: "6",
    title: "Classic French Croissants",
    description: "Buttery, flaky pastries that are a labor of love but worth every minute of preparation.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 60,
    cookTime: 15,
    servings: 12,
    ingredients: [
      "500g all-purpose flour, plus extra for dusting",
      "10g salt",
      "75g sugar",
      "10g instant yeast",
      "350ml cold milk",
      "300g cold unsalted butter",
      "1 egg, beaten (for egg wash)"
    ],
    ingredientSubstitutions: {
      "350ml cold milk": ["350ml almond milk", "350ml oat milk"],
      "300g cold unsalted butter": ["300g vegan butter", "300g plant-based margarine"],
      "500g all-purpose flour, plus extra for dusting": ["500g pastry flour", "500g bread flour"]
    },
    instructions: [
      "In a large bowl, mix the flour, salt, sugar, and yeast.",
      "Gradually add the cold milk and mix until a dough forms.",
      "Knead the dough for 5 minutes until smooth.",
      "Shape into a rectangle, wrap in plastic, and refrigerate for 1 hour.",
      "Place the butter between two sheets of parchment paper and flatten into a rectangle.",
      "Roll the chilled dough into a rectangle twice the size of the butter rectangle.",
      "Place the butter in the center of the dough and fold the dough over it, enclosing the butter.",
      "Roll out the dough into a long rectangle, then fold it in thirds like a letter.",
      "Refrigerate for 1 hour. Repeat the rolling and folding process two more times, with a 1-hour refrigeration in between.",
      "After the final fold, refrigerate the dough overnight.",
      "Roll out the dough to 1/4 inch thickness and cut into triangles.",
      "Roll each triangle from the base to the tip to form croissants.",
      "Place on a baking sheet, brush with egg wash, and let rise for 2 hours.",
      "Preheat the oven to 400°F (200°C).",
      "Brush the croissants with egg wash again and bake for 15-20 minutes until golden brown."
    ],
    category: "Baking",
    mealTime: "Breakfast",
    likes: 21
  }
];

export const mealTimes = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Dessert"
];

export const categories = [
  "All",
  "Italian",
  "Soups",
  "Desserts",
  "Salads",
  "Asian",
  "Baking"
];
