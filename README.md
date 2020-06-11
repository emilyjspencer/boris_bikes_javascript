## Boris Bikes

* A simple OOP application that emulates the Santender Cycles (formerly Barclays Cycle Hire), and more popularly known as Boris bikes, a public bicycle hire scheme in London 

* This application was test-driven using JavaScript and the Jasmine testing framework
* Demonstrates principles such as encaspulation, tdd, dry code


### User Stories

```
As a person,
So that I can use a bike,
I'd like a docking station to release a bike.

As a person,
So that I can use a good bike,
I'd like to see if a bike is working

As a member of the public,
So that I am not confused and charged unnecessarily,
I'd like docking stations not to release bikes when there are none available.

As a maintainer of the system,
So that I can control the distribution of bikes,
I'd like docking stations not to accept more bikes than their capacity.

As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a default capacity of 20 bikes.

As a system maintainer,
So that busy areas can be served more effectively,
I want to be able to specify a larger capacity when necessary.

As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations to accept returning bikes (broken or not).


```
## How to run

* Clone the project - git clone https://github.com/emilyjspencer/boris_bikes_javascript.git
* Cd into the repo
* Open the SpecRunner in the browser. Use Chrome if you have it
* Open the Chrome Developer Tools and click on the Console.
* Enter the following into the console to instantiate the objects:

```html
dockingstation = new DockingStation()
bike = new Bike()
```
The following methods can then be called on the objects:
```html
dockingstation.dock_bike(bike)
dockingstation.release_bike()
bike.report_broken()
bike.break()
bike.working()
```


## View the tests

* Open the SpecRunner in the browser to view the tests. 
* You should see that all tests are passing 


## Built with:

* JavaScript
* Jasmine

## Tested with:

* Jasmine


