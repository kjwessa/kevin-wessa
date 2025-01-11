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
import * as migration_20250108_204350_add_bio_block from './20250108_204350_add_bio_block';
import * as migration_20250108_213244_add_mediaslider_block from './20250108_213244_add_mediaslider_block';
import * as migration_20250108_215525_add_layout_options_to_mediaslider from './20250108_215525_add_layout_options_to_mediaslider';
import * as migration_20250108_220303_add_gap_to_mediaslider from './20250108_220303_add_gap_to_mediaslider';
import * as migration_20250108_220835_add_3_2_aspect_ratio from './20250108_220835_add_3_2_aspect_ratio';
import * as migration_20250108_221324_add_slides_visible from './20250108_221324_add_slides_visible';
import * as migration_20250108_223806_cleanup_aspect_ratio from './20250108_223806_cleanup_aspect_ratio';
import * as migration_20250109_002417_add_contentlayout_block from './20250109_002417_add_contentlayout_block';
import * as migration_20250109_145715_remove_contentlayout_block from './20250109_145715_remove_contentlayout_block';
import * as migration_20250109_221538_add_abouthero_block from './20250109_221538_add_abouthero_block';
import * as migration_20250110_213949_add_callouttext_block from './20250110_213949_add_callouttext_block';
import * as migration_20250110_214939_add_aboutintro_block from './20250110_214939_add_aboutintro_block';
import * as migration_20250110_220351_add_banner_to_aboutintro_block from './20250110_220351_add_banner_to_aboutintro_block';
import * as migration_20250110_222154_add_fourcards_block from './20250110_222154_add_fourcards_block';
import * as migration_20250110_224944_add_homehero_block from './20250110_224944_add_homehero_block';
import * as migration_20250111_200204_add_scrollinghero_block from './20250111_200204_add_scrollinghero_block';
import * as migration_20250111_203502_add_contact_block_option from './20250111_203502_add_contact_block_option';

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
    name: '20250108_202005_add_mediagrid_block_option',
  },
  {
    up: migration_20250108_204350_add_bio_block.up,
    down: migration_20250108_204350_add_bio_block.down,
    name: '20250108_204350_add_bio_block',
  },
  {
    up: migration_20250108_213244_add_mediaslider_block.up,
    down: migration_20250108_213244_add_mediaslider_block.down,
    name: '20250108_213244_add_mediaslider_block',
  },
  {
    up: migration_20250108_215525_add_layout_options_to_mediaslider.up,
    down: migration_20250108_215525_add_layout_options_to_mediaslider.down,
    name: '20250108_215525_add_layout_options_to_mediaslider',
  },
  {
    up: migration_20250108_220303_add_gap_to_mediaslider.up,
    down: migration_20250108_220303_add_gap_to_mediaslider.down,
    name: '20250108_220303_add_gap_to_mediaslider',
  },
  {
    up: migration_20250108_220835_add_3_2_aspect_ratio.up,
    down: migration_20250108_220835_add_3_2_aspect_ratio.down,
    name: '20250108_220835_add_3_2_aspect_ratio',
  },
  {
    up: migration_20250108_221324_add_slides_visible.up,
    down: migration_20250108_221324_add_slides_visible.down,
    name: '20250108_221324_add_slides_visible',
  },
  {
    up: migration_20250108_223806_cleanup_aspect_ratio.up,
    down: migration_20250108_223806_cleanup_aspect_ratio.down,
    name: '20250108_223806_cleanup_aspect_ratio',
  },
  {
    up: migration_20250109_002417_add_contentlayout_block.up,
    down: migration_20250109_002417_add_contentlayout_block.down,
    name: '20250109_002417_add_contentlayout_block',
  },
  {
    up: migration_20250109_145715_remove_contentlayout_block.up,
    down: migration_20250109_145715_remove_contentlayout_block.down,
    name: '20250109_145715_remove_contentlayout_block',
  },
  {
    up: migration_20250109_221538_add_abouthero_block.up,
    down: migration_20250109_221538_add_abouthero_block.down,
    name: '20250109_221538_add_abouthero_block',
  },
  {
    up: migration_20250110_213949_add_callouttext_block.up,
    down: migration_20250110_213949_add_callouttext_block.down,
    name: '20250110_213949_add_callouttext_block',
  },
  {
    up: migration_20250110_214939_add_aboutintro_block.up,
    down: migration_20250110_214939_add_aboutintro_block.down,
    name: '20250110_214939_add_aboutintro_block',
  },
  {
    up: migration_20250110_220351_add_banner_to_aboutintro_block.up,
    down: migration_20250110_220351_add_banner_to_aboutintro_block.down,
    name: '20250110_220351_add_banner_to_aboutintro_block',
  },
  {
    up: migration_20250110_222154_add_fourcards_block.up,
    down: migration_20250110_222154_add_fourcards_block.down,
    name: '20250110_222154_add_fourcards_block',
  },
  {
    up: migration_20250110_224944_add_homehero_block.up,
    down: migration_20250110_224944_add_homehero_block.down,
    name: '20250110_224944_add_homehero_block',
  },
  {
    up: migration_20250111_200204_add_scrollinghero_block.up,
    down: migration_20250111_200204_add_scrollinghero_block.down,
    name: '20250111_200204_add_scrollinghero_block',
  },
  {
    up: migration_20250111_203502_add_contact_block_option.up,
    down: migration_20250111_203502_add_contact_block_option.down,
    name: '20250111_203502_add_contact_block_option'
  },
];
