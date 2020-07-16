//Welcome message and description of game
//Tell the user to go to room #1
//Build room class and items property
//player class and inventory property
//To win find key and unlock door, then get the prize (tell user)



const READLINE = require("readline-sync")
let gameIsOn = true
let inputMsg =""
let currentRoom = null
let rooms = []
 
//classes

class Room {

    constructor(name, description, objects, paths) {
       this.name = name;
       this.description = description;
       this.objects = objects
       this.paths = paths
       
     }
 }

 class Player {
   constructor(name, items){
       this.name =name
       this.items = items
   }
 }

//objects

let player = new Player()
  player.name = null
  player.items = []

  let hallway = new Room()
  hallway.name = "Hallway"
  hallway.description = "You're in the hallway! Choose somewhere to go!"
  hallway.objects =[]
  hallway.paths=["Library" , "Room #2" , "Dining Room", "Kitchen", "View Room", "Storage"]

  let library = new Room()
  library.name = "Library"
  library.description = "Here's the library! It has all the books you need to find information...not about the treasure chest though! Ah, there is a notebook on the floor. I wonder if that could help you *wink*"
  library.objects =["notebook", "dictionary", "pen", "potion"]
  library.paths=["Kitchen" , "Dining Room" , "View Room", "Storage", "Room #2"]

  let room2 = new Room()
  room2.name = "Room #2"
  room2.description = "This room is locked! ...maybe because it's important?"
  room2.objects =[]
  room2.paths=["Kitchen" , "Dining Room" , "View Room", "Storage", "Library"]

  let diningRoom = new Room()
  diningRoom.name = "Dining Room"
  diningRoom.description = "You're in the dining room! Look, there's a cat, named Leo, on the table...with a key around his neck?!...maybe the key is something you need. Leo is angry and hungry! Perhaps getting him some food will allow you to get close to it so you can possible get the key!"
  diningRoom.objects =["Leo", "key", "table", "chairs"]
  diningRoom.paths=["Kitchen" , "Room #2" , "View Room", "Storage", "Library"]

  let kitchen = new Room()
  kitchen.name = "Kitchen"
  kitchen.description = "The kitchen! Theres plenty of food in here! You can cook if you want to...oh- theres a locked cabinet...and it's labeled 'Leo'!. Maybe there's something of his in there. The only way to unlock this cabinet is with a code! Find it!"
  kitchen.objects =["knife", "pot", "cabinet", "Leo's food"]
  kitchen.paths=["Room #2" , "Dining Room" , "View Room", "Storage", "Library"]

  let upstairs = new Room()
  upstairs.name= "View Room"
  upstairs.description= "Ooh! Here's the room where you can see the amazing sites outside. What a pretty room"
  upstairs.objects= ["chair", "candle"]
  kitchen.paths= ["Room #2", "Kitchen", "Dining Room", "Storage", "Library"]

  let downstairs = new Room()
  downstairs.name = "Storage"
  downstairs.description = "You're in the storage room! Maybe you'll find something that can help you here. What's that note on the floor?"
  downstairs.objects =["suitcase", "small note"]
  downstairs.paths=["Kitchen" , "Dining Room" , "View Room", "Library"]

  rooms.push(library, room2, diningRoom, kitchen, upstairs, downstairs)

//games starts

function start(){

   console.log("Welcome to ---! You are in the hallway of a castle. Your goal is to find the treasure chest!");
   let name = READLINE.question("What is your name, player? ")
   console.log("Welcome, " + name);
 
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
 
       inputMsg = input
 
//go to

if(inputMsg.includes("go to")){

    let msgArray  = inputMsg.split(" ")
    let newRoom = msgArray[1] //get the second element

     console.log(" user typed go to " + newRoom)

     if(currentRoom.paths.includes(newRoom)){

        console.log("Yes you can go there")

        //find the room that has that "key" newRoom as a property

        for (room of rooms){  //Make challenge!!!!

            if(room.name.toLowerCase() == newRoom.toLowerCase()){

                //set the current room by grabbing its index
                let index = rooms.indexOf(room)

                currentRoom = rooms[index]
                console.log("You are now at the : " + currentRoom.name);
               
            }
        }

     } else {

        console.log("No you can't go there")
     }

//take
//look
//room name
//help
//end

       if(inputMsg.includes("help")){
 
           console.log("Here are some commands you can try: help, end, go to, take, look, and room name")
 
       }else if(inputMsg.includes("end")){
 
       gameIsOn =false
       console.log("Thank you for playing --, farewell!")
 
       }else {
           console.log("Sorry, I don't know what that means.")
           }
       }
start()

//zombie manor starter
//************* START GAME *************************

//GO
        if(inputMsg.includes("go")){

            //split the string into two arguments

            let msgArray  = inputMsg.split(" ")
            let newRoom = msgArray[1] //get the second element

             console.log(" user typed go to " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Yes you can go there")

                //find the room that has that "key" newRoom as a property

                for (room of rooms){  //Make challenge!!!!

                    if(room.name.toLowerCase() == newRoom.toLowerCase()){

                        //set the current room by grabbing its index
                        let index = rooms.indexOf(room)

                        currentRoom = rooms[index]
                        console.log("You are now at the : " + currentRoom.name);
                       
                    }
                }

             } else {

                console.log("No you can't go there")
             }
 //LOOK          
        } else if(inputMsg.includes("look")){
            //loop through all the objects and paths and print them out so user can see options

            console.log("You see the following: ") 

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
//TAKE
        } else if(inputMsg.includes("take")){

            console.log("Taking item...")

            let itemsArray  = inputMsg.split(" ")
            let itemToTake = itemsArray[1] //get the second element

            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                //console.log("current room items after taking item " + currentRoom.objects)
                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
//Name
        } else  if (inputMsg.includes("name")){
    
            console.log( currentRoom.name);

        }  else if (inputMsg.includes("help")){
    
            console.log(" You can type 'look' to look around and 'go' to follow a path.")
            
        } else if (inputMsg == ""){

            console.log(" input: " + inputMsg)
             
            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }
    
}

start()
