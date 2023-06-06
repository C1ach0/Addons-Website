# Addons-Website
> Some functionality for ease and not to rewrite several times the same thing.

> Version: `0.0.1`

> Repo: https://github.com/c1ach0/Addons-Website

## _Summury
- [Toggle](#toggle)

## Fonctionnality

### Toggle
` Create new boolean with switch state, get state or set manually state. `

_Personally I often use this for burgers or sidebar, not to have to create lots of methods in vuejs_
```ts
import Toggle from "@c1ach0/addons-website";

let burger = new Toggle(false); // Init to false
burger.switch() // false -> true
if(burder.isToggled) {
    // ....
}
```