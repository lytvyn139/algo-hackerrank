//https://www.hackerrank.com/challenges/angry-professor/



function angryProfessor(k, a) {
    for (const t of a) {
        if (t <= 0 && --k <= 0) return 'NO';
    }
    return 'YES';

}

function angryProfessor(k, a) {
    let count=0
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<=0)
        {
            count++;
        }
    }
    if(count>=k)
    {
        return "NO"
    }
    else
    {
        return "YES"
    }
}

