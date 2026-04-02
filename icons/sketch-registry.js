/**
 * SciMotion Sketch Icon Registry
 * 统一的简笔画 SVG 图标库，按分类和项目标签管理。
 * 
 * 用法:
 *   import { SketchIconRegistry } from './sketch-registry.js';
 *   const svg = SketchIconRegistry.get('lightbulb');
 *   const allScience = SketchIconRegistry.byCategory('science');
 *   const forSB = SketchIconRegistry.byTag('survivorship-bias');
 */

const _icons = {};

function register(key, meta) {
  _icons[key] = { key, ...meta };
}

const SketchIconRegistry = {
  /** Get a single icon by key */
  get(key) { return _icons[key] || null; },

  /** Get SVG string by key */
  svg(key) { return _icons[key]?.svg || ''; },

  /** List all icon keys */
  keys() { return Object.keys(_icons); },

  /** List all icons as array */
  all() { return Object.values(_icons); },

  /** Filter by category */
  byCategory(cat) { return Object.values(_icons).filter(i => i.category === cat); },

  /** Filter by tag (e.g. project name) */
  byTag(tag) { return Object.values(_icons).filter(i => i.tags?.includes(tag)); },

  /** Filter by scene (for video projects) */
  byScene(project, sceneId) {
    return Object.values(_icons).filter(i => i.tags?.includes(project) && i.scene === sceneId);
  },

  /** Search by name/desc (case-insensitive) */
  search(q) {
    const lq = q.toLowerCase();
    return Object.values(_icons).filter(i =>
      i.key.includes(lq) || i.name?.toLowerCase().includes(lq) || i.desc?.toLowerCase().includes(lq)
    );
  },

  /** Get all unique categories */
  categories() { return [...new Set(Object.values(_icons).map(i => i.category).filter(Boolean))]; },

  /** Get all unique tags */
  tags() { return [...new Set(Object.values(_icons).flatMap(i => i.tags || []))]; },

  /** Register a new icon at runtime */
  register(key, meta) { register(key, meta); },

  /** Count */
  get count() { return Object.keys(_icons).length; },
};

// ════════════════════════════════════════════════
// ICON DEFINITIONS
// ════════════════════════════════════════════════

// ── PEOPLE ──────────────────────────────────

register('person-standing', {
  name: '站立的人', category: 'people', color: '#fff',
  tags: ['base'],
  desc: '基础站姿火柴人',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="18" r="9"/><path d="M50 27 L50 58"/><path d="M50 36 L28 50"/><path d="M50 36 L72 50"/><path d="M50 58 L32 88"/><path d="M50 58 L68 88"/></svg>`
});

register('person-thinking', {
  name: '思考的人', category: 'people', color: '#fff',
  tags: ['base'],
  desc: '手托下巴、头顶思考泡泡',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="42" cy="18" r="9"/><path d="M42 27 L42 58"/><path d="M42 36 L22 46"/><path d="M42 36 L62 30 L68 20"/><path d="M42 58 L28 88"/><path d="M42 58 L56 88"/><circle cx="76" cy="12" r="2" fill="currentColor"/><circle cx="82" cy="6" r="1.5" fill="currentColor"/><circle cx="87" cy="2" r="1" fill="currentColor"/></svg>`
});

register('person-pointing', {
  name: '指向的人', category: 'people', color: '#fff',
  tags: ['base'],
  desc: '一只手指向远方',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="38" cy="18" r="9"/><path d="M38 27 L38 58"/><path d="M38 36 L18 50"/><path d="M38 36 L68 22 L88 18"/><path d="M38 58 L24 88"/><path d="M38 58 L52 88"/></svg>`
});

register('person-celebrating', {
  name: '欢呼的人', category: 'people', color: '#fff',
  tags: ['base'],
  desc: '双手举起庆祝',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="9"/><path d="M50 31 L50 62"/><path d="M50 40 L28 16"/><path d="M50 40 L72 16"/><path d="M50 62 L34 90"/><path d="M50 62 L66 90"/><path d="M24 10 L26 6 M28 14 L32 12"/><path d="M76 10 L74 6 M72 14 L68 12"/></svg>`
});

