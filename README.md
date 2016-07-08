# Angular UI Bootstrap datepicker group component

A component with a group of Angular UI Bootstrap datepickers and an action button for collecting
dates.

## Look

It will have a few datepickers and a button for collecting dates selected by user.

It has a few datepickers and a button for collecting dates selected by user.

Date name1 |  |
--- | ---
`<input type="text">Input box</input>` | <button type="button">:date:</button>

Date name2 |  |
--- | ---
`<input type="text">Input box</input>` | <button type="button">:date:</button>

:mag_right:

## Usage

```html
<head>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
</head>

<body ng-controller="main">

<p>Datepicker group component</p>

<date-pickers pickers="pickers" on-done="getDates(dates)" button-tilte="Search"></date-pickers>

<script src="app.js"></script>
<script src="components/datePickers/date-pickers.js"></script>
<script src="components/datePickerUib/date-picker-uib.js"></script>

```

## Configuration

* buttonTile: title of action button for collecting dates
* onDone: call back function of action button
* pickers: arrary of objects. Each object should have:
  * `class`: css class of datepicker container. Default: col-md-6;
  * `title`: display name of datepicker.
  * `date`: initial date.
