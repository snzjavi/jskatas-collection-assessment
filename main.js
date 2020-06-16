const mainElement = document.querySelector('main')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

// Group Members: Shari Dragon, Mellissa Lloyd, Giovanni Zaccaro, and Garrett Cox.

// 1 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
const kata1heading = document.createElement('h1')
const kata1Answer = document.createElement('div')
mainElement.append(kata1heading)
mainElement.append(kata1Answer)
kata1heading.append('kata 1')

let counter = 0
while (counter <= 20) {
    kata1Answer.append(counter + ',')
    counter += 1
}

// 2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2heading = document.createElement('h1')
const kata2Answer = document.createElement('div')
mainElement.append(kata2heading)
mainElement.append(kata2Answer)
kata2heading.append('kata 2')

for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
    kata2Answer.append(counter2 + ',')
    console.log(counter2)
}


// 3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

const kata3heading = document.createElement('h1')
const kata3Answer = document.createElement('div')
mainElement.append(kata3heading)
mainElement.append(kata3Answer)
kata3heading.append('kata 3')

let counter3 = 1
while (counter3 <= 20) {
    kata3Answer.append(counter3 + ',')
    console.log(counter3)
    counter3 += 2
} 

// 4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4heading = document.createElement ('h1')
const kata4Answer = document.createElement('div')
mainElement.append(kata4heading)
mainElement.append(kata4Answer)
kata4heading.append('kata 4')

for(let counter4 = 5; counter4 <= 100; counter4 +=5){
console.log(counter4)
kata4Answer.append(counter4 + ',')
}


// 5 Display square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
const kata5heading = document.createElement ('h1')
const kata5Answer = document.createElement('div')
mainElement.append(kata5heading)
mainElement.append(kata5Answer)
kata5heading.append('kata 5')

for(let counter5 = 1; counter5 <=100; counter5 +=1){
    const isSquare = Number.isInteger(Math.sqrt(counter5))

    if(isSquare){ 
        kata5Answer.append(counter5 + ',')
        console.log(counter5)

    }

}

//  6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
// const kataheading = document.createElement ('h2')
// const kataAnswer = document.createElement('div')
// mainElement.append(kataheading) 
// mainElement.append(kataAnswer)
// kataheading.append('kata ')

// // 7 Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
// const kataheading = document.createElement ('h2')
// const kataAnswer = document.createElement('div')
// mainElement.append(kataheading) 
// mainElement.append(kataAnswer)
// kataheading.append('kata ')

// // 8 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
// const kataheading = document.createElement ('h')
// const kataAnswer = document.createElement('div')
// mainElement.append(kataheading) 
// mainElement.append(kataAnswer)
// kataheading.append('kata ')

// // 9 Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
// const kataheading = document.createElement ('h')
// const kataAnswer = document.createElement('div')
// mainElement.append(kataheading) 
// mainElement.append(kataAnswer)
// kataheading.append('kata ')

// // 10 Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
// const kataheading = document.createElement ('h')
// const kataAnswer = document.createElement('div')
// mainElement.append(kataheading) 
// mainElement.append(kataAnswer)
// kataheading.append('kata ')

// 11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

const kata11heading = document.createElement ('h1')
const kata11Answer = document.createElement('div')
mainElement.append(kata11heading)
mainElement.append(kata11Answer)
kata11heading.append('kata 11')

for (i = 0; i < sampleArray.length; i += 1) {
    kata11Answer.append(sampleArray[i] + ',')
} 
// 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

const kata12heading = document.createElement ('h1')
const kata12Answer = document.createElement('div')
mainElement.append(kata12heading)
mainElement.append(kata12Answer)
kata12heading.append('kata 12')

for (let index = 0; index < sampleArray.length; index += 1) {
    if ((sampleArray[index] % 2) != 1) {
        kata12Answer.append(sampleArray[index] + ',')
    } 
}

// 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

const kata13heading = document.createElement ('h1')
const kata13Answer = document.createElement('div')
mainElement.append(kata13heading)
mainElement.append(kata13Answer)
kata13heading.append('kata 13')

for (let index = 0; index < sampleArray.length; index += 1) {
    if ((sampleArray[index] % 2) != 0) {
        kata13Answer.append(sampleArray[index] + ',')
    }
}

// 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)



// 15 Display the sum of all the numbers from 1 to 20.


// 16 Display the sum of all the elements in sampleArray.


// 17 Display the smallest element in sampleArray.


// 18 Display the largest element in sampleArray.99



// Optional Bonus
// 19 Display 20 solid gray rectangles, each 20px high and 100px wide.
// const kata1keading = document.createElement ('h1')
// mainElement.append(kata1heading)
// kata1heading.append('kata 1')
// 20 Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
// 21 Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
// 22 As in #21, but alternate colors so that every other rectangle is red.
// 23 As in #21, but color the rectangles with even widths red