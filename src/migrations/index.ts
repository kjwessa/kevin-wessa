import * as migration_20250107_184058_initial from './20250107_184058_initial';
import * as migration_20250107_200109_update_initial_tables from './20250107_200109_update_initial_tables';
import * as migration_20250108_005316_update_media from './20250108_005316_update_media';
import * as migration_20250108_024136_update_blocks from './20250108_024136_update_blocks';
import * as migration_20250108_171830_add_verticals_hero from './20250108_171830_add_verticals_hero';
import * as migration_20250108_174630_update_verticals_hero from './20250108_174630_update_verticals_hero';
import * as migration_20250108_193214_add_splitcontent_block from './20250108_193214_add_splitcontent_block';
import * as migration_20250108_194106_add_content_block from './20250108_194106_add_content_block';
import * as migration_20250108_195328_add_contentbeta_block from './20250108_195328_add_contentbeta_block';
import * as migration_20250108_200408_update_contentbeta_layout from './20250108_200408_update_contentbeta_layout';
import * as migration_20250108_202005_add_mediagrid_block_option from './20250108_202005_add_mediagrid_block_option';

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
    name: '20250108_024136_update_blocks',
  },
  {
    up: migration_20250108_171830_add_verticals_hero.up,
    down: migration_20250108_171830_add_verticals_hero.down,
    name: '20250108_171830_add_verticals_hero',
  },
  {
    up: migration_20250108_174630_update_verticals_hero.up,
    down: migration_20250108_174630_update_verticals_hero.down,
    name: '20250108_174630_update_verticals_hero',
  },
  {
    up: migration_20250108_193214_add_splitcontent_block.up,
    down: migration_20250108_193214_add_splitcontent_block.down,
    name: '20250108_193214_add_splitcontent_block',
  },
  {
    up: migration_20250108_194106_add_content_block.up,
    down: migration_20250108_194106_add_content_block.down,
    name: '20250108_194106_add_content_block',
  },
  {
    up: migration_20250108_195328_add_contentbeta_block.up,
    down: migration_20250108_195328_add_contentbeta_block.down,
    name: '20250108_195328_add_contentbeta_block',
  },
  {
    up: migration_20250108_200408_update_contentbeta_layout.up,
    down: migration_20250108_200408_update_contentbeta_layout.down,
    name: '20250108_200408_update_contentbeta_layout',
  },
  {
    up: migration_20250108_202005_add_mediagrid_block_option.up,
    down: migration_20250108_202005_add_mediagrid_block_option.down,
    name: '20250108_202005_add_mediagrid_block_option'
  },
];
