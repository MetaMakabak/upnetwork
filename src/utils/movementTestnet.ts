import { defineChain } from 'viem';

export const movementTestnet = /*#__PURE__*/ defineChain({
  id: 30732,
  name: 'MEVM',
  nativeCurrency: { name: 'MOVE', symbol: 'MOVE', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://mevm.devnet.imola.movementlabs.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'movementTestnetScan',
      url: 'https://explorer.devnet.imola.movementlabs.xyz',
    },
  },
})