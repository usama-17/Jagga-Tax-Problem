# Jagga Tax Problem Solution

This repository contains a JavaScript implementation for solving the "Jagga Tax" coding challenge. The challenge involves finding the top five strategic crossings to collect a fictional "Jagga Tax" in a network of roads and crossings, based on the number of shortest routes passing through each crossing.

## Problem Statement

A group of bandits needs to place their extortion operations at strategic crossings to maximize their revenue. The revenue potential of a crossing (JRP) is measured by the number of shortest routes between all other crossings that pass through it. The objective is to determine the top five crossings where the bandits should establish the tax collection point to maximize their revenue.

## Solution Overview

The solution involves implementing the Floyd-Warshall algorithm to find the shortest paths between all pairs of crossings and calculating the JRP for each crossing. The crossings are then sorted by their JRP, and the top five are selected as the optimal locations for tax collection.

### Floyd-Warshall Algorithm

The `floydWarshall` function calculates the shortest paths between all pairs of vertices in a weighted graph. It initializes a distance matrix with `Infinity` for all pairs of vertices except for the diagonal, which is set to `0`. The distance between directly connected vertices is set to `1`. The algorithm then iteratively updates the distance matrix using every vertex as an intermediate vertex.

### Calculating JRP

The `calculateJRP` function calculates the JRP for each vertex. It counts the number of shortest paths that pass through each vertex by checking if the sum of distances from one vertex to the intermediate vertex and from the intermediate vertex to the destination equals the shortest distance between the origin and destination.

### Sorting and Output

The `jaggaTax` function orchestrates the reading and processing of the input. It sorts the crossings by JRP and index and outputs the indices of the top five crossings.

## Prerequisites

- Node.js
- Nodemon

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the development server with Nodemon: `npm run dev`.

## Usage

To run the solution, provide the input as a string to the `jaggaTax` function. The function will output the indices of the top five crossings.

```javascript
const sampleInput = `1
6 6
1 2
1 3
2 4
3 4
4 5
4 6`;

jaggaTax(sampleInput);
