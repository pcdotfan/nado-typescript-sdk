import { ChainEnv, getValidatedHex } from '@nadohq/shared';
import 'dotenv/config';
import { Env } from './types';

const chainEnv: ChainEnv = (process.env.CHAIN_ENV as ChainEnv) ?? 'inkTestnet';
const privateKey = getValidatedHex(process.env.PRIVATE_KEY ?? '');

export const env: Env = {
  chainEnv,
  privateKey,
};
