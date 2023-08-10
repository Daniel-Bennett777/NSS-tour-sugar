# NSS-tour-sugar
Hello! Here is the project assignment in detail that I Followed in order to create this functional calendar web page. 

Tour Some Sugar On Me
You have been hired by Samantha Ducarte, a tour promoter, to build a website that allows her to see the venues that she manages, a list of all bands that will be performing for the next 6 months, and a list of all bookings.

Learning Objectives
Analytical Thinking: Understand requirements and data before development
Communication: Ask questions to clarify any vague or conflicting requirements
CSS: Using Flexbox to position elements on the web page
Events: Implementing event listeners to respond to the user clicking on DOM elements
Data: Understanding data relationship, and using for..of loops to find related data in a database
Venues
Each venue can accomodate 2 bands per night as Samantha only works with smaller places. You need to record the name of the venue, its address, square footage, and maximum occupancy.

Bands
The bands that Samantha helps book venues are all young and hungry. This means that they can perform 1 or 2 acts every day. You must record the band name, number of members, musical genre, and the year they formed as a band.

Bookings
Samantha also wants to see a list at the bottom of the page that shows which band(s) are playing at each venue every night. She wants the band name, the venue name, and the date of the booking.

Example
"Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"

Layout
The layout is going to be similar to DeShawn's and Brewed Awakenings, but slightly different. Samantha wants to see the current bookings at the top of the page. Below the bookings, she wants to see a list of all available venues, and a list of all available bands, side by side. Venues on the left, and bands on the right.

ERD
Next, use dbdiagram to create an ERD for this project. Review the list of resources above and make sure you capture all of the required properties.

Feature List
Tour Venues
At the bottom of the page, the name of each venue should be displayed in a bulleted list.
When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.
Bands
At the bottom of the page, to the right of the venue list, the name of each band should be displayed in a bulleted list.
When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing.
Bookings
Above the venue list and band name list, you should display all of the bookings that Samantha Ducarte has helped the bands make at each venue.

Example Booking Text
Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023
When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).

Example Booking Alert Text
Rocket Pumpkins
EDM
Formed in 2005
3 band members
Algorithmic Thinking Reminder
It is crucial, therefore, that you work on designing the algorithm before you write any code. This involves two steps.

Step 1: Analytical Thinking
Which modules should you create?
What is the responsibility of each module?
What functions should be in which modules?
What is the responsibility of each function?
What should each function return?
Step 2: Algorithmic Thinking
In which order should you invoke your functions?
What data do you need to get from your database when an event listener is triggered?
In what order should the data be navigated with for..of loops?
What is the spcific algorithm for each function? Does the function need parameters? Should it return something?
Step 3: Visualize the Solution
Draw a dependency graph
Draw a sequence diagram
Do all of this before you write a single line of code, or you could end up wasting hours of time writing code only to find that you need to throw it all away because you didn't design the algorithm first.