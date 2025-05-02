In this project, let's build **Nxt Watch** App.


- Initially, the app should be in **Light** theme

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the Login Route
  - When an _authenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to open the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an _authenticated_ user opens the Home Route,
    - An HTTP GET request should be made to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with the initial value as an empty string
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Home Videos API URL**
    - When a non-empty value is provided in the search input and the search icon button is clicked
      - Make an HTTP GET request to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
    - When the HTTP GET request made to the **Home Videos API URL** returns an empty list, then the [No Videos View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output-v0.png) should be displayed
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Trending Route**

  - When an _authenticated_ user opens the Trending Route,
    - An HTTP GET request should be made to the **Trending Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Trending Videos API URL**
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Gaming Route**

  - When an _authenticated_ user opens the Gaming Route,
    - An HTTP GET request should be made to the **Gaming Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Gaming Videos API URL**
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Video Item Details Route**

  - When an _authenticated_ user opens the Video Item Details Route
    - An HTTP GET request should be made to the **Video Details API URL** with `jwt_token` in the Cookies and `video_id` as a path parameter
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Video Details API URL**
  - Corresponding video should be displayed using `react-player` package
  - Initially, all the three buttons (Like, Dislike, Save) should be inactive
  - When the **Like** button is clicked,
    - It should change to active state
    - If the **Dislike** button is already in the active state, then the **Dislike** button needs to be changed to the inactive state
  - When the **Dislike** button is clicked,

    - It should change to active state
    - If the **Like** button is already in the active state, then the **Like** button needs to be changed to the inactive state

  - When the **Save** button is clicked,
    - It should change to active state and the respective video details should be added to the list of saved videos
    - **Save** button text should be changed to **Saved**
  - When the **Saved** button is clicked
    - It should change to inactive state and the respective video details will be removed from the list of saved videos
    - **Saved** button text should be changed to **Save**

- **Saved Videos Route**

  - When an _authenticated_ user opens the Saved Videos Route,
    - If the list of saved videos is empty, then the [No Saved Videos Found View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-light-theme-lg-output-v0.png) should be displayed
    - The list of saved videos should be displayed
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route

- **Not Found Route**

  - When a random path is provided as the URL path, then the page should be navigated to the Not Found Route

- **Header**

  - When the Website logo is clicked, then the page should be navigated to the Home Route
  - When the theme icon button is clicked, then the theme should be changed accordingly
  - When the **Logout** button is clicked, then the [Logout Popup](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-light-theme-lg-output-v0.png) should be displayed
    - When the **Cancel** button is clicked, then the popup should be closed and the page should not be navigated
    - When the **Confirm** button is clicked, then the page should be navigated to the Login Route

</details>
