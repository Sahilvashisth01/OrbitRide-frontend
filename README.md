# Uber Clone Frontend Documentation

## Overview
This is the frontend for the Uber Clone project, built using **React.js**. It provides a seamless user experience for booking rides, including features like location search, vehicle selection, ride confirmation, and driver assignment. The app uses **GSAP** for animations, **Tailwind CSS** for styling, and **React Context API** for state management.

---

## Pages and Components

### 1. **Home Page (`/home`)**

#### Description
The Home page is the central hub for users to book rides. It includes multiple interactive panels for location search, vehicle selection, ride confirmation, and driver assignment.

#### Features
- **Location Search Panel**: Allows users to select pickup and destination locations.
- **Vehicle Panel**: Displays available vehicle options for the ride.
- **Confirm Ride Panel**: Allows users to confirm their ride details.
- **Looking for Driver Panel**: Displays a loading screen while searching for a driver.
- **Waiting for Driver Panel**: Displays the status of the assigned driver.

#### State Management
The following states are used to manage the flow between panels:
- `pickup`: Stores the pickup location entered by the user.
- `destination`: Stores the destination location entered by the user.
- `panelOpen`: Controls the visibility of the location search panel.
- `vehiclePanel`: Controls the visibility of the vehicle selection panel.
- `confirmRidePanel`: Controls the visibility of the ride confirmation panel.
- `vehicleFound`: Controls the visibility of the "Looking for Driver" panel.
- `waitingForDriver`: Controls the visibility of the "Waiting for Driver" panel.

#### Props Flow
- **LocationSearchPanel**:
  - `setPanelOpen`: Toggles the location search panel.
  - `setVehiclePanel`: Toggles the vehicle selection panel.
- **VehiclePanel**:
  - `setConfirmRidePanel`: Toggles the ride confirmation panel.
  - `setVehiclePanel`: Toggles the vehicle selection panel.
- **ConfirmRide**:
  - `setConfirmRidePanel`: Toggles the ride confirmation panel.
  - `setVehicleFound`: Toggles the "Looking for Driver" panel.
- **LookingForDriver**:
  - `setVehicleFound`: Toggles the "Looking for Driver" panel.
- **WaitingForDriver**:
  - `setWaitingForDriver`: Toggles the "Waiting for Driver" panel.

---

### 2. **LocationSearchPanel Component**

#### Description
This panel allows users to select their pickup and destination locations. It displays a list of sample locations for demonstration purposes.

#### Props
- `setPanelOpen`: Closes the location search panel.
- `setVehiclePanel`: Opens the vehicle selection panel.

#### Data Flow
- The `location` array contains sample location data.
- When a location is selected, the `setVehiclePanel` function is triggered to open the vehicle selection panel.

---

### 3. **VehiclePanel Component**

#### Description
This panel displays a list of available vehicles for the ride. Each vehicle option includes details like type, capacity, estimated arrival time, and price.

#### Props
- `setConfirmRidePanel`: Opens the ride confirmation panel.
- `setVehiclePanel`: Closes the vehicle selection panel.

#### Data Flow
- When a vehicle is selected, the `setConfirmRidePanel` function is triggered to open the ride confirmation panel.

---

### 4. **ConfirmRide Component**

#### Description
This panel allows users to review and confirm their ride details, including pickup and destination locations, fare, and payment method.

#### Props
- `setConfirmRidePanel`: Closes the ride confirmation panel.
- `setVehicleFound`: Opens the "Looking for Driver" panel.

#### Data Flow
- When the "Confirm" button is clicked, the `setVehicleFound` function is triggered to simulate the process of finding a driver.

---

### 5. **LookingForDriver Component**

#### Description
This panel displays a loading screen while the app searches for a driver.

#### Props
- `setVehicleFound`: Closes the "Looking for Driver" panel.

#### Data Flow
- This component simulates the process of finding a driver. Once a driver is found, the app transitions to the "Waiting for Driver" panel.

---

### 6. **WaitingForDriver Component**

#### Description
This panel displays the status of the assigned driver, including their location and estimated arrival time.

#### Props
- `setWaitingForDriver`: Closes the "Waiting for Driver" panel.

---



## How It Works

1. **Location Search**:
   - The user enters their pickup and destination locations.
   - The `LocationSearchPanel` displays a list of suggested locations.

2. **Vehicle Selection**:
   - The `VehiclePanel` displays a list of available vehicles.
   - The user selects a vehicle to proceed to the ride confirmation step.

3. **Ride Confirmation**:
   - The `ConfirmRide` panel displays the ride details, including fare and payment method.
   - The user confirms the ride to initiate the driver assignment process.

4. **Driver Assignment**:
   - The `LookingForDriver` panel simulates the process of finding a driver.
   - Once a driver is found, the app transitions to the `WaitingForDriver` panel.

5. **Waiting for Driver**:
   - The `WaitingForDriver` panel displays the status of the assigned driver.

