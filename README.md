# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




FEATURES

Main Three Features of This Project are :-

1. It can add items to Cart but clicking a button
2. It can calculate total of (price, Credit hour , and the remaining hours also)
3. It shows alert in cases of Multiple selecting same cards and also shows alert when the given limt crossed


I Personally ADDED 2 NEW FEATURES, THEY ARE :-

1. It Can Remove items from Cart and re-Calculate the total of (price, Credit hour , and the remaining hours also)
2. It also shows alert when a item is removed from the cart 



Discussing how you managed the state in my assignment project :-

I used the useState hook to store the state of the courses, selected courses, hour remaining, total hour, and total price.
I used the useEffect hook to fetch the courses data from a JSON file and set the initial state of the courses variable.
I used functions to update the state of the other variables when a course is selected or removed.
For example, the handleSelect() function updates the state of the selectedCourse and hourRemaining variables when a course is selected. It does this by checking if the course is already selected. If the course is not already selected, the state of the variables is updated.

Similarly, the handleRemoveCourse() function updates the state of the selectedCourse, hourRemaining, and totalPrice variables when a course is removed. It does this by filtering the selectedCourse variable to remove the course that is being removed. The state of the hourRemaining and totalPrice variables is also updated accordingly.

I chose this approach to state management because it is simple and straightforward. It also allows me to keep the state of the application in a single place, which makes it easier to manage and reason about.

Here is a more detailed explanation of each part of the state management:

Storing the state: I used the useState hook to store the state of the courses, selected courses, hour remaining, total hour, and total price. This allows me to update the state of the application in a reactive way.
Fetching the courses data: I used the useEffect hook to fetch the courses data from a JSON file and set the initial state of the courses variable. This ensures that the application has the latest data when it starts up.
Updating the state: I used functions to update the state of the other variables when a course is selected or removed. This allows me to control how the state of the application changes.
I believe that this approach to state management is effective and scalable. It is also easy to understand and maintain.