## XE Clone
I decided to take your advice and make this project with Nextjs and I have found it to be really really fun. I've got the tabs working (not totally implemented yet, but working) and I managed to use the API you suggested in the project description to do my conversions. I was stoked to figure out how to add the little flags (I ended up creating my own select/option). This project has been a blast!

2. Currency Currency
   So far I've got a lot of the CSS done with absolute positioning, which I think is pretty dang fragile. I had the conversion API working, at least fetching the info, but not displaying it yet. I'm not 100% decided if I intend to continue going with react or not. I might reconfigure the whole thing up with vanillaJS.

The bulk of the application will be found in App.js

Requirements
Using much of what you created in Project 1, create a clone of XE Currency ExchangeLinks to an external site.. This project will be extended into Project Three. There is a lot in the designs that are meant for that extended version. Please create the html for it all but you do not need to worry about the functionality for anything but the currency convertor.

Requirements

Create a web page for the currency converter. The page must have a header, with the stipulated links in the design. These links do not have to work right now. They will in Project 3. A user must enter an amount. This must be formatted for them as currency. A user can select from a list of currencies in the "From" and "To" dropdowns. The dropdowns must display both the Currency Code and the friendly name of the currency. A switch button is available to switch the currently selected values in the "From" and "To" dropdowns. When a user clicks convert, the form container expands and the conversion is displayed. Once a user clicks convert, two displays display below the main form container. Two tables are displayed with conversion values for common increments of currency.

EXTRA CREDIT (must do all for the full 2 points):
use the flags for a given currency to display next to the dropdown name options for From and To. change the currency symbols for a given currency to display the related value of the currency in the To. Update the symbol when a "From" value is selected. use the https://www.exchangerate-api.com/Links to an external site. API to get actual daily exchange rates. If you feel like you want to attempt this extra credit, I will record a video on working with an API. Much of this will also be covered in the Authentication Lab in SD 250.
## To Run

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
