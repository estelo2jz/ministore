import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  tagName: '',
  cartCost: 0,
  products: {
    // BOOK State
    WebDesignPlayground: {
      name: "Web Design Playground: HTML & CSS the Interactive Way",
      price: 27.00,
      numbers: 0,
      tagName: 'book1',
      inCart: false
    },
    LearningNodeDevelopment: {
      name: "Learning Node.js Development: Learn the fundamentals of Node.js, and deploy and test Node.js applications on the web",
      price: 25.00,
      numbers: 0,
      tagName: 'book2',
      inCart: false
    },
    WebDesignHTML: {
      name: "Web Design with HTML, CSS, JavaScript and jQuery Set",
      price: 26.00,
      numbers: 0,
      tagName: 'book3',
      inCart: false
    },
    FundamentalsWeb: {
      name: "Fundamentals of Web Development (2nd Edition)",
      price: 25.00,
      numbers: 0,
      tagName: 'book4',
      inCart: false
    },
    WebCodingDevelopment: {
      name: "Web Coding & Development All-in-One For Dummies (For Dummies (Computer/Tech))",
      price: 29.00,
      numbers: 0,
      tagName: 'book5',
      inCart: false
    },
    BecomeAwesome: {
      name: "Become an Awesome Software Architect: Book 1: Foundation 2019",
      price: 22.00,
      numbers: 0,
      tagName: 'book6',
      inCart: false
    },
    TheFullStackDeveloper: {
      name: "The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer",
      price: 23.00,
      numbers: 0,
      tagName: 'book7',
      inCart: false
    },
    PHPMySQL: {
      name: "PHP & MySQL: Server-side Web Development",
      price: 24.00,
      numbers: 0,
      tagName: 'book8',
      inCart: false
    },
    HTMLAllOne: {
      name: "HTML, CSS, and JavaScript All in One, Sams Teach Yourself (3rd Edition)",
      price: 29.00,
      numbers: 0,
      tagName: 'book9',
      inCart: false
    },
    JavaScriptDefinitiveGuide: {
      name: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
      price: 27.00,
      numbers: 0,
      tagName: 'book10',
      inCart: false
    },
    JavaScriptExplained: {
      name: "JavaScript Explained: Step-by-Step Guide to the Most Common and Reliable JS Techniques",
      price: 26.00,
      numbers: 0,
      tagName: 'book11',
      inCart: false
    },
    RubProgramming: {
      name: "Ruby Programming for Beginners: An Introduction to Learning Ruby Programming with Tutorials and Hands-On Examples",
      price: 21.00,
      numbers: 0,
      tagName: 'book12',
      inCart: false
    },


    // HEADPHONE State
    AppleAirPods: {
      name: "Apple AirPods with Wired Charging Case",
      price: 127.00,
      numbers: 0,
      tagName: 'headphone1',
      inCart: false
    },
    TaoTronicsHybrid: {
      name: "TaoTronics Hybrid Active Noise Cancelling Headphones with Mic, 3 ANC Modes 2020 Upgraded Bluetooth Headphones",
      price: 145.00,
      numbers: 0,
      tagName: 'headphone2',
      inCart: false
    },
    BoseSoundLink: {
      name: "Bose SoundLink Around Ear Wireless Headphones II - Black",
      price: 162.00,
      numbers: 0,
      tagName: 'headphone3',
      inCart: false
    },
    PowerbeatsPro: {
      name: "Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time",
      price: 107.00,
      numbers: 0,
      tagName: 'headphone4',
      inCart: false
    },
    BoseQuietComfort35: {
      name: "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black",
      price: 114.00,
      numbers: 0,
      tagName: 'headphone5',
      inCart: false
    },
    BoseSoundSport: {
      name: "Bose SoundSport, Wireless Earbuds, (Sweatproof Bluetooth Headphones for Running and Sports)",
      price: 112.00,
      numbers: 0,
      tagName: 'headphone6',
      inCart: false
    },
    DenonAHC720: {
      name: "Denon AH-C720 In-Ear Wired Headphones | Designed For Professionals, Travelers & Music Enthusiasts on the Go",
      price: 106.00,
      numbers: 0,
      tagName: 'headphone7',
      inCart: false
    },
    SonyMDR7506: {
      name: "Sony MDR7506 Professional Large Diaphragm Headphone",
      price: 126.00,
      numbers: 0,
      tagName: 'headphone8',
      inCart: false
    },
    PhilipsSHP9600: {
      name: "Philips SHP9600 Wired Over-Ear Open-Back Headphones, 50mm Drivers, Hi-Fi, Comfortable + Durable",
      price: 126.00,
      numbers: 0,
      tagName: 'headphone9',
      inCart: false
    },
    AudioTechnicaATHM50: {
      name: "Audio-Technica ATH-M50x Professional Studio Monitor Headphones, Black, Professional Grade, Critically Acclaimed",
      price: 126.00,
      numbers: 0,
      tagName: 'headphone10',
      inCart: false
    },
    JBLLIVE500BT: {
      name: "JBL LIVE 500BT - Around-Ear Wireless Headphone - Black",
      price: 126.00,
      numbers: 0,
      tagName: 'headphone11',
      inCart: false
    },
    SkullcandyCrusher: {
      name: "Skullcandy Crusher Wireless Over-Ear Headphone - Deep Red",
      price: 126.00,
      numbers: 0,
      tagName: 'headphone12',
      inCart: false
    },

    // PC State
    gamingpc1: {
      name: "CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD",
      price: 1427.00,
      numbers: 0,
      tagName: 'gamingpc',
      inCart: false
    },
    gamingpc2: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1545.00,
      numbers: 0,
      tagName: 'gamingpc2',
      inCart: false
    },
    gamingpc3: {
      name: "CORSAIR ONE a100 Compact Gaming PC (AMD RYZEN 9 3900X, GEFORCE RTX 2080)",
      price: 1562.00,
      numbers: 0,
      tagName: 'gamingpc3',
      inCart: false
    },
    gamingpc4: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive Storage",
      price: 1507.00,
      numbers: 0,
      tagName: 'gamingpc4',
      inCart: false
    },
    gamingpc5: {
      name: "SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1660 6G, 500G SSD, 8GB DDR4",
      price: 1854.00,
      numbers: 0,
      tagName: 'gamingpc5',
      inCart: false
    },
    gamingpc6: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1352.00,
      numbers: 0,
      tagName: 'gamingpc6',
      inCart: false
    },
    gamingpc7: {
      name: "Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro,WiFi Ready,Video Card Nvidia GTX 650 1GB",
      price: 1506.00,
      numbers: 0,
      tagName: 'gamingpc7',
      inCart: false
    },
    gamingpc8: {
      name: "[Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB",
      price: 1406.00,
      numbers: 0,
      tagName: 'gamingpc8',
      inCart: false
    },
    gamingpc9: {
      name: "CORSAIR Vengeance a4100 Series Gaming PC - AMD Ryzen 7 3700X CPU - GeForce RTX 2070 Super Graphics - 16GB",
      price: 1786.00,
      numbers: 0,
      tagName: 'gamingpc9',
      inCart: false
    },
    gamingpc10: {
      name: "Omen by HP Obelisk Gaming Desktop Computer, 9th Generation Intel Core i9-9900K Processor, NVIDIA GeForce RTX 2080 SUPER 8GB",
      price: 1656.00,
      numbers: 0,
      tagName: 'gamingpc10',
      inCart: false
    },
    gamingpc11: {
      name: "XOTIC V200 Enthusiast Pro (RYZEN 9 3900X 12-core 4.6GHZ Turbo, 32GB DDR4 RAM, 500GB NVMe SSD + 2TB HDD, RTX 2080 Ti 11GB",
      price: 1366.00,
      numbers: 0,
      tagName: 'gamingpc11',
      inCart: false
    },
    gamingpc12: {
      name: "iBUYPOWER Pro Gaming PC Computer Desktop MCT3900V2 (Ryzen 9 3900X 3.8GHz, NVIDIA RTX 2080 Super 8GB, 32GB DDR4 RAM",
      price: 1506.00,
      numbers: 0,
      tagName: 'gamingpc12',
      inCart: false
    },

    // LAPTOP State
    laptop1: {
      name: "Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce GTX 1660 Ti, 15.6 Full HD 144Hz Display",
      price: 1127.00,
      numbers: 0,
      tagName: 'laptop1',
      inCart: false
    },
    laptop2: {
      name: "Asus TUF FX505DT Gaming Laptop, 15.6” 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4      ",
      price: 1145.00,
      numbers: 0,
      tagName: 'laptop2',
      inCart: false
    },
    laptop3: {
      name: "Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB",
      price: 1162.00,
      numbers: 0,
      tagName: 'laptop3',
      inCart: false
    },
    laptop4: {
      name: "Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6 Full HD 144Hz 3ms IPS Display, 16GB",
      price: 1107.00,
      numbers: 0,
      tagName: 'laptop4',
      inCart: false
    },
    laptop5: {
      name: "MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB",
      price: 1114.00,
      numbers: 0,
      tagName: 'laptop5',
      inCart: false
    },
    laptop6: {
      name: "Razer Blade 15 Gaming Laptop: Intel Core i7-9750H 6 Core, NVIDIA GeForce GTX 1660 Ti, 15.6 FHD 144Hz, 16GB RAM, 256GB SSD",
      price: 1112.00,
      numbers: 0,
      tagName: 'laptop6',
      inCart: false
    },
    laptop7: {
      name: "ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4",
      price: 1106.00,
      numbers: 0,
      tagName: 'laptop7',
      inCart: false
    },
    laptop8: {
      name: "2019 ASUS ROG 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 16GB DDR4, 1TB HDD + 512GB SSD",
      price: 1456.00,
      numbers: 0,
      tagName: 'laptop8',
      inCart: false
    },
    laptop9: {
      name: "Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB",
      price: 1236.00,
      numbers: 0,
      tagName: 'laptop9',
      inCart: false
    },
    laptop10: {
      name: "Acer Nitro 5 AN515-42-R5ED Gaming Laptop, AMD Ryzen 5 2500U, AMD Radeon RX 560X Graphics, 15.6 Full HD IPS Display, 8GB",
      price: 1256.00,
      numbers: 0,
      tagName: 'laptop10',
      inCart: false
    },
    laptop11: {
      name: "MSI GF63 Thin 9RCX -615 15.6 Gaming Laptop, Intel Core i5-9300H, NVIDIA GTX 1050Ti, 8GB, 512GB NVMe SSD, Win10",
      price: 1316.00,
      numbers: 0,
      tagName: 'laptop11',
      inCart: false
    },
    laptop12: {
      name: "ASUS ROG G531GT-BI7N6 15.6 FHD Gaming Laptop Computer, Intel Hexa-Core i7-9750H Up to 4.5GHz, 8GB DDR4, 512GB SSD",
      price: 1456.00,
      numbers: 0,
      tagName: 'laptop12',
      inCart: false
    },

    // iPHONES State
    iphone1: {
      name: "Apple iPhone 7, 32GB, Black - Fully Unlocked (Renewed)",
      price: 1227.00,
      numbers: 0,
      tagName: 'iphone1',
      inCart: false
    },
    iphone2: {
      name: "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)",
      price: 1245.00,
      numbers: 0,
      tagName: 'iphone2',
      inCart: false
    },
    iphone3: {
      name: "Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)",
      price: 1262.00,
      numbers: 0,
      tagName: 'iphone3',
      inCart: false
    },
    iphone4: {
      name: "Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)",
      price: 1207.00,
      numbers: 0,
      tagName: 'iphone4',
      inCart: false
    },
    iphone5: {
      name: "Apple iPhone Xs Max, 256GB, Silver - Fully Unlocked (Renewed)",
      price: 1214.00,
      numbers: 0,
      tagName: 'iphone5',
      inCart: false
    },
    iphone6: {
      name: "Apple iPhone XS, 256GB , Space Gray - Fully Unlocked (Renewed)",
      price: 1222.00,
      numbers: 0,
      tagName: 'iphone6',
      inCart: false
    },
    iphone7: {
      name: "Apple iPhone 7 Matte Black 32GB Verizon Unlocked (Renewed)",
      price: 1206.00,
      numbers: 0,
      tagName: 'iphone7',
      inCart: false
    },
    iphone8: {
      name: "Apple iPhone SE, 64GB, White - Fully Unlocked (Renewed)",
      price: 1226.00,
      numbers: 0,
      tagName: 'iphone8',
      inCart: false
    },
    iphone9: {
      name: "Apple iPhone 7, 128GB, Red - for Sprint/Verizon (Renewed)",
      price: 1145.00,
      numbers: 0,
      tagName: 'iphone9',
      inCart: false
    },
    iphone10: {
      name: "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)",
      price: 1451.00,
      numbers: 0,
      tagName: 'iphone10',
      inCart: false
    },
    iphone11: {
      name: "Google Pixel XL - 32GB Factory Unlocked - Very Silver (Renewed)",
      price: 1356.00,
      numbers: 0,
      tagName: 'iphone11',
      inCart: false
    },
    iphone12: {
      name: "Apple iPhone 8 256GB Unlocked GSM Phone - Silver (Renewed)",
      price: 1266.00,
      numbers: 0,
      tagName: 'iphone12',
      inCart: false
    },

    // SAMSUNG State
    samsung1: {
      name: "Samsung Galaxy A10e 32GB A102U GSM Unlocked Phone - Black",
      price: 1325.00,
      numbers: 0,
      tagName: 'samsung1',
      inCart: false
    },
    samsung2: {
      name: "Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5",
      price: 1345.00,
      numbers: 0,
      tagName: 'samsung2',
      inCart: false
    },
    samsung3: {
      name: "Samsung Galaxy S9 G960U 64GB Unlocked GSM 4G LTE Phone w/ 12MP Camera - Midnight Black",
      price: 1362.00,
      numbers: 0,
      tagName: 'samsung3',
      inCart: false
    },
    samsung4: {
      name: "Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked (Renewed)",
      price: 1254.00,
      numbers: 0,
      tagName: 'samsung4',
      inCart: false
    },
    samsung5: {
      name: "Samsung Galaxy A31-128GB / 4GB - A315G/DSL Unlocked Dual Sim Phone w/Quad Camera 48MP+8MP+5MP+5MP",
      price: 1334.00,
      numbers: 0,
      tagName: 'samsung5',
      inCart: false
    },
    samsung6: {
      name: "Samsung Galaxy A10 32GB A105M 6.2 HD+ Infinity-V 4G LTE Factory Unlocked GSM Smartphone - Black",
      price: 1312.00,
      numbers: 0,
      tagName: 'samsung6',
      inCart: false
    },
    samsung7: {
      name: "Samsung Galaxy A10s A107M - 32GB, 6.2 HD+ Infinity-V Display, 13MP+2MP Dual Rear +8MP Front Cameras, GSM Unlocked",
      price: 1306.00,
      numbers: 0,
      tagName: 'samsung7',
      inCart: false
    },
    samsung8: {
      name: "Samsung Galaxy A51 (128GB, 4GB) 6.5, 48MP Quad Camera, Dual SIM GSM Unlocked A515F/DS- Global 4G LTE International Model",
      price: 1326.00,
      numbers: 0,
      tagName: 'samsung8',
      inCart: false
    },
    samsung9: {
      name: "Samsung Galaxy S10 Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Fingerprint ID and Facial Recognition",
      price: 1235.00,
      numbers: 0,
      tagName: 'samsung9',
      inCart: false
    },
    samsung10: {
      name: "Samsung Galaxy A01 16GB/2GB RAM (SM-A015M/DS) Dual SIM, 5.7” Display, GSM Unlocked, International Version - Blue",
      price: 1512.00,
      numbers: 0,
      tagName: 'samsung10',
      inCart: false
    },
    samsung11: {
      name: "Samsung Galaxy A11 Unlocked | 6.4 Screen | 32GB of Storage | Long Lasting Battery | 2020 Model | Black",
      price: 1332.00,
      numbers: 0,
      tagName: 'samsung11',
      inCart: false
    },
    samsung12: {
      name: "Samsung Galaxy S8 G950U 64GB - Verizon + GSM Unlocked Android Smartphone, Midnight Black (Renewed)",
      price: 1451.00,
      numbers: 0,
      tagName: 'samsung12',
      inCart: false
    },

    // TABLET State
    tablet1: {
      name: "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Silver (4th Generation)",
      price: 327.00,
      numbers: 0,
      tagName: 'tablet1',
      inCart: false
    },
    tablet2: {
      name: "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)",
      price: 345.00,
      numbers: 0,
      tagName: 'tablet2',
      inCart: false
    },
    tablet3: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Silver (Latest Model) with AppleCare+ Bundle",
      price: 362.00,
      numbers: 0,
      tagName: 'tablet3',
      inCart: false
    },
    tablet4: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) with AppleCare+ Bundle",
      price: 307.00,
      numbers: 0,
      tagName: 'tablet4',
      inCart: false
    },
    tablet5: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Gold (Latest Model) with AppleCare+ Bundle",
      price: 334.00,
      numbers: 0,
      tagName: 'tablet5',
      inCart: false
    },
    tablet6: {
      name: "New Apple iPad (10.2-Inch, Wi-Fi, 128GB) - Silver (Latest Model) with AppleCare+ Bundle",
      price: 332.00,
      numbers: 0,
      tagName: 'tablet6',
      inCart: false
    },
    tablet7: {
      name: "Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray",
      price: 306.00,
      numbers: 0,
      tagName: 'tablet7',
      inCart: false
    },
    tablet8: {
      name: "Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)",
      price: 326.00,
      numbers: 0,
      tagName: 'tablet8',
      inCart: false
    },
    tablet9: {
      name: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)",
      price: 456.00,
      numbers: 0,
      tagName: 'tablet9',
      inCart: false
    },
    tablet10: {
      name: "Apple iPad 9.7in with WiFi, 32GB-Silver (2017 Newest Model) (Renewed)",
      price: 423.00,
      numbers: 0,
      tagName: 'tablet10',
      inCart: false
    },
    tablet11: {
      name: "New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)",
      price: 396.00,
      numbers: 0,
      tagName: 'tablet11',
      inCart: false
    },
    tablet12: {
      name: "Apple iPad (10.2-Inch, Wi-Fi, 32GB) - Space Gray (Latest Model) (Renewed)",
      price: 375.00,
      numbers: 0,
      tagName: 'tablet12',
      inCart: false
    },

    // CAMERA State
    camera1: {
      name: "Canon EOS 4000D DSLR Camera w/Canon EF-S 18-55mm F/3.5-5.6 III Zoom Lens + Case + 32GB SD Card (15pc Bundle)",
      price: 1227.00,
      numbers: 0,
      tagName: 'camera1',
      inCart: false
    },
    camera2: {
      name: "Canon EOS Rebel T7 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Accessory Kit",
      price: 1245.00,
      numbers: 0,
      tagName: 'camera2',
      inCart: false
    },
    camera3: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Complete Bundle with Bag, Battery, Charger, Filter Kit",
      price: 1262.00,
      numbers: 0,
      tagName: 'camera3',
      inCart: false
    },
    camera4: {
      name: "Canon EOS Rebel T7 DSLR Camera + Canon EF-S 18-55mm + Canon 75-300mm & 500mm Telephoto Lens + Wide Angle & Telephoto Lens + Macro Filter Kit",
      price: 1207.00,
      numbers: 0,
      tagName: 'camera4',
      inCart: false
    },
    camera5: {
      name: "Canon EOS Rebel T6 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens",
      price: 1234.00,
      numbers: 0,
      tagName: 'camera5',
      inCart: false
    },
    camera6: {
      name: "Canon EOS 4000D w/EF-S 18-55mm f/3.5-5.6 III Lens with Professional Accessory Bundle - Includes: Spare LPE10 Battery",
      price: 1232.00,
      numbers: 0,
      tagName: 'camera6',
      inCart: false
    },
    camera7: {
      name: "Canon EOS Rebel T6 DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5-5.6 is II Lens + 2pc SanDisk 32GB Memory Cards + Premium Accessory Kit",
      price: 1206.00,
      numbers: 0,
      tagName: 'camera7',
      inCart: false
    },
    camera8: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Bundle with Bag, 64GB SD Card, Corel PC Photo",
      price: 1226.00,
      numbers: 0,
      tagName: 'camera8',
      inCart: false
    },
    camera9: {
      name: "Canon EOS Rebel T7 Digital SLR Camera with 18-55mm EF-S f/3.5-5.6 is II Lens + 58mm Wide Angle Lens + 2X Telephoto Lens",
      price: 1234.00,
      numbers: 0,
      tagName: 'camera9',
      inCart: false
    },
    camera10: {
      name: "Canon EOS Rebel T7 DSLR Camera with EF-S 18-55mm and EF 75-300mm Lens Starter Bundle with Bag, Wrist Strap, Extra Battery",
      price: 1232.00,
      numbers: 0,
      tagName: 'camera10',
      inCart: false
    },
    camera11: {
      name: "Canon EOS Rebel T6 Digital SLR Camera with Canon EF-S 18-55mm Image Stabilization II Lens, Sandisk 32GB SDHC Memory Cards",
      price: 1206.00,
      numbers: 0,
      tagName: 'camera11',
      inCart: false
    },
    camera12: {
      name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm is II Lens Bundle + Canon EF 75-300mm f/4-5.6 III Lens and 500mm Preset Lens + 32GB Memory",
      price: 1226.00,
      numbers: 0,
      tagName: 'camera12',
      inCart: false
    },


    // FURNITURE State
    furniture1: {
      name: "Ashley Furniture Signature Design - 12 Inch Chime Express Memory Foam Mattress - Bed in a Box - Queen - Firm Comfort Level - White",
      price: 727.00,
      numbers: 0,
      tagName: 'furniture1',
      inCart: false
    },
    furniture2: {
      name: "Walker Edison WE Furniture TV Stand 58 White/Rustic Oak, White/Reclaimed Barnwood",
      price: 745.00,
      numbers: 0,
      tagName: 'furniture2',
      inCart: false
    },
    furniture3: {
      name: "Walker Edison Furniture Company Modern Farmhouse Buffet Sideboard Kitchen Dining Storage Cabinet Living Room, 32 Inch",
      price: 762.00,
      numbers: 0,
      tagName: 'furniture3',
      inCart: false
    },
    furniture4: {
      name: "Glitzhome Rustic Storage Bins Accent Side Table Home Furniture Galvanized Metal Stool Ottoman Seat with Round Wood Lid Set of 2",
      price: 707.00,
      numbers: 0,
      tagName: 'furniture4',
      inCart: false
    },
    furniture5: {
      name: "Walker Edison Furniture Company Modern Round Coffee Accent Table Living Room, Marble/Gold",
      price: 734.00,
      numbers: 0,
      tagName: 'furniture5',
      inCart: false
    },
    furniture6: {
      name: "WE Furniture Minimal Farmhouse Wood Universal Stand for TV's up to 64 Flat Screen Living Room Storage Shelves Entertainment",
      price: 732.00,
      numbers: 0,
      tagName: 'furniture6',
      inCart: false
    },
    furniture7: {
      name: "Walker Edison Furniture Company Industrial Wood and Metal Bar Cabinet with Wheels Wine Glass and Bottle Kitchen Storage",
      price: 706.00,
      numbers: 0,
      tagName: 'furniture7',
      inCart: false
    },
    furniture8: {
      name: "Walker Edison Furniture Company Modern Farmhouse Glass and Wood Stand with Cabinet Doors for TVs up to 80",
      price: 726.00,
      numbers: 0,
      tagName: 'furniture8',
      inCart: false
    },
    furniture9: {
      name: "WComputer Desk with Furnitureshelf, Office Desk, Writing Desk, Wood and Metal Frame, Industrial Style, Study Table Workstation",
      price: 718.00,
      numbers: 0,
      tagName: 'furniture9',
      inCart: false
    },
    furniture10: {
      name: "Flash Furniture High Back Designer Black Mesh Executive Swivel Ergonomic Office Chair with Adjustable Arms",
      price: 785.00,
      numbers: 0,
      tagName: 'furniture10',
      inCart: false
    },
    furniture11: {
      name: "Riforla Vanity Set with Lighted Mirror, Makeup Vanity Dressing Table Dresser Desk with Large Drawer for Bedroom, White Bedroom Furniture",
      price: 795.00,
      numbers: 0,
      tagName: 'furniture11',
      inCart: false
    },
    furniture12: {
      name: "Flash Furniture Mid-Back Black Mesh Swivel Ergonomic Task Office Chair with Flip-Up Arms",
      price: 775.00,
      numbers: 0,
      tagName: 'furniture12',
      inCart: false
    },

    //GAMINGSYSTEM State
    gamingsystem1: {
      name: "NexiGo 2020 Playstation 4 PS4 Console Holiday Bundle 1TB HDD + Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn)",
      price: 527.00,
      numbers: 0,
      tagName: 'gamingsystem1',
      inCart: false
    },
    gamingsystem2: {
      name: "PlayStation 4 Slim 1TB Console",
      price: 545.00,
      numbers: 0,
      tagName: 'gamingsystem2',
      inCart: false
    },
    gamingsystem3: {
      name: "PlayStation 4 Console - 1TB Slim Edition",
      price: 562.00,
      numbers: 0,
      tagName: 'gamingsystem3',
      inCart: false
    },
    gamingsystem4: {
      name: "PlayStation 4 Slim 1TB Console - Only On PlayStation Bundle",
      price: 507.00,
      numbers: 0,
      tagName: 'gamingsystem4',
      inCart: false
    },
    gamingsystem5: {
      name: "PlayStation 4 Pro 1TB Console",
      price: 534.00,
      numbers: 0,
      tagName: 'gamingsystem5',
      inCart: false
    },
    gamingsystem6: {
      name: "PlayStation 4 Slim 1TB Console - Fortnite Bundle",
      price: 532.00,
      numbers: 0,
      tagName: 'gamingsystem6',
      inCart: false
    },
    gamingsystem7: {
      name: "Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming) - Discontinued",
      price: 506.00,
      numbers: 0,
      tagName: 'gamingsystem7',
      inCart: false
    },
    gamingsystem8: {
      name: "Newest Flagship Microsoft Xbox One S 1TB HDD Bundle with Two (2X) Wireless Controllers, 1-Month Game Pass Trial, 14-Day Xbox",
      price: 526.00,
      numbers: 0,
      tagName: 'gamingsystem8',
      inCart: false
    },
    gamingsystem9: {
      name: "Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed)",
      price: 480.00,
      numbers: 0,
      tagName: 'gamingsystem9',
      inCart: false
    },
    gamingsystem10: {
      name: "Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd (Discontinued)",
      price: 499.00,
      numbers: 0,
      tagName: 'gamingsystem10',
      inCart: false
    },
    gamingsystem11: {
      name: "Xbox One S 1TB Console - Star Wars Jedi: Fallen Order Bundle",
      price: 500.00,
      numbers: 0,
      tagName: 'gamingsystem11',
      inCart: false
    },
    gamingsystem12: {
      name: "Xbox One 500 GB Console - Black [Discontinued]",
      price: 540.00,
      numbers: 0,
      tagName: 'gamingsystem12',
      inCart: false
    },

    //
    toy1: {
      name: "NEW DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera 4K Video 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time",
      price: 27.00,
      numbers: 0,
      tagName: 'toy1',
      inCart: false
    },
    toy2: {
      name: "Magic: The Gathering Double Masters Draft Booster (24 Packs) & 2 Box Toppers",
      price: 45.00,
      numbers: 0,
      tagName: 'toy2',
      inCart: false
    },
    toy3: {
      name: "LEGO Technic Lamborghini Sián FKP 37 (42115), Building Project for Adults, Build and Display This Distinctive Model",
      price: 62.00,
      numbers: 0,
      tagName: 'toy3',
      inCart: false
    },
    toy4: {
      name: "HONEY JOY Inflatable Bounce House, Kids Castle Jumping Bouncer W/Slide &Splash Pool, Includes Carry Bag, Repairing Kit, Stakes, Ocean Balls",
      price: 72.00,
      numbers: 0,
      tagName: 'toy4',
      inCart: false
    },
    toy5: {
      name: "WARHAMMER 40000: INDOMITUS",
      price: 54.00,
      numbers: 0,
      tagName: 'toy5',
      inCart: false
    },
    toy6: {
      name: "SereneLife Trampoline with Net Enclosure – ASTM Approved, Stable, Strong Kids and Adult Trampoline with Net – Outdoor Trampoline for Kids",
      price: 42.00,
      numbers: 0,
      tagName: 'toy6',
      inCart: false
    },
    toy7: {
      name: "Best Choice Products 12V 3.7 MPH 2-Seater Licensed Land Rover Ride On w/ Parent Remote Control, MP3 Player - Pink",
      price: 66.00,
      numbers: 0,
      tagName: 'toy7',
      inCart: false
    },
    toy8: {
      name: "Kid Trax Electric Kids Luxury Range Rover Car Ride-On Toy, 6 Volt Battery, Remote Control, Ages 3-5 Years, Silver (KT1550I)",
      price: 50.00,
      numbers: 0,
      tagName: 'toy8',
      inCart: false
    },
    toy9: {
      name: "Wow World of Watersports Super Slide",
      price: 32.00,
      numbers: 0,
      tagName: 'toy9',
      inCart: false
    },
    toy10: {
      name: "BABLE 2 Seats Kids Electric Car 12V Ride On Car Truck with Remote Control, Kids Car Ride on Toy Motorized Vehicles with USB/MP3 Music",
      price: 90.00,
      numbers: 0,
      tagName: 'toy10',
      inCart: false
    },
    toy11: {
      name: "Magic: The Gathering Zendikar Rising Collector Booster Box | 12 Packs (180 Cards)",
      price: 23.00,
      numbers: 0,
      tagName: 'toy11',
      inCart: false
    },
    toy12: {
      name: "Magic: The Gathering Double Masters Draft Booster Box | 24 Packs (360 Cards) | 2 Box Toppers",
      price: 25.00,
      numbers: 0,
      tagName: 'toy12',
      inCart: false
    },

    // TOOLS State
    tool1: {
      name: "41-Piece Tool Set General Household Home Repair Hand Tools Kit with Plastic Toolbox Storage Case",
      price: 27.00,
      numbers: 0,
      tagName: 'tool1',
      inCart: false
    },
    tool2: {
      name: "Cartman 148-Piece Tool Set - General Household Hand Tool Kit with Plastic Toolbox Storage Case",
      price: 45.00,
      numbers: 0,
      tagName: 'tool2',
      inCart: false
    },
    tool3: {
      name: "DEWALT 20V MAX Cordless Drill Combo Kit, 2-Tool (DCK240C2)",
      price: 62.00,
      numbers: 0,
      tagName: 'tool3',
      inCart: false
    },
    tool4: {
      name: "BLACK+DECKER 20V MAX Cordless Drill Combo Kit, 4-Tool (BD4KITCDCRL)",
      price: 34.00,
      numbers: 0,
      tagName: 'tool4',
      inCart: false
    },
    tool5: {
      name: "HORUSDY 100-Piece Magnetic Screwdriver Set with Plastic Racking",
      price: 14.00,
      numbers: 0,
      tagName: 'tool5',
      inCart: false
    },
    tool6: {
      name: "Qooltek Multipurpose Laser Level Laser Line 8 feet Measure Tape Ruler Adjustable",
      price: 12.00,
      numbers: 0,
      tagName: 'tool6',
      inCart: false
    },
    tool7: {
      name: "CARTMAN Orange 39-Piece Tool Set - General Household Hand Tool Kit",
      price: 32.00,
      numbers: 0,
      tagName: 'tool7',
      inCart: false
    },
    tool8: {
      name: "DOWELL 10-22 AWG Wire Stripper Cutter Wire Stripping Tool And Multi",
      price: 43.00,
      numbers: 0,
      tagName: 'tool8',
      inCart: false
    },
    tool9: {
      name: "DOWELL 24 Pieces Homeowner Tool Set, Home Repair Hand Tool Kit with Portable Tool Bag",
      price: 43.00,
      numbers: 0,
      tagName: 'tool9',
      inCart: false
    },
    tool10: {
      name: "DOWELL 10 Piece Small Tool Kit,Mini Portable Tool Set,Home Repair Hand Tool Kit with Plastic Tool box Storage Case",
      price: 43.00,
      numbers: 0,
      tagName: 'tool10',
      inCart: false
    },
    tool11: {
      name: "DOWELL Small Homeowner Tool Set 9 Pieces General Household Small Hand Tool Kit with Plastic Tool box Storage Case",
      price: 43.00,
      numbers: 0,
      tagName: 'tool11',
      inCart: false
    },
    tool12: {
      name: "DOWELL 49 Piece Tool Set,Home Repair Hand Tool Kit with Plastic Tool Box Storage Case",
      price: 43.00,
      numbers: 0,
      tagName: 'tool12',
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