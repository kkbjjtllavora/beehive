import { NOT_AT_ALL, OPEN_TO_SOME_RISK, VERY_RISKY } from './investmentOptions';
import titleLogo from '../../../assets/images/bdo-logo.png';
import titleLogo2 from '../../../assets/images/sunlife-logo.png';
import gaugeLevel1 from '../../../assets/images/risk-tolerance-icon.png';
import gaugeLevel2 from '../../../assets/images/risk-tolerance-icon-2.png';
import gaugeLevel3 from '../../../assets/images/risk-tolerance-icon-3.png';

export const BDO     = 'bdo';
export const sunLife = 'sun-life';

const investmentConstants = [
  {
    type: BDO,
    title: 'BDO Peso Fixed Income Fund',
    logo: titleLogo,
    riskToleranceDetails: {
      [NOT_AT_ALL]: 'The Fund aims to provide a high level of income with preservation of capital and maintenance of liquidity by investing in a combination of short to long-term fixed-income securities.',
      [OPEN_TO_SOME_RISK]: 'The Fund aims to achieve capital appreciation over the medium-term by investing in a portfolio of equity securities and short to long-term fixed income securities. The allocation for equity securities shall be between 40% to 60% of the portfolio or any other allocation range that may be prescribed by the Trust Officers Association of the Philippines (TOAP) in consultation with the regulatory authorities.',
      [VERY_RISKY]: 'The Fund aims primarily for capital growth over the medium to long-term by investing in a selection of exchange-listed equities.'
    },
    investmentDetails: [
      { 
        label: 'Investment type',
        data: 'Unit Investment Trust Fund'
      },
      {
        label: 'Fund Name',
        data: 'BDO Peso Fixed Income Fund'
      },
      {
        label: 'Current unit price',
        data: '1963.0488'
      },
      {
        label: 'Website',
        data: 'www.bdo.com.ph'
      },
      {
        label: 'Insured amount',
        data: '100%'
      },
      {
        label: 'Others',
        data: 'No income tax and estate tax'
      },
    ],
    gaugeIcon: {
      [NOT_AT_ALL]: gaugeLevel1,
      [OPEN_TO_SOME_RISK]: gaugeLevel2,
      [VERY_RISKY]: gaugeLevel3,
    },
  },

  {
    type: sunLife,
    title: 'SunLife Bond Fund',
    logo: titleLogo2,
    riskToleranceDetails: {
      [NOT_AT_ALL]: 'The Prosperity Bond Fund offers you an avenue to achieve modest returns from your investments as they are invested in high quality government and corporate debt issued by the Philippine government and prime Philippine companies. Bond funds are traditionally recommended for medium-term investors.',
      [OPEN_TO_SOME_RISK]: 'Just as its name implies, the Prosperity Balanced Fund is the middle of Bonds and Equities -- a mix of fixed income and larger growth-potential investments. Balanced Fund is traditionally the instrument used by investors who want to build wealth over time while seeking other investment avenues. Balanced funds are channels for diversification, too, as it provides the best of both worlds of mutual funds.',
      [VERY_RISKY]: 'The Prosperity Equity Fund was designed for the investor with the long term in mind (7 years and beyond) to generate his/her investment’s maximum capacity to earn. If you’ve always wanted to invest in the equities listed in the Philippine Stock Exchange but have been baffled by the complexity of it, the Equity Fund is the way to go.'
    },
    investmentDetails: [
      { 
        label: 'Investment type',
        data: 'Mutual Fund'
      },
      {
        label: 'Fund Name',
        data: 'Sun Life of Canada Prosperity Bond Fund, Inc.'
      },
      {
        label: 'Current unit price',
        data: '2.7535'
      },
      {
        label: 'Website',
        data: 'www.sunlife.com.ph'
      },
      {
        label: 'Insured amount',
        data: '100%'
      },
      {
        label: 'Others',
        data: 'No income tax and estate tax, No holding period, No early redemption fee'
      },
    ],
    gaugeIcon: {
      [NOT_AT_ALL]: gaugeLevel1,
      [OPEN_TO_SOME_RISK]: gaugeLevel2,
      [VERY_RISKY]: gaugeLevel3,
    },
  }
]

export default investmentConstants;