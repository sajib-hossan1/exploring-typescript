type users = {
    id : number,
    name : string,
    married? : boolean
}

let obj3 : users = {
    id : 1,
    name : "anis",
    married : false
}

let obj4 : users = {
    id :2,
    name : "anis",
    married : true
}

let obj5 : users[] = [
    { id :2, name : "bhai", married : true},
    { id :3, name : "bhai bhai", married : true},
    { id :4, name : "bhai ka bhai", married : false}
]



type request = "Get" | "Post";

let need : request = "Get"

function needData(request : request){
    console.log(request);
    
}

needData("Post")