register('officer', {
  name: '军官', category: 'people', color: '#f97316',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '军帽+肩章+勋章',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="24" r="12"/><path d="M36 16 L64 16"/><path d="M34 16 L34 12 L66 12 L66 16"/><path d="M50 36 L50 64"/><path d="M50 42 L30 54"/><path d="M50 42 L70 54"/><path d="M50 64 L36 92"/><path d="M50 64 L64 92"/><path d="M34 44 L28 42 L28 48 L34 46"/><path d="M66 44 L72 42 L72 48 L66 46"/><circle cx="44" cy="54" r="3"/><circle cx="56" cy="54" r="3"/></svg>`
});

register('statistician', {
  name: '统计学家', category: 'people', color: '#22c55e',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '沃尔德——戴眼镜拿图表的学者',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="12"/><circle cx="44" cy="20" r="5" stroke-width="1.8"/><circle cx="56" cy="20" r="5" stroke-width="1.8"/><path d="M49 20 L51 20"/><path d="M38 20 L36 18"/><path d="M62 20 L64 18"/><path d="M50 34 L50 64"/><path d="M50 42 L28 52"/><path d="M50 42 L72 36"/><path d="M72 36 L78 32"/><path d="M74 28 L82 28 L82 40 L74 40Z" stroke-width="1.8"/><path d="M76 38 L76 34 L78 36 L80 32" stroke-width="1.5"/><path d="M50 64 L36 92"/><path d="M50 64 L64 92"/></svg>`
});

register('influencer', {
  name: '网红', category: 'people', color: '#f472b6',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '自拍+星光的网红人物',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="22" r="12"/><path d="M38 18 Q36 10 42 10 Q48 8 50 10 Q52 8 58 10 Q64 10 62 18"/><path d="M50 34 L50 62"/><path d="M50 40 L30 48"/><path d="M50 40 L70 36"/><path d="M70 36 L76 30"/><path d="M72 24 L80 24 L80 38 L72 38Z" stroke-width="1.8"/><circle cx="76" cy="28" r="2" stroke-width="1.5"/><path d="M50 62 L36 90"/><path d="M50 62 L64 90"/><path d="M20 16 L22 12 L24 16 L20 14 L24 14Z" stroke-width="1" fill="currentColor" opacity="0.5"/><path d="M82 44 L84 40 L86 44 L82 42 L86 42Z" stroke-width="1" fill="currentColor" opacity="0.5"/></svg>`
});

register('investor', {
  name: '投资者', category: 'people', color: '#eab308',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '西装领带的商务人士',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="20" r="11"/><path d="M50 31 L50 62"/><path d="M50 36 L38 44 L38 62 M50 36 L62 44 L62 62"/><path d="M50 36 L46 50 L50 62 L54 50 L50 36" stroke-width="1.8"/><path d="M50 62 L36 90"/><path d="M50 62 L64 90"/><path d="M38 44 L24 56"/><path d="M18 52 L30 52 L30 64 L18 64Z" stroke-width="1.8"/><path d="M22 52 L22 48 L26 48 L26 52"/><path d="M62 44 L78 34"/><path d="M72 40 L78 34 L84 38" stroke-width="2"/></svg>`
});

register('ghost-person', {
  name: '消失的人', category: 'people', color: '#475569',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '虚线轮廓——看不到的失败者',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4"><circle cx="50" cy="22" r="11"/><path d="M50 33 L50 62"/><path d="M50 42 L30 54"/><path d="M50 42 L70 54"/><path d="M50 62 L36 90"/><path d="M50 62 L64 90"/><path d="M28 16 L24 12 M72 16 L76 12 M28 28 L24 32 M72 28 L76 32" stroke-dasharray="2 3" stroke-width="1.5"/></svg>`
});

// ── SCIENCE & NATURE ──────────────────────────────

register('earth', {
  name: '地球', category: 'science', color: '#3b82f6',
  tags: ['base'],
  desc: '经纬线地球',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="38"/><ellipse cx="50" cy="50" rx="16" ry="38"/><path d="M14 36 Q50 42 86 36"/><path d="M14 64 Q50 58 86 64"/></svg>`
});

register('atom', {
  name: '原子', category: 'science', color: '#8b5cf6',
  tags: ['base'],
  desc: '电子轨道+原子核',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="5" fill="currentColor"/><ellipse cx="50" cy="50" rx="40" ry="14"/><ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(120 50 50)"/></svg>`
});

