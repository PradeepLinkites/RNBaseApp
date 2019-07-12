const app = {
  app: {
    navTitle: '#FFFFFF',
    navTitle1: '#697EFF',
    background: '#FFFFFF',
    cardBackground: '#FFFFFF',
    listItemBackground: '#FFFFFF',
    viewBackground: '#82A0FA',
    navColor: '#0091EA',//'#079ef2',
    topHead: '#F7FAFD',
    bodyColor: '#e1e6ef',//'#F7F7FA',
    unreadMessage: '#FF6DAB'
  }
};

const brand = {
  brand: {
    primary: '#82A0FA',
    secondary: '#17233D',
    authinticate: '#FFFFFF',
  }
};

const card = {
  card: {
    title: '#7f64b5',
    subtitle: '#959595',
    unSelect: '#363636',
    placeholder: '#b3b3b3',
    likeText: '#27ae60',
    settingsBg: '#f7f9fa',
    subtitleSelcted: '#3AAAA9',
  }
};

const text = {
  text: {
    textInput: '#626263',
    textPrimary: '#7f64b5',
    textSecondary: '#6F7FFF',
    sideMenuTitle: '#6E82F2',
    headingPrimary: brand.brand.primary,
    headingSecondary: brand.brand.primary,
    topHeadText: '#554572'
  }
};

const borders = {
  border: '#D0D1D5',
};

const tabbar = {
  tabbar: {
    background: '#FFFFFF',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  }
};

export default {
  ...app,
  ...card,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
};
