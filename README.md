# IEEE-Website

[purdueieee.org](https://purdueieee.org) for deployment.

[old.purdueieee.org](https://old.purdueieee.org) for the former site, archival purposes only (code visible at tag `old-final`).

Fork this repository and make a pull request for website updates.
Contact ieee-infrastructure@purdueieee.org for any questions.

## Basic Tech Layout

All pages are mostly static HTML with Vue (2.6.14) used to add some functionality that *was* handled previously by PHP.

I chose Vue because I was most comfortable with it and it wouldn't require a total npm setup with deployment pipline like React would. Each page usually has a seperate Vue JS file to minimize how much code needs to be sent for a single page - not every page uses anything other than components!

Bootstrap (5.0.2) is the CSS library. Bootstrap also uses a JS library for dropdowns and other overlapping elements.

## Key Formatting Notes

* _Entire Site_: PLEASE MAKE SURE INDIVIDUAL PAGES ARE <= 1MB! CROP AND RESCALE IMAGES TO REACH THIS GOAL!
* _Entire Site_: Try to reach AA WCAG accessibility compliance, as seen on [the A11LY project site](https://www.a11yproject.com/checklist/)
* `/`: committee cover images must be 500x100px with a 250-310 character descriptor
* `/awardees`: awardee images must be 300x300px (not every old image follows this)
* `/studentwinners`: awardee images must be 300x300px
* `/constitution`: follow naming convention for PDFs established in the folder
* `/officers`: officer images must be 200x200px and the json file must be a VALID json object with three keys: 'elected', 'cornerstone', 'technical'. Each key is an array of objects where each object represents one officer
