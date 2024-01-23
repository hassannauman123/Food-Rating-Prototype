ratings = [{label:'coffee',price:3,deliciousness:3,speed:5},
          {label:'donuts',price:3,deliciousness:4,speed:5},
          {label:'frappuchino',price:4,deliciousness:3,speed:2},
          {label:'espresso',price:4,deliciousness:3,speed:4},
          {label:'latte',price:4,deliciousness:3,speed:5},
        ];
buttonList = [
    { label: 'coffee', text: 'coffee',url:"https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CinnamonDolceLatte.jpg?impolicy=1by1_wide_topcrop_630" },
    { label: 'donuts', text: 'donuts',url: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_GlazedDonut.jpg?impolicy=1by1_medium_630"},
    { label: 'frappuchino', text: 'frappuchino',url:"https://imgs.search.brave.com/JmQ814b8WGlEt9y-UhwpXeBh_KSWMGGkid-qhgWKM9o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0dGhpcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL3NpdGVz/LzQvMjAyMC8wMi9T/dGFyYnVja3MtQ29m/ZmVlLUZyYXBwdWNj/aW5vLmpwZw" },
    { label: 'espresso', text: 'espresso' ,url:"https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_Cappuccino.jpg?impolicy=1by1_wide_topcrop_630"},
    { label: 'latte', text: 'latte',url:"https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_PumpkinSpiceLatte.jpg?impolicy=1by1_wide_topcrop_630" },
  ];

  comments = [
    {label:'coffee',comments:["User123-456: The coffee is cheap","Hassan_CEO: I need this to work","Coffee_addict: Best coffee around"]},
    {label:'donuts',comments:["Totally_not_a_cop: I have this every morning","Fat_Guy: I have this for breakfast,lunch and dinner","ADHD_child: Mom told me I can't have this or I'll get hyper"]},
    {label:'french vanilla',comments:["Joseph_PartTimer: My favorite drink in this place","Karen: I'll never going back here again, this drink sucks","French_Guy: I'd rather have a real french drink"]},
    {label:'hot chocolate',comments:["Hot_Stuff: Almost as hot as me","Snobby_Hipster: Doesn't even taste like real chocolate","Drink_up: Downed it in one go now my tounge is burned"]},
    {label:'wraps',comments:["Plett_J: I eat this after my hockey practice","Sylveon_Vester: Eh it's okay I guess","Tims_CEO: If anyone talk shit about this I'm pulling it off the menu"]},
  ];
//for image slider
var currentIndex = 0;
var totalImages = document.querySelectorAll('.image').length;
var imageList = document.getElementById('imageList');

 function showImage(index) {
   if (index < 0) {
     currentIndex = totalImages - 1;
   } else if (index >= totalImages) {
     currentIndex = 0;
   }

   var translateValue = -currentIndex * 75; // Adjust 100 based on the number of images
   imageList.style.transform = 'translateX(' + translateValue + 'vw)';
 }

 function prevImage() {
   currentIndex--;
   showImage(currentIndex);
 }

 function nextImage() {
   currentIndex++;
   showImage(currentIndex);
 }


//function for the "what we've picked for you" section
 // Get the container element


 const buttonContainer = document.getElementById('menu-items');
 // Create and append round buttons with text to the container
 buttonList.forEach(button => {
   const buttonWrapper = document.createElement('div');
   buttonWrapper.className = 'button-wrapper';

   const buttonDiv = document.createElement('button');
   buttonDiv.className = 'round-button';
   //buttonDiv.textContent = button.label;
   let url = "url('";
   buttonDiv.style.backgroundImage = url.concat(button.url,"')");
   const labelForRatings = ratings.find((element) => element.label === button.label);
   const labelForComments = comments.find((element) => element.label === button.label);
   buttonDiv.addEventListener('click', () => createRating(labelForRatings));
   buttonDiv.addEventListener('click', () => createComments(labelForComments));
   buttonDiv.style.backgroundSize="80px 80px";
   buttonDiv.style.objectFit = "contain";
   
   const buttonText = document.createElement('div');
   buttonText.className = 'button-text';
   buttonText.textContent = button.text;

   buttonWrapper.appendChild(buttonDiv);
   buttonWrapper.appendChild(buttonText);
   buttonContainer.appendChild(buttonWrapper);
 });
 //functions for the buttonGrid under Menu
 //getting the comments for a specific food
 function parsePersistentComment(food) {
   const fileInput = "comments.txt";
 
   if (fileInput) {
     const reader = new FileReader(fileInput);
 
     reader.readAsText(fileInput);

     reader.onload = function (e) {
       const content = e.target.result;
       const columnName = food; // Replace with the actual column name
       parseCSV(content, columnName);
     };
 
   }
 }


 const buttonGrid = document.getElementById('menu-button-grid');
 defaultButton = true;
 function createButton(label) {
   const button = document.createElement('button');
   button.classList.add('grid-button');
   button.textContent = label;
   button.style.fontFamily = 'Nova Square', "sans-serif" ;
   const labelForRatings = ratings.find((element) => element.label === label);
   const labelForComments = comments.find((element) => element.label === label);
   button.addEventListener('click', () => createRating(labelForRatings));
   button.addEventListener('click', () => createComments(labelForComments));

   button.addEventListener('click', function() {
     // Remove the "clicked" class from all buttons
   document.querySelectorAll('.grid-button').forEach(function(btn) {
   btn.classList.remove('clicked');
   btn.removeAttribute('id');
     });
   
   button.setAttribute('id','lastClicked');
   // Add the "clicked" class to the clicked button
   button.classList.add('clicked');
   });

     // Add mouseenter event listener to make the button darker on hover
   button.addEventListener('mouseenter', function() {
   button.classList.add('clicked');
   });

     // Add mouseleave event listener to remove the darker effect when not hovered
   button.addEventListener('mouseleave', function() {
   button.classList.remove('clicked');
   });

   if(defaultButton) button.classList.add('default-button')
   
   return button;
 }

 function pressDefaultButton(){
   var defaultButton = document.querySelector('.default-button');
   if (defaultButton) {
     defaultButton.click();
 }
 }
 function populateGrid() {
   let labels = buttonList.map(button => button.label);
   labels.forEach(label => {
     const button = createButton(label);
     buttonGrid.appendChild(button);
   });
   pressDefaultButton();
 }
 
 populateGrid();
 //star-rating for the rating section
 function displayStarRating(label, stars) {
       const ratingElement = document.createElement('div');
       ratingElement.innerHTML = `<p>${label} Rating:</p><div class="stars"></div>`;
       
       const starsContainer = ratingElement.querySelector('.stars');
       for (let i = 1; i <= 5; i++) {
           if (i <= stars) {
               starsContainer.innerHTML += "⭐";  // Use any symbol you prefer for the star
           } else {
               starsContainer.innerHTML += "☆";  // Use any symbol you prefer for an empty star
           }
       }

       document.getElementById('star-rating').appendChild(ratingElement);
 }

 function createRating(label){
   const myDiv = document.getElementById("star-rating");
   myDiv.innerHTML = "";
   for (const key in label) {
       if (key !== 'label') {
           const star = label[key];
           displayStarRating(key, star);
       }
   }
 }

 

// Function to add paragraphs to the target div
function createComments(label) {
   // Select the target div by its ID
   var targetDiv = document.getElementById("user-comments");
   targetDiv.innerHTML = "";
   var comments = label.comments;
   // Loop through the paragraphs and create a <p> element for each
   for (var i = 0; i < comments.length; i++) {
       var paragraph = document.createElement("p"); // Create a <p> element
       paragraph.textContent = comments[i]; // Set the text content of the <p> element

       // Append the <p> element to the target div
       targetDiv.appendChild(paragraph);
   }
}
//review page


function setUp(){
  var rev = document.getElementById("reviewer");
  rev.hidden = true;
  loadReviews();

}

function loadReviews(){

  document.getElementById("reviews").innerHTML += localStorage.getItem("myRev");
}

function postReview(){
  document.getElementById("reviewer").hidden = true;
  document.getElementById("reviews").hidden = false;
  document.getElementById("rBut").hidden = false;
  document.getElementById("rBut").css

  var text = document.getElementById("textBox");
  review = text.value;
  text.value = "";
  if(review != "") {
      revHTML = "<p><var> USER:</var> " + review + "</p>"
      document.getElementById("reviews").innerHTML += revHTML;
      localStorage.setItem('myRev', revHTML);

  }

  /* this done work 
  var food = document.getElementById("food");
  var num = (food.value + document.getElementById("foodRate").value) /2;
  food.value = num;

  var serv = document.getElementById("serv");
  num = (serv.value + document.getElementById("serviceRate").value) /2;
  serv.value = num;

  var atmo = document.getElementById("atmo");
  num = (atmo.value + document.getElementById("atmoRate").value) /2;
  atmo.value = num;

  */
}

function cancel(){
  document.getElementById("reviewer").hidden = true;
  document.getElementById("reviews").hidden = false;
  document.getElementById("rBut").hidden = false;
}

function rate(){
  document.getElementById("reviewer").hidden = false;
  document.getElementById("reviews").hidden = true;
  document.getElementById("rBut").hidden = true;
}

//side bar/ nav bar business
function sideBar(){
 const sidebar = document.getElementById("sidebar");
 const hideButton = document.getElementById("hideButton");
 const reduceWidthElements = document.querySelectorAll(".reduce-width");
 const reduceFontSizeElements = document.querySelectorAll(".reduce-font-size");

 const darkModeButton = document.querySelector(".dark-mode-navbar");
 const darkModeText = document.getElementById("darkModeText");

 // Add click event listener to the "Hide navbar" button
 hideButton.addEventListener("click", function () {
     // Toggle a class on the sidebar to change its background color
     sidebar.classList.toggle("hide-navbar-active");

     // Toggle the reduce-width class on relevant image elements
     reduceWidthElements.forEach(element => {
         element.classList.toggle("reduce-width-active");
     });

     // Toggle the reduce-font-size class on relevant text elements
     reduceFontSizeElements.forEach(element => {
         element.classList.toggle("reduce-font-size-active");
     });
 });

 darkModeButton.addEventListener("click", function () {
     // Toggle a class on the body to change background color for dark mode
     document.body.classList.toggle("dark-mode-active");
     const darkModeTextContent = document.body.classList.contains("dark-mode-active") ? "Light mode" : "Dark mode";
     darkModeText.innerHTML = darkModeTextContent;
     darkModeText.style.fontWeight = document.body.classList.contains("dark-mode-active") ? "bold" : "normal";

 });
}
sideBar();
// Add a variable to keep track of the current tip index
// let currentTipIndex = 0;

function openPopup() {
 // Display the popup container
 document.getElementById("popupContainer").style.display = "block";

 // Show the first tip
 showTip(currentTipIndex);
}

function closePopup() {
 // Hide the popup container
 document.getElementById("popupContainer").style.display = "none";

 // Reset the current tip index when closing the popup
 currentTipIndex = 0;
}

function showTip(index) {
 const popupContent = document.getElementById("popupContent");
 popupContent.innerText = generateTip(index);
}

function showPreviousTip() {
 // Decrement the current tip index and show the previous tip
 currentTipIndex--;
 showTip(currentTipIndex);
}

function showNextTip() {
 // Increment the current tip index and show the next tip
 currentTipIndex++;
 showTip(currentTipIndex);
}

function generateTip(index) {
 const tips = [
     "Tip: \n\n\n Click on any box under 'WHAT WE'RE R8ING!' to go to that Resturant's page!",
     "Tip: \n\n Use dark mode if your eyes are sensitive to bright light by clicking 'Dark mode' on the sidebar!",
     "Tip: \n\n Use the navigation section on the right to navigate back to the home page quicker!",
     "Tip: \n\n Make the navbar smaller by clicking on 'Resize navbar', then click back on it again to make it bigger!",
     "Tip: \n\n\n Scroll through the home page and explore various options to eat today!"];

 // If the index goes beyond the last tip, loop back to the first tip
 if (index >= tips.length) {
     currentTipIndex = 0;
     index = 0;
 }

 // If the index goes below the first tip, loop to the last tip
 if (index < 0) {
     currentTipIndex = tips.length - 1;
     index = tips.length - 1;
 }

 return tips[index];
}


function search() {
 // Get the value entered by the user
 var userInput = document.getElementById("search-input").value.toLowerCase();

 // Define redirection URLs based on user input
 var redirections = {
      "burgers": "search-burgers.html",
      "coffee": "search-coffee.html",
      "mcdonalds": "search-mcd.html",
      "international foods": "search-iFood.html",
      "vegetarian" : "search-veg.html",
      "fine dining" : "search-fd.html",
      "pizza" : "search-pizza.html",
      "edo japan" : "search-edo.html",
      "freshii" : "search-freshii.html",
      "pizza pizza" : "search-pp.html",
      "starbucks" : "search-sbux.html",
      "smitty's" : "search-smitty.html",
      "stella's" : "search-stella.html",
      "tim hortons" : "search-tims.html",
      "smitty" : "search-smitty.html",
      "smittys" : "search-smitty.html",
      "stella" : "search-stella.html",
      "stellas" : "search-stella.html"
     // Add more entries as needed
 };

 // Check if the user input corresponds to a predefined redirection
 if (redirections.hasOwnProperty(userInput)) {
     // Redirect the user to the specified URL
     //window.location.replace(redirections[userInput]);

     if(window.location.pathname != redirections[userInput]){
         window.location.href = redirections[userInput];
     }

     else {
         alert("You are currently looking at the results.");
     }
 } else {
     // Redirect to a default page if no match is found
     window.location.href = "/search-null.html";
 }
}

const items = document.querySelectorAll('.resto-container');

items.forEach((item, index) => {
 item.style.animationDelay = `${index * 0.75}s`; // Adjust the delay as needed
});

function generateBreadcrumbs() {
  const homeLink = '<a href="index.html">Home</a>';
  const searchLink = '<a href="search-empty.html">Search</a>';
  const restaurantLink = '<a href="#top">Restaurant</a>';
  const searchPage = localStorage.getItem("searchPage");

  if (searchPage !== null) {
    // Breadcrumbs when searchPage is not null
    breadcrumbsContent = `${homeLink} > ${searchLink} > ${restaurantLink}`;
  } else {
    // Breadcrumbs when searchPage is null
    breadcrumbsContent = `${homeLink} > ${restaurantLink}`;
  }

  // Update the content of the breadcrumbs div
  const breadcrumbsDiv = document.querySelector('.breadcrumbs');
  if (breadcrumbsDiv) {
    breadcrumbsDiv.innerHTML = breadcrumbsContent;
  }
}
generateBreadcrumbs();

/*FOR WHEN USER PRESSES ENTER IN THE SEARCH BAR */
function handleKeyDown(event) {
  // Check if the Enter key is pressed
  if (event.key === 'Enter') {
    // Prevent the default form submission
    event.preventDefault();
    
    // Trigger the search function
    search();
  }
}



 




 






let currentTipIndex = 0;

function openPopup() {
  // Display the popup container
  document.getElementById("popupContainer").style.display = "block";

  // Show the first tip
  showTip(currentTipIndex);
}





function closePopup() {
  // Hide the popup container
  document.getElementById("popupContainer").style.display = "none";

  // Reset the current tip index when closing the popup
  currentTipIndex = 0;
}

function showTip(index) {
  const popupContent = document.getElementById("popupContent");
  popupContent.innerText = generateTip(index);
}

function showPreviousTip() {
  // Decrement the current tip index and show the previous tip
  currentTipIndex--;
  showTip(currentTipIndex);
}

function showNextTip() {
  // Increment the current tip index and show the next tip
  currentTipIndex++;
  showTip(currentTipIndex);
}

// function showAllSuggestionsTip() {
//     const popupContent = document.getElementById("popupContent");
//     // Display the special text for "SHOW ALL SUGGESTIONS (10 more...)"
//     popupContent.innerText = "Suggested Items: burgers,\n Pizza";
// }


function generateTip(index) {
  const tips = [
    "Tip: \n\n\n Click on any box under 'WHAT WE'RE R8ING!' to go to that Resturant's page!",
    "Tip: \n\n Use dark mode if your eyes are sensitive to bright light by clicking 'Dark mode' on the sidebar!",
    "Tip: \n\n Use the navigation section on the right to navigate back to the home page quicker!",
    "Tip: \n\n Make the navbar smaller by clicking on 'Resize navbar', then click back on it again to make it bigger!",
    "Tip: \n\n\n Scroll through the home page and explore various options to eat today!"];

  // If the index goes beyond the last tip, loop back to the first tip
  if (index >= tips.length) {
    currentTipIndex = 0;
    index = 0;
  }

  // If the index goes below the first tip, loop to the last tip
  if (index < 0) {
    currentTipIndex = tips.length - 1;
    index = tips.length - 1;
  }

  return tips[index];
}


