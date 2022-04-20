const fs = require('fs');
const list = process.argv[2];

const data = fs.readFileSync('list.txt', 'utf8');
const listArray = data.split(' ').map(function(item){
    return  parseInt(item, 10);
});


// Tri par fusion (merge)

const merge = (left, right) => {
  comparaison = 0;
    var tab = [], l = 0, r = 0;
    while (l < left.length && r < right.length){
        comparaison++
        if (left[l] < right[r]){
            tab.push(left[l++]);
        } else {
            tab.push(right[r++]);
        }
    }
    return tab.concat(left.slice(l)).concat(right.slice(r));
}


const sort = (tab) => {
    
    if (tab.length < 2) {
        return tab;
    }
    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, tab.length);
    comparaison++;
    tab.splice.apply(tab, p);
    return tab;
    
}
tab = listArray
sort(tab);

console.log(`Tri fusion : ${comparaison} comparaisons => [${tab}]. `);




