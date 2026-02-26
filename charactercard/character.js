const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    img: ('./img/snortleblat.webp'),
    attacked: function(){
        this.health-=20;
        updateStats(this);
        if(this.health <= 0){
            alert(this.name + " is dead!");
        }
    },
    levelUp: function(){
        this.level++;
        updateStats(this);
    },
};

function loadCharacter(c){
    console.log(c);
    document.querySelector(".name").innerText = c.name;
    img = document.querySelector(".image");
    img.src = c.img;
    img.alt = "image of "+c.name;
    updateStats(c);
    const buttons = document.querySelectorAll(".buttons button");
    buttons[0].addEventListener("click", () => c.attacked());
    buttons[1].addEventListener("click", () => c.levelUp());

}
function updateStats(c){
    const stats = document.querySelectorAll(".stats p")
    stats[0].innerText = 'Class: '+c.class;
    stats[1].innerText = 'Level: '+c.level;
    stats[2].innerText = 'Health: '+c.health;
}

loadCharacter(characterCard);