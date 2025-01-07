import * as migration_20250107_184058_initial from './20250107_184058_initial';
import * as migration_20250107_200109_update_initial_tables from './20250107_200109_update_initial_tables';

export const migrations = [
  {
    up: migration_20250107_184058_initial.up,
    down: migration_20250107_184058_initial.down,
    name: '20250107_184058_initial',
  },
  {
    up: migration_20250107_200109_update_initial_tables.up,
    down: migration_20250107_200109_update_initial_tables.down,
    name: '20250107_200109_update_initial_tables'
  },
];
