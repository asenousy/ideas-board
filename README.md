# Run App

Visit this [link](https://asenousy.github.io/ideas-board) to see it in action
or git clone this repo and run the following:

```
yarn
yarn test // hopefully tests pass :)
yarn start
```

# State Management:

- redux for state with the library redux-starter-kit, which simplifies redux boilerplate

# Typing

used prop-types for some typing safety

# Performance

- made sure i use PureComponents and React.memo
- made sure no props are declared inline otherwise it would cancel efforts in previous point
- used a higher order throttling function from lodash to store state change every second

# Security

- sanitised user inputs for xss, even though in this scenario it is not required as React already does it when rendering, but I thought in future case scenario maybe the list stored could be passed somewhere else, but also to demonstrate that i am security aware :)

# Accessibility

- for buttons with no text, made sure they contain aria-label and for elements acting like buttons used role
- made sure everything is tabbable with tab-index

# Testing

- Enzyme shallow rendering for unit tests
- Enzyme mount for integration tests
- if i had time i would have loved to use puppeteer for e2e tests