register('dna', {
  name: 'DNA', category: 'science', color: '#8b5cf6',
  tags: ['base'],
  desc: '双螺旋+碱基对',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 8 Q58 20 30 35 Q58 50 30 65 Q58 80 30 92"/><path d="M70 8 Q42 20 70 35 Q42 50 70 65 Q42 80 70 92"/><path d="M36 14 L64 14"/><path d="M36 35 L64 35"/><path d="M36 56 L64 56"/><path d="M36 77 L64 77"/></svg>`
});

register('lightning', {
  name: '闪电', category: 'science', color: '#eab308',
  tags: ['base'],
  desc: '锯齿闪电',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M58 4 L28 46 L48 46 L38 96 L76 42 L54 42 Z"/></svg>`
});

register('tree', {
  name: '树', category: 'science', color: '#22c55e',
  tags: ['base'],
  desc: '树干+树冠',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 90 L50 50"/><path d="M50 50 L28 62"/><path d="M50 42 L68 56"/><path d="M50 10 Q30 26 24 42 Q18 60 50 58 Q82 60 76 42 Q70 26 50 10Z"/></svg>`
});

register('sun', {
  name: '太阳', category: 'science', color: '#f97316',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="18"/><path d="M50 8 L50 22"/><path d="M50 78 L50 92"/><path d="M8 50 L22 50"/><path d="M78 50 L92 50"/><path d="M20 20 L30 30"/><path d="M70 70 L80 80"/><path d="M80 20 L70 30"/><path d="M30 70 L20 80"/></svg>`
});

register('moon', {
  name: '月亮', category: 'science', color: '#94a3b8',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M60 12 Q30 18 22 50 Q14 82 50 88 Q40 70 42 50 Q44 30 60 12Z"/><circle cx="70" cy="24" r="1.5" fill="currentColor"/><circle cx="80" cy="38" r="1" fill="currentColor"/><circle cx="76" cy="56" r="1.5" fill="currentColor"/></svg>`
});

register('star', {
  name: '星星', category: 'science', color: '#eab308',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 8 L58 38 L90 38 L64 56 L74 88 L50 68 L26 88 L36 56 L10 38 L42 38Z"/></svg>`
});

// ── OBJECTS ──────────────────────────────

register('lightbulb', {
  name: '灯泡', category: 'objects', color: '#eab308',
  tags: ['base'],
  desc: '灵感/想法',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M38 68 Q22 56 22 38 Q22 16 50 12 Q78 8 78 38 Q78 56 62 68"/><path d="M38 68 L38 78 Q38 86 50 86 Q62 86 62 78 L62 68"/><path d="M38 74 L62 74"/><path d="M42 80 L58 80"/><path d="M50 38 L50 56"/><path d="M50 38 L40 28"/><path d="M50 38 L60 28"/></svg>`
});

register('book', {
  name: '书本', category: 'objects', color: '#3b82f6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 20 Q32 14 12 20 L12 82 Q32 76 50 82 Q68 76 88 82 L88 20 Q68 14 50 20Z"/><path d="M50 20 L50 82"/><path d="M24 32 L42 28"/><path d="M24 42 L42 38"/><path d="M24 52 L42 48"/><path d="M58 28 L76 32"/><path d="M58 38 L76 42"/></svg>`
});

register('rocket', {
  name: '火箭', category: 'objects', color: '#f97316',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 8 Q36 28 36 52 L50 62 L64 52 Q64 28 50 8Z"/><circle cx="50" cy="36" r="6"/><path d="M36 48 Q22 52 18 66 L36 56"/><path d="M64 48 Q78 52 82 66 L64 56"/><path d="M42 62 L42 74 Q46 80 50 74 Q54 80 58 74 L58 62"/></svg>`
});

register('magnifying-glass', {
  name: '放大镜', category: 'objects', color: '#fff',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="42" cy="42" r="26"/><path d="M60 60 L86 86"/><path d="M30 34 Q36 22 50 28"/></svg>`
});

register('gear', {
  name: '齿轮', category: 'objects', color: '#94a3b8',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="14"/><path d="M50 10 L46 22 L54 22Z"/><path d="M50 90 L46 78 L54 78Z"/><path d="M10 50 L22 46 L22 54Z"/><path d="M90 50 L78 46 L78 54Z"/><path d="M22 22 L30 30 L26 34Z"/><path d="M78 78 L70 70 L74 66Z"/><path d="M78 22 L70 30 L74 34Z"/><path d="M22 78 L30 70 L26 66Z"/></svg>`
});

