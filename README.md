<div align="center">
  <img src="./assets/readme/images/different-screens.png" alt="Home Page">
</div>

<h1>What Weighs More?</h1>
This is a Javascript portfolio-project. <br>
The website is designed to be a relaxing game of guessing and estimating weight of objects. The website offers a clear and simple game with visuals to keep the player engaged.<br><br>

The design is cartoonish and simple to allow for the animations in the background to shine more, creating a calm and enjoyable game.

## Table of Contents

1.  <details open>
      <summary><a href="#ux">UX</a></summary>
      <ul>
      <li><details>
      <summary><a href="#goals">Goals</a></summary>

    - [Visitor Goals](#visitor-goals)
    - [Business Goals](#business-goals)
    - [User Stories](#user-stories)
      </details>
      </li>

        <li><details>
        <summary><a href="#visual-design">Visual Design<a><summary>

    - [Wireframes](#wireframes)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colors](#colors)
    - [Images](#images)
    - [Styling](#styling)
    </details></li></ul>

    </details>

2.  <details open>
      <summary><a href="#features">Features</a></summary>
      <ul>
      <li><details>
      <summary><a href="#page-elements">Page Elements</a></summary>

    - [All Pages](#all-pages)
    - [Index Page](#index-page)
    - [Game Page](#gallery-page)
      </details></li>
        <li><details>
        <summary><a href="#additional-features">Additional Features</a></summary>

    - [Email](#email)
      </details></li>
        <li><details>
        <summary><a href="#feature-ideas">Feature Ideas</a></summary>
        - [Basic](#basic)
        - [Content](#content)
        </details></li>
        </ul>
    </details>

3.  <details open>
      <summary><a href="#technologies-used">Technologies Used</a></summary>

    - [Languages](#languages)
    - [Libraries](#libraries)
    - [Platforms](#platforms)
    - [Other Tools](#other-tools)

    </details>

4.  <details open>
      <summary><a href="#testing">Testing</a></summary>
      <ul>
      <li><details>
      <summary><a href="#methods">Methods</a></summary>
      - [Validation](#validation)
      - [General Testing](#general-testing)
      - [Mobile Testing](#mobile-testing)
      - [Desktop Testing](#desktop-testing)
      </details></li>
      <li><details>
      <summary><a href="#bugs">Bugs</a></summary>
    - [Known Bugs](#known-bugs)
    - [Fixed Bugs](#fixed-bugs)
    </details></li>
    </ul>
    </details>

5.  <details open>
      <summary><a href="#deployment">Deployment</a></summary>
      <ul>
      <li><details>
      <summary><a href="#local-deployment">Local Deployment</a></summary>
      - [Local Preparation](#local-preparation)
      - [Local Instructions](#local-instructions)
      </details></li>
      <li><details>
      <summary><a href="#github-deployment">Github Deployment</a></summary>
      - [Github Preparation](#github-preparation)
      - [Github Instructions](#github-instructions)
      </details></li>
      </ul>
    </details>

6.  <details open>
      <summary><a href="#credit-and-contact">Credit and Contact</a></summary>
      - [Content](#content)
      - [Contact](#contact)
    </details>

---

# UX

## Goals

### Visitor Goals

The target audience for What Weighs More are:

- People who want to play a relaxing game.
- People who want to see how good they are at estimating weight.
- People who want to see their knowledge of random objects.

User goals are:

- Getting a relaxing experience.
- Learning more about weight
- Learning more about different objects

What weighs more fills these needs by:

- Clearly stating the rules of the game
- Showing the game front and center without distractions
- Not having a leaderboard, time limit or limit of attempts to not make the user stressed
- Making the website simple, allowing for a relaxing background animation
- Having many different categories of objects in the game
- Having objects of many different weight classes along with a multiplier to make it more challenging

### User Stories

1. As a user interested in relaxing games I'd like to be able to play without feeling any stress
2. As a user I'd to see many different objects
3. I'd Like to get a challenge and really test my guessing abilites

## Visual Design

### Wireframes

Wireframes:
Index
<img src="./assets/readme/wireframes/wireframeindex.jpg" alt="Wireframes">
Game
<img src="./assets/readme/wireframes/wireframegame.jpg" alt="Wireframes">

### Fonts

<div align="center">
  <img src="./assets/readme/images/fonts1.JPG" alt="Fonts">
</div>

- The primary font, <a href="https://fonts.google.com/specimen/Barlow+Condensed?query=barlow+con">[Barlow Condensed]</a> Is used in the games boxes and is used because it's calm and simple
- The secondary font, which is actually used for the header is <a href="https://fonts.google.com/specimen/Imbue?query=imbue">Imbue</a> it looks elegant and fit very nicely with the dark background. It was chosen to contrast the other fonts making the player only read it once and then easily sort it out from the other text used in the game.

### Colors

<div align="center">
  <img src="./assets/readme/images/colorpalette.png" alt="Color Pallette">
</div>

- Colors found on <a href="https://colorhunt.co/palette/0a1d56492e8737b5b6f2f597">ColorHunt</a>
- I wanted the site to look friendly, cartoonish and light hearted.
- The primary color used is the deep blue. This is used to create a stark contrast with the colors of the other elements on the page, drawing the eyes and focus on them.
- One accent color was chosen, the dark yellow, to give a feeling of "warning", reminiscing of a stop signal to showcase that this is a site of satirical complaints.
- Text is primarily written in white to contrast on the bold color backgrounds of the primary and accent colors.

### Images

<div align="center">
  <img src="./assets/readme/images/gallery.png" alt="Gallery Images">
</div>

- All the objects images are found on <a href="https://pixabay.com/">pixabay</a>
- I've chosen these pictures because they're all 2d vector graphics and match easily
- The bubble picture is drawn by me

### Styling

- For this project I used grid to more easily put all the different elements in their correct places
- I used animations to make the simple style look more interesting while playing

---

# Features

## Page Elements

### Header

<img src="./assets/readme/header.JPG" alt="header">

At the top of all pages to display the name of the game.

### Guess-boxes

<img src="./assets/readme/guessbox.JPG" alt="guessbox">

These are displayed front and center with clear borders to clearly show the objects for the game.

### Score-box

<img src="./assets/readme/score.JPG" alt="score">

The score box is displayed under the guess-boxes.
and is animated to both jump and change color depending
if you answer correct or false.

### Attempts-box

<img src="./assets/readme/attempts.JPG" alt="score">

The attempts-box is located under scorebox and displays the number of attempts you've made, each attempt is a click and this box is not animated to not bring out too many visuals.

### Play-button

<img src="./assets/readme/play.JPG" alt="play">
The play button is located on the front page and displayed clearly.
It has a wider gap between itself and the text than the header and the text to seperate them more clearly.

#### Footer

<img src="./assets/readme/footer.JPG" alt="Footer">

- Located at the bottom of every page
- Displays the author of the project
- Changing shape for larger or smaller devices.

### Index Page

<img src="assets/readme/images/splashimage.PNG" alt="Splash image">

- Picture taken from pixabay <a href="https://pixabay.com/">Pixabay</a>.
- Used as a splash image that highlights a cartoonish neighborhood at night.
  The cartoonish style helps convey that this sites articles are satirical
- An image with a mountain in the middle that stays in the center of the screen on all devices.

### Submit stories and photos

<img src="assets/readme/images/sendphoto.PNG" alt="Splash image">
<img src="assets/readme/images/submitstory.PNG" alt="Splash image">

- Engage the users and make the community more alive by encouraging user submited content
- Displayed front and center on the page the user is interested in

---

# Technologies Used

## Languages

- [HTML]
  - Page markup.
- [CSS]
  - Styling and animations -[Java-script]
  - Interactivity

## Libraries

- [Google Fonts](https://fonts.google.com)
  - Font Styles.

## Platforms

- [Github](https://github.com/)
  - Storing code remotely and deployment.
- [Gitpod](https://gitpod.io/)
  - IDE for project development.

## Other Tools

- [Figma](https://figma.com/)
  - To create wireframes.
- [Colorhunt](https://colorhunt.co/)
  - Creating color pallettes.
- [grid.layoutfit](https://grid.layoutit.com/)
  - Create the grid layout

---

# Testing

## Methods

### Validation

HTML has been validated with [W3C HTML5 Validator](https://validator.w3.org/).

<img src="assets/readme/validator/wc3validator.PNG" alt="wc3 validator">

|        | index.html | game.html |
| ------ | :--------: | --------: |
| Errors |    None    |      None |

HTML has been validated with [Wave.webaim HTML5 Validator](https://wave.webaim.org/).
<img src="assets/readme/validator/wavevalidator.PNG" alt="wave validator">

|        |                                 index.html                                  |                                                                  game.html |
| ------ | :-------------------------------------------------------------------------: | -------------------------------------------------------------------------: |
|        | <img src="assets/readme/validator/webaimindex.jpg" alt="webaim validation"> | <img src="assets/readme/validator/webaimgame.jpg" alt="webaim validation"> |
| Errors |                                    None                                     |                                                                       None |
| Alerts |                                    None                                     |                                      A paragraph is used instead of header |

Website speed optimisation has been checked with [PageSpeed Insights](https://pagespeed.web.dev/).

<img src="assets/readme/validator/pagespeedinsights.PNG" alt="page speed insight">

|                    |                                   index.html                                    |                                                                      game.html |
| ------------------ | :-----------------------------------------------------------------------------: | -----------------------------------------------------------------------------: |
|                    | <img src="assets/readme/validator/pagespeedindex.jpg" alt="page speed insight"> | <img src="assets/readme/validator/pagespeedgame.jpg" alt="page speed insight"> |
| Performance issues |                                      none                                       |                                                                           none |

CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
<img src="assets/readme/validator/wc3cssvalidator.PNG" alt="wc3 css validator">
<img src="assets/readme/validator/cssvalidation.jpg" alt="wc3 css validator results">
Results are no errors found

and auto-prefixed with [CSS Autoprefixer](https://autoprefixer.github.io/).
<img src="assets/readme/validator/cssautoprefixer.PNG" alt="autoprefixer css online">

Links checked with [W3C Link Checker](https://validator.w3.org/checklink).
<img src="assets/readme/validator/wc3linkerchecker.PNG" alt="wc3linkchecker">

All links and anchors are working.

### General Testing

- Each time a feature was added, all the functions were tested to see if there was an impact.
- The site was sent to friends for feedback and testing.
- .gitignore file has been included to prevent system file commits.

### Manual Testing

- Testing done through playing the game
- Checked the links to Twitter and Facebook in the footer.

### Mobile Testing

- I tested the site personally on my Android device, going through the entire process, checking buttons, functions, checking out, etc. I was personally unable to test on iOS.
- The site was sent to friends and relatives for them to follow the same process. They have tested on their devices, including iOS.
- Chrome was utilised to inspect the site in mobile format, going through the pages and functions.

### Desktop Testing

- the majority of testing occurred on Chrome and Edge.
- The site was tested by friends and relatives on numerous desktop devices.
- Internet Explorer was not tested and the site was not developed with it .in mind as support for the browser is gradually being dropped.

### Testing User Stories

1. As a user interested in relaxing games I'd like to be able to play without feeling any stress

The game features no attempts limit or time limit. This makes the game more
suited for casual play

2. As a user I'd to see many different objects

The game contains 4 categories and 5 objects in each category. Adding more objects to the game has been made easy by using arrays

3. I'd Like to get a challenge and really test my guessing abilites

With the random multiplier being added to the lowest weight target it makes
for a much more complex guessing game

## Bugs

### Known Bugs

- If you're at minus 1 score and you have no score-star spans active the displayQuestion function will not display a new question untill you've answered correctly
- If you have guessed correctly 30 times in a row and all score-star spans are being showned displasyQuestion will not show a new question untill you've hiden more of the spans

### Fixed Bugs

- [UnhideScorestar](https://github.com/PetterJohanssonTilia/project-2/issues/3)
  Hiding/showing random spans instead of the already hidden/shown ones
- [Evenlistener not working](https://github.com/PetterJohanssonTilia/project-2/issues/4) Couldn't add eventlistener dynamically so instead created a new class to listen to at the start of the game

---

# Deployment

## Local Deployment

### Local Preparation

**Requirements:**
-A webbrowser of your choice, Chrome being recommended

### Local Instructions

1. Download a copy of the project repository [here](https://github.com/PetterJohanssonTilia/Project-2/archive/refs/heads/main.zip) and extract the zip file
2. Open the index.html file in your browser, This file can be dragged and droped into your browser to open it.
3. Enjoy the site!

## Github Deployment

### Github Preparation

- It is possible to copy or clone the repository to directly for deployment,
  **Requirements:**
- A free GitHub account.
- A free EmailJS account.

### Github Instructions

1. Log in to your GitHub account.
   navigate to [https://github.com/PetterJohanssonTilia/Project-1-](https://github.com/PetterJohanssonTilia/Project-1-).
1. You can set up your own repository and copy or clone it, or you fork the repository.
1. `git add`, `git commit` and `git push` to a GitHub repository, if necessary.
1. GitHub pages will update from the Main branch by default.
1. Go to the **Settings** page of the repository.
1. Scroll down to the **Github Pages** section.
1. Select the Main Branch as the source and **Confirm** the selection.
1. Wait a minute or two and it should be live for viewing.

## Credits and Contact

### Content

All the image content was from pixabay.com and all the objects and their weights was generated by chatgpt

### Contact

Please feel free to contact me at `fake.email@hotmail.com`
