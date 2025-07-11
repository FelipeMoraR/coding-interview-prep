function groupAnagrams(strs: string[]): string[][] {
    const memo = new Map();

    strs.forEach(str => {
        const key = str.split('').sort().join('');
        if (memo.has(key)) {
            const prev = memo.get(key);
            memo.set(key, [...prev, str]);
        } else {
            memo.set(key, [str]);
        }
    });

    return Array.from(memo.values());
};
