//Welcome message and description of game
//Tell the user to go to room #1
//Build room class and items property
//player class and inventory property
//To win find key and unlock door, then get the prize (tell user)

const READLINE = require("readline-sync")

let inputMsg =""
let gameIsOn = true
let currentRoom = null
let rooms = []
let items = []
 
//classes

class Room {

    constructor(name, description, objects, paths) {
       this.name = name;
       this.description = description;
       this.objects = objects;
       this.paths = paths;
       
     }
 }

 class Player {
   constructor(name, items){
       this.name =name
       this.items = items
   }
 }

class Item {
    constructor(name, description){
    this.name = name
    this.description = description
    }
}

//objects

let treasure = new Item()
treasure.name= "Treasure Chest"
treasure.description = "You won the game!!!"

let notebook = new Item()
notebook.name= "Notebook"
notebook.description = "The notebook! Hmmm, it says go to the dining room!"

let key = new Item()
key.name= "Key"
key.description = "Well done, you found the key!! Go to the kitchen and take Leo's food"

let smallNote = new Item()
smallNote.name= "Small Note"
smallNote.description = "3141"

items.push(treasure, notebook, key, smallNote)

let player = new Player()
  player.name = null
  player.items = []

  let hallway = new Room()
  hallway.name = "Hallway"
  hallway.description = "You're in the hallway! Choose somewhere to go!"
  hallway.objects =[]
  hallway.paths=["Library" , "Room #2" , "Dining Room", "Kitchen", "Storage"]

  let library = new Room()
  library.name = "Library"
  library.description = "Here's the library! It has all the books you need to find information...not about the treasure chest though! Ah, there is a notebook on the floor. I wonder if that could help you *wink*"
  library.objects =["notebook"]
  library.paths=["Kitchen" , "Dining Room" , "Storage", "Room #2", "Hallway"]

  let room2 = new Room()
  room2.name = "Room #2"
  room2.description = "This room is locked! ...maybe because it's important?"
  room2.objects =["Treasure Chest"]
  room2.paths=["Kitchen" , "Dining Room" , "Storage", "Library", "Hallway"]

  let diningRoom = new Room()
  diningRoom.name = "Dining Room"
  diningRoom.description = "You're in the dining room! Look, there's a cat, named Leo, on the table...with a key around his neck?!...maybe the key is something you need. Leo is angry and hungry! Perhaps getting him some food will allow you to get close to it so you can possible get the key!"
  diningRoom.objects =["Leo", "key"]
  diningRoom.paths=["Kitchen" , "Room #2" , "Storage", "Library", "Hallway"]

  let kitchen = new Room()
  kitchen.name = "Kitchen"
  kitchen.description = "The kitchen! Theres plenty of food in here! You can cook if you want to...oh- theres a locked cabinet...and it's labeled 'Leo'!. Maybe there's something of his in there. The only way to unlock this cabinet is with a code! Find it!"
  kitchen.objects =["Leo's food"]
  kitchen.paths=["Room #2" , "Dining Room" , "Storage", "Library", "Hallway"]

  let downstairs = new Room()
  downstairs.name = "Storage"
  downstairs.description = "You're in the storage room! Maybe you'll find something that can help you here. What's that note on the floor?"
  downstairs.objects =["suitcase", "small note"]
  downstairs.paths=["Kitchen" , "Dining Room" , "Library", "Hallway", "Room #2"]

  rooms.push(hallway, library, room2, diningRoom, kitchen, downstairs)

//games starts

function start(){

   console.log("Welcome to Treasure Quest! You are in the hallway of a castle. Your goal is to find the treasure chest!");
   let name = READLINE.question("What is your name, player? ")
   console.log("Greetings, " + name);
 
   //start in hallway
   currentRoom = hallway

    console.log(`You are in the ${currentRoom.name}.`)

   while(gameIsOn){
       checkAnswer(promptUser())
   }
}
   

function promptUser(){
       let  reply = READLINE.question("What do you want to do?  >>  ")
       return reply
   }

   function checkAnswer(input){

       console.log("checking input: " + input)

       inputMsg = input

//go to

if(inputMsg.includes("go")){

    let msgArray  = inputMsg.split(" ")
    let newRoom = msgArray[1] //get the second element

     console.log(" you typed go to " + newRoom)

     if(currentRoom.paths.includes(newRoom)){

        console.log("On your way!")

        //find the room that has that "key" newRoom as a property

        for (room of rooms){  //Make challenge!!!!

            if(room.name.toLowerCase() == newRoom.toLowerCase()){

                //set the current room by grabbing its index
                let index = rooms.indexOf(room)

                currentRoom = rooms[index]
                console.log("You are now at the " + currentRoom.name)
               
            }
        }

     } else {

        console.log("You can't go there")
     }

//look

} else if(inputMsg.includes("look")){
    //loop through all the objects and paths and print them out so user can see options

    console.log("You see the following: ") 

    for(object of currentRoom.objects){

        console.log(" -  " + object)
    }

    console.log("From here, you can go to: ")

    for(path of currentRoom.paths){
        console.log(" - " + path)

    }

//take

} else if(inputMsg.includes("take")){

    console.log("Taking item...")

    let itemsArray  = inputMsg.split(" ")
    let itemToTake = itemsArray[1] //get the second element

    //check to see if it is part of the room's inventory..

    if(currentRoom.objects.includes(itemToTake)){

        console.log("Yep, you can take this item: " + itemToTake)
        player.items.push(itemToTake) //add to the players items array

        //remove from room
        let indexToRemove = currentRoom.objects.indexOf(itemToTake)

        currentRoom.objects.splice(indexToRemove, 1)

        //console.log("current room items after taking item " + currentRoom.objects)
        console.log("you have: " + player.items)

    } else {
        console.log("You can't pick that up")

    }

    if(inputMsg.includes("take notebook")){
        console.log("The notebook! Hmmm, it says go to the dining room!")
    
    }else if(inputMsg.includes("take key")){
        console.log("Well done, you found the key!! Go to the kitchen and take Leo's food!")
    
    }else if(inputMsg.includes("take treasure chest")){
        console.log("You go the treasure chest! You won the game! Splendid!")
    
    }else if(inputMsg.includes("take small note")){
        console.log("3141 is the code to open Room #2")
    }

//room name

} else  if (inputMsg.includes("name")){
    
    console.log( currentRoom.name)

}  else if (inputMsg.includes("help")){

    console.log("You can type 'look' to look around and 'go' to follow a path. To see where you are, type 'room name' and if you want to end the game, type 'end'")
    
} else if (inputMsg == ""){

    console.log(" input: " + inputMsg)
     
    inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ")

}else if(inputMsg.includes("end")){
 
    gameIsOn =false
    console.log("Thank you for playing Treasure Quest, farewell!")

} else {

    console.log(" I don't understand that")
}

    }

start()
