class Solution {
    encode(strs) {
        let strEncoded = '';
        strs.forEach(str => {
            strEncoded = strEncoded + [str.length, '#', str].join('');
        })
        console.log(strEncoded);
        return strEncoded;
    }

    decode(str) {
        const strIterable = str.split('');
        const valueToReturn = [];
        for (let i = 0; i < strIterable.length; i++) {
            const indexFirstHashtagFinded = strIterable.slice(i).findIndex(el => el === '#');
            const num = Number(strIterable.slice(i, i + indexFirstHashtagFinded).join(''));
            
            if (num === 0 && indexFirstHashtagFinded >= 0) {
                valueToReturn.push('');
                i = i + 1 + num;
                continue;
            }
            if (num && indexFirstHashtagFinded >= 0) {
                const strDecoded = strIterable.slice(i + indexFirstHashtagFinded + 1, i + indexFirstHashtagFinded + 1 + num).join('');
                valueToReturn.push(strDecoded);
                i = i + 1 + num;
            }
        }
    
        return valueToReturn;
    }
}
