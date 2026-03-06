const recipes = [
    {
        name: "Apple Crisp",
        desc: "This apple crisp recipie is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        rating: 4,
        tags: ["dessert"],
        img: "apple-crisp.jpg",
    },
];
function getStars(rating){
    let stars = "";
    for(let i = 0; i<5;i++){
        if(i<rating){
            stars+="⭐";
        }
        else{
            stars+="☆";
        }
    }
    return stars;
}
function loadRecipe(i){
    const recipe = recipes[i];
    const el = document.createElement("div");
    el.classList.add("recipe");
    el.innerHTML = `
        <img src="images/${recipe.img}">
        <div class="info">
            <div class="tags">
                ${recipe.tags.map(tag => `<p class="tag">${tag}</p>`).join('')}
            </div>
            <h2>${recipe.name}</h2>
            <span class="rating" aria-label="Rating: ${recipe.rating} out of 5 stars">${getStars(recipe.rating)}</span>
            <p class="desc">${recipe.desc}</p>
        </div>
    `;
    document.querySelector("main").appendChild(el);
}
loadRecipe(0);
/*
<div class="recipe">
            <img src="images/apple-crisp.jpg">
            <div class="info">
                <div class="tags">
                    <p class="tag">dessert</p>
                    <p class="tag">dessert</p>
                </div>
                <h2>Apple Crisp</h2>
                <span class="rating" aria-label="Rating: 4 out of 5 stars">⭐⭐⭐⭐☆</span>
                <p class="desc">This is the desc of apple crisp</p>
            </div>
        </div>
*/