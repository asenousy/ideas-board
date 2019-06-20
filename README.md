# Run App

visit link to checkout the app.
or git clone this repo and run the following:

```
yarn
yarn test // hopefully tests pass :)
yarn start
```

# State Management:

redux for state with the library redux-starter-kit, which simplifies redux boilerplate

# Performance

made sure i use PureComponents and React.memo
made sure no props are declared inline otherwise it would cancel efforts in previous point

# Security

sanitised user inputs for xss, even though in this scenario it is not required as React already does it when rendering, but I thought in future case scenario maybe the list stored could be passed somewhere else, but also to demonstrate that i am security aware :)

# Accessibility

for buttons with no text, made sure they contain aria-label and for elements acting like buttons used role

# Testing

Enzyme shallow rendering for unit tests
Enzyme mount for integration tests
if i had time i would have loved to use puppeteer for e2e tests
