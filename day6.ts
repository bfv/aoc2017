
(function() {

    //let day6Input = [0, 2, 7, 0];
    let day6Input = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];
    let done: Array<string> = [];

    let answer6 = redistribute(getIndexOfHigest(day6Input), day6Input, false);
    let answer6b = redistribute(getIndexOfHigest(day6Input), day6Input, true);
    console.log('day6a:', answer6);
    console.log('day6b:', answer6b);

    function redistribute(index: number, data: number[], is6B: boolean): number {
        let flattend = data.toString();
        let pos = done.indexOf(flattend);
        if (is6B && pos >= 0) {
            pos = done.indexOf(flattend, pos + 1);
        }
        if (pos > 0) {
            let length = done.length;
            done = [flattend];
            return is6B ? --length : length;
        }

        let toDistibute = data[index];
        data[index] = 0;
        while (toDistibute > 0) {
            data[++index % data.length]++;
            toDistibute--;
        }
        done.push(flattend);
        return redistribute(getIndexOfHigest(data), data, is6B);
    }

    function getIndexOfHigest(array: number[]): number {

        let max = 0;
        let index = -1;

        for (let i = 0; i < array.length; i++) {

            if (array[i] > max) {
                max = array[i];
                index = i;
            }
        }

        return index;
    }

})();

