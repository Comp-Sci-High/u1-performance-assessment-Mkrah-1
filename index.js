// 1st Floor
let gymatoriumLock = true;
gymatoriumLock = false;
console.log(gymatoriumLock)

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 2nd Floor
// Do not modify these arrays directly
let weworkItems = ["loaner laptop", "whiteboard", "conference room", "couch", "printer", "shared table", "Wi-Fi router", "plants", "office chair", "power outlets"];
let computerLabItems = ["desktop computers", "monitors", "broken laptop", "mice", "Wi-Fi router", "printer", "power strips", "headphones", "USB drives", "chairs", "desks"];
let mprItems = ["mirrors", "speakers", "chairs", "portable stereo", "projector", "chairs", "posters"];

weworkItems.pop()
console.log(weworkItems)

let loanerComp = "loaner laptop"

computerLabItems.push(loanerComp)
console.log(computerLabItems)

computerLabItems[2] = "fixed laptop"
console.log(computerLabItems)

console.log("There are " + mprItems.length + " MPR Items. There are " + computerLabItems.length + " Computer Lab Items. Lastly, there are " + weworkItems.length + " WeWork Items")

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 3rd Floor
// Do not modify these objects directly
let scoreValues = {
    "S": "Self-awareness",
    "C": "Challenge",
    "O": "Organization",
    "R": "Resilience"
}

scoreValues.C = "Consistency"

scoreValues.O = "Ownership"

scoreValues.E = "Excellence"

let afterSchoolClubs = {
    athletic: [
        {
            club: "Soccer Club",
            location: "St. Mary's Park"
        },
        {
            club: "Flag Football",
            location: "St. Mary's Park"
        },
        {
            club: "Volleyball",
            location: "Gymnatorium"
        }
    ],
    social: [
        {
            club: "Gaming Club",
            location: 305
        },
        {
            club: "Art Club",
            location: 417
        },
        {
            club: "Gardening Club",
            location: 311
        }     
    ]
}

afterSchoolClubs.athletic[0].club = "British Soccer Club"

afterSchoolClubs.social[2].location = "Balcony"

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 4th Floor
// Uncomment the code below to begin this task

let takeCareOfPet = (snacks, pets) => {
    if (snacks === "hotdogs" && pets > 10) {
        return "Raccoon has been appeased"
    } else {
        return "The raccoon bit you and you died of rabies."
    }

}

let raccoonOperation = takeCareOfPet("hotdogs", 15)
console.log(raccoonOperation)

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 5th Floor





// Commit and show us to unlock the next floor's instructions
