# listing_apartments
## Project Structure:
The project contains 3 main folders reflecting the backend, frontend and mobile app components.  
- Backend:  
    -
    - Having a src folder that contains the source code:
        - entities: (where we add database entity models)
            - appartment.entity file
        - routes: (where we add our endpoints routs)
            - appartments.routes file
        - service: (where we have the database access or login functions for our endpoints)
            - appartments.services file
        - index.ts: (the start point of the application and managing how routes is being assigned to the routes files in the routes folder)
    - Database used is sqlite
    - Database connection and accessing implemented using TypeORM
- Frontend
    -
    - In the frontend I created a sample next.js project and then added the needed feature inside it.
    - public: (an auto generated folder containing pictures that can be used through the app)
    - src: (the folder that contains the source code of the project)
        - app: (auto generated folder contains general files to be used accross the app)
            - globals.css (which contains the cascading styling sheets, some of which was auto generated and others where added while adding the features)
            - page.tsx (the homepage for the app)
        - interfaces: (folder that contains the interfaces that we may use in more than one page or component)
            - appartment-interfaces.ts (file that should contain interfaces related to apartments)
        - pages: (folder containing the pages that will be rendered inside the app)
            - add-apartment.tsx
            - all-apartments.tsx
            - specific-apartment.tsx
        - urls.ts: (file containing the base url and the urls of the endpoints that will get called)
- Mobile:
    -
    - In the mobile app I created a react native expo project and then added the needed features inside it
    - src: (folder that contains the source code)
        - interfaces: (folder that contains the interfaces that we may use in more than one screen or component)
            - appartment-interfaces.ts (file that should contain interfaces related to apartments)
        - screens: (folder containing the screens of the app)
            - HomeScreen.tsx
            - AllApartmentsScreen.tsx
            - ApartmentDetails.tsx
        - app.js (is the starting point of the application that manages redirecting to home screen and the stack navigation)
        - urls.ts: (file containing the base url and the urls of the endpoints that will get called)
## Installations:
Before running you should do ```npm install``` for each app (backend, frontend, and mobile) and for the whole project

## Running the project:
1. Backend
    ```
    1. cd backend
    2. npm run build
    3. ts-node index.ts
    ```
    Or
    ```
    1. sudo docker-compose up --build 
    ```
2. Frontend
    ```
    1. cd frontend
    2. npm run build
    3. npm run dev
    ```
3. mobile
    ```
    1. cd mobile
    2. change the base_url in the urls.ts to contain your backend running IP and Port 
    3. npx expo start
    4. choose android or your preferred device/vertual device type (I tested with virtual android only)
    ```
