# SOCIAL DISTANCING - The Game
### Social Distancing is a glimpse of what it is like to live in the the year 2020.  With viruses floating around every corner, you must stealthily collect all of the face masks without being infected.


## Game Play
- You are in a room with 4 cases of Novel Coronavirus, and 10 face masks that are your only line of defense.  
- You must use the W A S D keys to navigate the player around the room and  collect all 10 face masks without touching (becoming infected by) any of the viruses.
- The game ends if either of the following 2 conditions are met:
    - The player collects all of the face masks without touching a virus = you win!
    - The player touches a virus before collecting all of the masks = you were infected, and game is over.


## Wireframe
![Wireframe](img/Wireframe) 


## Technology Used
Everything in this game was coded with HTML, CSS, and JavaScript with the game actually being played on a canvas.


## Sources
### Images
- ![Player Image](img/player1.png) - I found the "Pixel-Man" image on OpenGameArt.org.  The image originated at inverted-games.com.

- ![Virus Image](img/virus.png) - I found the "virus-various colors" image on OpenGameArt.org.

- ![Mask Image](img/mask1.png) - I found the "Bit, book, brochure icon" image on IconFinder.com.

### Audio
- The ingame music was sourced from OpenGameArt.org.  It is titled Boss Battle #2, and was created by nene.

- The endgame song was sourced from OpenGameArt.org: "Wrong Rite Theme" by Pierre Bondoerffer (@pbondoer).

- The applause sound effect was sourced from OpenGameArt.org.  It is a cut from Yo Frankie!'s end game sound, and the cut was made by Blender Foundation.

- The sound when you pick up masks was sourced from OpenGameArt.org.  The title is Picked Coin Echo 2, and it was created by NenadSimic.

- I created the gameover sound using Logic Pro X.

### Other Sources
- The Canvas Crawler game that we built in class was a big resource, and I referenced it a lot when writing the basic structure of this game.
- Pete, Yashoma, and other students were great resources in helping me write code for and debug:
    - Getting my audio to work properly.
    - Having the player stop when it detects the inner box on the canvas.
    - Getting my character images to display/ remove themselves properly when the player interacts with them.
- I learned how to embed audio to the game from W3 Schools and https://stackoverflow.com/questions/6529645/how-to-add-background-music-to-a-web-page.
- I learned how to render images on the canvas from W3 Schools and Mozilla Developer Network.


## Bugs/ Roadblocks Incountered
- Images cleared themselves from the canvas, but instead of totally going away, they turned invisable and would still increase the score everytime you crossed over that space.
- I tried for a long time, but couldn't get music to autoplay when the page loads.
- After I changed the player and viruses from boxes to sprites, they no longer detected the walls of the inner box.


## MVP
- [x] The player controls a box that travels around a room attempting to make contact with small boxes(masks).
- [x] Different colored boxes (viruses) will travel both up and down and left and right across the room, and the player must avoid contact with them.
- [x] The player must make contact with all "mask" boxes without making contact with any "virus" boxes.  This will initiate the win function.
- [x] If the player makes contact with any of the "virus" boxes, the game is over and the player loses.

## Stretch Goals
- [ ] A third colored box (NPC) will travel in a similar pattern to the viruses, but starting in a different location. If these boxes touch the virus, it will turn into another virus that the player also has to avoid.
- [x] Each different category of box (player, face mask virus, other NPC characters) will be represented by a different sprite instead of a box.
- [ ] Instead of moving back and forth, the viruses and NPC boxes will move randomly.
- [x] A menu before the game starts that gives player instructions and has a "Start Game" button.
- [x] A scoreboard in the corner will increase with every face mask that the player collects.
- [ ] Multiple levels with increasing difficulty (game starts with more viruses, virus will follow player instead of randomly traveling, etc.).
- [ ] Obsticles will be placed around the room that the player cannot cross.
- [x] Add music and sound effects.
- [x] Add a reset button


## Final Thoughts
I am so happy with the results of this game.  Before creating it, I felt very behind and like I wasn't understanding much of the material, but this game helped me realize how far I have come and how much I have actually learned.  The greatest thing that this game taught me is how to look up answers when I am stuck.  There were many times that I was having issues with my code working properly, so I would go into a zoom room for help, but I would end up solving the problem on my own before the TA even got to me.

I think the thing that I need to work on more is writing simpler code from the beginning.  My initial plan was to hard code everything to make sure I could have the game working properly in the given time, and then refactor later to make the code more simple and easier to read.  What actually ended up happening is I hard coded everything, ended up with 500+ lines of code, and then I was too scared to refactor because when I would change one thing, it effected all of my code.  If I would have spent more time using arrays, switches, and iterators at the beginning, it would have cleaned up a lot of my big chunks of unnecessary code.