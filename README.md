# ComiCombat

<img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/ComicombatBanner.png?raw=true">

## 🚀 [Live Site](https://comicombat.netlify.app/)

A site designed to finally put to rest the many friendship ruining superhero related arguments we all face every day.

<img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/comcombat-chars.png?raw=true">

## 💡 Motivation

This began as an afternoon experiment; I found the Superhero API and thought spinnning up a quick superhero SPA would be a quick, fun project. Oh how wrong I was - not about it being fun, but certainly about "quick". My work on ComiCombat ended up teaching me many lessons, particularly regarding the value of really brainstorming and planning a project, as well as my first experience with "scope creep".

<img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/comicombat.png?raw=true">

## 🤔 The Problem

As described above, the desire is to "virtualize" the classic schoolyard arguments - "Uh uh, Spider-Man would _totally_ beat Batman in a fight!"

<img src="https://github.com/grittygrady/ComiCombat/blob/master/src/images/ComiCombatWin.png?raw=true">

## 🧐 The Solution

The wonderful [Superhero API](https://superheroapi.com/) provides numeric, quantifiable statistics regarding the abilities of a superhero _(or villain)_. Using these characteristics, we can determine a "winner" between the two combatants.

## 🧠 Lessons Learned

- Value of wireframes and initial planning.

  > I'll cut myself a bit of slack on this one. At the outset, I had no intention of any functionality aside fom a mere superhero search. However, once I saw that there was more potential, that this API was capable of something more interesting, I should've taken a step back and thought more carefully about structuring, as I painted myself into a corner a couple of times, having to refactor components for adequate flow of information.

- The React Contaxt API

  > I had used the context API before, but only in educational environments. I had never used it in an application I personally built. I knew the "how" and "what" surrounding the context API, but not the "when" or "why". It's quite possible that had I planned this app more meticulously I may not have had to use it, however I'm sort of glad that I did - I now understand _why_ it exists; my previous apps were more simple in their one way data flow, however this one required adjacent sibling components to share data, and now I understand the _when_. As with many other libraries, frameworks or concepts, the reason for it's purpose becomes more cemented in your brain when you encounter the problem it is designed to solve.

- Semantic-UI-React

  > Wow, the documentation on this framework is phenomenal! So many excellent examples of input and output. The filterable dropdown was revelatory - one of the search queries I initially used to test was "Spiderman". Well, turns out it's officially _Spider-Man_ - many users would be confused as to why they can't find one of the most popular heroes of all time. The autosuggest in the search will hopefully mitigate some of the confusion, as well as expose users to new heroes and villains.

- Limitations of working with a styling framework

  > As great as Semantic UI is, sometimes it very much feels you have to fight against it occasionally, as it's fairly opinionated, if you lean heavily on it for component styling. Responsive design is more difficult, and as such this site doesn't look so hot... to put it mildly.

- Null values

  > A number of the characters had no imformation on their power statistics, but a `null` value wouldn't work for the purpose of this app. I decided to simply assign random values for any statistic not available for the character, using the familiar `Math.floor(Math.random() * 100)`. In the future I plan a better solution to this problem.

## 🔮 Next Steps

- The landing page is a mess. Gotta clean that up.
- It's a **disaster** on mobile. Gotta get that together.
- Need redirects to the main page for any improperly formed URL.
- Explaination of how the scoring system works.
- A better "battle" animation.
- A better algorithmmm for determining a winner; say, assigning points based upon the disparity between skills; i.e. if hero one has 90 intelligence and hero two has 35 intelligence, hero one would receive two points, one point for a 25 point difference as well as an additional point for a difference equal to or greater than 50 points.
- The API hasn't been updated / maintained in a while it seems. The database the data is drawn from is massively expanded, and I would love to build my own API to access it, so contacting bothn parties in an attempt to collaborate would be a good idea.
- Further "gameify" it - say, best 2/3 or 3/5. Could add a little more depth to it.
