import { IFilter, Product } from '../types';
import valueConverter from '../misc/valuteConverter';

const baseAssetsPath = 'assets/mocks/';

const toDollar = (amount: number): number => {
  return valueConverter('tenge', 'usd', amount);
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
    price: toDollar(389900),
    description: 'Product 1 description',
    image: `${baseAssetsPath}mock1.jpg`,
    category: 'laptop',
    rating: 4,
    countInStock: 10,
    brand: 'Apple ',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 2,
    name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
    price: toDollar(118002),
    description:
      'возможность принимать звонки, возможность совершать звонки, дистанционное управление музыкой, дистанционное управление камерой, возможность отправлять SMS, уведомления о SMS, уведомления о звонках, уведомления от приложений',
    image: `${baseAssetsPath}mock2.png`,
    category: 'watch',
    rating: 5,
    countInStock: 10,
    brand: 'Apple ',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 3,
    name: 'Dyson Airwrap HS05 Long с косметичкой и расческами стайлер 1300 Вт',
    price: toDollar(199900),
    description:
      'Самая полная комплектация, включающая помимо стайлера и 6 насадок, бархатную сумку с магнитным замком и набор из массажной расчёски с гребешком. Также в комплекте щётка для очистки фильтра. Цветная коробка под транспортировочной картонной упаковкой.\n',
    image: `${baseAssetsPath}mock3.png`,
    category: 'hair dryer',
    rating: 5,
    countInStock: 10,
    brand: 'Dyson ',
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-kosmetichkoi-i-rascheskami-stailer-1300-vt-119489111/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 4,
    name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
    price: toDollar(649790),
    description:
      'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.',
    image: `${baseAssetsPath}mock4.png`,
    category: 'phone',
    rating: 5,
    countInStock: 10,
    brand: 'Apple ',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 5,
    name: 'Кабель USB TypeC (M), Lightning белый',
    price: toDollar(3680),
    description: 'функция быстрой зарядки',
    image: `${baseAssetsPath}mock5.png`,
    category: 'charge',
    rating: 4,
    countInStock: 10,
    brand: 'Apple ',
    link: 'https://kaspi.kz/shop/p/kabel-usb-typec-m-lightning-belyi-114949538/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 6,
    name: 'Мобильный телефон Nokia 105 2019 DS черный',
    price: toDollar(2998),
    description:
      'Не ограничивайте себя в общении с Nokia 105 2019 DS. Для отображения информации телефон оснащен дисплеем с диагональю 1.77 дюймов и разрешением 128x160. Удобный корпус и ёмкая батарея 800 мАч позволяют с комфортом вести бесконечно длинные разговоры. На стильном современном корпусе из поликарбоната не остаются следы от ударов и падений.На телефоне достаточно места для хранения 2000 контактов и 500 SMS. В свободное от разговоров время можно развлечься с помощью игр и радио',
    image: `${baseAssetsPath}mock6.png`,
    category: 'phone',
    rating: 4,
    countInStock: 10,
    brand: 'Nokia',
    link: 'https://kaspi.kz/shop/p/nokia-105-2019-ds-chernyi-8801085/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 7,
    name: 'Смарт-часы Huawei Watch Fit 3 серебристый-белый-белый',
    price: toDollar(36490),
    description:
      'Поверните ваше запястье, чтобы увидеть всю необходимую информацию на большом квадратном экране. Ультратонкие рамки и полезная площадь экрана 77,4% обеспечивают визуальный опыт нового уровня: контент отображается чрезвычайно четко даже под прямыми солнечными лучами благодаря частоте обновления 60 Гц и авторегулировке яркости.',
    image: `${baseAssetsPath}mock7.png`,
    category: 'watch',
    rating: 5,
    countInStock: 10,
    brand: 'Huawei',
    link: 'https://kaspi.kz/shop/p/huawei-watch-fit-3-serebristyi-belyi-belyi-119668957/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 8,
    name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
    price: toDollar(529750),
    description:
      '\n' +
      'Максимальная частота процессора4400.0 МГц\n' +
      'ПроцессорIntel Core i5-12450H\n' +
      'Базовая частота процессора2000.0 МГц\n' +
      'Количество ядер процессора8 ядер\n' +
      'Объем кэша L312 Мб',
    image: `${baseAssetsPath}mock8.png`,
    category: 'laptop',
    rating: 5,
    countInStock: 10,
    brand: 'ThundeRobot',
    link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 9,
    name: 'Зарядное устройство Usams IPhone PD белый',
    price: toDollar(1900),
    description:
      'Двухметровый силиконовый кабель 20w кабель в комплекте\n' +
      'В комплект входит сертифицированное зарядное устройство на 20w. Сетевое зарядное устройство Usams с кабелем USB-C на Lightning в комплекте, благодаря функции быстрой зарядки Power Delivery 3.0 зарядит ваш телефон, поддерживающий функцию быстрой зарядки на 50% за 30 минут. Прекрасно подходит для быстрой зарядки всех моделей Apple IPhone.\n' +
      'Адаптер подходит для всех видов смартфонов, поддерживающих функцию быстрой зарядки Power Delivery. Благодаря съемному кабелю, вы сможете заменить его на кабель USB Type-c на USB Type-c и заряжать другие устройства. Поддержка быстрой зарядки PD (Power Delivery 3.0) Высокая мощность 20 Вт. (5V-3A, 9V-2,22A, 12V-1,5A)\n' +
      'Сертификация ЕвразЭС, стабильная работа, быстрая и безопасная зарядка. Компактное и мощное устройство',
    image: `${baseAssetsPath}mock9.png`,
    category: 'charge',
    rating: 5,
    countInStock: 10,
    brand: 'Usams',
    link: 'https://kaspi.kz/shop/p/usams-iphone-pd-belyi-101830551/?c=750000000',
    likes: 4,
    isLiked: false,
  },

  {
    id: 10,
    name: 'Hot Air Styler WT725 стайлер 1200 Вт',
    price: toDollar(18000),
    description:
      'Самая полная комплектация, включающая помимо стайлера и 6 насадок, бархатную сумку с магнитным замком и набор из массажной расчёски с гребешком. Также в комплекте щётка для очистки фильтра. Цветная коробка под транспортировочной картонной упаковкой.\n',
    image: `${baseAssetsPath}mock10.png`,
    category: 'hair dryer',
    rating: 5,
    countInStock: 10,
    brand: 'Hot Air',
    link: 'https://kaspi.kz/shop/p/hot-air-styler-wt725-stailer-1200-vt-115006609/?c=750000000',
    likes: 4,
    isLiked: false,
  },
];

export const filterList: IFilter[] = [
  {
    category: 'phone',
  },
  {
    category: 'laptop',
  },
  {
    category: 'watch',
  },
  {
    category: 'hair dryer',
  },
  {
    category: 'charge',
  },
];

export let filteredProducts: Product[] = [];
