# Addons-Website
> Some functionality for ease and not to rewrite several times the same thing.

> Version: `0.0.3`

> Repo: https://github.com/c1ach0/Addons-Website

## _Summury
- [Installation](#installation)
- __Fonctionnality__
    - [Toggle](#toggle)
    - [Regex](#regex)

## Installation
```sh
npm i addons-website --save
```

## Fonctionnality

### Toggle
` Create new boolean with switch state, get state or set manually state. `

_Personally I often use this for burgers or sidebar, not to have to create lots of methods in vuejs_
```ts
import { Toggle } from "addons-website";

let burger = new Toggle(false); // Init to false

// Pass from false to true or vice versa
burger.switch() // false -> true

// Recover the condition of the Boolean
if(burder.isToggled) {
    // ....
}
```

### Regex
` Check the content using regular expression ready to use. `

```ts
import { Regex } from "addons-website";

// Create a new instance to test text
const tester = new Regex();

// Test if the word only contains alphabetical characters
if(tester.name("Je4n")) {
    // ...
}

// Testing if the password contains minimum 8 carractures with capital letters, tiny and figures, or special characters: "!@#$%^&*"
if(tester.passwordStrong("MyP@ssord1!")) {
    // ...
}

// Test if the email is correct so john@domain.ext or john.doe@domain.ext
if(tester.email("john@domain.ext")) {
    // ...
}

// Take a custom test with an expression that is not entered here
if(tester.custom(/^[A-Za-z]+$/, "J0hn")) {
    // For the example: the same as on test.name()
}
```