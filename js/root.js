export const HIDDEN_CLASSNAME = "hidden";
export const INVISIBLE_CLASSNAME = "invisible";

// Login & Greeting
export const USERNAME_KEY = "username";

export const loginDiv = document.querySelector(".login");
export const loginForm = document.querySelector(".login #login-form");
export const loginSpan = document.querySelector(".login span");
export const loginInput = document.querySelector(".login #login-form input");
export const greeting = document.querySelector("#greeting");

// Clock
export const clock = document.querySelector("#clock");

// Todo
export const TRUE_KEY = "true";
export const FALSE_KEY = "false";
export const ANIMATE_REVERSE_CLASSNAME = "animate-reverse";
export const TODOS_KEY = "todos";
export const DONE_KEY = "done";
export const ACTIVE_CLASSNAME = "active";

export const todoOpen = document.querySelector("#todo-open");
export const todoDiv = document.querySelector("#todo");
export const todoForm = document.querySelector("#todo-form");
export const todoInput = todoForm.querySelector("input");
export const todoList = document.querySelector("#todo-list");

// Focus
export const FOCUS_KEY = "focus";

export const focusDiv = document.querySelector(".focus");
export const focusForm = document.querySelector(".focus #focus-form");
export const focusH3 = document.querySelector(".focus h3");
export const focusInput = document.querySelector(".focus #focus-form input");
export const focusListDiv = document.querySelector(".focus-list");
export const focusList = document.querySelector(".focus-list ul");
export const focusListH3 = document.querySelector(".focus-list > h3");
export const focusListSpan = document.querySelector(".focus-list > span");

export const focusElement = [focusDiv, focusForm, focusH3, focusInput];

export const focusListElement = [
  focusListDiv,
  focusList,
  focusListH3,
  focusListSpan,
];

// Quote
export const quote = document.querySelector("#quote span:first-child");
export const author = document.querySelector("#quote span:last-child");