register('clock', {
  name: '时钟', category: 'objects', color: '#fff',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="38"/><path d="M50 20 L50 50 L68 62"/><circle cx="50" cy="50" r="3" fill="currentColor"/><path d="M50 14 L50 18"/><path d="M50 82 L50 86"/><path d="M14 50 L18 50"/><path d="M82 50 L86 50"/></svg>`
});

register('telescope', {
  name: '望远镜', category: 'objects', color: '#8b5cf6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 28 L60 46"/><path d="M10 22 L10 34"/><path d="M60 40 L72 52"/><path d="M55 48 L72 52"/><path d="M64 46 L64 52 L56 84"/><path d="M64 52 L74 84"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="28" cy="12" r="1.5" fill="currentColor"/></svg>`
});

register('beaker', {
  name: '烧杯', category: 'objects', color: '#22d3ee',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M34 10 L34 42 L18 80 Q14 90 26 90 L74 90 Q86 90 82 80 L66 42 L66 10"/><path d="M28 10 L72 10"/><path d="M34 42 L66 42"/><path d="M24 72 L76 72"/><circle cx="42" cy="80" r="3"/><circle cx="56" cy="76" r="2"/><circle cx="50" cy="60" r="2"/></svg>`
});

register('heart', {
  name: '爱心', category: 'objects', color: '#f472b6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 88 Q10 58 10 34 Q10 14 30 14 Q44 14 50 28 Q56 14 70 14 Q90 14 90 34 Q90 58 50 88Z"/></svg>`
});

register('brain', {
  name: '大脑', category: 'objects', color: '#f472b6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 86 L50 52"/><path d="M50 52 Q24 52 20 36 Q16 18 36 14 Q48 10 50 22"/><path d="M50 52 Q76 52 80 36 Q84 18 64 14 Q52 10 50 22"/><path d="M28 40 Q36 44 50 40"/><path d="M72 40 Q64 44 50 40"/><path d="M32 26 Q42 30 48 24"/><path d="M68 26 Q58 30 52 24"/></svg>`
});

register('money-bag', {
  name: '钱袋', category: 'objects', color: '#eab308',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '成功/财富符号',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M38 28 Q42 18 50 16 Q58 18 62 28"/><path d="M30 38 Q28 28 38 28 L62 28 Q72 28 70 38 Q80 58 76 74 Q72 90 50 90 Q28 90 24 74 Q20 58 30 38Z"/><path d="M50 45 Q42 45 42 52 Q42 58 50 60 Q58 62 58 68 Q58 75 50 75"/><path d="M50 40 L50 45 M50 75 L50 80"/></svg>`
});

register('trophy', {
  name: '奖杯', category: 'objects', color: '#eab308',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '胜利/成功象征',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 14 L68 14 L68 44 Q68 66 50 72 Q32 66 32 44Z"/><path d="M32 24 Q18 24 16 38 Q14 50 28 52"/><path d="M68 24 Q82 24 84 38 Q86 50 72 52"/><path d="M50 72 L50 82"/><path d="M34 88 L66 88"/><path d="M38 82 L62 82 L62 88 L38 88Z"/><path d="M44 30 L50 24 L56 30"/></svg>`
});

register('graduation-cap', {
  name: '学位帽', category: 'objects', color: '#3b82f6',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '辍学创业场景',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 22 L10 42 L50 62 L90 42Z"/><path d="M26 50 L26 72 Q38 82 50 82 Q62 82 74 72 L74 50"/><path d="M86 42 L86 64"/><path d="M83 64 Q86 68 89 64"/></svg>`
});

register('newspaper', {
  name: '报纸', category: 'objects', color: '#94a3b8',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '"不上新闻的故事"',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 14 L76 14 L76 86 Q76 90 72 90 L24 90 Q16 90 16 82Z"/><path d="M76 26 L84 26 L84 82 Q84 90 76 90"/><path d="M26 26 L66 26" stroke-width="3"/><path d="M26 34 L56 34" stroke-width="1.5"/><path d="M26 46 L66 46" stroke-width="1" opacity="0.5"/><path d="M26 52 L66 52" stroke-width="1" opacity="0.5"/><path d="M26 58 L52 58" stroke-width="1" opacity="0.5"/><path d="M26 66 L46 66 L46 82 L26 82Z" stroke-width="1.5"/><path d="M30 78 L34 72 L38 76 L42 70" stroke-width="1"/><path d="M52 70 L66 70" stroke-width="1" opacity="0.5"/><path d="M52 76 L66 76" stroke-width="1" opacity="0.5"/></svg>`
});

