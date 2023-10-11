Car Rental Application This is a car rental application developed by for a company that offers car
rental services . The application consists of three main pages:

Home Page: This page provides a general overview of the services offered by the company.

Catalog Page: This page displays a catalog of cars with various configurations. Users can filter the
cars by brand, hourly rental price, and mileage. The filtering functionality has been implemented
according to the project specifications.

Favorites Page: This page allows users to view and manage their favorite car listings. Users can add
car advertisements to their favorites and view them on this page. The functionality to add and
remove favorites has been implemented as specified in the project.

Technical Specifications Here are the technical details of the application:

Implemented the listing card for car advertisements based on the provided layout.

Displayed 8 advertisements on the initial load of the Catalog page, with the ability to load more
ads when the "Load more" button is clicked.

Implemented the feature for users to add advertisements to their favorites by clicking the heart
icon. The button color changes to indicate whether an ad is in the user's favorites.

Maintained the user's favorite ads even after refreshing the page.

Implemented a modal window that opens when the "Learn more" button is clicked. The modal displays
detailed information about the car and its rental conditions.

Enabled users to close the modal by clicking the close button, clicking outside the modal
(backdrop), or pressing the Esc key.

The "Rental car" button functions as a link, allowing users to contact the company by phone at
+380730000000.

Implemented routing using React Router with the following routes:

"/" - The home page with a general description of the company's services. "/catalog" - The catalog
page containing various car listings. "/favorites" - The favorites page displaying advertisements
added by the user. Implemented redirection to the home page when a user accesses a non-existent
route.

Created a personal backend for development using the UI service at https://mockapi.io/. A resource
called "adverts" was created to store car advertisements with the provided fields.

Used fields like id, year, make, model, type, img, description, and others to describe each
advertisement.

Implemented pagination, with each page displaying 8 advertisements.

Additional Features To enhance the application, the following features were added:

Filtering: Added a dropdown menu with car brands loaded from makes.json, allowing users to filter
advertisements by the selected brand. Implemented a dropdown menu for hourly rental prices (in $10
increments) to filter advertisements by the price range selected by the user. Provided a group of
input fields for specifying a mileage range to filter advertisements within the specified limits.
This car rental application provides a user-friendly experience for browsing and managing car
listings. Users can explore a variety of car options and easily add their favorite listings for
future reference.

Enjoy using this application for car rental services!
