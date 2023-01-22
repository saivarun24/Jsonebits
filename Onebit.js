var hammingWeight = function(n) {
    for (i=0; i<32; i++) {
        var mask = 1;
        var count = 0;
        if ((mask & n) != 0 ) {            
            mask <<= 1;
            count++;
        }    
        return count;
    }
};