register('armor-plate', {
  name: '装甲板', category: 'objects', color: '#94a3b8',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '"加装甲"概念',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 22 L80 22 Q86 22 86 28 L86 72 Q86 78 80 78 L20 78 Q14 78 14 72 L14 28 Q14 22 20 22Z"/><path d="M30 22 L30 78"/><path d="M50 22 L50 78"/><path d="M70 22 L70 78"/><path d="M14 40 L86 40"/><path d="M14 60 L86 60"/><circle cx="22" cy="31" r="3" fill="currentColor" opacity="0.3"/><circle cx="82" cy="31" r="3" fill="currentColor" opacity="0.3"/><circle cx="22" cy="69" r="3" fill="currentColor" opacity="0.3"/><circle cx="82" cy="69" r="3" fill="currentColor" opacity="0.3"/></svg>`
});

// ── VEHICLES & MECHANICAL ──────────────────────

register('bomber-top', {
  name: '轰炸机（俯视）', category: 'vehicles', color: '#94a3b8',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '核心素材——B-17 风格俯视简笔画',
  svg: `<svg viewBox="0 0 200 160" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 80 Q20 60 60 54 L140 54 Q175 54 185 70 L192 80 L185 90 Q175 106 140 106 L60 106 Q20 100 20 80Z"/><path d="M185 70 Q196 75 196 80 Q196 85 185 90"/><ellipse cx="170" cy="80" rx="14" ry="10" stroke-dasharray="4 3"/><path d="M70 54 L30 10 L22 10 L18 16 L56 60"/><path d="M70 106 L30 150 L22 150 L18 144 L56 100"/><path d="M120 54 L148 20 L154 20 L158 26 L132 58"/><path d="M120 106 L148 140 L154 140 L158 134 L132 102"/><path d="M20 80 L8 68 L4 68 L4 92 L8 92 L20 80"/><circle cx="46" cy="30" r="8" stroke-dasharray="4 3"/><circle cx="46" cy="130" r="8" stroke-dasharray="4 3"/><circle cx="136" cy="32" r="7" stroke-dasharray="4 3"/><circle cx="136" cy="128" r="7" stroke-dasharray="4 3"/></svg>`
});

register('plane-survived', {
  name: '飞回来的飞机', category: 'vehicles', color: '#22c55e',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '机翼有弹孔但能飞回来 ✓',
  svg: `<svg viewBox="0 0 200 160" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 80 Q20 60 60 54 L140 54 Q175 54 185 70 L192 80 L185 90 Q175 106 140 106 L60 106 Q20 100 20 80Z"/><path d="M70 54 L30 10 L22 10 L18 16 L56 60"/><path d="M70 106 L30 150 L22 150 L18 144 L56 100"/><path d="M120 54 L148 20 L154 20 L158 26 L132 58"/><path d="M120 106 L148 140 L154 140 L158 134 L132 102"/><path d="M20 80 L8 68 L4 68 L4 92 L8 92 L20 80"/><circle cx="42" cy="24" r="5" fill="currentColor" opacity="0.5"/><circle cx="54" cy="136" r="4" fill="currentColor" opacity="0.4"/><circle cx="140" cy="28" r="4" fill="currentColor" opacity="0.4"/><circle cx="144" cy="132" r="5" fill="currentColor" opacity="0.5"/><circle cx="90" cy="62" r="3" fill="currentColor" opacity="0.3"/><circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.3"/><path d="M174 12 L182 20 L196 4" stroke-width="3"/></svg>`
});

register('plane-crashed', {
  name: '没回来的飞机', category: 'vehicles', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '引擎/驾驶舱被击中 ✗，虚线表示坠毁',
  svg: `<svg viewBox="0 0 200 160" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 80 Q20 60 60 54 L140 54 Q175 54 185 70 L192 80 L185 90 Q175 106 140 106 L60 106 Q20 100 20 80Z" stroke-dasharray="6 4" opacity="0.5"/><path d="M70 54 L30 10 L22 10 L18 16 L56 60" opacity="0.4"/><path d="M70 106 L30 150 L22 150 L18 144 L56 100" opacity="0.4"/><path d="M120 54 L148 20 L154 20 L158 26 L132 58" opacity="0.4"/><path d="M120 106 L148 140 L154 140 L158 134 L132 102" opacity="0.4"/><path d="M20 80 L8 68 L4 68 L4 92 L8 92 L20 80" opacity="0.4"/><circle cx="46" cy="30" r="14" stroke-width="2.5"/><path d="M38 22 L54 38 M54 22 L38 38" stroke-width="2.5"/><circle cx="46" cy="130" r="14" stroke-width="2.5"/><path d="M38 122 L54 138 M54 122 L38 138" stroke-width="2.5"/><ellipse cx="170" cy="80" rx="16" ry="12" stroke-width="2.5"/><path d="M160 70 L180 90 M180 70 L160 90" stroke-width="2.5"/><path d="M46 12 L48 6 M34 20 L26 16 M58 20 L66 16"/><path d="M170 60 L172 52 M158 66 L150 62 M182 66 L190 62"/></svg>`
});