---

## Notes
- The app uses **GSAP** for smooth animations between panels.
- **Tailwind CSS** is used for responsive and modern styling.
- The `useState` and `useRef` hooks are used extensively for managing state and DOM references.
- The app is designed to be modular, with each panel implemented as a separate component.
# Uber Clone Frontend Documentation

## Overview
This is the frontend for the Uber Clone project, built using **React.js**. It provides a seamless user experience for booking rides, including features like location search, vehicle selection, ride confirmation, and driver assignment. The app uses **GSAP** for animations, **Tailwind CSS** for styling, and **React Context API** for state management.

---

## Pages and Components



### 2. **Captain Panel**

#### Description
The Captain Panel is designed for drivers (captains) to manage their rides. It includes features like viewing ride requests, confirming rides, navigating to the pickup location, and completing rides.

---

### Panels and Workflow

#### 1. **Captain Home Panel (`/captain-home`)**

##### Description
The Captain Home Panel is the main dashboard for captains. It displays the captain's details, earnings, and online hours. It also includes popups for new ride requests and ride confirmations.

##### Features
- **Captain Details**: Displays the captain's name, profile picture, earnings, and online hours.
- **Ride Request Popup**: Displays a new ride request with details like pickup location, destination, distance, and fare.
- **Ride Confirmation Popup**: Allows the captain to confirm the ride and start the trip.

##### State Management
- `ridePopupPanel`: Controls the visibility of the ride request popup.
- `ConfirmRidePopupPanel`: Controls the visibility of the ride confirmation popup.


- **RidePopUp**:
  - `setRidePopupPanel`: Toggles the ride request popup.
  - `setConfirmRidePopupPanel`: Toggles the ride confirmation popup.
- **ConfirmRidePopup**:
  - `setConfirmRidePopupPanel`: Toggles the ride confirmation popup.
  - `setRidePopupPanel`: Toggles the ride request popup.

##### Workflow
1. The captain logs in and lands on the Captain Home Panel.
2. A new ride request appears in the **Ride Request Popup**.
3. The captain can either:
   - **Ignore** the request, which closes the popup.
   - **Accept** the request, which opens the **Ride Confirmation Popup**.
4. In the **Ride Confirmation Popup**, the captain can:
   - Enter the OTP to confirm the ride and start the trip.
   - Cancel the ride, which closes all popups.

---

#### 2. **Captain Riding Panel (`/captain-riding`)**

##### Description
The Captain Riding Panel is displayed when the captain is en route to the destination. It shows the distance to the destination and allows the captain to complete the ride.

##### Features
- **Distance to Destination**: Displays the remaining distance to the destination.
- **Complete Ride Button**: Allows the captain to complete the ride.
- **Finish Ride Popup**: Displays the ride summary and a button to finish the ride.

##### State Management
- `finishRidePanel`: Controls the visibility of the finish ride popup.


- **FinishRide**:
  - `setFinishRidePanel`: Toggles the finish ride popup.

##### Workflow
1. The captain starts the ride and lands on the Captain Riding Panel.
2. The panel displays the distance to the destination.
3. The captain clicks the **Complete Ride** button, which opens the **Finish Ride Popup**.
4. In the **Finish Ride Popup**, the captain can:
   - Review the ride summary.
   - Click the **Finish Ride** button to complete the ride and return to the Captain Home Panel.

---

#### 3. **Finish Ride Popup**

##### Description
The Finish Ride Popup is displayed at the end of a ride. It shows the ride summary and allows the captain to finish the ride.

##### Features
- **Ride Summary**: Displays details like pickup location, destination, distance, and fare.
- **Finish Ride Button**: Completes the ride and redirects the captain to the Captain Home Panel.

##### Props Flow
- `setFinishRidePanel`: Toggles the finish ride popup.

##### Workflow
1. The captain reviews the ride summary.
2. The captain clicks the **Finish Ride** button to complete the ride.
3. The app redirects the captain to the Captain Home Panel.

---
---

## Technical Details

### Libraries and Tools Used

1. **React.js**:
   - Used for building the user interface.
   - Provides a component-based architecture for better code reusability and maintainability.

2. **GSAP (GreenSock Animation Platform)**:
   - Used for creating smooth animations between panels.
   - The `useGSAP` hook is used to trigger animations based on state changes.

3. **Tailwind CSS**:
   - A utility-first CSS framework used for styling the application.
   - Provides responsive design utilities and modern styling features.

4. **Remix Icon**:
   - A library of open-source icons used for UI elements like buttons and indicators.

5. **React Context API**:
   - Used for managing global state (e.g., user data, authentication tokens).

---




## Notes
- The Captain Panel uses **GSAP** for smooth animations between popups.
- **Tailwind CSS** is used for responsive and modern styling.
- The `useState` and `useRef` hooks are used extensively for managing state and DOM references.
- The app is designed to be modular, with each panel implemented as a separate component.