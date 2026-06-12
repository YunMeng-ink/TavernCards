export const Schema = z.object({
  terminal: z.object({
    date_location: z.string().prefault('体大男生宿舍'),
    scene_mode: z.string().prefault('日常'),
    scene_heat: z.coerce.number().min(0).max(100).prefault(0)
  }).prefault({ date_location: '体大男生宿舍', scene_mode: '日常', scene_heat: 0 }),
  jade: z.object({
      energy: z.coerce.number().min(0).max(100).prefault(30),
      evolution: z.string().prefault('碧绿'),
      known_mechanisms: z.preprocess(
        (v) => {
          if (Array.isArray(v)) return v;
          if (typeof v === 'object' && v !== null) return Object.values(v).filter(x => typeof x === 'string');
          if (typeof v === 'string') return [v];
          return [];
        },
        z.array(z.string())
      ).prefault([]),
      ling_she_jiu_qi_unlocked: z.preprocess(
        v => v ?? 0,
        z.coerce.number().min(0).max(9)
      ).prefault(0)
  }).prefault({ energy: 30, evolution: '碧绿', known_mechanisms: ['蛇涎水'], ling_she_jiu_qi_unlocked: 0 }),
  current_slave: z.object({
    id: z.string().prefault(''),
    name: z.string().prefault(''),
    file_level: z.coerce.number().min(0).max(5).prefault(0),
    slave_rank: z.string().prefault(''),
    shame_role: z.string().prefault(''),
    identity: z.string().prefault(''),
    body_profile: z.object({
      rating: z.string().prefault('未验货'),
      cock_cm: z.coerce.number().prefault(0),
      body_tags: z.array(z.string()).prefault([]),
      sensitive_points: z.array(z.string()).prefault([]),
      special_mods: z.array(z.string()).prefault([])
    }).prefault({ rating: '未验货', cock_cm: 0, body_tags: [], sensitive_points: [], special_mods: [] }),
    psych: z.object({
      obedience: z.coerce.number().min(0).max(100).prefault(0),
      corruption: z.coerce.number().min(0).max(100).prefault(0),
      resistance: z.coerce.number().min(0).max(100).prefault(100),
      dependency: z.coerce.number().min(0).max(100).prefault(0)
    }).prefault({ obedience: 0, corruption: 0, resistance: 100, dependency: 0 }),
    sex_state: z.object({
      arousal: z.coerce.number().min(0).max(100).prefault(0),
      chastity: z.string().prefault('无'),
      anus_state: z.string().prefault('未使用'),
      semen_state: z.string().prefault('空')
    }).prefault({ arousal: 0, chastity: '无', anus_state: '未使用', semen_state: '空' })
  }).or(z.literal('待初始化')).prefault('待初始化'),
  archives: z.object({
      selected_profile_id: z.string().prefault(''),
      profile_count: z.coerce.number().prefault(0),
      hidden_targets: z.array(z.string()).prefault([])
    }).prefault({ selected_profile_id: '', profile_count: 0, hidden_targets: [] })
});
export type Schema = z.output<typeof Schema>;
