1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. It's aimed at solving the problem of prop drilling.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. 
Reducer is a pure function that takes the previous state and an action, and returns the next state 
Store is basically just a plain JavaScript object that allows components to share state. 
Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer. And your React components will watch this reducer and if that reducer changes, then UI will change itself too. But never other way around, because Redux state is single source of truth.
Actions change state, the store holds state value, reducers process action by accepting previous state and making a new state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Application state is state of app at a given time, information can be passed to other components easily. While component state is state contained in a component, that can be passed down as props.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.  It allows us to make asynchronous operations in redux. Thunk is a term for a function that returns another function. We use thunk to return async operations


5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux because it just had a much easier format to follow with applying and wrapping through components. Also calling dispatch and I think it was easier with axios calls. 
