

const builtIn = [
    "U' R2 U F2 U' B2 D' F2 B L D' R D' B' F' U' B2 L2",
    "D B2 R2 U' R2 D' F2 U F2 U' F2 L F U2 R D L D2 B2 F' U'",
    "F2 D' B2 D2 B2 D' L2 D R2 D L2 D' F' U' B L' D B' U2 F' U2",
    "U2 F2 L2 D2 B' L2 F D2 B' L2 F U' F2 D L F2 U' R2 F2 U'",
    "L F' L U2 F2 R2 U B2 D' L2 D U2 L2 B2 L B R D2 L' B' D",
    "L B2 L B2 F2 L2 B2 U2 R F2 L' U' F L D2 B L2 D' R'",
    "D' F' R2 B' D2 F' R2 D2 F R2 U2 F U2 L' D2 R' B' L2 B2 D",
    "L F' L2 B L2 F U2 F' U2 F L2 U2 D F R F2 R' B F2",
    "U2 B2 L2 D' F2 D L2 R2 B2 U R2 U' B' D' L B2 R2 F R2 F",
    "D' F' R' D2 R D2 R U2 L' R2 U2 B2 D2 B' U' F R D2 F'",
    "L' D' B2 L' F' L' D R B2 L2 D2 R' U2 L F2 U2 L' B2 D2 U'",
    "D B L' B D2 B' R2 L U' R2 D R2 D2 B2 D' R2 D F2 R2 L2",
    "B R2 D' R2 B2 R2 F2 U R2 D2 B2 D B D' L' D' B D F' L2",
    "R2 D' L2 D F2 D U F2 L2 B2 L2 F' D2 U L' R D2 U L B' L'",
    "R F2 D2 L' D2 L D2 F2 R B2 R' D' L2 R F2 D' U' F' U'",
    "R' F2 L2 B2 R' F2 U2 B2 R F2 U' B R' D B2 L2 U2 B U",
    "R2 D2 B2 F2 L B2 F2 L' F2 D2 U F2 L' B L2 R' F R D B2",
    "L' U2 R' B2 L2 F2 D2 B2 R F L B2 R F2 D' F L' U R",
    "F' D2 B R2 B2 D2 L2 B2 U2 R2 F L' D' U' L B' F2 R' U' F D2",
    "L2 F2 U' B2 D L2 U2 B2 U B2 U R U B' U L' B' U F D' B2",
    "B2 D B2 R B D F2 D' L' R2 U2 L2 F' R2 F B2 D2 R2 B' D2",
    "L' F R' U' L' D L' F B2 U2 B' U2 F L2 B R2 B' D",
    "U D' R' F2 U B' D2 R' F D2 R2 D L2 U' F2 U R2 L2 U' R2 F2",
    "U L2 B' D R F2 U' B' U L D2 B2 R B2 L F2 R2 U2 F2 L",
    "B2 R U2 R B2 F2 L U2 L2 B2 U2 L' U' F' L2 F' L' B' U' R2 D",
    "R' D' R2 U F2 R2 B2 D2 B2 U F2 R F' L' D B D2 F2 L' B2",
    "U2 F' L2 U L2 U B2 D L2 U' B2 D' F L2 R B' D2 U L' U",
    "F L2 B2 L' B2 L U2 R B2 F2 R U R' B' L' U' B2 L2 R",
    "U2 B2 R2 D U2 L2 U B2 D B2 U F L2 B D' L' B U2 L F2 U",
    "F U2 B' F' L2 F' U2 R2 U2 R F2 D' B U' R D2 L R2 D'",
    "D' R2 D2 R2 B2 R' D2 B2 R' F2 R B' L2 B2 F' R' U2 B",
    "U2 L D2 R' U2 R' B2 D2 L2 D2 R2 D L D L B F' D B2 R",
    "B2 R D2 B2 D' L2 B' U' B2 U' L2 D2 B2 R2 B2 D R2 U' R F'",
    "F2 R' D2 L' D2 L B2 R D2 B2 L' F2 B U2 B' F2 U' L U2 R2 F'",
    "L2 D2 L2 B' U2 B2 L2 D2 L2 F' L2 F' U' R' U2 F' L2 B2 U F R2",
    "L2 U L2 U2 L2 F2 R2 D L2 D2 L2 B2 R' U' F' L F' R B' U2 F2",
    "U2 B2 D2 B2 U' L2 F2 D B2 R2 L' B2 U' R' B F R2 U' F2 U",
    "D2 B F2 R2 U2 B2 D2 F2 L U2 R' B2 R2 B2 D' B' R B' R U2 R2",
    "R2 D2 R' B2 R' D2 F2 L B2 D2 B2 U B F R2 U L2 D2 F2 L' R'",
    "F' D2 F' B2 L2 D' U2 L2 D F2 U F2 R' B L F D' R D",
    "B' D B2 F2 L2 B2 D' F2 U L2 D2 L2 F U' L F2 U L D2 B",
    "B' R2 F' U L' F B' U B2 R2 D' R2 L2 U' F2 U' L2 D R' F'",
    "D' R F L2 F2 U L2 D L2 F2 U B2 F2 D R D' L2 B F' L' B'",
    "F D2 R2 D2 U L2 R2 F2 U' B2 R2 L' U' R U2 B' F' R B2 F2",
    "F' L B' U2 R' D R2 B U2 R2 U L2 D2 L2 B2 U2 B2 D' L2 B",
    "F D' L2 D2 B2 U F2 U' R2 F2 L2 F' U L F2 L2 D B' F'",
    "U2 B D2 F2 U2 F' R2 U2 B L2 F' R2 D B R2 D' B2 D' F2 R F",
    "D' B' L2 U2 F U2 F' D2 F' D2 L2 F2 L2 U R F U' L' U B' U'",
    "F' R2 U L2 F2 L2 U F2 D' U2 F2 D' F L' B' R' F D F2 R'",
    "U2 F L U' B2 D2 B2 R2 D L2 B2 D' L2 R2 B' F2 U' R' F U2 L",
    "D' B2 L2 D L2 F2 D2 R2 U' L2 U B2 L' R' F' U B' L2 F' D' F",
    "U B' L2 U2 L2 D L2 B2 F2 D' F2 D B2 R2 B' D' F2 L' B L B'",
    "B2 D' L2 U F2 U' B2 D F2 U R2 U R' F D F R B2 U' L' B'",
    "F' R2 D' B2 F2 D U2 B2 D2 R2 U' B L' F2 L2 D L' F U B2",
    "U' L' D' R2 U2 L2 U B2 R2 U' L2 R2 U L B F R' B U' L2 U'",
    "U F2 L' B2 R2 U2 R2 D B2 U2 B2 F L D' R B2 U R",
    "B D2 R2 U R2 U2 B2 D' B2 U' R2 D2 F D2 B2 U F R' U2 B",
    "B2 D2 U B2 U' R2 D R2 L U2 L B' D' B2 F2 U L' F'",
    "L R2 U2 B2 U R2 U' R2 F2 D R2 U' R B' D' R' D U2 F",
    "U B D R B U R F' U2 D2 B D2 B R2 F' D2 F2 L B2",
    "F R' D2 R' F2 U2 R F2 R2 D2 L' U2 R D U2 B F U' L R",
    "D F' U R2 U L2 B2 D2 B2 U L2 B2 L2 R' F' U F2 U F L' D'",
    "U' B R' F2 L' D' L' D' B' F2 U' F2 R2 U2 R2 B2 U F2 D F2 D2",
    "R' F R B D2 F L2 D2 R2 D2 F D2 B2 D' U2 R' U' F2 D' L",
    "U' D F2 R' L2 D' F2 B' R' L2 B R2 L2 U2 R2 B2 D2 B'",
    "D' R2 D B2 F2 D B2 R2 B2 U2 B2 D2 R B2 D B L B2 D R F",
    "L B' D2 R' L' U R L2 D R2 D R2 B2 U L2 B2 L2 U' B2",
    "R2 D' L F2 D2 L' D2 F2 R2 U2 B2 R F2 U L2 D2 B' R D L2",
    "D' F L D2 B2 R F D' U2 R' U2 R U2 F2 R2 D2 L F2 R",
    "U' F2 R2 D' U2 F2 L2 F2 L2 D R' U' B F D L2 B' U L2 U",
    "R' B2 L' D2 L' D2 F2 L' U2 F2 L B L2 R' B' L F2 D U' B' R2",
    "R' U2 F2 L2 D2 B D2 F' U2 B2 U2 R2 U2 D' B2 L' D' B' D' U' B'",
    "R L2 D' R2 U' L2 R2 B2 D' B2 D F2 U F L' B R' U L B'",
    "L' U2 B' R2 F2 L2 B' D2 B' U2 F R2 D' R' U2 R2 U B2 R U2",
    "B2 L2 D2 B2 F2 U R2 D2 F2 D' R2 F L U L' R2 D' R2 B F2",
    "U2 B2 D2 F L2 U2 B' R2 U2 B2 R2 F D' B' F2 D B D' R' F L'",
    "R2 L F U' R' B' U B' L2 F' D2 F' U2 L2 F L2 U'",
    "B' D F L' F2 U' L B U2 L2 D' F2 U' D2 R2 U R2 F2 R2 B2",
    "D2 B2 U L2 U2 B2 U' F2 L2 F2 R' U' B' D' U2 R2 F2 R' B'",
    "R' B' U' R2 D' L2 U' L2 U' L2 D R2 F2 L2 F' R' F' D' B2 R2 F",
    "F B2 D F2 D' B2 D2 F2 L2 R2 D' B2 L' D B L U B2 U2 B2",
    "D2 F U B2 F2 U L2 D R2 D' R2 D F2 U' F' U B' L R D U",
    "D2 R2 D' F2 R2 D R2 D' R2 B2 U' B' D' L' B' R D L B' U' B'",
    "B2 U2 F2 U2 L' F2 R2 F2 D2 L' D R U' B F D B' D' L' U2",
    "L D' R2 D2 F L' U F R U F2 R2 L2 U' B2 D' R2 B2 U F2 D'",
    "F' D R2 F R2 F2 D' B L D' R2 U' R2 F2 L2 B2 U F2 D' F2 U",
    "U2 F' U L2 D U L2 U R2 F2 L2 F2 L F L2 B U2 B R'",
    "U2 B U B L U R U' D F2 R D2 F2 R2 B2 R' U2 L2 D2 B2",
    "U2 L2 B' U' R2 B2 D2 F2 D' B2 R2 D' R B' L D' F2",
    "U2 F' R' B D2 L B' R' U F U2 F' L2 F D2 F' R2 F R2 B U2",
    "L2 U2 R2 F2 U L2 R2 B2 U' R2 U2 R2 F' R' B D' B' R2 B2 L B'",
    "B2 U2 B2 U2 R2 B' D2 F' L2 F2 R F' D R B' L2 R' F L2",
    "U2 F2 D' R D' R U D2 F R2 F' U2 F2 R2 B' U2 F' L2 U R",
    "U B2 L2 B' U R2 F2 L' B2 U' L2 B2 U' F2 L2 D2 L2 U D2 R'",
    "F D2 F D2 B2 R2 F' D2 F R2 L F2 U2 F' L D' F U' F",
    "B' U' R2 L2 U' B2 R B D L2 B2 R2 D2 B2 L D2 R' U2 L' F2 R",
    "B L' D' F' U' L' B D' B R2 D L2 D F2 D L2 B2 D L2 U2",
    "B U R D' F' R' L D' R L2 U D2 L2 D' F2 U R2 F2 U2 R2 D'",
    "D B2 L F2 U2 R2 U2 L B2 L D2 U2 R' D' R U2 R2 F' U2 F2 L2",
    "U L2 U' F2 L2 D2 B2 L2 U2 F2 L2 R' D2 U' B D B2 F' D2 L' U'"
];
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
const timer = document.getElementById("timer");
let timerStarted = false;
const scramble = document.getElementById("scrambleDisplay");

