import { lighten } from 'polished';

const light = {
  title: 'light',
  defaultRadiusBorder: '3rem',

  colors: {
    primary: '#f7f7f7',
    secundary: '#747474',

    gray_100: '#eeeeee',
    gray_200: '#dedede',
    green: '#e53238',
    blue: '#B01455',

    background: '#fff',
    text: '#213647',
    text2: '#213647',

    border: lighten(0.45, '#747474'),

    link: '#213647',
    linkHover: '#e53238',

    placeHolder: '#9ca3af'
  }
};

export default light;
