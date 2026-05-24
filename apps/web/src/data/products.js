import wheyImg from '../assets/whey.jpg';
import sattuImg from '../assets/Sattu1.jpg';
import bagImg from '../assets/Bag1.jpg';
import honeyImg from '../assets/honey.png';
import yogaImg from '../assets/Yoga.jpg';

const products = [
  {
    id: 1,
    name: "AKHADA Whey Protein",
    price: 2599,
    description: "Premium whey protein isolate with 24g protein per serving. Supports muscle recovery and growth.",
    image_url: wheyImg,
    category: "Supplements",
    stock: 47,
    amazonLink: "https://amzn.to/your-link"
  },
  {
    id: 2,
    name: "AKHADA Sattu Power",
    price: 249,
    description: "Pure Desi Sattu for Enhanced Strength and Endurance. Natural energy source for workouts and recovery.",
    image_url: sattuImg,
    category: "Supplements",
    stock: 83,
    amazonLink: "https://amzn.to/your-link"
  },
  {
    id: 3,
    name: "AKHADA Elite GYM Bag",
    price: 199,
    description: "Durable carry bag for all your gym essentials. Perfect for transporting equipment and supplements.",
    image_url: bagImg,
    category: "Accessories",
    stock: 62,
    amazonLink: "https://amzn.to/your-link"
  },
  {
    id: 4,
    name: "AKHADA Honey",
    price: 449,
    description: "Clean energy formula with beta-alanine and caffeine. Boost performance and focus during training.",
    image_url: honeyImg,
    category: "Supplements",
    stock: 91,
    amazonLink: "https://amzn.to/your-link"
  },
  {
    id: 5,
    name: "AKHADA Yoga Mat Pro",
    price: 199,
    description: "Flexible and durable yoga mat for all your practice needs. Easy to Carry and Maintain.",
    image_url: yogaImg,
    category: "Equipment",
    stock: 18,
    amazonLink: "https://amzn.to/your-link"
  },
];

export default products;