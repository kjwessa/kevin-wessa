import * as migration_20250107_182540_initial from './20250107_182540_initial';

export const migrations = [
  {
    up: migration_20250107_182540_initial.up,
    down: migration_20250107_182540_initial.down,
    name: '20250107_182540_initial'
  },
];
