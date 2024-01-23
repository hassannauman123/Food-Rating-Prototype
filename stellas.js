ratings = [{label:'Avocado Toast',price:5,deliciousness:5,speed:5},
          {label:'Jambalaya',price:5,deliciousness:4,speed:5},
          {label:'Prime Steak',price:5,deliciousness:5,speed:5},
          {label:'Grass Fed Beef Chili',price:5,deliciousness:5,speed:4},
          {label:'Chateau Sociando Mallet Cabernet Sauvignon 2014',price:5,deliciousness:5,speed:5},
        ];
buttonList = [
    { label: 'Avocado Toast', text: 'Avocado Toast',url:"https://imgs.search.brave.com/tbQe4WH21lKxo4QrTFdJdxJNwQPR3JnrudEes3nrRek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1hdm9j/YWRvLXRvYXN0LXBs/YXRlXzIzLTIxNDg4/OTE3NjEuanBnP3Np/emU9NjI2JmV4dD1q/cGc" },
    { label: 'Jambalaya', text: 'Jambalaya',url: "https://imgs.search.brave.com/m-DpkYh-HGxNkh2sEoGrhbDnQq-5IhWziN51tU7981o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmRv/d25zaGlmdG9sb2d5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMi9KYW1i/YWxheWEtMTAuanBn"},
    { label: 'Prime Steak', text: 'Prime Steak',url:"https://imgs.search.brave.com/dwvAumUmII7zeS5WwHZW8OC9Vzs3s67PshJu7VOY-IU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmluZHVsZ2UuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA2L1Ntb2tlZC1C/ZWVmLVRlbmRlcmxv/aW4tc2xpY2VkLTcx/MXgxMDI0LmpwZw" },
    { label: 'Grass Fed Beef Chili', text: 'Grass Fed Beef Chili' ,url:"https://imgs.search.brave.com/F-PMOpOi1Qub0AXwUkFGBkIGrsQqquu_04tQ7pUGv0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9G/bFVWOVFhV3VQS0J0/emZnQzdQV2NPVlpL/S1k9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9fX29wdF9fYWJv/dXRjb21fX2NvZXVz/X19yZXNvdXJjZXNf/X2NvbnRlbnRfbWln/cmF0aW9uX19zaW1w/bHlfcmVjaXBlc19f/dXBsb2Fkc19fMjAx/OF9fMTJfX0JlZWYt/Q2hpbGktTEVBRC01/LTE5ZDA2MGRlZGRl/MTQ4NmY5ODEwYmE4/Y2JkZWFkNWFiLmpw/Zw"},
    { label: 'Chateau Sociando Mallet Cabernet Sauvignon 2014', text: 'Chateau Sociando Mallet Cabernet Sauvignon 2014',url:"https://imgs.search.brave.com/eFqpgsr86ZyP2vMsSl-mrZhnF7CmQxRtlNbU6M4YmeY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FxLmNvbS9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvMS8zLzEz/Njk2MTc0LTFfMTU4/OTQ4ODgxMy5wbmc_/d2lkdGg9MzY3Jmhl/aWdodD01NTAmY2Fu/dmFzPTM2Nyw1NTAm/cXVhbGl0eT04MCZm/aXQ9Ym91bmRz" },
  ];
 comments = [
  {label:'Avocado Toast',comments:["White_Girlz: Me and my bestie have this every breakfast","Insta_Influencer: Secret to a high follower count","Fitness_guru: Healthy lifestyle starts with 15$ avocado toast every morning"]},
  {label:'Jambalaya',comments:["Roll_Tide_Tim: Dang it this thing's good","Roll_Tide_Pam: Had to sweet talk Tim into getting this but it's worth it","Joey_Bistro_Huddy: God I hate shaving truffles on this thing"]},
  {label:'Prime Steak',comments:["Max_Meat_Guy: Applewood low and slow is the way to go","Guga: Should've dry aged the thing for 500 years before serving","Nick_D_Giovanni: Not as good as Wagyu but this'll do"]},
  {label:'Grass Fed Beef Chili',comments:["Cuso_Rub_Iz_Best: Needed some Cuso seasoning in here but its all good","Babish_Bright_4Head: Welcome to Binging with Babish and today I'm trying grass...","MSG_God_Roger: Needed more msg in this"]},
  {label:'Chateau Sociando Mallet Cabernet Sauvignon 2014',comments:["Wine_Snob: Spent 3 months of my mortgage on this thing but it's all worth it","Rich_Brat$$$: OMG, Daddy should've bought the 2012 vintage instead of the 2014","Wine_King: Very complex fruity flavour, would recommend if you have the money"]},
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



