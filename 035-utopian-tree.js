//https://www.hackerrank.com/challenges/utopian-tree
const n = 5;
function utopianTree(n) {
    let height = 1;
    for(let i = 1; i < n+1; i++){
        if(i % 2 == 0){ 
          // even cycle tree grows by 1
            height += 1;            
        }
        // odd cycle tree doubles
        else{ 
            height *= 2;
        }
    }
    return height;
}
utopianTree(5);

// const n = 5;
// let meters = 1;
// if(n != 0)
//     for(let j = 1; j <= n; j++)
//         j%2 == 0 ? meters++ : meters *= 2;
// return meters;
// utopianTree(5);