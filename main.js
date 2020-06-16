// Group Members and contributions from Shari Dragon, Mellissa Lloyd, Giovanni Zaccaro and Garrett Cox.

const mainElement = document.querySelector('main')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];


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
    counter3 += 2
} 

// 4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

const kata4heading = document.createElement ('h1')
const kata4Answer = document.createElement('div')
mainElement.append(kata4heading)
mainElement.append(kata4Answer)
kata4heading.append('kata 4')

for (let counter4 = 5; counter4 <= 100; counter4 += 5 ){
    kata4Answer.append(counter4 + ', ')
}

// 5 Display square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)

const kata5heading = document.createElement ('h1')
const kata5Answer = document.createElement('div')
mainElement.append(kata5heading)
mainElement.append(kata5Answer)
kata5heading.append('kata 5')

for (let counter5 = 1; counter5 <= 100; counter5 += 1){
    const Square = Number.isInteger(Math.sqrt(counter5))

    if(Square){ 
        kata5Answer.append(counter5 + ',')
    

    }

}

// 6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
const kata6heading = document.createElement ('h1')
const kata6Answer = document.createElement('div')
mainElement.append(kata6heading) 
mainElement.append(kata6Answer)
kata6heading.append('kata 6')


for (counter6 = 20; counter6 > 0; counter6 -= 1) {
    kata6Answer.append(counter6 + ',')
}

// 7 Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
const kata7heading = document.createElement ('h1')
const kata7Answer = document.createElement('div')
mainElement.append(kata7heading) 
mainElement.append(kata7Answer)
kata7heading.append('kata 7')

for (index = 20; index > 0; index -= 2) {
     kata7Answer.append(index + ',')
}


// 8 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
const kata8heading = document.createElement ('h1')
const kata8Answer = document.createElement('div')
mainElement.append(kata8heading) 
mainElement.append(kata8Answer)
kata8heading.append('kata 8')

for (index = 19; index >= 0; index -= 2) {
    kata8Answer.append(index + ',')

}



// 9 Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
const kata9heading = document.createElement ('h1')
const kata9Answer = document.createElement('div')
mainElement.append(kata9heading) 
mainElement.append(kata9Answer)
kata9heading.append('kata 9')

 for (let index = 100; index >= 5; index -= 5 ){
    console.log(index)
    kata9Answer.append(index + ', ')
}

// 10 Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
const kata10heading = document.createElement ('h1')
const kata10Answer = document.createElement('div')
mainElement.append(kata10heading) 
mainElement.append(kata10Answer)
kata10heading.append('kata 10')

for (let counter10 = 100; counter10 >= 1; counter10 -= 1){
    const Square = Number.isInteger(Math.sqrt(counter10))

    if(Square){ 
        kata10Answer.append(counter10 + ',')
    

    }

}

// 11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

const kata11heading = document.createElement ('h1')
const kata11Answer = document.createElement('div')
mainElement.append(kata11heading)
mainElement.append(kata11Answer)
kata11heading.append('kata 11')

for (index = 0; index < sampleArray.length; index += 1) {
    kata11Answer.append(sampleArray[index] + ',')
} 

// 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

// const kata12heading = document.createElement ('h1')
// const kata12Answer = document.createElement('div')
// mainElement.append(kata12heading)
// mainElement.append(kata12Answer)
// kata12heading.append('kata 12')

// for (let index = 0; index < sampleArray.length; index += 1) {
//     if ((sampleArray[index] % 2) ! = 1) {
//         kata12Answer.append(sampleArray[index] + ',')
//     } 
// }

// 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

// const kata13heading = document.createElement ('h1')
// const kata13Answer = document.createElement('div')
// mainElement.append(kata13heading)
// mainElement.append(kata13Answer)
// kata13heading.append('kata 13')

// for (let index = 0; index < sampleArray.length; index += 1) {
//     for (let index = 0; index < sampleArray.length; index += 1) {
//         if ((sampleArray[index] % 2) ! = 0) {
//             kata13Answer.append(sampleArray[index] + ',')
//         } 
//     }
    
// 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14heading = document.createElement ('h1')
const kata14Answer = document.createElement('div')
mainElement.append(kata14heading)
mainElement.append(kata14Answer)
kata14heading.append('kata 14')

let sqrd = 0
for (let index = 0; index < sampleArray.length; index += 1){
    sqrd = sampleArray[index] * sampleArray[index]
    kata14Answer.append(sqrd + ', ')

}

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
// 23 As in #21, but color the rectangles with even widths red;


