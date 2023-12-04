## About this project

A brief description of features and how I handled useState of react in this particular project

## Features

- Click on Select and selected Course Name, Price and Total Hours will be shown at cart section.
- If you cross the the remaining hour which is 20 hours, it will throw a toast that says "Credit hour limit crossed".
- If you select the same file again, it won't let you add same course twice on cart. It will throw a toast that says "Already exits in cart" .
- You won't be able to add another course to cart if you exceed the remaining time.
- Dynamically shows data

## Discussion on how I managed useState in this project

At first, on Courses.jsx file, I use useState for an empty array. Then I have used useEffect to fetch data from courses.json file. Then I set the data I got from json on setCourses. Then I have passed those data on Course.jsx using map. On Course.jsx file, I used a button named 'select'. By clicking on it, I have sent course as parameter which is an object.

On App.jsx, I used useState for an empty array. By using a function named handleCredit, I got a new parameter from Course.jsx file and used it to create a new array of object. Then I have passed the array on Bookmarks.jsx file. From there I send it to Bookmark.jsx file by using map.

Again on App.jsx, I have used another useState for Remaining hours. It has a value of 20 which is number. I have passed the value on Bookmarks.jsx file. I have used it to calculate Remaining hour on App.jsx. I have shown the calculation on Cart.

I have used another useState for price calculation. It;s value is 0 which is a number. I have sent the data on Bookmarks.jsx file. I have shown the total price from it.

Again I have used another useState for hours calculation. It's value is 0 which is a number. This sate has been used for Total hours calculation and passed on Bookmarks.jsx file

Also I have used a logic to prevent adding same course on cart and prevent it to exceed the Remaining Time.

##Live website
 domineering-breath.surge.sh

## Author

- [alrakib1](https://github.com/alrakib1)
