/**
 * @file index.js
 * @description NodeJS File System
 * Create a file with the name and text entered by the user inside a Container
 */


const fs = require('fs')  // File System
const readline = require('readline').createInterface({  // Readline
    input: process.stdin,  // Input
    output: process.stdout  // Output
})

readline.question('Enter filename: ', filename => { // Question
    readline.question('Enter some text: ', text => { // Question
        fs.writeFile(`${filename}.txt`, text, err => { // Write file
            if (err) throw err // Error
            console.log('File was created') // Success
            readline.close() // Close
        })
    })
})