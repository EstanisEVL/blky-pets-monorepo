export type ClickAndIconBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

export type ClickAndTextBtnPropsType = {
  handleClick: () => void;
  text: string;
};

export type CartWidgetBtnPropsType = {
  handleClick: () => void;
  icon: string;
  disabled: boolean;
  hasProducts: boolean;
};

export type LoginModalBtnPropsType = {
  handleClick: () => void;
  text: string;
  active: boolean;
};

export type TextBtnPropsType = {
  text: string;
};

export type AddBtnPropsType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pid: string;
  icon: string;
  inProductCard: boolean;
};

export type DeleteAndRemoveBtnPropsType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pid: string;
  icon: string;
};
