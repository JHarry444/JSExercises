function exerciseTwelve(input) {
    while (input > 1) {
        if (input % 3 == 0) {
            document.write(`${input}/3</br>`);
            input /= 3;
        } else {
             document.write(`${input}+1</br>`);
            input++;
        }
    }
    document.write(input);
}