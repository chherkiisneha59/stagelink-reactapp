const artists = [
  // Singers
  {
    id: 1,
    name: "Arjun Mehta",
    category: "Singer",
    location: "Mumbai, India",
    price: 25000,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 42,
    description:
      "Professional vocalist specializing in Bollywood, acoustic and live event performances.",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    category: "Singer",
    location: "Delhi, India",
    price: 20000,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    events: 35,
    description:
      "Versatile singer available for weddings, private parties and corporate events.",
  },
  {
    id: 3,
    name: "Siddharth Roy",
    category: "Singer",
    location: "Kolkata, India",
    price: 28000,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 50,
    description:
      "Classical and fusion vocalist known for soulful live concerts and sangeet nights.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    category: "Singer",
    location: "Chandigarh, India",
    price: 22000,
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    events: 28,
    description:
      "Pop and Punjabi folk singer bringing high-energy vocal performances to every stage.",
  },
  {
    id: 5,
    name: "Kabir Verma",
    category: "Singer",
    location: "Pune, India",
    price: 26000,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 39,
    description:
      "Sufi and indie-rock live artist captivating audiences across corporate and college fests.",
  },

  // DJs
  {
    id: 6,
    name: "DJ Rohan",
    category: "DJ",
    location: "Bangalore, India",
    price: 30000,
    image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 58,
    description:
      "High-energy DJ specializing in weddings, parties and corporate celebrations.",
  },
  {
    id: 7,
    name: "DJ Akira",
    category: "DJ",
    location: "Goa, India",
    price: 35000,
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 64,
    description:
      "EDM and Commercial house DJ with extensive festival and nightlife experience.",
  },
  {
    id: 8,
    name: "DJ Pulse",
    category: "DJ",
    location: "Mumbai, India",
    price: 27000,
    image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    events: 45,
    description:
      "Hip-hop and Bollywood remix specialist ensuring non-stop dancing at every event.",
  },
  {
    id: 9,
    name: "DJ Riya",
    category: "DJ",
    location: "Delhi, India",
    price: 32000,
    image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 51,
    description:
      "Celebrity party DJ bringing dynamic light shows and customized playlists to private gigs.",
  },
  {
    id: 10,
    name: "DJ Zeddex",
    category: "DJ",
    location: "Hyderabad, India",
    price: 29000,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    events: 38,
    description:
      "Tech-house and retro beatmaster with top-tier sound setups for large venues.",
  },

  // Dancers
  {
    id: 11,
    name: "Aanya Dance Crew",
    category: "Dancer",
    location: "Delhi, India",
    price: 35000,
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 29,
    description:
      "Professional dance group performing Bollywood, contemporary and commercial routines.",
  },
  {
    id: 12,
    name: "Rhythm Rebels",
    category: "Dancer",
    location: "Mumbai, India",
    price: 40000,
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 44,
    description:
      "Award-winning hip-hop and b-boying troupe delivering electrifying stage showstoppers.",
  },
  {
    id: 13,
    name: "Rohan & Simran Duo",
    category: "Dancer",
    location: "Jaipur, India",
    price: 22000,
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    events: 31,
    description:
      "Graceful salsa and ballroom dance partners ideal for galas and award ceremonies.",
  },
  {
    id: 14,
    name: "Urban Beats Crew",
    category: "Dancer",
    location: "Bangalore, India",
    price: 38000,
    image: "https://images.unsplash.com/photo-1535525153412-5a42439e210d?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 36,
    description:
      "High-tempo street dance collective with custom choreography for brand launches.",
  },
  {
    id: 15,
    name: "Classical Expressions",
    category: "Dancer",
    location: "Chennai, India",
    price: 25000,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 40,
    description:
      "Kathak and Bharatanatyam fusion performers presenting rich cultural showcases.",
  },

  // Speakers
  {
    id: 16,
    name: "Dr. Vikram Sarabhai",
    category: "Speaker",
    location: "Bangalore, India",
    price: 45000,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 75,
    description:
      "Keynote speaker and AI researcher inspiring corporate leaders on digital transformation.",
  },
  {
    id: 17,
    name: "Ananya Sen",
    category: "Speaker",
    location: "Mumbai, India",
    price: 30000,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 48,
    description:
      "Motivational speaker and startup founder empowering teams on resilience and growth.",
  },
  {
    id: 18,
    name: "Rajiv Malhotra",
    category: "Speaker",
    location: "Delhi, India",
    price: 35000,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    events: 52,
    description:
      "Financial strategist and author delivering engaging sessions on wealth and leadership.",
  },
  {
    id: 19,
    name: "Meera Nair",
    category: "Speaker",
    location: "Kochi, India",
    price: 28000,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    events: 33,
    description:
      "Wellness advocate and mindfulness coach conducting interactive workshops for events.",
  },
  {
    id: 20,
    name: "Amitav Ghosh",
    category: "Speaker",
    location: "Kolkata, India",
    price: 40000,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    events: 60,
    description:
      "Renowned storyteller and TEDx speaker focusing on innovation and global trends.",
  },
];

export default artists;