register('plane-silhouette', {
  name: '飞机剪影', category: 'vehicles', color: '#6366f1',
  tags: ['survivorship-bias'],
  scene: 'scene5',
  desc: '结尾回顾的半透明飞机轮廓',
  svg: `<svg viewBox="0 0 200 160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"><path d="M20 80 Q20 60 60 54 L140 54 Q175 54 185 70 L192 80 L185 90 Q175 106 140 106 L60 106 Q20 100 20 80Z"/><path d="M70 54 L30 10 L22 10 L18 16 L56 60"/><path d="M70 106 L30 150 L22 150 L18 144 L56 100"/><path d="M120 54 L148 20 L154 20 L158 26 L132 58"/><path d="M120 106 L148 140 L154 140 L158 134 L132 102"/><path d="M20 80 L8 68 L4 68 L4 92 L8 92 L20 80"/></svg>`
});

register('engine', {
  name: '引擎', category: 'vehicles', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '致命部位特写——螺旋桨引擎',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="12"/><path d="M50 20 L50 8"/><path d="M50 92 L50 80"/><path d="M20 50 L8 50"/><path d="M92 50 L80 50"/><path d="M50 38 Q44 20 50 8"/><path d="M50 38 Q56 20 50 8"/><path d="M38 50 Q20 44 8 50"/><path d="M38 50 Q20 56 8 50"/><path d="M50 62 Q44 80 50 92"/><path d="M50 62 Q56 80 50 92"/><path d="M62 50 Q80 44 92 50"/><path d="M62 50 Q80 56 92 50"/></svg>`
});

register('cockpit', {
  name: '驾驶舱', category: 'vehicles', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '致命部位特写——仪表盘+操纵杆',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 30 Q25 14 50 14 Q75 14 75 30 L78 78 Q78 90 50 90 Q22 90 22 78Z"/><path d="M30 30 Q30 20 50 20 Q70 20 70 30"/><circle cx="40" cy="50" r="8"/><circle cx="60" cy="50" r="8"/><path d="M40 50 L44 46"/><path d="M60 50 L64 46"/><path d="M50 68 L50 80"/><path d="M44 80 L56 80"/><path d="M34 24 Q40 18 48 22" stroke-width="1.5" opacity="0.4"/></svg>`
});

register('wing', {
  name: '机翼', category: 'vehicles', color: '#22c55e',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '非致命部位——弹孔但无碍',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 50 L90 10 L94 12 L96 18 L20 54 Z"/><path d="M30 42 L70 22"/><path d="M40 46 L55 38"/><circle cx="50" cy="30" r="4" fill="currentColor" opacity="0.3"/><circle cx="70" cy="20" r="3" fill="currentColor" opacity="0.3"/><circle cx="35" cy="40" r="3" fill="currentColor" opacity="0.3"/><path d="M78 44 L84 50 L94 38" stroke-width="2.5"/></svg>`
});

// ── CHARTS & DATA ──────────────────────────────

register('chart-up', {
  name: '上升曲线', category: 'charts', color: '#22c55e',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '增长/成功趋势',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 86 L88 86"/><path d="M12 86 L12 14"/><path d="M18 72 Q35 70 45 58 Q55 44 62 42 Q72 38 82 18"/><path d="M72 18 L82 18 L82 28"/></svg>`
});

register('chart-down', {
  name: '下跌曲线', category: 'charts', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '失败/亏损——倾家荡产',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 86 L88 86"/><path d="M12 86 L12 14"/><path d="M18 24 Q35 28 45 40 Q55 54 62 58 Q72 64 82 82"/><path d="M72 82 L82 82 L82 72"/></svg>`
});

