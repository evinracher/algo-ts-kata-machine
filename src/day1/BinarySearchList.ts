export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const mi = Math.floor(lo + (hi - lo) / 2);
        const currValue = haystack[mi];
        
        if (currValue == needle) {
            return true;
        }

        if (currValue < needle) {
            lo = mi + 1;
        } else {
            hi = mi;
        }
    }

    return false;
}