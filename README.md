# Flashcard-o-matic

This is an application where the user can create flashcard decks and study the cards that you place into them. These decks and cards will be stored in a database that is in the data folder (db.json). You will also be able to delete any card or deck that is stored.

## Installation

First go to [Thinkful Flashcards](https://github.com/jdavisson87/thinkful-flashcards). Clone or copy the repository to your selected folder. After you are done, go to your terminal, and go into the directory where you saved the Flashcard project.  
Run `npm install` to install all the necessary files for the program, and then run `npm run start` to run the program. You can find the file in your internet browser at [localhost](localhost:3000).

## Creating a deck

To create a deck, click the Create Deck button. It will lead you to a page with a form. You will need to enter a name and description before you can create the deck. Once created, it will direct you to the deck page, where you can start adding cards to your deck.

## Edit a deck

If you view a deck and click the edit button, you will be able to change the title and description of your deck and save it to the database.

## Delete a deck

If you no longer need a deck, you can click the red trash can icon to delete the deck. It will ask you if you are sure you want to delete the deck. Click on your decision, and if you delete the deck, it will take you back to the homepage without that deck in the database anymore.

## Add Cards

If you are on the main page, and want to add a card to a deck that was already created, first click on view. This will take you to the selected deck's page. Once there, you can click Add Card and it will take you to the add card page. Each card has a front and back that you will need to fill out. The program does not allow either field to be blank. After you hit the save or done button, it will take you back to the deck's page.

## Edit Cards

If you are on your selected deck's page, you can edit any card that is currently in the deck. Click the Edit button, and the fields will already be filled out with the current cards information. Make any changes that you would like and you can click either Cancel or Submit. Once either button is clicked, it will redirect you to the deck's main page.

## Delete Cards

If you no longer need a card and don't want to edit it, you can delete the card by clicking the red trash can. It will delete the card out of your deck and will reload the cards currently in your deck.

## Studying a deck

In order to study one of your decks, the deck must have 3 or more cards. It will initially show you the front of the flashcard. Once you think you have the answer, flip the card and see if you were right. Once flipped, you will be able to go to your next card. Once you go through all of the cards, a pop up will ask if you would like to start over. If you do, it will go back to the first card, and if not, it will take you back to the homepage.
