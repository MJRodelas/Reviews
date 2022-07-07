// local reviews data
const reviews = [
  {
    id: 1,
    name: "Mark Jayson Rodelas",
    job: "web developer",
    img:
      "mjrodelas.jpg",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, dolorum eos quibusdam ipsam sit nam neque. Magnam dolores ipsa perspiciatis.",
  },
  {
    id: 2,
    name: "Rose Ann Parales",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Ricky Paterno",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Judy Ann San Guillermo",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//set starting item

let currentItem = 0;
//load initial item
window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem);
})

// show person based on item
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click',function(){
  currentItem++; // add 1 to value 
  if(currentItem > reviews.length - 1){
    currentItem = 0; // once value reached the last value on array it will restart
  }  
  showPerson(currentItem); // calling the function

})


//show prev person
prevBtn.addEventListener('click',function(){
  currentItem--; // subtract 1 to value 

  if(currentItem < 0){
    currentItem = reviews.length - 1 //once clicking reached the first item on the array, it will redirect to the last item on the array
  }  
  showPerson(currentItem); // calling the function

})

//show random person

randomBtn.addEventListener('click',function(){
  currentItem = getRandomNumber()
  console.log(currentItem)
  showPerson(currentItem);
})

function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length)
//Math.floor function removes the decimals
//Math.random function generates random number 0 to less than 1 (inclusive of 0, but not 1) 
//Multiplied by the length of reviews array to have numbers between 0-3
}