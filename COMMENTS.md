# Developer Comments

Only managed to do one of the streches which is persisting state in local storage, however below my thoughts on remaining stretch points and how i would have approach it, if i had more time

1. Count remaining characters: I would used a state in the form component and that keeps track of chars left and display it with `position: absolute` somewhere on form

2. Notifications: I would have explored the new React Portals to render it outside of the DOM hierarchy of parent component and straight above it on the body
