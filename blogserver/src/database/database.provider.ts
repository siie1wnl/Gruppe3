import * as mongoose from 'mongoose';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      // eslint-disable-next-line prettier/prettier
      await mongoose.connect('mongodb://127.0.0.1/articleblog'),
  },
];
