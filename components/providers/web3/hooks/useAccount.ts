import { useEffect } from 'react';
import useSWR from 'swr';

const adminAddresses = {
  '0x5a86c0581cf1d294939f2e68313c3f5ba03bfe27a249510a5733e48698f4f6fd': true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? 'web3/accounts' : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    },
  );

  useEffect(() => {
    provider &&
      provider.on('accountsChanged', (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest,
    },
  };
};