register('chart-bar', {
  name: '柱状图', category: 'charts', color: '#3b82f6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 86 L86 86"/><path d="M14 86 L14 14"/><path d="M26 86 L26 58 L38 58 L38 86"/><path d="M44 86 L44 34 L56 34 L56 86"/><path d="M62 86 L62 48 L74 48 L74 86"/></svg>`
});

register('data-hidden', {
  name: '隐藏的数据', category: 'charts', color: '#8b5cf6',
  tags: ['survivorship-bias'],
  scene: 'scene5',
  desc: '"沉默的数据里"——放大镜搜索虚线图表',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 86 L86 86"/><path d="M24 86 L24 58 L36 58 L36 86" opacity="0.3" stroke-dasharray="4 3"/><path d="M42 86 L42 34 L54 34 L54 86" opacity="0.3" stroke-dasharray="4 3"/><path d="M60 86 L60 48 L72 48 L72 86" opacity="0.3" stroke-dasharray="4 3"/><circle cx="62" cy="30" r="18"/><path d="M74 42 L88 56" stroke-width="3"/><path d="M54 30 L58 24 L62 32 L66 22 L70 30" stroke-width="2"/></svg>`
});

// ── CONCEPTS & SYMBOLS ──────────────────────────

register('eye-open', {
  name: '睁开的眼', category: 'symbols', color: '#f97316',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '"你有没有想过"视觉焦点',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 50 Q30 20 50 20 Q70 20 92 50 Q70 80 50 80 Q30 80 8 50Z"/><circle cx="50" cy="50" r="16"/><circle cx="50" cy="50" r="7" fill="currentColor"/><path d="M55 44 Q58 42 56 40" stroke-width="2"/></svg>`
});

register('eye-closed', {
  name: '闭上的眼', category: 'symbols', color: '#475569',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '"看不见"的隐喻',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 50 Q30 70 50 70 Q70 70 92 50"/><path d="M20 56 L16 66"/><path d="M36 64 L32 76"/><path d="M50 68 L50 80"/><path d="M64 64 L68 76"/><path d="M80 56 L84 66"/></svg>`
});

register('star-burst', {
  name: '明星光环', category: 'symbols', color: '#f472b6',
  tags: ['survivorship-bias'],
  scene: 'scene1',
  desc: '网红/名人/闪耀',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="16"/><path d="M50 10 L50 26"/><path d="M50 74 L50 90"/><path d="M10 50 L26 50"/><path d="M74 50 L90 50"/><path d="M22 22 L33 33"/><path d="M67 67 L78 78"/><path d="M78 22 L67 33"/><path d="M33 67 L22 78"/><path d="M50 2 L52 8 L48 8Z" fill="currentColor"/></svg>`
});

register('iceberg', {
  name: '冰山', category: 'symbols', color: '#3b82f6',
  tags: ['survivorship-bias'],
  scene: 'scene4',
  desc: '"冰山一角"——水上小/水下大',
  svg: `<svg viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 44 L96 44" stroke-dasharray="4 4" opacity="0.5"/><path d="M40 44 L50 18 L62 44" stroke-width="2.5"/><path d="M40 44 L28 64 L22 80 L30 100 L50 112 L72 100 L78 78 L74 60 L62 44" stroke-width="2.5"/><path d="M8 44 Q14 40 20 44 Q26 48 32 44" opacity="0.3" stroke-width="1.5"/><path d="M68 44 Q74 40 80 44 Q86 48 92 44" opacity="0.3" stroke-width="1.5"/><path d="M44 56 L58 56" opacity="0.2"/><path d="M36 72 L66 72" opacity="0.15"/><path d="M38 88 L62 88" opacity="0.1"/></svg>`
});

register('thought-bubble', {
  name: '思考泡泡', category: 'symbols', color: '#c084fc',
  tags: ['survivorship-bias'],
  scene: 'scene5',
  desc: '"问问自己"的视觉',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 42 Q20 14 50 14 Q80 14 80 42 Q80 62 62 66 L56 78 L52 66 Q20 64 20 42Z"/><path d="M42 36 Q42 24 50 24 Q60 24 60 34 Q60 40 50 42 L50 48"/><circle cx="50" cy="56" r="3" fill="currentColor"/></svg>`
});

