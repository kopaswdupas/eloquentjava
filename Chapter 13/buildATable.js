/*We built plain-text tables in Chapter 6. HTML makes laying out tables quite a bit easier. 
An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>country</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>

For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: 
either heading cells (<th>) or regular cells (<td>).

The same source data that was used in Chapter 6 is again available in the MOUNTAINS variable in the sandbox. 
It can also be downloaded from the website.
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

Write a function buildTable that, given an array of objects that all have the same set of properties, 
builds up a DOM structure representing a table. The table should have a header row with the property names wrapped in 
<th> elements and should have one subsequent row per object in the array, with its property values in <td> elements.

The Object.keys function, which returns an array containing the property names that an object has, will probably be helpful here.

Once you have the basics working, right-align cells containing numbers by setting their style.textAlign property to "right".
*/
<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
  .numbers { text-align: right;}
</style>

<script>
  function buildTable(data) {
    // Your code here.
    var elTable = document.createElement("table");
    var elHeadTr = document.createElement("tr");  // row

    var names = Object.keys(data[0]);             //doczytać 

    elTable.appendChild(elHeadTr);

    names.forEach(function(heads) {
      var elTh = document.createElement("th");    //head
      elHeadTr.appendChild(elTh);
      elTh.textContent = heads;
      
    });

    data.forEach(function(object) {
      var elTr = document.createElement("tr");
      elTable.appendChild(elTr);

      names.forEach(function(heads) {
        var elTd = document.createElement("td");
        elTr.appendChild(elTd);
        elTd.textContent = object[heads];
        if (typeof object[heads] == "number")
          elTd.setAttribute("class", "numbers");
      });
    });
    return elTable;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>