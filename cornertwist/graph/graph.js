let groups = [
    {
        name: "1",
        solves: [
            // {
            //     time: 13.65*1000,
            //     scramble: "U' R2 U F2 U' B2 D' F2 B L D' R D' B' F' U' B2 L2",
            // },
        ],
    },
];
let groupIndex = 0;

function loadSolves(){
    groups = JSON.parse(localStorage.getItem('groups'));
    groupIndex = groups.findIndex(i => i.name == localStorage.getItem('selectedGroup'));
    if(groupIndex < 0){
        groupIndex = 0;
    }
}

const groupSelect = document.getElementById("groupSelect");
groupSelect.addEventListener('change', (e) => {
    selectedGroup = e.target.value;
    newI = groups.findIndex(i => i.name == selectedGroup);
    if(newI !== -1){
        groupIndex = newI;
        console.log("changed group to index "+groupIndex);
        localStorage.setItem('selectedGroup', groups[groupIndex].name);
    }
    else{
        console.log("group not found");
    }
    updateStats();
});
function updateGroupSelect(){
    groupSelect.innerHTML = '';
    groups.map((i) => {
        groupSelect.innerHTML += `<option value="${i.name}">${i.name}</option>`;
    });
    groupSelect.selectedIndex = groupIndex;
}

loadSolves();
updateGroupSelect();

const sizeSelect = document.getElementById("graphType");
const best = document.getElementById("best");
const worst = document.getElementById("worst");
const ao = document.getElementById("ao");
let aoSize = 50;
sizeSelect.addEventListener('change', (e) => {
    selectedSize = e.target.value;
    if(selectedSize == "12"){
        aoSize = 12;
    } else if(selectedSize == "50"){
        aoSize = 50;
    } else if(selectedSize == "100"){
        aoSize = 100;
    } else if(selectedSize == "all"){
        aoSize = 2147483647;
    }
    updateStats();
});

function calcAo(index, size){
    let times = groups[groupIndex].solves.slice(index-(size-1), index+1);
    let dropCount = 1;
    if(size > 12){
        dropCount = Math.ceil(size*0.05);
    }
    startDropCount = dropCount;
    while(dropCount > 0){
        let aoMax = Math.max(...times.map(t => t.time));
        let aoMin = Math.min(...times.map(t => t.time));
        times = times.filter(t => t.time !== aoMax && t.time !== aoMin);
        dropCount--;
    }
    if(times.length < size-startDropCount*2){
        return "DNF";
    }
    let ao = times.reduce((sum, t) => {
        return sum + t.time;
    }, 0);
    return ((ao/(size-2))/1000).toFixed(2);
}

let ctx = document.getElementById("canvas").getContext("2d");
function drawGraph(){
    ctx.fillStyle = "#7C7C7C";
    ctx.fillRect(0, 0, 600, 400);
    group = groups[groupIndex].solves;
    group = group.slice(group.length-1-(Math.min(aoSize,group.length)-1), group.length);
    groupTimes = group.map(t => t.time);
    spacing = 500/groupTimes.length;
    heightStart = Math.min(...groupTimes);
    heightSpacing = 300/(Math.max(...groupTimes)-heightStart);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(50, 50, 500, 1);
    ctx.fillText((heightStart/1000).toFixed(2), 5, 50);
    ctx.fillRect(50, 350, 500, 1);
    ctx.fillText((Math.max(...groupTimes)/1000).toFixed(2), 5, 350);

    for(let i = 1; i < 5; i++){
        ctx.fillStyle = "#5c5c5c";
        ctx.fillRect(50, 50+i*60, 500, 1);
    }

    groupTimes.forEach((e, i) => {
        ctx.fillStyle = "#FFB200";
        ctx.beginPath();
        ctx.arc(i*spacing+50, 350-(e-heightStart)*heightSpacing, 5, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function updateStats(){
    group = groups[groupIndex].solves
    group = group.slice(group.length-1-(Math.min(aoSize,group.length)-1), group.length);
    let bestTime = (Math.min(...group.map(t => t.time))/1000).toFixed(2);
    best.innerText = "Best: "+bestTime;
    let worstTime = (Math.max(...group.map(t => t.time))/1000).toFixed(2);
    worst.innerText = "Worst: "+worstTime;
    let aoTime = calcAo(group.length-1,Math.min(aoSize,group.length));
    ao.innerText = "ao: "+aoTime;


    drawGraph();
}
updateStats();
