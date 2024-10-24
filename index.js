// linked to html file as IDs
const person = document.getElementById("person");
const job = document.getElementById("job");
const comment = document.getElementById("comment");
const imgHead = document.getElementById("img-head");
const surprise = document.getElementById("surprise");
const previousReview = document.getElementById("previousReview");
const plus = document.getElementById("plus");

// arrayy of objects with properties that match the review card on the page
const reviews = [
  {
    person: "Mike",
    job: "Broker",
    img: "./resources/img/mike.jpg",
    comment:
      "The developers were highly skilled in HTML, CSS, and JavaScript, with a strong eye for design and user experience. They took the time to understand my vision and provided valuable insights that enhanced my website's functionality and aesthetics.",
  },
  {
    person: "Barb",
    job: "Recruiter",
    img: "./resources/img/barb.jpg",
    comment:
      "Their responsiveness was impressive; any questions I had were addressed promptly, and they made adjustments based on my feedback. They also optimized my site for performance and ensured it was mobile-friendly, providing thorough documentation for future updates.",
  },
  {
    person: "John",
    job: "Carpenter",
    img: "./resources/img/john.jpg",
    comment:
      "I was particularly impressed with their ability to optimize my site for performance and ensure it was mobile-friendly. They also provided thorough documentation and support for any questions I had after the project was completed, which was incredibly helpful as I continue to make updates.",
  },
  {
    person: "Collin",
    job: "Software Engineer",
    img: "./resources/img/collin.jpg",
    comment:
      "This React app exceeded my expectations! It offers a smooth, intuitive user experience with an attractive design that’s easy to navigate. The app’s performance is quick and reliable, with no issues or slowdowns. It’s clear the developers focused on both form and function, making it a pleasure to use. Whether you're a tech expert or a casual user, you’ll appreciate the clean interface and attention to detail. Highly recommend giving it a try",
  },
  {
    person: "Kevin",
    job: "Sales Manager",
    img: "./resources/img/kevin.jpg",
    comment:
      "I recently used the React app, and I am thoroughly impressed! The user interface is clean and intuitive, making it easy to navigate and interact with the features. The performance is fast and responsive, and I didn't experience any lag or issues. The design is modern and visually appealing, which enhances the overall user experience. It's clear that attention to detail and functionality were top priorities in the development of this app. I highly recommend it to anyone looking for a reliable and efficient tool!",
  },
  {
    person: "Savannah",
    job: "Fashion Designer",
    img: "./resources/img/Savannah.jpg",
    comment:
      "I had a great experience using the React app! It’s incredibly user-friendly, with smooth navigation and fast loading times. The design is sleek and modern, making it not only functional but also visually appealing. I love how seamless everything feels, from the layout to the overall performance. It’s clear that a lot of thought went into optimizing both usability and aesthetics. Definitely recommend this app to anyone looking for a high-quality and efficient solution!",
  },
];

// starts the input array count at an index of 0
let currentReviewIndex = 0;

//updates DOM for the IDs of getElementsbyIDs
function updateReview() {
  const currentReview = reviews[currentReviewIndex];

  person.textContent = currentReview.person;
  job.textContent = currentReview.job;
  comment.textContent = currentReview.comment;
  imgHead.src = currentReview.img;
}

//button selects a random oject from the array
function surpriseMe(event) {
  let newReviewIndex;

  // keep gnerating a random index if they indexes match
  do {
    newReviewIndex = Math.floor(Math.random() * reviews.length);
  } while (newReviewIndex === currentReviewIndex);

  currentReviewIndex = newReviewIndex;
  updateReview();
  // trouble shoot button being clicked in console
  console.log("Surprise button clicked");
}

updateReview();

surprise.addEventListener("click", surpriseMe);

// subtracts 1 of current index if back button is clicked
function minusOne() {
  currentReviewIndex = currentReviewIndex - 1;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  updateReview();
  // trouble shoot button being clicked in console
  console.log("Back button clicked");
}
//Moves to previous review
previousReview.addEventListener("click", minusOne);
// function to add +1 to currentReviewIndex count in the reviews array
function plusOne() {
  currentReviewIndex = currentReviewIndex + 1;

  // If we've reached the last review, wrap to the first
  if (currentReviewIndex >= reviews.length) {
    currentReviewIndex = 0;
  }
  updateReview();
  // trouble shoot button being clicked in console
  console.log("Plus");
}

plus.addEventListener("click", plusOne);
