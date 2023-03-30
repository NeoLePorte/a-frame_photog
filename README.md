# Gatsby Aframe Anime.js Art App

This is a web application built with Gatsby, Aframe and Anime.js that showcases an interactive art scene. The scene features a Fibonacci spiral of spheres that move in a spring-like motion, and a rotating video of eyes that appears in the center. The scene also features a moving camera that goes up and down, and a glitchy sky.

## Installation

**To install and run the project, follow these steps:**

1. Clone this repository to your local machine.
2. Install the dependencies by running ```npm install```.
3. Start the development server by running npm start.
4. Open your browser and navigate to http://localhost:8000 to see the app.

## Components
# Sphere

This component represents a sphere in the Fibonacci spiral. It takes in the following props:

* color: the color of the sphere
* position: an object that represents the position of the sphere
* rotation: an object that represents the rotation of the sphere
* id: a unique identifier for the sphere

## FibonacciSpiral

This component represents the Fibonacci spiral of spheres. It takes in one prop:

n: the number of spheres in the spiral

## HomeScene

This component is the main scene that is rendered. It includes the following elements:

A rotating video of eyes in the center
A Fibonacci spiral of spheres
A moving camera
Glitchy sky

## Dependencies

The app relies on the following dependencies:

* React
* Gatsby
* Aframe
* Anime.js

## Usage

Feel free to use this project as a starting point for your own Aframe art projects. You can customize the colors, shapes, and movements of the spheres, and experiment with different Aframe entities and components. Enjoy!