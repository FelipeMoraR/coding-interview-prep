function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    
    
    return s.split('').sort().join('') === t.split('').sort().join('')
};

function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const hashS = new Map();
    const hashT = new Map();

    for (let i: number = 0; i < s.length; i++) {
        if (hashS.has(s[i])) hashS.set(s[i], hashS.get(s[i]) + 1)
        else hashS.set(s[i], 1)

        if (hashT.has(t[i])) hashT.set(t[i], hashT.get(t[i]) + 1)
        else hashT.set(t[i], 1)
    }

    for (let [k, v] of hashT) {
        if (!hashS.has(k)) return false;
        if (hashS.get(k) !== v) return false;
    }

    return true
};
