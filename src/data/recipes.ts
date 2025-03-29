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
  steps?: string[]; // Supporting user recipes
  category: string;
  mealTime?: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert";
  difficulty: "Easy" | "Medium" | "Hard";
  featured?: boolean;
  likes?: number;
  userId?: string; // For user-created recipes
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
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
    difficulty: "Easy",
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
    likes: 24,
    nutritionalInfo: {
      calories: 320,
      protein: 14,
      carbs: 42,
      fat: 12
    }
  },
  {
    id: "2",
    title: "Creamy Butternut Squash Soup",
    description: "A warm and comforting soup perfect for fall evenings, made with roasted butternut squash and a touch of cream.",
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ba2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
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
    likes: 16,
    nutritionalInfo: {
      calories: 210,
      protein: 3,
      carbs: 25,
      fat: 13
    }
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a gooey, molten chocolate center that flows like lava when you cut into them.",
    imageUrl: "https://images.unsplash.com/photo-1617191880520-c6022639ff2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: "Medium",
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
    likes: 32,
    nutritionalInfo: {
      calories: 410,
      protein: 6,
      carbs: 38,
      fat: 26
    }
  },
  {
    id: "4",
    title: "Fresh Greek Salad",
    description: "A crisp and refreshing salad with cucumbers, tomatoes, olives, and feta cheese, dressed in a simple olive oil and lemon dressing.",
    imageUrl: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
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
    likes: 19,
    nutritionalInfo: {
      calories: 180,
      protein: 7,
      carbs: 12,
      fat: 13
    }
  },
  {
    id: "5",
    title: "Spicy Thai Basil Chicken",
    description: "A quick and flavorful Thai stir-fry with chicken, fresh basil, and chili peppers that pack a punch.",
    imageUrl: "https://images.unsplash.com/photo-1527596845196-b54e03fc7c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
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
    likes: 28,
    nutritionalInfo: {
      calories: 350,
      protein: 28,
      carbs: 15,
      fat: 20
    }
  },
  {
    id: "6",
    title: "Classic French Croissants",
    description: "Buttery, flaky pastries that are a labor of love but worth every minute of preparation.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 60,
    cookTime: 15,
    servings: 12,
    difficulty: "Hard",
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
    likes: 21,
    nutritionalInfo: {
      calories: 280,
      protein: 5,
      carbs: 30,
      fat: 16
    }
  },
  {
    id: "7",
    title: "Homemade Mexican Tacos",
    description: "Authentic Mexican street-style tacos with seasoned meat, fresh cilantro, onions, and lime.",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g ground beef or diced chicken",
      "8-12 small corn tortillas",
      "1 onion, finely diced",
      "1/2 cup fresh cilantro, chopped",
      "2 limes, cut into wedges",
      "2 tablespoons vegetable oil",
      "2 tablespoons taco seasoning",
      "Salt to taste",
      "Optional toppings: avocado, salsa, cheese"
    ],
    ingredientSubstitutions: {
      "500g ground beef or diced chicken": ["500g plant-based ground meat", "500g mushrooms and walnuts, minced"],
      "8-12 small corn tortillas": ["8-12 small flour tortillas", "8-12 lettuce leaves for a low-carb option"]
    },
    instructions: [
      "Heat oil in a skillet over medium-high heat.",
      "Add meat and cook until browned, about 5-7 minutes.",
      "Stir in taco seasoning and 1/4 cup water, simmer for 5 minutes until liquid reduces.",
      "Meanwhile, warm tortillas in a dry skillet or directly over a gas flame for 30 seconds per side.",
      "Serve meat in tortillas, topped with diced onion and cilantro.",
      "Squeeze lime over tacos before eating.",
      "Add optional toppings as desired."
    ],
    category: "Mexican",
    mealTime: "Dinner",
    likes: 34,
    nutritionalInfo: {
      calories: 320,
      protein: 24,
      carbs: 18,
      fat: 16
    }
  },
  {
    id: "8",
    title: "Vietnamese Pho Soup",
    description: "A fragrant Vietnamese noodle soup with aromatic broth, rice noodles, herbs and your choice of protein.",
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 30,
    cookTime: 120,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "2 kg beef bones",
      "1 large onion, halved",
      "6 cm piece ginger, sliced",
      "5 star anise",
      "4 cloves",
      "1 cinnamon stick",
      "1 tablespoon coriander seeds",
      "2 tablespoons fish sauce",
      "500g rice noodles",
      "300g thinly sliced beef",
      "Fresh herbs (Thai basil, cilantro, mint)",
      "Bean sprouts, lime wedges, sliced chilies for serving"
    ],
    ingredientSubstitutions: {
      "2 kg beef bones": ["2 liters vegetable broth plus 1 tablespoon miso paste", "2 liters mushroom broth"],
      "2 tablespoons fish sauce": ["2 tablespoons soy sauce plus 1/2 teaspoon sugar", "2 tablespoons coconut aminos"]
    },
    instructions: [
      "Preheat oven to 450°F (230°C). Roast beef bones for 30 minutes until browned.",
      "Char the onion and ginger in a dry pan or over an open flame until blackened.",
      "Transfer bones to a large pot with 5 liters of water, bring to a boil, then reduce to a simmer.",
      "Add onion, ginger, star anise, cloves, cinnamon stick, and coriander seeds.",
      "Simmer uncovered for 2-3 hours, skimming occasionally.",
      "Strain broth and return to pot. Add fish sauce and adjust seasoning.",
      "Cook rice noodles according to package instructions.",
      "Divide noodles among bowls, top with thinly sliced raw beef.",
      "Pour hot broth over beef (it will cook from the heat of the broth).",
      "Serve with fresh herbs, bean sprouts, lime wedges, and chilies on the side."
    ],
    category: "Asian",
    mealTime: "Dinner",
    likes: 27,
    nutritionalInfo: {
      calories: 380,
      protein: 26,
      carbs: 48,
      fat: 8
    }
  },
  {
    id: "9",
    title: "Mediterranean Quinoa Salad",
    description: "A fresh and protein-rich Mediterranean salad with quinoa, vegetables, olives, and feta cheese.",
    imageUrl: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water or vegetable broth",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely diced",
      "1/2 cup kalamata olives, pitted and halved",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "3 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    ingredientSubstitutions: {
      "1/2 cup feta cheese, crumbled": ["1/2 cup vegan feta alternative", "1/2 cup marinated tofu, crumbled"],
      "1 cup quinoa, rinsed": ["1 cup couscous", "1 cup bulgur wheat"]
    },
    instructions: [
      "Combine quinoa and water in a saucepan. Bring to a boil, then reduce to a simmer.",
      "Cover and cook for 15 minutes until water is absorbed and quinoa is fluffy.",
      "Let quinoa cool to room temperature.",
      "In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, and parsley.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour dressing over the salad and toss to combine.",
      "Gently fold in the crumbled feta cheese.",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld."
    ],
    category: "Salads",
    mealTime: "Lunch",
    likes: 22,
    nutritionalInfo: {
      calories: 290,
      protein: 9,
      carbs: 32,
      fat: 15
    }
  },
  {
    id: "10",
    title: "Classic Beef Wellington",
    description: "An impressive dish of tender beef fillet wrapped in mushroom duxelles, prosciutto, and puff pastry.",
    imageUrl: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 45,
    cookTime: 40,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "1.5 kg beef tenderloin",
      "500g mushrooms, finely chopped",
      "4 shallots, finely chopped",
      "4 cloves garlic, minced",
      "12 slices prosciutto",
      "500g puff pastry",
      "2 tablespoons Dijon mustard",
      "2 tablespoons olive oil",
      "2 egg yolks, beaten",
      "2 tablespoons fresh thyme leaves",
      "Salt and pepper to taste"
    ],
    ingredientSubstitutions: {
      "1.5 kg beef tenderloin": ["1.5 kg plant-based roast", "1.5 kg mushroom and seitan roast"],
      "12 slices prosciutto": ["12 slices vegan prosciutto", "12 slices roasted eggplant"]
    },
    instructions: [
      "Season beef with salt and pepper. Heat oil in a pan over high heat and sear the beef on all sides.",
      "Remove beef and let cool. Brush with Dijon mustard.",
      "In the same pan, cook mushrooms, shallots, and garlic until all moisture evaporates.",
      "Add thyme, season with salt and pepper, and let cool completely.",
      "Lay out plastic wrap and arrange prosciutto slices in a rectangle.",
      "Spread mushroom mixture (duxelles) over the prosciutto.",
      "Place beef in the center and use the plastic wrap to tightly roll the prosciutto and duxelles around the beef.",
      "Refrigerate for 30 minutes.",
      "Roll out puff pastry and unwrap the beef onto it.",
      "Fold pastry around beef, trimming excess. Seal edges with egg wash.",
      "Brush entire pastry with egg wash and cut a few small vents in the top.",
      "Bake at 425°F (220°C) for 40-45 minutes for medium-rare, or until pastry is golden.",
      "Let rest for 10 minutes before slicing and serving."
    ],
    category: "French",
    mealTime: "Dinner",
    likes: 31,
    nutritionalInfo: {
      calories: 650,
      protein: 45,
      carbs: 28,
      fat: 40
    }
  },
  {
    id: "11",
    title: "Berry Breakfast Parfait",
    description: "A beautiful layered breakfast with yogurt, fresh berries, granola, and honey.",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "2 cups Greek yogurt",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/2 cup granola",
      "2 tablespoons honey or maple syrup",
      "1 tablespoon chia seeds (optional)",
      "Fresh mint leaves for garnish"
    ],
    ingredientSubstitutions: {
      "2 cups Greek yogurt": ["2 cups coconut yogurt", "2 cups almond yogurt"],
      "1/2 cup granola": ["1/2 cup toasted nuts and seeds", "1/2 cup crushed graham crackers"]
    },
    instructions: [
      "In two glasses or mason jars, begin layering with 1/4 cup yogurt in each.",
      "Add a layer of mixed berries.",
      "Add a layer of granola.",
      "Repeat the layers, ending with yogurt on top.",
      "Drizzle with honey or maple syrup.",
      "Sprinkle with chia seeds if using.",
      "Garnish with fresh mint leaves.",
      "Serve immediately or refrigerate for up to 12 hours."
    ],
    category: "Breakfast",
    mealTime: "Breakfast",
    likes: 18,
    nutritionalInfo: {
      calories: 280,
      protein: 17,
      carbs: 36,
      fat: 9
    }
  },
  {
    id: "12",
    title: "Homemade Tiramisu",
    description: "An elegant Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      "6 egg yolks",
      "3/4 cup white sugar",
      "2/3 cup milk",
      "1 1/4 cups heavy cream",
      "1/2 teaspoon vanilla extract",
      "500g mascarpone cheese",
      "24 ladyfinger cookies",
      "1/2 cup strong coffee, room temperature",
      "2 tablespoons rum (optional)",
      "2 tablespoons unsweetened cocoa powder",
      "Dark chocolate shavings for garnish"
    ],
    ingredientSubstitutions: {
      "500g mascarpone cheese": ["500g vegan cream cheese mixed with 2 tablespoons coconut cream", "500g silken tofu blended with 2 tablespoons lemon juice"],
      "6 egg yolks": ["1/2 cup aquafaba (chickpea water)", "6 tablespoons plant-based egg substitute"]
    },
    instructions: [
      "In a medium saucepan, whisk together egg yolks and sugar until well blended.",
      "Whisk in milk and cook over medium heat, stirring constantly, until mixture boils.",
      "Boil gently for 1 minute, then remove from heat and allow to cool slightly.",
      "Cover tightly and chill in refrigerator for 1 hour.",
      "In a medium bowl, beat cream with vanilla until stiff peaks form.",
      "Whisk mascarpone into the yolk mixture until smooth.",
      "Gently fold in the whipped cream into the mascarpone mixture.",
      "Mix coffee and rum in a shallow dish.",
      "Quickly dip each ladyfinger in coffee mixture (don't soak them) and arrange in the bottom of a 8x8 inch dish.",
      "Spread half the mascarpone mixture over the ladyfingers.",
      "Repeat with a second layer of dipped ladyfingers and remaining mascarpone mixture.",
      "Cover and refrigerate for at least 4 hours, preferably overnight.",
      "Before serving, dust with cocoa powder and garnish with chocolate shavings."
    ],
    category: "Desserts",
    mealTime: "Dessert",
    likes: 29,
    nutritionalInfo: {
      calories: 420,
      protein: 8,
      carbs: 35,
      fat: 27
    }
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
  "Italian",
  "Soups",
  "Desserts",
  "Salads",
  "Asian",
  "Baking",
  "Mexican",
  "French",
  "Breakfast"
];

export const difficulties = ["All", "Easy", "Medium", "Hard"];
