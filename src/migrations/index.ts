import * as migration_20250107_184058_initial from './20250107_184058_initial';
import * as migration_20250107_200109_update_initial_tables from './20250107_200109_update_initial_tables';
import * as migration_20250108_005316_update_media from './20250108_005316_update_media';
import * as migration_20250108_024136_update_blocks from './20250108_024136_update_blocks';

export const migrations = [
  {
    up: migration_20250107_184058_initial.up,
    down: migration_20250107_184058_initial.down,
    name: '20250107_184058_initial',
  },
  {
    up: migration_20250107_200109_update_initial_tables.up,
    down: migration_20250107_200109_update_initial_tables.down,
    name: '20250107_200109_update_initial_tables',
  },
  {
    up: migration_20250108_005316_update_media.up,
    down: migration_20250108_005316_update_media.down,
    name: '20250108_005316_update_media',
  },
  {
    up: migration_20250108_024136_update_blocks.up,
    down: migration_20250108_024136_update_blocks.down,
    name: '20250108_024136_update_blocks'
  },
];
