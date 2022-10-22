import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';

import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCH_API_KEY }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Alliance1210's",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const Wallet = ({children}) => {
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          {
            children
          }
        </RainbowKitProvider>
      </WagmiConfig>
    );
  };

  export default Wallet