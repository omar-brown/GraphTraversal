// The Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE MUC TUN HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjecancyList = new Map();

function addNode(airport){
    adjecancyList.set(airport, [])
}
function addEdge(origin, destination){
    adjecancyList.get(origin).push(destination);
    adjecancyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route))
console.table(adjecancyList)

//Breadth First Search

function bfs(start){
    const queue = [start];
    const visited = new Set();
    
    while(queue.length > 0){

        const airport = queue.shift();

        const destinations = adjecancyList.get(airport);
        console.log(`Airport: ${airport}  Destinations: ${destinations} Queue: ${queue} `)
        for(const destination of destinations){
            
            if(destination === 'BKK'){
                console.log('Found it!')
            }
            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
            }
        }
    }
}
bfs('PHX')

// Depth-First Search

function dfs(start, visited){
    visited.add(start);
    const destinations = adjecancyList.get(start);
    for(const destination of destinations){
        if(destination === 'BKK'){
            console.log('Found it!')
            return
        }
        if(visited.has(destination)){
            dfs(destination, visited)
        }

    }
}
dfs('PHX', new Set())