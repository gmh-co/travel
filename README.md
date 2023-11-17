# Holiday Times

This project showcases a webpage for tracking holiday times. It includes a countdown timer, schedule, and activities table.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Data](#data)

## Description

The Holiday Times project is a webpage that provides information about upcoming holidays. It displays a countdown timer to the target date, a schedule of movements, and a list of activities.

## Features

- Countdown timer to the target date
- Schedule table showing movements with dates, locations, and stops
- Activities table listing activities with dates and locations

## Installation

To run the Holiday Times webpage locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/gmh-co/holiday-times.git
   ```
2. Navigate to the project directory:

   ```bash
   cd holiday-times
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

Once the webpage is loaded, you will see the countdown timer, schedule, and activities tables. The countdown timer displays the remaining time until the target date. The schedule table shows the movements with their respective dates, locations, and stops. The activities table lists the activities with their dates and locations.

Feel free to customize the data in the `data.json` file to match your own holiday plans. You can modify the movements and activities to reflect your specific itinerary.

## Data
The data for the schedule and activities is loaded from the data.json file. The structure of the JSON file should follow the following format:

```{
  "movement": [
    {
      "date": "2023-11-01",
      "from": "City A",
      "stops": ["Stop 1", "Stop 2"],
      "to": "City B"
    },
    // Add more movement objects as needed
  ],
  "activities": [
    {
      "date": "2023-11-02",
      "name": "Activity 1",
      "location": "Location A"
    },
    // Add more activity objects as needed
  ]
}
```

Make sure to update the `data.json` file with your own schedule and activities data.
