import { container } from 'tsyringe';

import IHashProvider from './modules/IHashProvider';
import BCryptHashProvider from './implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
