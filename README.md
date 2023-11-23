# Acme ❌ Games

An App that allows you to find the cheapest games on the internet!

To see what it is all about, check out [Acme ❌ games]()

## Installation

### `npm install`

Please make sure to `npm install` before trying to run to make sure that all dependencies are up-to-date.

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
From what we have pushed, there should be no errors in the console. (Please let us know about any errors you find or fork the repo and fix it yourself and we'll be able to see what you have added from the pull request)

## A More Detailed Breakdown

This app is designed to help users look through deal for games on different sites very quickly. Giving the user a clearer understanding of what deal are out there and how best to approach them.

### User Journey

The user will start of his journey on our app with our [home page]() that has some feature games that we thing really can't go a miss!

You'll be able to navigate the app by you the navigation menu at the top of the app to either search or view your wishlist.

When you click the search button, you are taken to the [search page]() that will allow you to type a name of a game in mind and bring up different games for you to search through.

Once you have found the one you want to look deeper into, you be able to click the arrow and be taken to the selected page component(Please note that because we get data from an API, you can't type in a number into the url to get a game, you need to go through the search and click on the game you would like to view. If you do this the app will through an error.)

Once at the selected page, you'll be greeted by some dynamic prices from different website and also some static information that in a perfect world would have been dynamic but hey, what you going to do, it's an API.

From here you are able to click the love heart 💟 and the game that you are currently viewing to be added to your [watchlist]() which will have all of the games that you have liked from different searches. This will be saved in your local storage.

When you go to your watchlist, you'll be able to click on each one to re render the selected page with that game on it. If the user has now decided they no longer want to look at a certain games price then you can click the love heart again and it will be taken off your watchlist and the state automatically updated.

I don't believe there is any limit to how many games you can have in your watchlist, if you would like to test it for yourself and let us know so we can update our README. But honestly, who is going to spend time doing that...

## Main Contributors

[Jack Morrell](https://github.com/JackMorre)
[Edil Abdiaziz](https://github.com/idil-abdi)
[Ilinca Pricop](https://github.com/iLi01)
[Isaac Orzech](https://github.com/isaaco1)
