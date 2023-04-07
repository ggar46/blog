# About the Project
---
This application is a simple blog page that allows users to add posts that appear as a list of cards. Each card has a title, author, date, photo, excerpt, and a link to the post content as a separate page. The data from the application is fetched from a PostGreSQL database.


## Built With

* React
* Bootstrap
* PostGreSQL

## Getting Started
---


### Prerequisites
* npm

### Installation
This project does not rely on any external dependencies or services.
1. Clone the repo ```git clone https://github.com/ggar46/Eventonica/tree/eventonicabranch <NAMENEWDIRECTORY>```
2. Install NPM packages ```npm install```
3. Add the database using PostGreSQL.
    1. Inside your server directory create a `.env` file and copy there the values that are in `.envexample`
    2. Open a terminal window, and go to the psql terminal with the comand `psql`
    3. Inside the psql prompt create your database eventonica with the command `create database blog;` (don't forget the semicolon!)
    4. Go inside the server directory of your project, and run the command `psql -d blog -f db.sql` that will create a table `blog` with 7 rows inside your db eventonica. 


## Usage

Features
* Add events by filling out the event title, author,short excerpt, and text. The date is populated automatically.
* Access pages for each card by clicking on each card link.


## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request:
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## Contact

Gisselle Garcia - email@example.com
Project Link - https://github.com/ggar46/blog


## Acknowledgments
---
* Icons library [fontAwesomeLibrary](https://fontawesomeicons.com/heart)
* Base template by Yosolita1978 [Link to Github](https://github.com/Yosolita1978/2023EventonicaTemplate)
* React-router [Link to GitHub Template] (https://github.com/remix-run/react-router/tree/dev/examples/notes)