function newScramble(){
    scramble.innerText = builtIn[Math.floor(Math.random()*builtIn.length)];
};
newScramble();
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
        if(timerStarted){
            groups[groupIndex].solves.push({
                time: Date.now() - timerTime,
                scramble: scramble.innerText
            });
            updateSolves();
            clearInterval(runTimer);
            timer.style.color = 'lime';
            newScramble();
        }
        else{
            timer.style.color = 'red';
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === " ") {
        event.preventDefault();
        if(timer.style.color == 'red' && groups[groupIndex].solves != undefined){
            timerStarted = true;
            timerTime = Date.now();
            runTimer = setInterval(updateTimer, 10);
        }
        else {
            timerStarted = false;
        }
        timer.style.color = 'black';
    }
});
function updateTimer(){
    timer.innerText = ((Date.now() - timerTime)/1000).toFixed(1);
}
const groupSelect = document.getElementById("groupSelect");
const groupSelectOptions = `<option value="New">New</option><option value="Delete">Delete</option>`;
groupSelect.addEventListener('change', (e) => {
    selectedGroup = e.target.value;
    if(selectedGroup == "New"){
        newG = prompt("Name for new group:");
        console.log(newG);
        if(groups.findIndex(i => i.name == newG) == -1 && newG != "New" && newG != "Delete" && newG != null && newG != ''){
            groups.push(
                {
                    name: newG,
                    solves: [],
                }
            );
        }
        groupIndex = groups.length-1;
        updateGroupSelect();
        updateSolves();
    }
    else if(selectedGroup == "Delete"){
        delG = prompt("Name of group to be deleted:");
        delI = groups.findIndex(i => i.name == delG);
        if(delI > -1){
            groups.splice(delI, 1);
        }
        console.log(groups);
        console.log("deleted group "+delG+" at index "+delI);
        console.log("current group index "+groupIndex);
        if(delI <= groupIndex){
            groupIndex--;
        }
        updateGroupSelect();
        updateSolves();
        
    }
    else {
        newI = groups.findIndex(i => i.name == selectedGroup);
        if(newI !== -1){
            groupIndex = newI;
            console.log("changed group to index "+groupIndex);
            updateSolves();
        }
        else{
            console.log("group not found");
        }
    }
    
});
function updateGroupSelect(){
    groupSelect.innerHTML = '';
    groups.map((i) => {
        groupSelect.innerHTML += `<option value="${i.name}">${i.name}</option>`;
    });
    groupSelect.innerHTML += groupSelectOptions;
    groupSelect.selectedIndex = groupIndex;
}
const resultsTable = document.querySelector("#results table");
function calcAo(index, size){
    let times = groups[groupIndex].solves.slice(index-(size-1), index+1);
    let dropCount = 1;
    if(size > 12){
        dropCount = Math.ceil(size*0.05);
    }
    while(dropCount > 0){
        let aoMax = Math.max(...times.map(t => t.time));
        let aoMin = Math.min(...times.map(t => t.time));
        times = times.filter(t => t.time !== aoMax && t.time !== aoMin);
        dropCount--;
    }
    // let aoMax = Math.max(...times.map(t => t.time));
    // let aoMin = Math.min(...times.map(t => t.time));
    // times = times.filter(t => t.time !== aoMax && t.time !== aoMin);
    if(times.length < size-2){
        return "DNF";
    }
    let ao = times.reduce((sum, t) => {
        return sum + t.time;
    }, 0);
    return ((ao/(size-2))/1000).toFixed(2);
}
function updateSolves(){
    resultsTable.innerHTML = '';
    groups[groupIndex].solves.map((solve,i) => {
        resultsTable.innerHTML = `
        <tr>
            <td>${i+1}</td>
            <td>${(solve.time/1000).toFixed(2)}</td>
            <td>${calcAo(i,5)}</td>
            <td>${calcAo(i,12)}</td>
        </tr>` + resultsTable.innerHTML;
    });
    resultsTable.innerHTML = `
        <tr>
            <th>#</th>
            <th>Time</th>
            <th>Ao5</th>
            <th>Ao12</th>
        </tr>` + resultsTable.innerHTML;
    saveSolves();
}

function saveSolves(){
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('selectedGroup', groups[groupIndex].name);
}
function loadSolves(){
    groups = JSON.parse(localStorage.getItem('groups'));
    groupIndex = groups.findIndex(i => i.name == localStorage.getItem('selectedGroup'));
    if(groupIndex < 0){
        groupIndex = 0;
    }
}

if(localStorage.getItem('groups') !== null){
    loadSolves();
    updateGroupSelect();
    updateSolves();
}