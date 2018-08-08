strict mode;
function rektangles(word, height, width) {
    var array = word.split("");
    var fullArray = word.split("");
    for (i =1; i < width + 1; i++) {
        for (j = 0; j < array.length - 1 ; j++) {
            if (i % 2 != 0) {
                fullArray.push(array[array.length - 2 - j]);
            } else {
                fullArray.push(array[j]);
            }
            
        }
    }
    for (i = 0; i < array.length * height; i++) {
        for (j = 0; j < array.length * width; j++) {
            if (i == 0) {
                document.write(fullArray[j]);
            } else if (i == array.length - 1) {
                document.write(array[array.length - 1 - j]);
            } else if (j == 0) {
                document.write(array[i]);
            } else if (j == array.length - 1) {
                document.write(array[array.length - 1 - i]);
            } else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
}
