A tabbed interface is a common design pattern. It allows you to select an interface panel by choosing from a number of tabs “sticking out” above an element.

In this exercise you’ll implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of <button> elements at the top of the node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden (given a display style of none), and the currently visible node can be selected by clicking the buttons.

When it works, extend it to also style the currently active button differently.

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
  }
  asTabs(document.querySelector("#wrapper"));
</script>