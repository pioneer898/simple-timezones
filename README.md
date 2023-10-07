# Simple Timezones
This is a simple module for generating timezone hourly arrays with other information. Intended to be used for a simple timezone visualization app that shows the current time and relative times in other timezones. The `getZones(hours)` method will return an array of objects representing the current state of each timezone specified in `zones`. This data will include current time information, as well as an array `data` that will contain an object for each hour.

## Options
Properties and options include:
```js
const simpleTimezones = new SimpleTimezones();

// Zones: Array of timezone names (strings) representing the timezones to monitor
simpleTimezones.addZone('America/Anchorage'); // For adding a zone
simpleTimezones.zones = ['America/Anchorage']; // Array is public and can be replaced entirely

// Hour Offset - specifies the position of the "current" hour in the array of hour objects for each zone
simpleTimezones.offset = 3;

// All Zones - Returns an array of all available zones from the moment.js module
simpleTimezones.allZones;

// Test Hour Shift - for debugging, simulates a new hour every 10 seconds.
simpleTimezones.testHourShift = true;
```
