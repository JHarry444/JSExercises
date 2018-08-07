function triple(string) {
    var array = string.split("");
    var char = [array[0]];
    var count = 0;
    for (i = 1; i < array.length; i++){
        if (array[i] == char[char.length - 1]) {
            char.push(array[i]);
        } else {
            char = [array[i]];
        }
        if (char.length > 2) {
            count++;
        }
    }
    document.write("no. of triples: " + count);
}