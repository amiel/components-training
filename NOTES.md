# Components


* Components have taken center stage
* Understand the right solution, not just the best practice

https://github.com/EmberMap/components-training

```
ember serve --proxy=http://localhost:16006
```

## 1 c-panel

* Declarative good
* State
* Using a component variable (isOpen + {{#if}} or class) is declarative
* Using jQuery is imperative
* Declarative is a big winner in testability and composability
* Tell, don't ask

## 2 freeze panel

* DDAU tradeoffs
* Tradeoff between configurability and

## 3 side effects

* It can make sense for a component to handle saving, especially if it is a domain concept

## 4 data loading

* Load data with the route if it makes sense, but sometimes it _does_ make sense to load data in a component
* When loading data in the component, use ember-concurrency

https://github.com/EmberMap/components-training/blob/master/SUMMARY.md

DECLARATIVE IS BETTER

