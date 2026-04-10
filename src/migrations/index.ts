import * as migration_20260410_213830 from './20260410_213830';

export const migrations = [
  {
    up: migration_20260410_213830.up,
    down: migration_20260410_213830.down,
    name: '20260410_213830'
  },
];
