export type CartsInfoData = {
  id: number;
  email: string;
  date: string & number;
  avatarImg: string;
 bgImg: string;
  rate: string & number;
  coastPerThousand: number;
  views: {
    view: string & number;
    liks: string & number;
    comments: string & number;
  };
  dealog: string;
  showMore: string;
};
