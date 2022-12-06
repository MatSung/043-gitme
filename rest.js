console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');

function alphabetOrder(string){
    return [...string].sort().join('');
}