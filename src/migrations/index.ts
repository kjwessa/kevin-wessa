import * as migration_20250107_184058_initial from './20250107_184058_initial';

export const migrations = [
  {
    up: migration_20250107_184058_initial.up,
    down: migration_20250107_184058_initial.down,
    name: '20250107_184058_initial'
  },
];
