let obj : object[];
obj = [{ name : "sajib"}, {name : "anis"}];

let obj2 : {userName : string, userid? : number};
obj2 = {userName : "anis", userid : 1};

const bigObj : {id : number, name: string}[] = [{id:1, name : "anis"}, {id:2, name : "sajib"}];

for(const key in bigObj){
    console.log(bigObj[key].name);
    
}
