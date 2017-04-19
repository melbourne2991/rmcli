## Usage

Requires nodejs v6.9.4 or above.

1. Clone this repo and `cd` into it.
2. Install dependencies with `npm install` or `yarn`
3. Start the cli with `npm start`
4. Issue commands - See below for commands

## Commands

- `PLACE X,Y,DIRECTION` - where X,Y are coordinates and direction is NORTH, SOUTH, EAST or WEST.
- `MOVE` - moves robot forward by 1, in whatever direction it is facing.
- `LEFT` - rotates robot 90 degrees left
- `RIGHT` - rotates robot 90 degrees right
- `REPORT` - outputs the current location of the robot and direction it is facing

## Tests

Tests can be run with `npm test`

## Sample data

Sample inputs & expected outputs can be found in `examples.txt`.