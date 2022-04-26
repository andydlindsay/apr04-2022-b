$((something) => {
  // console.log('jQuery?', something);

// $(document).ready(() => {
  console.log('did this work?');

  console.log(username);

  // const node = document.createElement("li");
  // const textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("main-list").appendChild(node);

  const $li = $('<li>').text('Water');
  // const $li = $('<li>Water</li>');
  // $li.text('Water');

  const $mainList = $('#main-list');

  $mainList.append($li);
  // $mainList.prepend($li);

  // $li.appendTo($mainList);
  // $li.prependTo($mainList);


  // listen for the button to be clicked
  const $button = $('#add-list-item');

  // $form.on('submit', () => {});

  // const mouseoverHandler = () => {
  //   console.log('mouse is over the button');
  // };

  // $('#clear-mouseover').on('click', () => {
  //   $button.off('mouseover', mouseoverHandler);
  // });

  $button.on('click', () => {
    // $button.on('mouseover', mouseoverHandler);
    console.log('the button was clicked');

    // grab the contents of the input field
    const $input = $('#new-list-item');

    const userInput = $input.val();
    console.log(userInput);

    // dynamically create and append a new li to our list
    const $li = $('<li>').text(userInput).prependTo($mainList);

    // $mainList.prepend($li);

    // clear the value of the input
    $input.val('');

    // put focus on the input field (ie. put the cursor back in the input field)
    $input.focus();
  })

  // form submission
    // $('#new-item-form').on('submit', (event) => {
    //   event.preventDefault();

    //   console.log('the form has submitted');

    //   // js will make the ajax request
    // });

});
