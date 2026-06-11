export const Schema = z.object({
  terminal: z.object({
    date_location: z.string(),
    scene_mode: z.string(),
    scene_heat: z.coerce.number().min(0).max(100)
  }).prefault({ date_location: '体大男生宿舍', scene_mode: '日常', scene_heat: 0 }),
  jade: z.object({
    energy: z.coerce.number().min(0).max(100),
    evolution: z.string(),
    known_mechanisms: z.array(z.string()),
    ling_she_jiu_qi_unlocked: z.coerce.number().min(0).max(9)
  }).prefault({ energy: 30, evolution: '碧绿', known_mechanisms: ['蛇涎水'], ling_she_jiu_qi_unlocked: 0 }),
  current_slave: z.object({
    id: z.string(),
    name: z.string(),
    file_level: z.coerce.number().min(0).max(5),
    slave_rank: z.string(),
    shame_role: z.string(),
    identity: z.string(),
    body: z.object({
      rating: z.string(),
      cock_cm: z.coerce.number(),
      tags: z.array(z.string())
    }).prefault({ rating: '未验货', cock_cm: 0, tags: [] }),
    obedience: z.coerce.number().min(0).max(100),
    corruption: z.coerce.number().min(0).max(100),
    dependency: z.coerce.number().min(0).max(100),
    arousal: z.coerce.number().min(0).max(100)
  }).or(z.literal('待初始化')).prefault('待初始化'),
  archives: z.object({
    selected_profile_id: z.string(),
    profile_count: z.coerce.number(),
    hidden_targets: z.array(z.string())
  }).prefault({ selected_profile_id: '', profile_count: 0, hidden_targets: [] })
});
export type Schema = z.output<typeof Schema>;
