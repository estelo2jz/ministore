import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    // BOOK State
    WebDesignPlayground: {
      name: "Web Design Playground: HTML & CSS the Interactive Way",
      price: 27.00,
      numbers: 0,
      inCart: false
    },
    LearningNodeDevelopment: {
      name: "Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web",
      price: 25.99,
      numbers: 0,
      inCart: false
    },
    WebDesignHTML: {
      name: "Web Design with HTML, CSS, JavaScript and jQuery Set",
      price: 26.99,
      numbers: 0,
      inCart: false
    },
    FundamentalsWeb: {
      name: "Fundamentals of Web Development (2nd Edition)",
      price: 25.99,
      numbers: 0,
      inCart: false
    },
    WebCodingDevelopment: {
      name: "Web Coding & Development All-in-One For Dummies (For Dummies (Computer/Tech))",
      price: 29.99,
      numbers: 0,
      inCart: false
    },
    BecomeAwesome: {
      name: "Become an Awesome Software Architect: Book 1: Foundation 2019",
      price: 22.99,
      numbers: 0,
      inCart: false
    },
    TheFullStackDeveloper: {
      name: "The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer",
      price: 23.99,
      numbers: 0,
      inCart: false
    },
    PHPMySQL: {
      name: "PHP & MySQL: Server-side Web Development",
      price: 24.99,
      numbers: 0,
      inCart: false
    },
    HTMLAllOne: {
      name: "HTML, CSS, and JavaScript All in One, Sams Teach Yourself (3rd Edition)",
      price: 29.99,
      numbers: 0,
      inCart: false
    },
    JavaScriptDefinitiveGuide: {
      name: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
      price: 27.99,
      numbers: 0,
      inCart: false
    },
    JavaScriptExplained: {
      name: "JavaScript Explained: Step-by-Step Guide to the Most Common and Reliable JS Techniques",
      price: 26.99,
      numbers: 0,
      inCart: false
    },
    RubProgramming: {
      name: "Ruby Programming for Beginners: An Introduction to Learning Ruby Programming with Tutorials and Hands-On Examples",
      price: 21.99,
      numbers: 0,
      inCart: false
    },


    // HEADPHONE State
    AppleAirPods: {
      name: "Apple AirPods with Wired Charging Case",
      price: 127.00,
      numbers: 0,
      inCart: false
    },
    TaoTronicsHybrid: {
      name: "TaoTronics Hybrid Active Noise Cancelling Headphones with Mic, 3 ANC Modes 2020 Upgraded Bluetooth Headphones",
      price: 145.00,
      numbers: 0,
      inCart: false
    },
    BoseSoundLink: {
      name: "Bose SoundLink Around Ear Wireless Headphones II - Black",
      price: 162.00,
      numbers: 0,
      inCart: false
    },
    PowerbeatsPro: {
      name: "Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time",
      price: 107.00,
      numbers: 0,
      inCart: false
    },
    BoseQuietComfort35: {
      name: "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black",
      price: 114.00,
      numbers: 0,
      inCart: false
    },
    BoseSoundSport: {
      name: "Bose SoundSport, Wireless Earbuds, (Sweatproof Bluetooth Headphones for Running and Sports)",
      price: 112.00,
      numbers: 0,
      inCart: false
    },
    DenonAHC720: {
      name: "Denon AH-C720 In-Ear Wired Headphones | Designed For Professionals, Travelers & Music Enthusiasts on the Go",
      price: 106.00,
      numbers: 0,
      inCart: false
    },
    SonyMDR7506: {
      name: "Sony MDR7506 Professional Large Diaphragm Headphone",
      price: 126.00,
      numbers: 0,
      inCart: false
    },
    PhilipsSHP9600: {
      name: "Philips SHP9600 Wired Over-Ear Open-Back Headphones, 50mm Drivers, Hi-Fi, Comfortable + Durable",
      price: 126.00,
      numbers: 0,
      inCart: false
    },
    AudioTechnicaATHM50: {
      name: "Audio-Technica ATH-M50x Professional Studio Monitor Headphones, Black, Professional Grade, Critically Acclaimed",
      price: 126.00,
      numbers: 0,
      inCart: false
    },
    JBLLIVE500BT: {
      name: "JBL LIVE 500BT - Around-Ear Wireless Headphone - Black",
      price: 126.00,
      numbers: 0,
      inCart: false
    },
    SkullcandyCrusher: {
      name: "Skullcandy Crusher Wireless Over-Ear Headphone - Deep Red",
      price: 126.00,
      numbers: 0,
      inCart: false
    },

    // PC State
    gamingpc1: {
      name: "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD",
      price: 1427.00,
      numbers: 0,
      inCart: false
    },
    gamingpc2: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1545.00,
      numbers: 0,
      inCart: false
    },
    gamingpc3: {
      name: "CORSAIR ONE a100 Compact Gaming PC (AMD RYZEN 9 3900X, GEFORCE RTX 2080)",
      price: 1562.00,
      numbers: 0,
      inCart: false
    },
    gamingpc4: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive Storage",
      price: 1507.00,
      numbers: 0,
      inCart: false
    },
    gamingpc5: {
      name: "SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1660 6G, 500G SSD, 8GB DDR4",
      price: 1854.00,
      numbers: 0,
      inCart: false
    },
    gamingpc6: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1352.00,
      numbers: 0,
      inCart: false
    },
    gamingpc7: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1506.00,
      numbers: 0,
      inCart: false
    },
    gamingpc8: {
      name: "[Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB",
      price: 1406.00,
      numbers: 0,
      inCart: false
    },
    gamingpc9: {
      name: "CORSAIR Vengeance a4100 Series Gaming PC - AMD Ryzen 7 3700X CPU - GeForce RTX 2070 Super Graphics - 16GB",
      price: 1786.00,
      numbers: 0,
      inCart: false
    },
    gamingpc10: {
      name: "Omen by HP Obelisk Gaming Desktop Computer, 9th Generation Intel Core i9-9900K Processor, NVIDIA GeForce RTX 2080 SUPER 8GB",
      price: 1656.00,
      numbers: 0,
      inCart: false
    },
    gamingpc11: {
      name: "XOTIC V200 Enthusiast Pro (RYZEN 9 3900X 12-core 4.6GHZ Turbo, 32GB DDR4 RAM, 500GB NVMe SSD + 2TB HDD, RTX 2080 Ti 11GB",
      price: 1366.00,
      numbers: 0,
      inCart: false
    },
    gamingpc12: {
      name: "iBUYPOWER Pro Gaming PC Computer Desktop MCT3900V2 (Ryzen 9 3900X 3.8GHz, NVIDIA RTX 2080 Super 8GB, 32GB DDR4 RAM",
      price: 1506.00,
      numbers: 0,
      inCart: false
    },

    // LAPTOP State
    laptop1: {
      name: "Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce GTX 1660 Ti, 15.6 Full HD 144Hz Display",
      price: 1127.00,
      numbers: 0,
      inCart: false
    },
    laptop2: {
      name: "Asus TUF FX505DT Gaming Laptop, 15.6” 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4      ",
      price: 1145.00,
      numbers: 0,
      inCart: false
    },
    laptop3: {
      name: "Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB",
      price: 1162.00,
      numbers: 0,
      inCart: false
    },
    laptop4: {
      name: "Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB",
      price: 1107.00,
      numbers: 0,
      inCart: false
    },
    laptop5: {
      name: "MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB",
      price: 1114.00,
      numbers: 0,
      inCart: false
    },
    laptop6: {
      name: "Razer Blade 15 Gaming Laptop: Intel Core i7-9750H 6 Core, NVIDIA GeForce GTX 1660 Ti, 15.6 FHD 144Hz, 16GB RAM, 256GB SSD",
      price: 1112.00,
      numbers: 0,
      inCart: false
    },
    laptop7: {
      name: "ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4",
      price: 1106.00,
      numbers: 0,
      inCart: false
    },
    laptop8: {
      name: "2019 ASUS ROG 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 16GB DDR4, 1TB HDD + 512GB SSD",
      price: 1456.00,
      numbers: 0,
      inCart: false
    },
    laptop9: {
      name: "Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB",
      price: 1236.00,
      numbers: 0,
      inCart: false
    },
    laptop10: {
      name: "Acer Nitro 5 AN515-42-R5ED Gaming Laptop, AMD Ryzen 5 2500U, AMD Radeon RX 560X Graphics, 15.6 Full HD IPS Display, 8GB",
      price: 1256.00,
      numbers: 0,
      inCart: false
    },
    laptop11: {
      name: "MSI GF63 Thin 9RCX -615 15.6 Gaming Laptop, Intel Core i5-9300H, NVIDIA GTX 1050Ti, 8GB, 512GB NVMe SSD, Win10",
      price: 1316.00,
      numbers: 0,
      inCart: false
    },
    laptop12: {
      name: "ASUS ROG G531GT-BI7N6 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 8GB DDR4, 512GB SSD",
      price: 1456.00,
      numbers: 0,
      inCart: false
    },

    // iPHONES State
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },
    teere: {
      name: "",
      price: 125.00,
      numbers: 0,
      inCart: false
    },


    

  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] }
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity
        }
      }
    case GET_NUMBERS_BASKET:
      return {
        ...state
      }
    case REMOVE_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers - 1
      }
    default: 
      return state;
  }
}