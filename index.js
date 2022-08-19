// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//destructively append
function destructivelyAppendCat(name){
cats.push(name)
}
destructivelyAppendCat(Ralph);

// destructively prepend
function destructivelyPrependCat(name){
    cats.unshift(name)
    }
destructivelyPrependCat(Bob);

//destructively remove last cat
function destructivelyRemoveLastCat(){
    cats.pop()
};

function destructivelyRemoveFirstCat(){
    cats.shift()
};

function appendCat(){
   return [...cats, "Broom"]
};

function prependCat(){
    return ["Arnold", ...cats]
};
 
function removeLastCat(){
    return cats.slice(0,-1)
// or return cats.slice(0, cats.length -1)
}

function removeFirstCat(){
    return cats.slice(1)
}
