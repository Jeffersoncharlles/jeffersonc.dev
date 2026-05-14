import * as migration_20260410_213830 from './20260410_213830'
import * as migration_20260514_121349 from './20260514_121349'

export const migrations = [
  {
    up: migration_20260410_213830.up,
    down: migration_20260410_213830.down,
    name: '20260410_213830',
  },
  {
    up: migration_20260514_121349.up,
    down: migration_20260514_121349.down,
    name: '20260514_121349',
  },
]
