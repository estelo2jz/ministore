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
    iphone1: {
      name: "Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)",
      price: 1227.00,
      numbers: 0,
      inCart: false
    },
    iphone2: {
      name: "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)",
      price: 1245.00,
      numbers: 0,
      inCart: false
    },
    iphone3: {
      name: "Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)",
      price: 1262.00,
      numbers: 0,
      inCart: false
    },
    iphone4: {
      name: "Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)",
      price: 1207.00,
      numbers: 0,
      inCart: false
    },
    iphone5: {
      name: "Apple iPhone Xs Max, 256GB, Silver - Fully Unlocked (Renewed)",
      price: 1214.00,
      numbers: 0,
      inCart: false
    },
    iphone6: {
      name: "Apple iPhone XS, 256GB , Space Gray - Fully Unlocked (Renewed)",
      price: 1222.00,
      numbers: 0,
      inCart: false
    },
    iphone7: {
      name: "Apple iPhone 7 Matte Black 32GB Verizon Unlocked (Renewed)",
      price: 1206.00,
      numbers: 0,
      inCart: false
    },
    iphone8: {
      name: "Apple iPhone SE, 64GB, White - Fully Unlocked (Renewed)",
      price: 1226.00,
      numbers: 0,
      inCart: false
    },
    iphone9: {
      name: "Apple iPhone 7, 128GB, Red - for Sprint/Verizon (Renewed)",
      price: 1145.00,
      numbers: 0,
      inCart: false
    },
    iphone10: {
      name: "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)",
      price: 1451.00,
      numbers: 0,
      inCart: false
    },
    iphone11: {
      name: "Google Pixel XL - 32GB Factory Unlocked - Very Silver (Renewed)",
      price: 1356.00,
      numbers: 0,
      inCart: false
    },
    iphone12: {
      name: "Apple iPhone 8 256GB Unlocked GSM Phone - Silver (Renewed)",
      price: 1266.00,
      numbers: 0,
      inCart: false
    },

    // SAMSUNG State
    samsung1: {
      name: "Samsung Galaxy A10e 32GB A102U GSM Unlocked Phone - Black",
      price: 1325.00,
      numbers: 0,
      inCart: false
    },
    samsung2: {
      name: "Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5",
      price: 1345.00,
      numbers: 0,
      inCart: false
    },
    samsung3: {
      name: "Samsung Galaxy S9 G960U 64GB Unlocked GSM 4G LTE Phone w/ 12MP Camera - Midnight Black",
      price: 1362.00,
      numbers: 0,
      inCart: false
    },
    samsung4: {
      name: "Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked (Renewed)",
      price: 1254.00,
      numbers: 0,
      inCart: false
    },
    samsung5: {
      name: "Samsung Galaxy A31-128GB / 4GB - A315G/DSL Unlocked Dual Sim Phone w/Quad Camera 48MP+8MP+5MP+5MP",
      price: 1334.00,
      numbers: 0,
      inCart: false
    },
    samsung6: {
      name: "Samsung Galaxy A10 32GB A105M 6.2 HD+ Infinity-V 4G LTE Factory Unlocked GSM Smartphone - Black",
      price: 1312.00,
      numbers: 0,
      inCart: false
    },
    samsung7: {
      name: "Samsung Galaxy A10s A107M - 32GB, 6.2 HD+ Infinity-V Display, 13MP+2MP Dual Rear +8MP Front Cameras, GSM Unlocked",
      price: 1306.00,
      numbers: 0,
      inCart: false
    },
    samsung8: {
      name: "Samsung Galaxy A51 (128GB, 4GB) 6.5, 48MP Quad Camera, Dual SIM GSM Unlocked A515F/DS- Global 4G LTE International Model",
      price: 1326.00,
      numbers: 0,
      inCart: false
    },
    samsung9: {
      name: "Samsung Galaxy S10 Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Fingerprint ID and Facial Recognition",
      price: 1235.00,
      numbers: 0,
      inCart: false
    },
    samsung10: {
      name: "Samsung Galaxy A01 16GB/2GB RAM (SM-A015M/DS) Dual SIM, 5.7” Display, GSM Unlocked, International Version - Blue",
      price: 1512.00,
      numbers: 0,
      inCart: false
    },
    samsung11: {
      name: "Samsung Galaxy A11 Unlocked | 6.4 Screen | 32GB of Storage | Long Lasting Battery | 2020 Model | Black",
      price: 1332.00,
      numbers: 0,
      inCart: false
    },
    samsung12: {
      name: "Samsung Galaxy S8 G950U 64GB - Verizon + GSM Unlocked Android Smartphone, Midnight Black (Renewed)",
      price: 1451.00,
      numbers: 0,
      inCart: false
    },

    // TABLET State
    tablet1: {
      name: "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Silver (4th Generation)",
      price: 327.00,
      numbers: 0,
      inCart: false
    },
    tablet2: {
      name: "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)",
      price: 345.00,
      numbers: 0,
      inCart: false
    },
    tablet3: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Silver (Latest Model) with AppleCare+ Bundle",
      price: 362.00,
      numbers: 0,
      inCart: false
    },
    tablet4: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) with AppleCare+ Bundle",
      price: 307.00,
      numbers: 0,
      inCart: false
    },
    tablet5: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Gold (Latest Model) with AppleCare+ Bundle",
      price: 334.00,
      numbers: 0,
      inCart: false
    },
    tablet6: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Silver (Latest Model) with AppleCare+ Bundle",
      price: 332.00,
      numbers: 0,
      inCart: false
    },
    tablet7: {
      name: "Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray",
      price: 306.00,
      numbers: 0,
      inCart: false
    },
    tablet8: {
      name: "Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)",
      price: 326.00,
      numbers: 0,
      inCart: false
    },
    tablet9: {
      name: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)",
      price: 456.00,
      numbers: 0,
      inCart: false
    },
    tablet10: {
      name: "Apple iPad 9.7in with WiFi, 32GB-Silver (2017 Newest Model) (Renewed)",
      price: 423.00,
      numbers: 0,
      inCart: false
    },
    tablet11: {
      name: "New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)",
      price: 396.00,
      numbers: 0,
      inCart: false
    },
    tablet12: {
      name: "Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)",
      price: 375.00,
      numbers: 0,
      inCart: false
    },

    // CAMERA State
    camera1: {
      name: "Canon EOS 4000D DSLR Camera w/Canon EF-S 18-55mm F/3.5-5.6 III Zoom Lens + Case + 32GB SD Card (15pc Bundle)",
      price: 1227.00,
      numbers: 0,
      inCart: false
    },
    camera2: {
      name: "Canon EOS Rebel T7 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Accessory Kit",
      price: 1245.00,
      numbers: 0,
      inCart: false
    },
    camera3: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Complete Bundle with Bag, Battery, Charger, Filter Kit",
      price: 1262.00,
      numbers: 0,
      inCart: false
    },
    camera4: {
      name: "Canon EOS Rebel T7 DSLR Camera + Canon EF-S 18-55mm + Canon 75-300mm & 500mm Telephoto Lens + Wide Angle & Telephoto Lens + Macro Filter Kit",
      price: 1207.00,
      numbers: 0,
      inCart: false
    },
    camera5: {
      name: "Canon EOS Rebel T6 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens",
      price: 1234.00,
      numbers: 0,
      inCart: false
    },
    camera6: {
      name: "Canon EOS 4000D w/EF-S 18-55mm f/3.5-5.6 III Lens with Professional Accessory Bundle - Includes: Spare LPE10 Battery",
      price: 1232.00,
      numbers: 0,
      inCart: false
    },
    camera7: {
      name: "Canon EOS Rebel T6 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Premium Accessory Kit",
      price: 1206.00,
      numbers: 0,
      inCart: false
    },
    camera8: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Bundle with Bag, 64GB SD Card, Corel PC Photo",
      price: 1226.00,
      numbers: 0,
      inCart: false
    },
    camera9: {
      name: "Canon EOS Rebel T7 Digital SLR Camera with 18-55mm EF-S f/3.5-5.6 is II Lens + 58mm Wide Angle Lens + 2X Telephoto Lens",
      price: 1234.00,
      numbers: 0,
      inCart: false
    },
    camera10: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Starter Bundle with Bag, Wrist Strap, Extra Battery",
      price: 1232.00,
      numbers: 0,
      inCart: false
    },
    camera11: {
      name: "Canon EOS Rebel T6 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards",
      price: 1206.00,
      numbers: 0,
      inCart: false
    },
    camera12: {
      name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens + 32GB Memory",
      price: 1226.00,
      numbers: 0,
      inCart: false
    },


    camera: {
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