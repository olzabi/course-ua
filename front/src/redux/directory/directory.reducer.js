const INITIAL_STATE = {
  sections: [
    {
      title: "Курси з програмування",
      imageUrl: 'https://osvitoria.media/wp-content/uploads/2020/04/353974-PBME6B-537.jpg',
      id: 1,
      linkUrl: "shop/prog",
    },
    {
      title: "Курси з дизайну",
      imageUrl: 'https://va-promotion.ru/wp-content/uploads/2019/01/luchshie-kursy-veb-dizai-na.png',
      id: 2,
      linkUrl: "shop/design",
    },
    {
      title: "Курси з маркетингу",
      imageUrl: 'https://artforlife.ru/wp-content/uploads/2018/10/1538507710_pre-chto-takoe-veb-dizajn-i-kak-mne-eto-ponyat-930x465.jpg',
      id: 3,
      linkUrl: "shop/target",
    },
    {
      title: "Курси ЗНО",
      imageUrl: 'https://img2.abo.media/upload/article/2muojy1cyywvoqkxwcxq_th_lnd_xx.jpg',
      size: "large",
      id: 4,
      linkUrl: "shop/zno",
    },
    {
      title: "Курси для дітей",
      imageUrl: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Kids_Space_Blog_Twitter.max-1000x1000.jpg',
      size: "large",
      id: 5,
      linkUrl: "shop/kids",
    },
  ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;