register('bullet-hole', {
  name: '弹孔', category: 'symbols', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '可复用的弹孔标记',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="12"/><circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6"/><path d="M50 32 L50 24"/><path d="M50 76 L50 68"/><path d="M32 50 L24 50"/><path d="M76 50 L68 50"/><path d="M38 38 L32 32"/><path d="M68 68 L62 62"/><path d="M62 38 L68 32"/><path d="M38 62 L32 68"/></svg>`
});

register('bullet-cluster', {
  name: '弹孔群', category: 'symbols', color: '#ef4444',
  tags: ['survivorship-bias'],
  scene: 'scene2',
  desc: '密集弹孔区域',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="35" cy="38" r="8" fill="currentColor" opacity="0.4"/><circle cx="55" cy="32" r="6" fill="currentColor" opacity="0.3"/><circle cx="48" cy="52" r="9" fill="currentColor" opacity="0.5"/><circle cx="65" cy="48" r="7" fill="currentColor" opacity="0.35"/><circle cx="40" cy="65" r="6" fill="currentColor" opacity="0.3"/><circle cx="58" cy="68" r="8" fill="currentColor" opacity="0.4"/><circle cx="72" cy="62" r="5" fill="currentColor" opacity="0.25"/><path d="M35 38 L42 42" opacity="0.3"/><path d="M55 32 L52 40" opacity="0.3"/><path d="M65 48 L60 55" opacity="0.3"/></svg>`
});

register('explosion', {
  name: '爆炸', category: 'symbols', color: '#f97316',
  tags: ['survivorship-bias', 'base'],
  desc: '飞机坠毁/冲击效果',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 8 L44 30 L26 14 L34 36 L8 34 L30 48 L10 58 L34 56 L22 78 L42 62 L38 90 L50 68 L62 90 L58 62 L78 78 L66 56 L90 58 L70 48 L92 34 L66 36 L74 14 L56 30Z"/></svg>`
});

// ── UI / CONNECTORS ──────────────────────────

register('arrow-right', {
  name: '右箭头', category: 'ui', color: '#fff',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 50 L82 50"/><path d="M62 30 L84 50 L62 70"/></svg>`
});

register('arrow-up', {
  name: '上箭头', category: 'ui', color: '#fff',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 88 L50 18"/><path d="M30 38 L50 16 L70 38"/></svg>`
});

register('arrow-cause', {
  name: '因果箭头', category: 'ui', color: '#fff',
  tags: ['survivorship-bias', 'base'],
  desc: '逻辑推理中的→',
  svg: `<svg viewBox="0 0 100 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 20 L84 20"/><path d="M74 10 L88 20 L74 30"/></svg>`
});

register('logic-arrow', {
  name: '逻辑箭头', category: 'ui', color: '#fff',
  tags: ['survivorship-bias'],
  scene: 'scene3',
  desc: '因果推理连接——带圆点起点',
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 50 L72 50"/><path d="M62 36 L78 50 L62 64"/><circle cx="14" cy="50" r="4" fill="currentColor"/></svg>`
});

register('checkmark', {
  name: '✓ 正确', category: 'ui', color: '#22c55e',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="36"/><path d="M30 52 L44 66 L72 36"/></svg>`
});

register('cross-mark', {
  name: '✗ 错误', category: 'ui', color: '#ef4444',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="36"/><path d="M34 34 L66 66"/><path d="M66 34 L34 66"/></svg>`
});

register('question-mark', {
  name: '问号', category: 'ui', color: '#3b82f6',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 36 Q32 14 50 14 Q70 14 70 34 Q70 48 50 50 L50 60"/><circle cx="50" cy="74" r="4" fill="currentColor"/></svg>`
});

register('exclamation', {
  name: '感叹号', category: 'ui', color: '#f97316',
  tags: ['base'],
  svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M50 12 L50 62"/><circle cx="50" cy="80" r="5" fill="currentColor"/></svg>`
});

register('vs-divider', {
  name: 'VS 分隔', category: 'ui', color: '#f97316',
  tags: ['survivorship-bias', 'base'],
  desc: '对比/分割',
  svg: `<svg viewBox="0 0 60 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 8 L30 38"/><path d="M30 62 L30 92"/><path d="M16 44 L26 54 L16 64" stroke-width="2"/><path d="M44 44 L34 54 L44 64" stroke-width="2"/></svg>`
});

// ═══════════ Export ═══════════
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SketchIconRegistry;
} else if (typeof window !== 'undefined') {
  window.SketchIconRegistry = SketchIconRegistry;
}
</script>
