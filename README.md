# Description
- The application solves the problems of the user story.
- To build the application I have utilized the Test Driven Development (TDD) process followed by the red-green-refactor cycle.

User story:
```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 
```
# Instructions
- Open your terminal.
- Clone the repository in a folder.
- Type ```git clone https://github.com/LeoRoma/airport-js.git``` to clone the repository.
- Type ```cd airport-js``` to go in the app folder.
- Run in your text editor.

# Tech and Test
- Language: Javascript ES5.
- Test: Jasmine.

# Classes
- Airport.
- Plane.

# Functions 
For Airport class:
- planes.
- clearForLanding.
- clearForTakeOff.
- isStormy.

For Plane class:
- land.
- takeOff
