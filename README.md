# Movie-DB-Lobby

 ## Description
 A movie Lobby with Using TMDB API to create a mobile and desktop friendly UI interface to access a movie system.

 ## Table of Contents

## Technologies Used
+ React JS
+ CSS
+ HTML
+ Javascript
 # How to Install and Run the Project
1. To Run React JS on a desktop computer, install Node JS at https://nodejs.org/en/

1. After Installing the Node JS package on the local system, download the repository and open to the root folder.

### rootfolder: movie-db-lobby

1. After opening root folder
+ Run in terminal to install modules and depedncies for the project to run
```
npm install
```
+ then run "npm run dev" in terminal to start the React Project
```
npm run dev
```

+ Happy Coding!!!

 # How to Use the Project
 The project can be used for making a movie or streaming service app. The features now are rudimentary but can be expanded to include many things. 
## Details of the Project

The project has many components
+ Search
+ Home
+ Favourites
+ Movie Card
#### Process of Data Flow in the App

---
TMDB API --> Data --> App&Search--> Home.Context-->Home Page-->Card
---
Card-->Card Data --> Fav useState--> Favourite Page
---
### State Managment 
The State is managed using React useContext to call the TMDB API and load the data into the parent component useState which enables the child compoennts to be able to access the Data.
 # License