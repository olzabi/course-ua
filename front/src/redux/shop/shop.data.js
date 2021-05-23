const SHOP_DATA = {
  prog: {
    id: 1,
    title: "Курси з програмування",
    routeName: "prog",
    items: [
      {
        id: 1,
        name: "Профессия Java-разработчик",
        imageUrl:
          "https://248006.selcdn.ru/LandGen/desktop_2_477ae814606ca5e5256c683921f40d2d7f29bad4.webp",
        price: 125,
      },
      {
        id: 2,
        name: "C++ DEVELOPMENT",
        imageUrl:
          "https://simplesnippets.tech/wp-content/uploads/2018/03/C-programming-course-featured-image-1.jpg",
        price: 9999,
      },
      {
        id: 3,
        name: "C# DEVELOPMENT",
        imageUrl:
          "https://tproger.ru/s3/uploads/2017/06/c-sharp-books-880x308.jpg",
        price: 350,
      },
      {
        id: 4,
        name: "SQL DEV",
        imageUrl:
          "https://bestweb4u.net/wp-content/uploads/2018/11/sqldevops.png",
        price: 250,
      },
      {
        id: 5,
        name: "DevOps start",
        imageUrl: "http://tvoemisto.tv/media/gallery/full/p/r/programist1.jpg",
        price: 999,
      },
      {
        id: 6,
        name: "Python start",
        imageUrl:
          "https://thepresentation.ru/img/thumbs/c126d0621162514d211391399a37c849-800x.jpg",
        price: 100,
      },
      {
        id: 7,
        name: "Python Senior",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6832-H71_pwJTTGhfVw03T4sG4zRo_NDsKQ&usqp=CAU",
        price: 200,
      },
    ],
  },
  target: {
    id: 2,
    title: "Курси з маркетингу",
    routeName: "target",
    items: [
      {
        id: 8,
        name: "CMM for students",
        imageUrl:
          "https://postium.ru/wp-content/uploads/2020/08/image2-8-696x348.jpg",
        price: 199,
      },
      {
        id: 9,
        name: "Google Ads for Dev's",
        imageUrl: "https://www.adindex.ua/wp-content/uploads/komplex.png",
        price: 299,
      },
      {
        id: 10,
        name: "Facebook target for FOP",
        imageUrl:
          "https://sdvv.ru/upload/iblock/707/707a701df067597507a40471f0440521.png",
        price: 399,
      },
      {
        id: 11,
        name: "SEO for for Dev's",
        imageUrl:
          "https://codewave.pro/wp-content/uploads/2018/09/codewavepro-seo-optimizatsiia.jpg",
        price: 499,
      },
    ],
  },
  design: {
    id: 3,
    title: "Курси з дизайну",
    routeName: "design",
    items: [
      {
        id: 8,
        name: "Adobe Photoshop START",
        imageUrl:
          "https://nastroyvse.ru/wp-content/uploads/2020/12/adobe-photoshop-2021.jpg",
        price: 199,
      },
      {
        id: 9,
        name: "FIGMA START",
        imageUrl:
          "https://ux-journal.ru/wp-content/uploads/2020/08/478ef721f4d00052068962fe1dfc1de6.png",
        price: 299,
      },
      {
        id: 10,
        name: "Adobe Illustrator START",
        imageUrl: "https://dphotoworld.net/_nw/91/51565682.jpg",
        price: 399,
      },
      {
        id: 11,
        name: "Design START",
        imageUrl:
          "https://tehnot.com/wp-content/uploads/2018/01/multiexposition_photoshop_08.jpg",
        price: 499,
      },
    ],
  },
  zno: {
    id: 4,
    title: "Курси ЗНО",
    routeName: "zno",
    items: [
      {
        id: 12,
        name: "ZNO Ukranian Language",
        imageUrl:
          "https://lh3.googleusercontent.com/proxy/962xjC3afU6AjKNFidgqCV3Zjm9wkOaht54fvaJBDO-RM_UXfd415ep99VaYpSGNkGDjxkpDh_nXMyV1QqYA486DTOzo6r3inBbg93s0iO2NcXo4eUeaSjfE2HSSuUxbfg",
        price: 250,
      },
      {
        id: 14,
        name: "ZNO Math",
        imageUrl: "https://mathzno.dp.ua/wp-content/uploads/2020/09/MATH.png",
        price: 250,
      },
      {
        id: 15,
        name: "ZNO History",
        imageUrl:
          "https://img.telemetr.me/photos/e9083951bf8c6e22c6faa48d458dd033.jpg",
        price: 250,
      },
      {
        id: 16,
        name: "ZNO English Language",
        imageUrl:
          "data:image/jpeg;base64,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",
        price: 250,
      },
    ],
  },
  kids: {
    id: 5,
    title: "Курси для дітей",
    routeName: "kids",
    items: [
      {
        id: 17,
        name: "English for kids",
        imageUrl:
          "https://i.ytimg.com/vi/SUt8q0EKbms/maxresdefault.jpg",
        price: 325,
      },
      {
        id: 18,
        name: "Math for kids",
        imageUrl:
          "https://previews.123rf.com/images/iimages/iimages1802/iimages180200260/94585677-font-design-for-word-math-with-many-numbers-and-kids-illustration.jpg",
        price: 325,
      },
      {
        id: 19,
        name: "Programing for kids",
        imageUrl:
          "https://i0.wp.com/wizkidcoding.com/wp-content/uploads/2020/06/Coding-for-kids-is-not-just-for-adults.png",
        price: 325,
      },
      {
        id: 20,
        name: "Design for kids",
        imageUrl:
          "https://childrensdesignguide.org/wp-content/uploads/2020/06/d4cr_logo@2x.png",
        price: 325,
      },
    ],
  },
};

export default SHOP_DATA;
