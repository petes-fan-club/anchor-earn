import { AnchorConfig } from '../address-provider/types';

const mainNetDefaultConfig: AnchorConfig = {
  lcd: {
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-4',
    gasPrices: {
      uusd: 0.15,
    },
    gasAdjustment: 1.4,
  },
  contracts: {
    mmMarket: 'terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s',
    aTerra: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
    ANC: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
    mmOverseer: 'terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8',
  },
};

export default mainNetDefaultConfig;