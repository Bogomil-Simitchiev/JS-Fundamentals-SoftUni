function extract(file) {
    let lastIndexOfChar = file.lastIndexOf('\\');
    let fileNameAndExtension = file.slice(lastIndexOfChar + 1, file.length);
    let lastIndexOfDot = fileNameAndExtension.lastIndexOf('.');

    let name = fileNameAndExtension.slice(0, lastIndexOfDot);
    let extension = fileNameAndExtension.slice(lastIndexOfDot + 1, fileNameAndExtension.length);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);


}
extract("C:\\Internal\\training-internal\\Template.pptx");