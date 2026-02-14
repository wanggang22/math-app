/* ============================================================
   数学冒险 Math Adventure - 主逻辑
   ============================================================ */

// ===== 国际化 =====
const I18N = {
  zh: {
    back: '返回', prev: '上一步', next: '下一步',
    learn_title: '🍄 学习模式', practice_title: '🪙 练习模式',
    challenge_title: '🏰 闯关模式',
    select_range: '选择范围', select_type: '选择类型',
    addition: '加法', subtraction: '减法', mixed: '混合',
    start_practice: '毛毛出发！', retry: '毛毛再来！',
    review_wrong: '错题回顾', wrong_list: '错题：', go_home: '回主页',
    back_to_map: '回到地图',
    correct: '🪙 毛毛太棒了！吃到金币！',
    wrong: '毛毛算错了，再试一次！',
    encourage: ['毛毛加油！', '毛毛再想想！', '蘑菇给毛毛力量！', '毛毛你能行的！', '毛毛别着急，慢慢算！', '毛毛快要答对了！'],
    perfect: '🌟 毛毛太厉害了！满分通关！', great: '🍄 毛毛超级棒！', good: '🪙 毛毛做得不错！',
    try_harder: '🔥 毛毛继续冒险！',
    score_text: '毛毛的金币：{0} / {1}',
    level_complete: '🏰 毛毛通关啦！',
    level_fail: '毛毛再接再厉！',
    boss_warning: '🔥 库巴来了！毛毛小心！🔥',
    time_up: '⏰ 时间到！毛毛下次更快！',
    level_locked: '🔒 毛毛先通过上一关吧',
    highest_score: '毛毛的金币最高：{0}',
    challenge_progress: '毛毛的进度：{0}/10',
    welcome: '毛毛，欢迎回来！',
    welcome_first: '毛毛，准备好冒险了吗？',
    learn_start: '毛毛来学习新本领！',
    practice_start: '毛毛来练习吧！',
    challenge_start: '毛毛来闯关！',
    // 教学方法名称
    learn_method_bonds: '10的好朋友', learn_method_finger: '数手指',
    learn_method_doubles: '双双好朋友', learn_method_make_ten: '凑十法',
    learn_method_break_ten: '破十法', learn_method_split: '拆分法',
    learn_method_mental: '巧算法',
    // 教学介绍
    learn_intro_bonds: '毛毛，我们来认识10的好朋友！哪两个数加起来等于10？',
    learn_intro_finger: '毛毛，我们来用手指数数！',
    learn_intro_doubles: '毛毛，我们来学双双好朋友！两个一样的数相加！',
    learn_intro_make_ten: '毛毛，我们来学凑十法！凑成10，算得快！',
    learn_intro_break_ten: '毛毛，我们来学破十法！从10里拿走，算得快！',
    learn_intro_split: '毛毛，我们来学拆分法！先算整十，再算零头！',
    learn_intro_mental: '毛毛，我们来学巧算法！把数拆开算更快！',
    // 10的好朋友
    learn_bonds_song: '1和9，2和8，3和7，4和6，5和5，凑成10顶呱呱！',
    learn_bonds_pair: '{0}和{1}是好朋友，{0}+{1}=10！',
    learn_bonds_question: '{0}的好朋友是谁？{0}+?=10',
    learn_bonds_show: '毛毛看！{0}个金币和{1}个蘑菇，一共10个！',
    learn_bonds_great: '太棒了！{0}+{1}=10！',
    // 数手指
    learn_finger_show: '毛毛看，先伸出{0}根手指！',
    learn_finger_count_on: '从{0}开始，接着数{1}个！',
    learn_finger_count_back: '从{0}开始，往回数{1}个！',
    learn_finger_result: '数一数，一共{0}根手指！所以{1}{2}{3}={0}！',
    learn_finger_remain: '还剩{0}根手指！所以{1}{2}{3}={0}！',
    learn_finger_your_turn: '毛毛来点手指数一数！',
    // 双双好朋友
    learn_doubles_show: '毛毛看：{0}+{0}，两组一样多！',
    learn_doubles_result: '{0}+{0}={1}！两个{0}等于{1}！',
    learn_doubles_near: '{0}+{1}，先算{0}+{0}={2}，再加1等于{3}！',
    learn_doubles_near_intro: '{0}+{1}，接近双双好朋友！',
    learn_doubles_question: '{0}+{0}等于几？',
    learn_doubles_near_question: '{0}+{1}，先算{0}+{0}=?',
    // 凑十法/破十法
    learn_make_ten_show: '毛毛看：{0}个金币 加 {1}个蘑菇',
    learn_make_ten_need: '{0}还需要{1}才能凑成10！',
    learn_make_ten_split: '把{0}拆成{1}和{2}！',
    learn_make_ten_move: '{1}个蘑菇飞过去，凑成10！',
    learn_make_ten_done: '10加{0}等于{1}！',
    learn_break_ten_show: '毛毛看：{0}，拆成10和{1}',
    learn_break_ten_not_enough: '{0}不够减{1}！从10里借！',
    learn_break_ten_take: '从10里拿走{0}，剩{1}！',
    learn_break_ten_done: '{0}加{1}等于{2}！',
    learn_make_ten_question: '{0}还差几凑成10？',
    learn_break_ten_question: '10减{0}等于几？',
    // 拆分法 (50以内)
    learn_split_start: '{0}{1}{2}，我们把两个数都拆开！',
    learn_split_show: '{0}拆成{1}和{2}，{3}拆成{4}和{5}！',
    learn_split_tens: '十位：{0}{1}{2}={3}！',
    learn_split_ones: '个位：{0}{1}{2}={3}！',
    learn_split_combine: '合起来：{0}+{1}={2}！',
    learn_split_done: '所以{0}{1}{2}={3}！',
    learn_split_question: '十位{0}{1}{2}=?',
    learn_split_borrow: '个位{0}-{1}不够减！从十位借一个10！',
    learn_split_borrow_tens: '十位：{0}-{1}={2}，再借走10，剩{3}！',
    learn_split_borrow_ones: '个位：借来10，{0}变成{1}，{1}-{2}={3}！',
    // 巧算法 (100以内)
    learn_mental_start: '{0}{1}{2}，把{2}拆成{3}和{4}！',
    learn_mental_step1: '先算{0}{1}{2}={3}！',
    learn_mental_step2: '再算{0}{1}{2}={3}！',
    learn_mental_done: '所以{0}{1}{2}={3}！',
    learn_mental_question: '先算整十：{0}{1}{2}=?',
    // 通用
    learn_tap_continue: '点一下继续',
    learn_your_turn: '毛毛来试试！',
    learn_levels: [
      '💛 10的好朋友', '🍄 10以内加法', '🍄 10以内减法', '🌟 双双好朋友',
      '⭐ 20以内加法', '⭐ 20以内减法', '🔥 50以内加减法', '👑 100以内加减法'
    ],
    home_greetings: ['毛毛今天也要加油哦！💪', '毛毛最棒了！🌟', '毛毛准备好了吗？🍄', '毛毛来挑战吧！🏰', '毛毛是数学小天才！👑'],
    challenge_names: [
      'W1-1 草原', 'W1-2 地下', 'W2-1 沙漠', 'W2-2 绿洲',
      '🔥 W3 库巴城堡', 'W4-1 冰雪', 'W4-2 海洋', 'W5-1 天空',
      'W5-2 星空', '🔥 W6 最终城堡'
    ]
  },
  en: {
    back: 'Back', prev: 'Prev', next: 'Next',
    learn_title: '🍄 Learn', practice_title: '🪙 Practice',
    challenge_title: '🏰 Challenge',
    select_range: 'Select Range', select_type: 'Select Type',
    addition: 'Add', subtraction: 'Sub', mixed: 'Mix',
    start_practice: "Maomao, let's go!", retry: 'Maomao try again!',
    review_wrong: 'Review', wrong_list: 'Wrong:', go_home: 'Home',
    back_to_map: 'Map',
    correct: "🪙 Awesome Maomao! Got a coin!",
    wrong: "Oops Maomao! Try again!",
    encourage: ["Go Maomao go!", "Maomao think again!", "Power up Maomao!", "You got this Maomao!", "Take your time Maomao!", "Maomao almost got it!"],
    perfect: "🌟 Maomao is amazing! Perfect score!", great: '🍄 Super Maomao!', good: '🪙 Good job Maomao!',
    try_harder: '🔥 Keep going Maomao!',
    score_text: "Maomao's Coins: {0} / {1}",
    level_complete: '🏰 Maomao cleared it!',
    level_fail: 'Try again Maomao!',
    boss_warning: '🔥 Bowser is coming! Watch out Maomao! 🔥',
    time_up: "⏰ Time's up! Faster next time Maomao!",
    level_locked: '🔒 Clear previous level first Maomao',
    highest_score: "Maomao's Top Coins: {0}",
    challenge_progress: "Maomao's World: {0}/10",
    welcome: 'Welcome back Maomao!',
    welcome_first: 'Maomao, ready for an adventure?',
    learn_start: "Maomao, let's learn!",
    practice_start: "Maomao, let's practice!",
    challenge_start: "Maomao, let's go!",
    learn_method_bonds: 'Friends of 10', learn_method_finger: 'Fingers',
    learn_method_doubles: 'Doubles', learn_method_make_ten: 'Make 10',
    learn_method_break_ten: 'Break 10', learn_method_split: 'Split',
    learn_method_mental: 'Smart Math',
    learn_intro_bonds: "Maomao, let's meet Friends of 10! Which two numbers add up to 10?",
    learn_intro_finger: "Maomao, let's count with our fingers!",
    learn_intro_doubles: "Maomao, let's learn Doubles! Two same numbers added together!",
    learn_intro_make_ten: "Maomao, let's learn Make Ten! Make 10 first, calculate fast!",
    learn_intro_break_ten: "Maomao, let's learn Break Ten! Take from 10, super easy!",
    learn_intro_split: "Maomao, let's learn Split! Do the tens first, then the ones!",
    learn_intro_mental: "Maomao, let's learn Smart Math! Split numbers to make it easy!",
    learn_bonds_song: '1 and 9, 2 and 8, 3 and 7, 4 and 6, 5 and 5, they all make 10!',
    learn_bonds_pair: '{0} and {1} are friends! {0}+{1}=10!',
    learn_bonds_question: "Who is {0}'s friend? {0}+?=10",
    learn_bonds_show: 'Look! {0} coins and {1} mushrooms, 10 in total!',
    learn_bonds_great: 'Awesome! {0}+{1}=10!',
    learn_finger_show: 'Look Maomao, hold up {0} fingers!',
    learn_finger_count_on: 'Start from {0}, count {1} more!',
    learn_finger_count_back: 'Start from {0}, count back {1}!',
    learn_finger_result: 'Count them! {0} fingers! So {1}{2}{3}={0}!',
    learn_finger_remain: '{0} fingers left! So {1}{2}{3}={0}!',
    learn_finger_your_turn: 'Maomao, tap the fingers to count!',
    learn_make_ten_show: 'Look: {0} coins plus {1} mushrooms',
    learn_make_ten_need: '{0} needs {1} more to make 10!',
    learn_make_ten_split: 'Split {0} into {1} and {2}!',
    learn_make_ten_move: '{1} mushrooms fly over, now we have 10!',
    learn_make_ten_done: '10 plus {0} equals {1}!',
    learn_break_ten_show: 'Look: {0} splits into 10 and {1}',
    learn_break_ten_not_enough: "{0} can't subtract {1}! Borrow from 10!",
    learn_break_ten_take: 'Take {0} from 10, left {1}!',
    learn_break_ten_done: '{0} plus {1} equals {2}!',
    learn_make_ten_question: 'How many more does {0} need to make 10?',
    learn_break_ten_question: '10 minus {0} equals?',
    learn_doubles_show: 'Look: {0}+{0}, two equal groups!',
    learn_doubles_result: '{0}+{0}={1}! Two {0}s make {1}!',
    learn_doubles_near: '{0}+{1}, first {0}+{0}={2}, plus 1 more equals {3}!',
    learn_doubles_near_intro: '{0}+{1}, almost doubles!',
    learn_doubles_question: '{0}+{0} equals?',
    learn_doubles_near_question: '{0}+{1}, first {0}+{0}=?',
    learn_split_start: '{0}{1}{2}, split both numbers!',
    learn_split_show: '{0} is {1} and {2}, {3} is {4} and {5}!',
    learn_split_tens: 'Tens: {0}{1}{2}={3}!',
    learn_split_ones: 'Ones: {0}{1}{2}={3}!',
    learn_split_combine: 'Together: {0}+{1}={2}!',
    learn_split_done: 'So {0}{1}{2}={3}!',
    learn_split_question: 'Tens: {0}{1}{2}=?',
    learn_split_borrow: 'Ones {0}-{1} not enough! Borrow 10 from tens!',
    learn_split_borrow_tens: 'Tens: {0}-{1}={2}, borrow 10, left {3}!',
    learn_split_borrow_ones: 'Ones: borrow 10, {0} becomes {1}, {1}-{2}={3}!',
    learn_mental_start: '{0}{1}{2}, split {2} into {3} and {4}!',
    learn_mental_step1: 'First: {0}{1}{2}={3}!',
    learn_mental_step2: 'Then: {0}{1}{2}={3}!',
    learn_mental_done: 'So {0}{1}{2}={3}!',
    learn_mental_question: 'Tens first: {0}{1}{2}=?',
    learn_tap_continue: 'Tap!',
    learn_your_turn: "Maomao's turn!",
    learn_levels: [
      '💛 Friends of 10', '🍄 Add ≤10', '🍄 Sub ≤10', '🌟 Doubles',
      '⭐ Add ≤20', '⭐ Sub ≤20', '🔥 Add & Sub ≤50', '👑 Add & Sub ≤100'
    ],
    home_greetings: ["Let's go Maomao! 💪", 'Maomao is the best! 🌟', 'Ready Maomao? 🍄', "Maomao's adventure! 🏰", 'Math genius Maomao! 👑'],
    challenge_names: [
      'W1-1 Plains', 'W1-2 Underground', 'W2-1 Desert', 'W2-2 Oasis',
      '🔥 W3 Castle', 'W4-1 Ice', 'W4-2 Ocean', 'W5-1 Sky',
      'W5-2 Stars', '🔥 W6 Final Castle'
    ]
  }
};

// ===== 全局共享 AudioContext (iOS 兼容) =====
// iOS/Safari 要求: 1) AudioContext 必须在用户触摸的同步调用栈中 resume
// 2) 多个 AudioContext 可能被静音，所以全局共用一个
const SharedAudio = (() => {
  let ctx = null;

  function get() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // 每次获取都尝试 resume
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  // 在用户触摸事件中立即创建并 resume AudioContext
  // iOS 必须在用户手势的同步调用栈里执行
  function handleUserGesture() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    // 播放一个静音buffer来彻底解锁 (iOS 的额外保险)
    try {
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    } catch(e) {}
  }

  // 监听所有可能的用户交互事件
  ['touchstart', 'touchend', 'click', 'mousedown'].forEach(evt => {
    document.addEventListener(evt, handleUserGesture, { passive: true });
  });

  return { get };
})();

// ===== 音效系统 =====
const Sound = (() => {
  function play(freq, dur, type = 'square', vol = 0.15) {
    try {
      const c = SharedAudio.get();
      if (c.state === 'suspended') return; // 未解锁就不播放
      const now = c.currentTime;
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(vol, now);
      // iOS 兼容：用 linearRampToValueAtTime 代替 exponentialRamp（iOS 对极小值有bug）
      g.gain.linearRampToValueAtTime(0.0, now + dur);
      o.connect(g);
      g.connect(c.destination);
      o.start(now);
      o.stop(now + dur + 0.05); // 多留一点时间确保不会被截断
    } catch(e) {}
  }
  return {
    click: () => play(700, 0.06, 'square', 0.2),
    // 马里奥金币音效
    correct: () => { play(988, 0.12); setTimeout(() => play(1319, 0.2), 100); },
    // 撞砖块失败音
    wrong: () => { play(180, 0.15, 'sawtooth', 0.2); setTimeout(() => play(140, 0.2, 'sawtooth', 0.15), 150); },
    // 马里奥通关音 (经典升调)
    levelUp: () => { [262,330,392,523,659,784,1047,1319].forEach((f,i) => setTimeout(() => play(f, 0.12, 'square', 0.2), i*70)); },
    // 库巴出场低音
    boss: () => { play(110, 0.4, 'sawtooth', 0.25); setTimeout(() => play(82, 0.5, 'sawtooth', 0.2), 300); setTimeout(() => play(110, 0.3, 'sawtooth', 0.25), 600); },
    // 倒计时
    tick: () => play(880, 0.04, 'square', 0.12),
    // 1UP音效 (用于完美通关)
    oneUp: () => { [330,392,523,659,784,1047].forEach((f,i) => setTimeout(() => play(f, 0.1, 'square', 0.2), i*50)); }
  };
})();

// ===== 背景音乐系统 =====
const Music = (() => {
  let playing = false, stopFlag = false;
  let currentTrack = 0;
  let gainNode = null;
  let scheduledNotes = [];

  // 音符: [频率, 时值(拍)]  0=休止
  const tracks = [
    { // 马里奥风格主旋律
      name: 'Overworld',
      bpm: 200,
      notes: [
        [659,1],[659,1],[0,1],[659,1],[0,1],[523,1],[659,1],[0,1],
        [784,2],[0,2],[392,2],[0,2],
        [523,1],[0,1],[0,1],[392,1],[0,1],[0,1],[330,1],[0,1],
        [0,1],[440,1],[0,1],[494,1],[0,1],[466,1],[440,1],[0,1],
        [392,1],[659,1],[784,1],[880,1],[0,1],[698,1],[784,1],[0,1],
        [659,1],[0,1],[523,1],[587,1],[494,1],[0,2],
        [523,1],[0,1],[0,1],[392,1],[0,1],[0,1],[330,1],[0,1],
        [0,1],[440,1],[0,1],[494,1],[0,1],[466,1],[440,1],[0,1],
        [392,1],[659,1],[784,1],[880,1],[0,1],[698,1],[784,1],[0,1],
        [659,1],[0,1],[523,1],[587,1],[494,1],[0,2]
      ]
    },
    { // 地下世界风格
      name: 'Underground',
      bpm: 170,
      notes: [
        [175,1],[262,1],[330,1],[349,1],[0,1],[330,1],[262,1],[175,1],
        [0,2],[175,1],[262,1],[330,1],[349,1],[392,1],[349,1],[330,1],[262,1],
        [0,2],[233,1],[349,1],[440,1],[466,1],[0,1],[440,1],[349,1],[233,1],
        [0,2],[233,1],[349,1],[440,1],[466,1],[523,1],[466,1],[440,1],[349,1],
        [0,2],
        [175,1],[175,1],[0,1],[175,1],[0,1],[175,1],[262,1],[0,1],
        [175,1],[0,1],[175,1],[233,1],[0,1],[208,1],[175,1],[0,2],
        [175,1],[175,1],[0,1],[175,1],[0,1],[175,1],[262,1],[330,1],
        [175,1],[0,3]
      ]
    },
    { // 水中世界风格 (华尔兹)
      name: 'Underwater',
      bpm: 160,
      notes: [
        [523,2],[659,1],[784,2],[880,1],[784,2],[659,1],
        [523,3],[0,1],[523,2],[587,1],[659,2],[587,1],
        [523,2],[494,1],[440,3],[0,1],
        [440,2],[523,1],[659,2],[784,1],[659,2],[523,1],
        [440,3],[0,1],[392,2],[440,1],[523,2],[440,1],
        [392,2],[349,1],[330,3],[0,1],
        [523,2],[659,1],[784,2],[880,1],[1047,2],[880,1],
        [784,2],[659,1],[523,3],[0,1],
        [587,2],[659,1],[698,2],[659,1],[587,2],[523,1],
        [494,3],[0,1],[523,3],[0,3]
      ]
    },
    { // 城堡风格
      name: 'Castle',
      bpm: 180,
      notes: [
        [175,1],[233,1],[294,1],[175,1],[233,1],[294,1],[175,1],[233,1],
        [165,1],[220,1],[277,1],[165,1],[220,1],[277,1],[165,1],[220,1],
        [156,1],[208,1],[262,1],[156,1],[208,1],[262,1],[156,1],[208,1],
        [147,1],[196,1],[247,1],[147,1],[196,1],[247,1],[147,1],[196,1],
        [175,2],[0,1],[349,1],[330,1],[311,1],[294,1],[262,1],
        [233,2],[0,1],[466,1],[440,1],[415,1],[392,1],[349,1],
        [330,1],[294,1],[330,1],[175,1],[0,1],[175,1],[0,1],[175,1],
        [0,4]
      ]
    },
    { // 星星无敌风格 (欢快)
      name: 'Star Power',
      bpm: 240,
      notes: [
        [784,1],[784,1],[784,1],[0,1],[659,1],[784,1],[0,1],[880,1],
        [0,1],[784,1],[0,1],[659,1],[523,1],[0,1],[587,1],[0,1],
        [659,1],[659,1],[659,1],[0,1],[523,1],[659,1],[0,1],[784,1],
        [0,1],[659,1],[0,1],[523,1],[440,1],[0,1],[494,1],[0,1],
        [784,1],[784,1],[784,1],[0,1],[659,1],[784,1],[0,1],[880,1],
        [0,1],[784,1],[0,1],[659,1],[1047,2],[0,1],[988,1],
        [880,1],[784,1],[659,1],[784,1],[659,1],[523,1],[587,1],[0,2]
      ]
    }
  ];

  function playTrack(trackIdx) {
    const c = SharedAudio.get();
    stopAllNotes();

    const track = tracks[trackIdx % tracks.length];
    const beatLen = 60 / track.bpm;

    // 每次确保 gainNode 连接到当前 context
    if (!gainNode || gainNode.context !== c) {
      gainNode = c.createGain();
      gainNode.gain.value = 0.15;
      gainNode.connect(c.destination);
    }

    let time = c.currentTime + 0.05;
    scheduledNotes = [];

    function scheduleLoop() {
      if (stopFlag) return;
      const loopStart = time;

      for (const [freq, beats] of track.notes) {
        if (stopFlag) return;
        const dur = beats * beatLen;
        if (freq > 0) {
          // 主旋律 square wave
          const o1 = c.createOscillator();
          const g1 = c.createGain();
          o1.type = 'square';
          o1.frequency.setValueAtTime(freq, time);
          g1.gain.setValueAtTime(0.15, time);
          g1.gain.linearRampToValueAtTime(0.0, time + dur * 0.95);
          o1.connect(g1).connect(gainNode);
          o1.start(time);
          o1.stop(time + dur + 0.05);
          scheduledNotes.push(o1);

          // 低八度伴奏 triangle wave
          const o2 = c.createOscillator();
          const g2 = c.createGain();
          o2.type = 'triangle';
          o2.frequency.setValueAtTime(freq / 2, time);
          g2.gain.setValueAtTime(0.08, time);
          g2.gain.linearRampToValueAtTime(0.0, time + dur * 0.9);
          o2.connect(g2).connect(gainNode);
          o2.start(time);
          o2.stop(time + dur + 0.05);
          scheduledNotes.push(o2);
        }
        time += dur;
      }

      // 循环播放
      const loopDur = time - loopStart;
      if (!stopFlag) {
        setTimeout(() => {
          if (!stopFlag && playing) scheduleLoop();
        }, loopDur * 1000 - 200);
      }
    }

    scheduleLoop();
  }

  function stopAllNotes() {
    const c = SharedAudio.get();
    scheduledNotes.forEach(o => {
      try { o.stop(c.currentTime); } catch(e) {}
    });
    scheduledNotes = [];
  }

  function toggle() {
    if (playing) {
      stop();
    } else {
      start();
    }
    updateBtn();
  }

  function start() {
    stopFlag = false;
    playing = true;
    playTrack(currentTrack);
    updateBtn();
  }

  function stop() {
    stopFlag = true;
    playing = false;
    stopAllNotes();
    updateBtn();
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    if (playing) {
      stopFlag = true;
      stopAllNotes();
      setTimeout(() => {
        stopFlag = false;
        playing = true;
        playTrack(currentTrack);
        updateBtn();
      }, 100);
    }
    updateBtn();
  }

  function updateBtn() {
    const btn = document.getElementById('btn-music');
    const label = document.getElementById('music-label');
    if (btn) {
      btn.classList.toggle('music-on', playing);
    }
    if (label) {
      label.textContent = playing ? tracks[currentTrack].name : 'OFF';
    }
  }

  return { toggle, nextTrack, stop, get isPlaying() { return playing; }, get trackName() { return tracks[currentTrack].name; } };
})();

// ===== 语音系统 (TTS) =====
const Speech = (() => {
  let speaking = false;

  function getVoice(lang) {
    const voices = speechSynthesis.getVoices();
    if (lang === 'zh') {
      return voices.find(v => v.lang.startsWith('zh-CN'))
        || voices.find(v => v.lang.startsWith('zh'))
        || voices[0];
    }
    return voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('male'))
      || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0];
  }

  function speak(text, rate = 0.9) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const lang = (typeof App !== 'undefined' && App.lang) || 'en';
    const u = new SpeechSynthesisUtterance(text);
    u.voice = getVoice(lang);
    u.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    u.rate = lang === 'zh' ? rate * 0.9 : rate;
    u.pitch = lang === 'zh' ? 1.1 : 1.3;
    u.volume = 1;
    speaking = true;
    u.onend = () => { speaking = false; document.querySelectorAll('.btn-speak').forEach(b => b.classList.remove('speaking')); };
    u.onerror = () => { speaking = false; };
    document.querySelectorAll('.btn-speak').forEach(b => b.classList.add('speaking'));
    speechSynthesis.speak(u);
  }

  function speakNumber(n) {
    speak(String(n), 1.0);
  }

  function speakEquation(a, op, b) {
    const lang = (typeof App !== 'undefined' && App.lang) || 'en';
    if (lang === 'zh') {
      const opW = op === '+' ? '加' : '减';
      speak(`${a} ${opW} ${b} 等于几？`, 0.85);
    } else {
      speak(`${a} ${op === '+' ? 'plus' : 'minus'} ${b} equals ?`, 0.85);
    }
  }

  function speakEquationWithAnswer(a, op, b, answer) {
    const lang = (typeof App !== 'undefined' && App.lang) || 'en';
    if (lang === 'zh') {
      const opW = op === '+' ? '加' : '减';
      speak(`${a} ${opW} ${b} 等于 ${answer}`, 0.85);
    } else {
      speak(`${a} ${op === '+' ? 'plus' : 'minus'} ${b} equals ${answer}`, 0.85);
    }
  }

  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  return { speak, speakNumber, speakEquation, speakEquationWithAnswer, get isSpeaking() { return speaking; } };
})();

// ===== 特效系统 =====
const FX = (() => {
  const canvas = document.getElementById('fx-canvas');
  const fxCtx = canvas.getContext('2d');
  let particles = [];
  let animating = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    if (particles.length === 0) { animating = false; return; }
    animating = true;
    fxCtx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.life -= 0.02;
      if (p.life <= 0) return false;
      fxCtx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
      const s = p.size * p.life;
      fxCtx.fillRect(Math.floor(p.x), Math.floor(p.y), Math.ceil(s), Math.ceil(s));
      return true;
    });
    requestAnimationFrame(animate);
  }

  return {
    // 金币爆发特效
    firework(x, y) {
      const colors = ['#f8d830', '#ffe060', '#f0b828', '#fcfcfc', '#e03030', '#20a020'];
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 / 30) * i;
        const speed = 2 + Math.random() * 4;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: 5 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0.6 + Math.random() * 0.4
        });
      }
      if (!animating) animate();
    },
    // 通关撒花特效
    confetti() {
      const colors = ['#e03030', '#f8d830', '#20a020', '#2038ec', '#fcfcfc', '#f0b828'];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 2 + 1,
          size: 5 + Math.random() * 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0.8 + Math.random() * 0.5
        });
      }
      if (!animating) animate();
    }
  };
})();

// ===== 存储 =====
const Store = {
  _data: null,
  _load() {
    if (this._data) return this._data;
    try {
      this._data = JSON.parse(localStorage.getItem('mathAdventure') || '{}');
    } catch { this._data = {}; }
    return this._data;
  },
  _save() { localStorage.setItem('mathAdventure', JSON.stringify(this._data)); },
  get(key, def) { const d = this._load(); return d[key] !== undefined ? d[key] : def; },
  set(key, val) { this._load(); this._data[key] = val; this._save(); }
};

// ===== 出题引擎 =====
function generateQuestion(maxNum, type) {
  let a, b, op;
  if (type === 'add') op = '+';
  else if (type === 'sub') op = '-';
  else op = Math.random() < 0.5 ? '+' : '-';

  if (op === '+') {
    a = Math.floor(Math.random() * maxNum) + 1;
    b = Math.floor(Math.random() * (maxNum - a)) + 1;
    if (a + b > maxNum) b = maxNum - a;
    if (b < 0) b = 0;
  } else {
    a = Math.floor(Math.random() * (maxNum - 1)) + 2;
    b = Math.floor(Math.random() * a) + 1;
    if (b > a) b = a;
  }
  return { a, b, op, answer: op === '+' ? a + b : a - b };
}

// ===== 创建数字键盘 =====
function createNumpad(containerId, onSubmit, equationId) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  let val = '';
  // 答案直接显示在等式的 .blank span 里
  const eqId = equationId || containerId.replace('numpad', 'equation');
  function getBlank() {
    const eqEl = document.getElementById(eqId);
    return eqEl ? eqEl.querySelector('.blank') : null;
  }

  function updateDisplay() {
    const blank = getBlank();
    if (blank) blank.textContent = val || '?';
  }

  for (let i = 1; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.className = 'numpad-btn';
    btn.textContent = i;
    btn.onclick = () => { Sound.click(); Speech.speakNumber(i); if (val.length < 3) { val += i; updateDisplay(); } };
    el.appendChild(btn);
  }
  // 清除
  const btnClear = document.createElement('button');
  btnClear.className = 'numpad-btn btn-clear';
  btnClear.textContent = 'C';
  btnClear.onclick = () => { Sound.click(); val = ''; updateDisplay(); };
  el.appendChild(btnClear);
  // 0
  const btn0 = document.createElement('button');
  btn0.className = 'numpad-btn';
  btn0.textContent = '0';
  btn0.onclick = () => { Sound.click(); Speech.speakNumber(0); if (val.length < 3 && (val.length > 0 || val === '')) { val += '0'; updateDisplay(); } };
  el.appendChild(btn0);
  // 删除
  const btnDel = document.createElement('button');
  btnDel.className = 'numpad-btn btn-del';
  btnDel.textContent = '⌫';
  btnDel.onclick = () => { Sound.click(); val = val.slice(0, -1); updateDisplay(); };
  el.appendChild(btnDel);
  // 确认 (占满一行)
  const btnOk = document.createElement('button');
  btnOk.className = 'numpad-btn btn-ok';
  btnOk.textContent = 'OK ✓';
  btnOk.style.gridColumn = '1 / -1';
  btnOk.onclick = () => {
    if (val === '') return;
    Sound.click();
    onSubmit(parseInt(val, 10));
    val = '';
  };
  el.appendChild(btnOk);
  updateDisplay();

  return {
    clear() { val = ''; updateDisplay(); },
    disable() { el.querySelectorAll('button').forEach(b => b.disabled = true); },
    enable() { el.querySelectorAll('button').forEach(b => b.disabled = false); }
  };
}

// ===== 全局 App =====
const App = {
  lang: Store.get('lang', ''),
  currentPage: 'lang-select',

  init() {
    this.createStars();
    // 如果已经选过语言，直接进主页
    if (this.lang) {
      this.goTo('home', true);
      this.updateLang();
      this.updateHomeStats();
      setTimeout(() => this.toast(this.t('welcome')), 500);
    }
    // 否则停在语言选择页
  },

  selectLang(lang) {
    Sound.click();
    this.lang = lang;
    Store.set('lang', lang);
    this.updateLang();
    this.updateHomeStats();
    this.goTo('home', true);
    // 第一次选语言，显示欢迎
    setTimeout(() => this.toast(this.t('welcome_first')), 400);
  },

  t(key) {
    const dict = I18N[this.lang] || I18N['zh'];
    return dict[key] || key;
  },

  toggleLang() {
    Sound.click();
    this.lang = this.lang === 'zh' ? 'en' : 'zh';
    Store.set('lang', this.lang);
    this.updateLang();
  },

  updateLang() {
    if (!this.lang) return;
    const dict = I18N[this.lang] || I18N['zh'];
    document.getElementById('lang-label').textContent = this.lang === 'zh' ? 'EN / 中' : '中 / EN';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    // Update buttons text based on lang
    const btnZh = document.querySelectorAll('.btn-zh');
    const btnEn = document.querySelectorAll('.btn-en');
    if (this.lang === 'en') {
      btnZh.forEach(e => e.style.display = 'none');
      btnEn.forEach(e => e.style.display = 'inline');
    } else {
      btnZh.forEach(e => e.style.display = 'inline');
      btnEn.forEach(e => e.style.display = 'inline');
    }
    // Re-render active page content
    if (this.currentPage === 'learn') Learn.renderLevels();
    if (this.currentPage === 'challenge') Challenge.renderMap();
    this.updateHomeStats();
  },

  goTo(page, silent) {
    if (!silent) Sound.click();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    this.currentPage = page;

    if (page === 'home') this.updateHomeStats();
    if (page === 'learn') { Learn.init(); this.toast(this.t('learn_start')); }
    if (page === 'practice') { Practice.init(); this.toast(this.t('practice_start')); }
    if (page === 'challenge') { Challenge.init(); this.toast(this.t('challenge_start')); }
  },

  updateHomeStats() {
    const el = document.getElementById('home-stats');
    const highScore = Store.get('highScore', 0);
    const maxLevel = Store.get('challengeLevel', 0);
    el.innerHTML = `
      <div>🪙 ${this.t('highest_score').replace('{0}', highScore)}</div>
      <div>🏰 ${this.t('challenge_progress').replace('{0}', maxLevel)}</div>
    `;
    // 毛毛的个性化问候
    const greetEl = document.getElementById('home-greeting');
    if (greetEl) {
      const greetings = this.t('home_greetings');
      greetEl.textContent = greetings[Math.floor(Math.random() * greetings.length)];
    }
  },

  createStars() {
    // 创建马里奥风格云朵
    const container = document.getElementById('bg-stars');
    for (let i = 0; i < 8; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'pixel-star';
      cloud.style.left = (Math.random() * 90) + '%';
      cloud.style.top = (5 + Math.random() * 35) + '%';
      cloud.style.animationDelay = (Math.random() * -20) + 's';
      cloud.style.animationDuration = (18 + Math.random() * 15) + 's';
      const scale = 0.6 + Math.random() * 0.8;
      cloud.style.transform = `scale(${scale})`;
      cloud.style.opacity = 0.5 + Math.random() * 0.3;
      container.appendChild(cloud);
    }
    // 创建马里奥背景装饰
    this.createBgDecorations();
  },

  createBgDecorations() {
    const el = document.getElementById('mario-bg');
    if (!el) return;
    // 左边水管
    const pipeL = document.createElement('div');
    pipeL.className = 'bg-pipe pipe-left';
    el.appendChild(pipeL);
    // 右边短水管
    const pipeR = document.createElement('div');
    pipeR.className = 'bg-pipe pipe-right pipe-short';
    el.appendChild(pipeR);
    // 随机散布问号方块、砖块、金币、蘑菇、星星
    const items = [
      { cls: 'bg-qblock', count: 3 },
      { cls: 'bg-brick', count: 4 },
      { cls: 'bg-coin', count: 5 },
      { cls: 'bg-mushroom', count: 2 },
      { cls: 'bg-star-item', count: 2 }
    ];
    items.forEach(({ cls, count }) => {
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div');
        d.className = cls;
        // 随机分布在两侧边缘区域，避开中间内容
        const side = Math.random() < 0.5;
        d.style.left = side ? (Math.random() * 15) + '%' : (85 + Math.random() * 12) + '%';
        d.style.top = (10 + Math.random() * 65) + '%';
        d.style.opacity = 0.25 + Math.random() * 0.2;
        d.style.animationDelay = (Math.random() * -5) + 's';
        el.appendChild(d);
      }
    });
  },

  toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.add('hidden'), 2000);
  }
};

// ===== 学习模式 =====
const Learn = (() => {
  // 优化后的级别定义（基于人教版+新加坡数学+CPA框架研究）
  const LEVELS = [
    { max: 10, op: '+', method: 'bonds',
      steps: ['intro','guided','guided','guided','interactive','interactive','interactive','quiz_solo','quiz_solo'] },
    { max: 10, op: '+', method: 'finger',
      steps: ['intro','guided','guided','interactive','quiz_assisted','quiz_assisted','quiz_solo','quiz_solo'] },
    { max: 10, op: '-', method: 'finger',
      steps: ['intro','guided','guided','interactive','quiz_assisted','quiz_assisted','quiz_solo','quiz_solo'] },
    { max: 10, op: '+', method: 'doubles',
      steps: ['intro','guided','guided','guided','interactive','interactive','quiz_solo','quiz_solo'] },
    { max: 20, op: '+', method: 'make_ten',
      steps: ['intro','guided','guided','interactive','interactive','quiz_assisted','quiz_assisted','quiz_solo','quiz_solo'] },
    { max: 20, op: '-', method: 'break_ten',
      steps: ['intro','guided','guided','interactive','interactive','quiz_assisted','quiz_assisted','quiz_solo','quiz_solo'] },
    { max: 50, op: 'mix', method: 'split',
      steps: ['intro','guided','guided','guided','interactive','interactive','quiz_assisted','quiz_solo','quiz_solo'] },
    { max: 100, op: 'mix', method: 'mental',
      steps: ['intro','guided','guided','guided','interactive','interactive','quiz_assisted','quiz_solo','quiz_solo'] }
  ];

  let currentLevel = -1, step = 0, subStep = 0;
  let curQ = null, quizQ = null, numpad = null;
  let interactiveCallback = null;
  let currentSpeechText = '';

  // --- 帮助函数 ---
  function t(key) { return App.t(key); }
  function isZh() { return App.lang === 'zh'; }
  function sp(zh, en) { return isZh() ? zh : en; }
  function fmt(key, ...args) {
    let s = t(key);
    args.forEach((v, i) => {
      while (s.indexOf('{' + i + '}') !== -1) s = s.replace('{' + i + '}', v);
    });
    return s;
  }
  function showEl(id, show) {
    const el = document.getElementById(id);
    if (el) { if (show) el.classList.remove('hidden'); else el.classList.add('hidden'); }
  }
  // --- 出题器 ---
  const BONDS_PAIRS = [[1,9],[2,8],[3,7],[4,6],[5,5],[9,1],[8,2],[7,3],[6,4]];
  function genBondsQ(difficulty) {
    const pair = difficulty < BONDS_PAIRS.length ? BONDS_PAIRS[difficulty] : BONDS_PAIRS[Math.floor(Math.random() * BONDS_PAIRS.length)];
    return { a: pair[0], b: pair[1], op: '+', answer: 10 };
  }
  function genFingerQ(op, difficulty) {
    let a, b;
    if (op === '+') {
      if (difficulty === 0) { a = 2; b = 3; }
      else if (difficulty === 1) { a = 4; b = 5; }
      else { a = Math.floor(Math.random() * 5) + 2; b = Math.floor(Math.random() * (10 - a)) + 1; }
    } else {
      if (difficulty === 0) { a = 5; b = 2; }
      else if (difficulty === 1) { a = 8; b = 3; }
      else { a = Math.floor(Math.random() * 6) + 4; b = Math.floor(Math.random() * (a - 1)) + 1; }
    }
    return { a, b, op, answer: op === '+' ? a + b : a - b };
  }
  const DOUBLES_SEQ = [[1,1],[2,2],[3,3],[4,4],[5,5],[3,4],[4,5],[5,6],[6,7]];
  function genDoublesQ(difficulty) {
    const d = difficulty < DOUBLES_SEQ.length ? DOUBLES_SEQ[difficulty] : DOUBLES_SEQ[Math.floor(Math.random() * DOUBLES_SEQ.length)];
    return { a: d[0], b: d[1], op: '+', answer: d[0] + d[1], isNear: d[0] !== d[1] };
  }
  function genMakeTenQ(difficulty) {
    const combos = [[8,5],[9,4],[7,6],[6,5],[8,7],[9,3],[7,8],[6,7],[9,6],[8,4]];
    if (difficulty < 2) return (() => { const [a,b] = combos[difficulty]; return { a, b, op: '+', answer: a + b }; })();
    const [a, b] = combos[Math.floor(Math.random() * combos.length)];
    return { a, b, op: '+', answer: a + b };
  }
  function genBreakTenQ(difficulty) {
    const combos = [[15,7],[13,5],[16,8],[14,6],[12,5],[17,9],[11,4],[18,9],[13,8],[15,6]];
    if (difficulty < 2) return (() => { const [a,b] = combos[difficulty]; return { a, b, op: '-', answer: a - b }; })();
    const [a, b] = combos[Math.floor(Math.random() * combos.length)];
    return { a, b, op: '-', answer: a - b };
  }
  function genSplitQ(difficulty) {
    // 50以内加减法，十位+十位，个位+个位
    // 加法：不进位（个位之和≤9）
    // 减法：前3题不借位，后面混合借位/不借位
    // 不借位减法 e.g. 47-23  借位减法 e.g. 35-18
    const addCombos = [[23,14],[12,21],[32,15]];
    const subNoBorrow = [[37,14],[45,23]];  // 不借位
    const subBorrow = [[35,18],[42,27],[33,16]]; // 借位
    if (difficulty < 3) {
      const [a,b] = addCombos[difficulty]; return { a, b, op: '+', answer: a + b };
    } else if (difficulty < 5) {
      const [a,b] = subNoBorrow[difficulty - 3]; return { a, b, op: '-', answer: a - b };
    } else if (difficulty < 7) {
      const [a,b] = subBorrow[difficulty - 5]; return { a, b, op: '-', answer: a - b };
    }
    // 随机生成
    const isAdd = Math.random() < 0.4;
    if (isAdd) {
      // 不进位加法
      const aTens = (Math.floor(Math.random() * 3) + 1) * 10;
      const bTens = (Math.floor(Math.random() * 2) + 1) * 10;
      if (aTens + bTens > 40) return { a: 23, b: 14, op: '+', answer: 37 };
      const aOnes = Math.floor(Math.random() * 5) + 1;
      const bOnes = Math.floor(Math.random() * Math.min(5, 9 - aOnes)) + 1;
      return { a: aTens + aOnes, b: bTens + bOnes, op: '+', answer: aTens + bTens + aOnes + bOnes };
    } else {
      // 减法：50%不借位，50%借位
      const doBorrow = Math.random() < 0.5;
      if (doBorrow) {
        // 借位减法：aOnes < bOnes，且 aTens - bTens >= 10 (借完十位还≥0)
        const aTens = (Math.floor(Math.random() * 2) + 2) * 10; // 20,30
        const bTens = (Math.floor(Math.random() * (aTens / 10 - 1)) + 1) * 10;
        if (aTens - bTens < 10) return { a: 35, b: 18, op: '-', answer: 17 };
        const aOnes = Math.floor(Math.random() * 4) + 2; // 2-5
        const bOnes = Math.floor(Math.random() * (9 - aOnes)) + aOnes + 1; // aOnes+1 .. 9
        const a = aTens + aOnes, b = bTens + bOnes;
        return { a, b, op: '-', answer: a - b };
      } else {
        // 不借位减法
        const aTens = (Math.floor(Math.random() * 3) + 2) * 10;
        const bTens = (Math.floor(Math.random() * (aTens / 10 - 1)) + 1) * 10;
        const aOnes = Math.floor(Math.random() * 5) + 4;
        const bOnes = Math.floor(Math.random() * aOnes) + 1;
        return { a: aTens + aOnes, b: bTens + bOnes, op: '-', answer: (aTens - bTens) + (aOnes - bOnes) };
      }
    }
  }
  function genMentalQ(difficulty) {
    // 100以内加减法，b必须≥10（有整十部分）
    const addCombos = [[45,32],[56,28],[67,25],[38,47],[54,39]];
    const subCombos = [[73,28],[85,37],[62,35],[91,46],[78,49]];
    if (difficulty < 3) {
      const [a,b] = addCombos[difficulty]; return { a, b, op: '+', answer: a + b };
    } else if (difficulty < 5) {
      const [a,b] = subCombos[difficulty - 3]; return { a, b, op: '-', answer: a - b };
    }
    const isAdd = Math.random() < 0.5;
    if (isAdd) {
      const a = Math.floor(Math.random() * 30) + 20; // 20-49
      let b = Math.floor(Math.random() * 30) + 15; // 15-44
      if (a + b > 100) b = 100 - a;
      if (b < 10) b = 10; // 确保b≥10
      return { a, b, op: '+', answer: a + b };
    } else {
      const a = Math.floor(Math.random() * 30) + 50; // 50-79
      let b = Math.floor(Math.random() * 20) + 15; // 15-34
      if (b >= a) b = a - 15;
      if (b < 10) b = 10; // 确保b≥10
      return { a, b, op: '-', answer: a - b };
    }
  }

  function genQuestion(lv, difficulty) {
    switch (lv.method) {
      case 'bonds': return genBondsQ(difficulty);
      case 'finger': return genFingerQ(lv.op, difficulty);
      case 'doubles': return genDoublesQ(difficulty);
      case 'make_ten': return genMakeTenQ(difficulty);
      case 'break_ten': return genBreakTenQ(difficulty);
      case 'split': return genSplitQ(difficulty);
      case 'mental': return genMentalQ(difficulty);
    }
  }

  // --- 初始化 ---
  function init() {
    currentLevel = -1;
    step = 0; subStep = 0;
    renderLevels();
    document.getElementById('learn-levels').classList.remove('hidden');
    document.getElementById('learn-content').classList.add('hidden');
  }

  function renderLevels() {
    const el = document.getElementById('learn-levels');
    const completed = Store.get('learnCompleted', []);
    el.innerHTML = LEVELS.map((lv, i) => {
      const done = completed.includes(i);
      const methodKey = 'learn_method_' + lv.method;
      return `<div class="level-card ${done ? 'completed' : ''}" onclick="Learn.selectLevel(${i})">
        <span class="level-num">${i + 1}</span>
        <div>${t('learn_levels')[i]}</div>
        <div class="level-desc">${done ? '✅' : t(methodKey)}</div>
      </div>`;
    }).join('');
  }

  function selectLevel(i) {
    Sound.click();
    currentLevel = i;
    step = 0; subStep = 0;
    document.getElementById('learn-levels').classList.add('hidden');
    document.getElementById('learn-content').classList.remove('hidden');
    render();
  }

  // --- 进度圆点 ---
  function renderDots() {
    const lv = LEVELS[currentLevel];
    const total = lv.steps.length;
    const dotsEl = document.getElementById('learn-progress-dots');
    if (!dotsEl) return;
    dotsEl.innerHTML = lv.steps.map((_, i) =>
      `<span class="pdot${i < step ? ' done' : ''}${i === step ? ' active' : ''}"></span>`
    ).join('');
  }

  // --- 主渲染 ---
  function render() {
    const lv = LEVELS[currentLevel];
    const stepType = lv.steps[step];
    const totalSteps = lv.steps.length;

    document.getElementById('learn-level-title').textContent = t('learn_levels')[currentLevel];
    document.getElementById('learn-step').textContent = `${step + 1} / ${totalSteps}`;
    const badge = document.getElementById('learn-method-badge');
    if (badge) badge.textContent = t('learn_method_' + lv.method);

    // 隐藏所有区域
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'none'; eq.style.display = 'none'; exp.style.display = 'none';
    showEl('learn-tap-area', false);
    showEl('learn-choices', false);
    showEl('learn-quiz', false);
    vis.innerHTML = ''; eq.innerHTML = ''; exp.textContent = '';
    document.getElementById('learn-choices').innerHTML = '';
    interactiveCallback = null;
    subStep = 0;

    renderDots();

    // 导航按钮
    document.getElementById('learn-prev').style.visibility = step > 0 ? 'visible' : 'hidden';
    document.getElementById('learn-next').style.visibility = 'hidden';

    if (stepType === 'intro') {
      renderIntro(lv);
    } else if (stepType === 'guided') {
      const guidedIdx = lv.steps.slice(0, step).filter(s => s === 'guided').length;
      curQ = genQuestion(lv, guidedIdx);
      renderGuided(lv, curQ);
    } else if (stepType === 'interactive') {
      const intIdx = lv.steps.slice(0, step).filter(s => s === 'interactive').length;
      curQ = genQuestion(lv, 3 + intIdx);
      renderInteractive(lv, curQ);
    } else if (stepType === 'quiz_assisted') {
      quizQ = genQuestion(lv, 5);
      renderQuizAssisted(lv, quizQ);
    } else if (stepType === 'quiz_solo') {
      if (lv.method === 'bonds') {
        quizQ = genBondsQ(Math.floor(Math.random() * BONDS_PAIRS.length));
      } else if (lv.op === 'mix') {
        const type = Math.random() < 0.5 ? 'add' : 'sub';
        quizQ = generateQuestion(lv.max, type);
      } else {
        const type = lv.op === '+' ? 'add' : 'sub';
        quizQ = generateQuestion(lv.max, type);
      }
      renderQuizSolo(quizQ);
    }
  }

  // ========== INTRO ==========
  function renderIntro(lv) {
    const vis = document.getElementById('learn-visual');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; exp.style.display = 'block';

    const introKey = 'learn_intro_' + lv.method;
    exp.textContent = t(introKey);

    const icons = { bonds: '💛🔟', finger: '🖐️✋', doubles: '🌟🌟', make_ten: '🪙➡️🔟', break_ten: '🔟➡️🪙', split: '✂️🔢', mental: '🧠💡' };
    vis.innerHTML = `<div class="intro-icon">${icons[lv.method] || '📖'}</div>
      <div class="intro-title">${t('learn_method_' + lv.method)}</div>`;

    currentSpeechText = t(introKey);
    setTimeout(() => Speech.speak(currentSpeechText, 0.85), 300);
    showTapContinue();
  }

  // ========== GUIDED (引导教学) ==========
  function renderGuided(lv, q) {
    switch (lv.method) {
      case 'bonds': renderBondsGuided(q); break;
      case 'finger': renderFingerGuided(q); break;
      case 'doubles': renderDoublesGuided(q); break;
      case 'make_ten': renderMakeTenGuided(q); break;
      case 'break_ten': renderBreakTenGuided(q); break;
      case 'split': renderSplitGuided(q); break;
      case 'mental': renderMentalGuided(q); break;
    }
  }

  // --- 10的好朋友引导 ---
  function renderBondsGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const subSteps = [
      { action: 'show', text: fmt('learn_bonds_show', q.a, q.b) },
      { action: 'pair', text: fmt('learn_bonds_pair', q.a, q.b) },
      { action: 'done', text: fmt('learn_bonds_great', q.a, q.b) }
    ];
    let si = 0;
    function renderSub() {
      const s = subSteps[si];
      exp.textContent = s.text; currentSpeechText = s.text;
      Speech.speak(s.text, 0.85);
      if (s.action === 'show') {
        vis.innerHTML = buildBondsVisual(q.a, q.b, false);
      } else if (s.action === 'pair') {
        vis.innerHTML = buildBondsVisual(q.a, q.b, true);
      } else if (s.action === 'done') {
        vis.innerHTML = buildBondsVisual(q.a, q.b, true);
        const blank = document.querySelector('#learn-equation .blank');
        if (blank) { blank.textContent = 10; blank.style.color = 'var(--success)'; }
        Sound.correct();
      }
      if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
      else { showTapContinue(); }
    }
    renderSub();
  }

  function buildBondsVisual(a, b, showBond) {
    let html = '<div class="bonds-visual">';
    html += '<div class="bonds-group"><div class="bonds-label">' + a + '</div><div class="bonds-dots">';
    for (let i = 0; i < a; i++) html += '<div class="pixel-block blue"></div>';
    html += '</div></div>';
    if (showBond) {
      html += '<div class="bonds-heart">💛</div>';
    } else {
      html += '<span class="visual-separator">+</span>';
    }
    html += '<div class="bonds-group"><div class="bonds-label">' + b + '</div><div class="bonds-dots">';
    for (let i = 0; i < b; i++) html += '<div class="pixel-block red"></div>';
    html += '</div></div>';
    html += '<div class="bonds-total">' + (showBond ? '= 🔟' : '') + '</div>';
    html += '</div>';
    return html;
  }

  // --- 数手指引导 ---
  function renderFingerGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${q.op}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    // 创建手指HTML
    const total = q.a;
    vis.innerHTML = buildFingerHTML(total, 0);
    exp.textContent = fmt('learn_finger_show', q.a);
    currentSpeechText = fmt('learn_finger_show', q.a);
    setTimeout(() => Speech.speak(currentSpeechText, 0.85), 300);

    // 子步骤：先显示a根手指，点击后逐个数b
    subStep = 0;
    const subSteps = buildFingerSubSteps(q);
    animateFingers(vis, q, subSteps, 0);
  }

  function buildFingerHTML(showCount, highlightFrom) {
    let html = '<div class="finger-area">';
    // 左手(1-5) 和 右手(6-10)
    for (let hand = 0; hand < 2; hand++) {
      html += `<div class="hand"><div class="fingers-row">`;
      for (let f = 0; f < 5; f++) {
        const idx = hand * 5 + f;
        const up = idx < showCount;
        const hl = idx >= highlightFrom && idx < showCount;
        html += `<div class="finger${up ? ' up' : ''}${hl ? ' counting' : ''}" data-idx="${idx}"></div>`;
      }
      html += `</div><div class="palm"></div></div>`;
      if (hand === 0) html += `<div class="visual-separator" style="font-size:18px; margin:0 4px;">${''}</div>`;
    }
    html += '</div>';
    return html;
  }

  function buildFingerSubSteps(q) {
    const steps = [];
    if (q.op === '+') {
      steps.push({ show: q.a, hl: 0, text: fmt('learn_finger_show', q.a) });
      for (let i = 1; i <= q.b; i++) {
        const cnt = q.a + i;
        steps.push({ show: cnt, hl: q.a, text: `${cnt}!` });
      }
      steps.push({ show: q.answer, hl: q.a,
        text: fmt('learn_finger_result', q.answer, q.a, q.op, q.b), final: true });
    } else {
      steps.push({ show: q.a, hl: 0, text: fmt('learn_finger_show', q.a) });
      for (let i = 1; i <= q.b; i++) {
        const cnt = q.a - i;
        steps.push({ show: cnt, hl: 0, text: `${cnt}!` });
      }
      steps.push({ show: q.answer, hl: 0,
        text: fmt('learn_finger_remain', q.answer, q.a, q.op, q.b), final: true });
    }
    return steps;
  }

  function animateFingers(vis, q, steps, idx) {
    if (idx >= steps.length) return;
    const s = steps[idx];
    vis.innerHTML = buildFingerHTML(s.show, s.hl);
    document.getElementById('learn-explanation').textContent = s.text;
    currentSpeechText = s.text;
    Speech.speak(s.text, s.final ? 0.85 : 1.0);
    if (s.final) {
      // 显示答案
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      Sound.correct();
      showTapContinue();
    } else {
      // 自动播放下一子步骤（或显示点击继续）
      if (idx === 0) {
        showTapContinue(() => animateFingers(vis, q, steps, idx + 1));
      } else {
        setTimeout(() => animateFingers(vis, q, steps, idx + 1), 600);
      }
    }
  }

  // --- 双双好朋友引导 ---
  function renderDoublesGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    if (!q.isNear) {
      const subSteps = [
        { action: 'show', text: fmt('learn_doubles_show', q.a) },
        { action: 'done', text: fmt('learn_doubles_result', q.a, q.answer) }
      ];
      let si = 0;
      function renderSub() {
        const s = subSteps[si];
        exp.textContent = s.text; currentSpeechText = s.text;
        Speech.speak(s.text, 0.85);
        if (s.action === 'show') {
          vis.innerHTML = buildDoublesVisual(q.a, q.a, false);
        } else {
          vis.innerHTML = buildDoublesVisual(q.a, q.a, true);
          const blank = document.querySelector('#learn-equation .blank');
          if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
          Sound.correct();
        }
        if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
        else { showTapContinue(); }
      }
      renderSub();
    } else {
      // near-doubles: a+b where b=a+1
      const smaller = Math.min(q.a, q.b);
      const dblResult = smaller * 2;
      const subSteps = [
        { action: 'show', text: fmt('learn_doubles_near_intro', q.a, q.b) },
        { action: 'double', text: fmt('learn_doubles_near', q.a, q.b, dblResult, q.answer) },
        { action: 'done', text: fmt('learn_doubles_near', q.a, q.b, dblResult, q.answer) }
      ];
      let si = 0;
      function renderSub() {
        const s = subSteps[si];
        exp.textContent = s.text; currentSpeechText = s.text;
        Speech.speak(s.text, 0.85);
        if (s.action === 'show') {
          vis.innerHTML = buildDoublesVisual(q.a, q.b, false);
        } else if (s.action === 'double') {
          vis.innerHTML = buildDoublesVisual(smaller, smaller, true);
          eq.innerHTML = `<span>${smaller}</span> <span class="op">+</span> <span>${smaller}</span> <span class="eq">=</span> <span class="highlight-gold">${dblResult}</span> <span class="op">+</span> <span>1</span> <span class="eq">=</span> <span class="blank">?</span>`;
        } else {
          vis.innerHTML = buildDoublesVisual(q.a, q.b, true);
          const blank = document.querySelector('#learn-equation .blank');
          if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
          Sound.correct();
        }
        if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
        else { showTapContinue(); }
      }
      renderSub();
    }
  }

  function buildDoublesVisual(a, b, showResult) {
    let html = '<div class="doubles-visual">';
    html += '<div class="doubles-row"><div class="doubles-label">' + a + '</div>';
    for (let i = 0; i < a; i++) html += '<div class="pixel-block blue"></div>';
    html += '</div>';
    html += '<div class="doubles-row"><div class="doubles-label">' + b + '</div>';
    for (let i = 0; i < b; i++) html += '<div class="pixel-block red"></div>';
    html += '</div>';
    if (showResult) {
      html += '<div class="doubles-result">= ' + (a + b) + '</div>';
    }
    html += '</div>';
    return html;
  }

  // --- 凑十法引导 ---
  function renderMakeTenGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const need = 10 - q.a; // a还差need凑成10
    const rest = q.b - need; // b拆成need + rest

    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    // 子步骤序列
    const subSteps = [
      { action: 'show', text: fmt('learn_make_ten_show', q.a, q.b) },
      { action: 'need', text: fmt('learn_make_ten_need', q.a, need) },
      { action: 'split', text: fmt('learn_make_ten_split', q.b, need, rest) },
      { action: 'move', text: fmt('learn_make_ten_move', q.a, need) },
      { action: 'done', text: fmt('learn_make_ten_done', rest, q.answer) }
    ];

    let si = 0;
    function renderSub() {
      const s = subSteps[si];
      exp.textContent = s.text;
      currentSpeechText = s.text;
      Speech.speak(s.text, 0.85);

      if (s.action === 'show') {
        // 显示a个金币 + b个蘑菇
        vis.innerHTML = buildCoinStage(q.a, q.b, 'blue', 'red');
      } else if (s.action === 'need') {
        // 高亮a的空位
        vis.innerHTML = buildCoinStage(q.a, q.b, 'blue', 'red', need);
      } else if (s.action === 'split') {
        // 显示b拆分：need个高亮 + rest个
        vis.innerHTML = buildCoinStageSplit(q.a, need, rest);
      } else if (s.action === 'move') {
        // 动画：need个飞到a组
        vis.innerHTML = buildCoinStage(10, rest, 'green', 'red');
        eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span class="highlight-gold">${need}</span> <span class="op">+</span> <span>${rest}</span> <span class="eq">=</span> <span class="blank">?</span>`;
      } else if (s.action === 'done') {
        vis.innerHTML = buildCoinStage(10, rest, 'green', 'red');
        eq.innerHTML = `<span class="highlight-green">10</span> <span class="op">+</span> <span>${rest}</span> <span class="eq">=</span> <span class="highlight-green">${q.answer}</span>`;
        Sound.correct();
      }

      if (si < subSteps.length - 1) {
        showTapContinue(() => { si++; renderSub(); });
      } else {
        showTapContinue(); // 进入下一步
      }
    }
    renderSub();
  }

  function buildCoinStage(countA, countB, clsA, clsB, highlight) {
    let html = '<div class="coin-stage">';
    html += '<div class="coin-group">';
    for (let i = 0; i < countA; i++) {
      html += `<div class="pixel-block ${clsA}" style="animation-delay:${i * 0.04}s"></div>`;
    }
    if (highlight) html += `<div class="coin-need">+${highlight}</div>`;
    html += '</div><span class="visual-separator">+</span><div class="coin-group">';
    for (let i = 0; i < countB; i++) {
      html += `<div class="pixel-block ${clsB}" style="animation-delay:${(countA + i) * 0.04}s"></div>`;
    }
    html += '</div></div>';
    return html;
  }
  function buildCoinStageSplit(countA, needCount, restCount) {
    let html = '<div class="coin-stage">';
    html += '<div class="coin-group">';
    for (let i = 0; i < countA; i++) html += `<div class="pixel-block blue"></div>`;
    html += '</div><span class="visual-separator">+</span><div class="coin-group">';
    for (let i = 0; i < needCount; i++) html += `<div class="pixel-block gold"></div>`;
    html += '</div><span class="visual-separator">+</span><div class="coin-group">';
    for (let i = 0; i < restCount; i++) html += `<div class="pixel-block red"></div>`;
    html += '</div></div>';
    return html;
  }

  // --- 破十法引导 ---
  function renderBreakTenGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const ones = q.a - 10; // a拆成10和ones
    const remain = 10 - q.b; // 10-b=remain

    eq.innerHTML = `<span>${q.a}</span> <span class="op">-</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const subSteps = [
      { action: 'show', text: fmt('learn_break_ten_show', q.a, ones) },
      { action: 'not_enough', text: fmt('learn_break_ten_not_enough', ones, q.b) },
      { action: 'take', text: fmt('learn_break_ten_take', q.b, remain) },
      { action: 'done', text: fmt('learn_break_ten_done', remain, ones, q.answer) }
    ];

    let si = 0;
    function renderSub() {
      const s = subSteps[si];
      exp.textContent = s.text; currentSpeechText = s.text;
      Speech.speak(s.text, 0.85);

      if (s.action === 'show') {
        vis.innerHTML = '<div class="coin-stage"><div class="coin-group coin-ten">' +
          Array(10).fill('<div class="pixel-block blue"></div>').join('') +
          '</div><span class="visual-separator">+</span><div class="coin-group">' +
          Array(ones).fill('<div class="pixel-block gold"></div>').join('') + '</div></div>';
      } else if (s.action === 'not_enough') {
        vis.innerHTML = '<div class="coin-stage"><div class="coin-group coin-ten">' +
          Array(10).fill('<div class="pixel-block blue"></div>').join('') +
          '</div><span class="visual-separator">+</span><div class="coin-group">' +
          Array(ones).fill('<div class="pixel-block gold"></div>').join('') + '</div></div>';
        eq.innerHTML = `<span>${q.a}</span> <span class="op">-</span> <span>${q.b}</span> <span class="eq">=</span> <span>10 - ${q.b} + ${ones}</span>`;
      } else if (s.action === 'take') {
        vis.innerHTML = '<div class="coin-stage"><div class="coin-group">' +
          Array(remain).fill('<div class="pixel-block green"></div>').join('') +
          Array(q.b).fill('<div class="pixel-block red crossed"></div>').join('') +
          '</div><span class="visual-separator">+</span><div class="coin-group">' +
          Array(ones).fill('<div class="pixel-block gold"></div>').join('') + '</div></div>';
        eq.innerHTML = `<span class="highlight-green">${remain}</span> <span class="op">+</span> <span>${ones}</span> <span class="eq">=</span> <span class="blank">?</span>`;
      } else if (s.action === 'done') {
        vis.innerHTML = '<div class="coin-stage"><div class="coin-group">' +
          Array(q.answer).fill('<div class="pixel-block green"></div>').join('') + '</div></div>';
        eq.innerHTML = `<span>${q.a}</span> <span class="op">-</span> <span>${q.b}</span> <span class="eq">=</span> <span class="highlight-green">${q.answer}</span>`;
        Sound.correct();
      }
      if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
      else { showTapContinue(); }
    }
    renderSub();
  }

  // --- 拆分法引导 (50以内) ---
  function renderSplitGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const aTens = Math.floor(q.a / 10) * 10;
    const aOnes = q.a % 10;
    const bTens = Math.floor(q.b / 10) * 10;
    const bOnes = q.b % 10;
    const opSign = q.op;
    const needBorrow = q.op === '-' && aOnes < bOnes;

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const subSteps = [
      { action: 'start', text: fmt('learn_split_start', q.a, opSign, q.b) },
      { action: 'show', text: fmt('learn_split_show', q.a, aTens, aOnes, q.b, bTens, bOnes) },
    ];

    if (needBorrow) {
      // 借位流程: 35-18 → 个位5<8不够减 → 十位30-10=20,借10剩10 → 个位15-8=7 → 10+7=17
      const tensAfterBorrow = aTens - bTens - 10; // 30-10-10=10
      const onesWithBorrow = aOnes + 10;           // 5+10=15
      const onesResult = onesWithBorrow - bOnes;   // 15-8=7
      subSteps.push({ action: 'borrow', text: fmt('learn_split_borrow', aOnes, bOnes) });
      subSteps.push({ action: 'borrow_tens', text: fmt('learn_split_borrow_tens', aTens, bTens, aTens - bTens, tensAfterBorrow), data: { tensAfterBorrow } });
      subSteps.push({ action: 'borrow_ones', text: fmt('learn_split_borrow_ones', aOnes, onesWithBorrow, bOnes, onesResult), data: { onesWithBorrow, onesResult } });
      subSteps.push({ action: 'combine', text: fmt('learn_split_combine', tensAfterBorrow, onesResult, q.answer), data: { tensAfterBorrow, onesResult } });
    } else {
      // 不借位流程
      const tensResult = q.op === '+' ? aTens + bTens : aTens - bTens;
      const onesResult = q.op === '+' ? aOnes + bOnes : aOnes - bOnes;
      subSteps.push({ action: 'tens', text: fmt('learn_split_tens', aTens, opSign, bTens, tensResult), data: { tensResult, onesResult } });
      subSteps.push({ action: 'ones', text: fmt('learn_split_ones', aOnes, opSign, bOnes, onesResult), data: { tensResult, onesResult } });
      subSteps.push({ action: 'combine', text: fmt('learn_split_combine', tensResult, onesResult, q.answer), data: { tensResult: tensResult, onesResult } });
    }
    subSteps.push({ action: 'done', text: fmt('learn_split_done', q.a, opSign, q.b, q.answer) });

    let si = 0;
    function renderSub() {
      const s = subSteps[si];
      exp.textContent = s.text; currentSpeechText = s.text;
      Speech.speak(s.text, 0.85);
      vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, s, needBorrow);
      if (s.action === 'show') {
        eq.innerHTML = `<span class="highlight-gold">${aTens}</span><span>+${aOnes}</span> <span class="op">${opSign}</span> <span class="highlight-gold">${bTens}</span><span>+${bOnes}</span> <span class="eq">=</span> <span class="blank">?</span>`;
      } else if (s.action === 'borrow') {
        eq.innerHTML = `<span style="opacity:0.4">${aTens}-${bTens}=?</span>  <span class="highlight-red">${aOnes}-${bOnes}=? ⚠️</span>`;
      } else if (s.action === 'tens' || s.action === 'borrow_tens') {
        const tr = s.data.tensAfterBorrow !== undefined ? s.data.tensAfterBorrow : s.data.tensResult;
        eq.innerHTML = `<span class="highlight-gold">🔟 ${tr}</span>  <span style="opacity:0.4">🔢 ?</span>`;
      } else if (s.action === 'ones' || s.action === 'borrow_ones') {
        const or = s.data.onesResult;
        eq.innerHTML = `<span style="opacity:0.4">🔟</span>  <span class="highlight-green">🔢 ${or}</span>`;
      } else if (s.action === 'combine') {
        const tr = s.data.tensResult !== undefined ? s.data.tensResult : s.data.tensAfterBorrow;
        eq.innerHTML = `<span class="highlight-gold">${tr}</span> <span class="op">+</span> <span class="highlight-green">${s.data.onesResult}</span> <span class="eq">=</span> <span class="highlight-green">${q.answer}</span>`;
      } else if (s.action === 'done') {
        eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="highlight-green">${q.answer}</span>`;
        Sound.correct();
      }
      if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
      else { showTapContinue(); }
    }
    renderSub();
  }

  function buildSplitVisual(q, aTens, aOnes, bTens, bOnes, step, needBorrow) {
    const action = step.action;
    let html = '<div class="split-visual">';
    // 两个数的拆分树
    html += '<div class="split-both">';
    html += buildOneTree(q.a, aTens, aOnes, action !== 'start');
    html += `<div class="split-op">${q.op}</div>`;
    html += buildOneTree(q.b, bTens, bOnes, action !== 'start');
    html += '</div>';

    // 计算步骤
    const showSteps = action !== 'start' && action !== 'show';
    if (showSteps) {
      html += '<div class="split-steps">';
      if (needBorrow) {
        // 借位流程
        if (action === 'borrow') {
          html += `<div class="split-step active" style="border-color:var(--danger)">⚠️ ${aOnes} - ${bOnes} 不够减！借10！</div>`;
        } else if (action === 'borrow_tens') {
          html += `<div class="split-step done">⚠️ ${aOnes} < ${bOnes}，借10</div>`;
          html += `<div class="split-step active">🔟 ${aTens}-${bTens}=${aTens - bTens}，借走10，剩<b>${step.data.tensAfterBorrow}</b></div>`;
        } else if (action === 'borrow_ones') {
          html += `<div class="split-step done">🔟 十位剩 ${step.data.tensAfterBorrow !== undefined ? step.data.tensAfterBorrow : ''}</div>`;
          html += `<div class="split-step active">🔢 ${aOnes}+10=${aOnes + 10}，${aOnes + 10}-${bOnes}=<b>${step.data.onesResult}</b></div>`;
        } else {
          const tr = step.data.tensAfterBorrow !== undefined ? step.data.tensAfterBorrow : step.data.tensResult;
          html += `<div class="split-step done">🔟 十位：${tr}</div>`;
          html += `<div class="split-step done">🔢 个位：${step.data.onesResult}</div>`;
          html += `<div class="split-step active">✨ ${tr}+${step.data.onesResult}=<b>${q.answer}</b></div>`;
        }
      } else {
        // 不借位流程
        const tensResult = q.op === '+' ? aTens + bTens : aTens - bTens;
        const onesResult = q.op === '+' ? aOnes + bOnes : aOnes - bOnes;
        if (action === 'tens') {
          html += `<div class="split-step active">🔟 ${aTens} ${q.op} ${bTens} = <b>${tensResult}</b></div>`;
        } else if (action === 'ones') {
          html += `<div class="split-step done">🔟 ${aTens} ${q.op} ${bTens} = ${tensResult}</div>`;
          html += `<div class="split-step active">🔢 ${aOnes} ${q.op} ${bOnes} = <b>${onesResult}</b></div>`;
        } else {
          html += `<div class="split-step done">🔟 ${tensResult}</div>`;
          html += `<div class="split-step done">🔢 ${onesResult}</div>`;
          html += `<div class="split-step active">✨ ${tensResult}+${onesResult}=<b>${q.answer}</b></div>`;
        }
      }
      html += '</div>';
    }
    html += '</div>';
    return html;

    function buildOneTree(num, tens, ones, showParts) {
      let t = '<div class="split-tree">';
      t += `<div class="split-num">${num}</div>`;
      if (showParts) {
        t += '<div class="split-branches">✂️</div>';
        t += `<div class="split-parts"><span class="split-part tens">${tens}</span><span class="split-part ones">${ones}</span></div>`;
      }
      t += '</div>';
      return t;
    }
  }

  // --- 巧算法引导 (100以内) ---
  function renderMentalGuided(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const bTens = Math.floor(q.b / 10) * 10;
    const bOnes = q.b % 10;
    const mid = q.op === '+' ? q.a + bTens : q.a - bTens;
    const opWord = q.op === '+' ? 'plus' : 'minus';
    const opSign = q.op;

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const subSteps = [
      { action: 'start', text: fmt('learn_mental_start', q.a, opSign, q.b, bTens, bOnes) },
      { action: 'step1', text: fmt('learn_mental_step1', q.a, opSign, bTens, mid) },
    ];
    if (bOnes > 0) {
      subSteps.push({ action: 'step2', text: fmt('learn_mental_step2', mid, opSign, bOnes, q.answer) });
    }
    subSteps.push({ action: 'done', text: fmt('learn_mental_done', q.a, opSign, q.b, q.answer) });

    let si = 0;
    function renderSub() {
      const s = subSteps[si];
      exp.textContent = s.text; currentSpeechText = s.text;
      Speech.speak(s.text, 0.85);
      if (s.action === 'start') {
        vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, null, null);
      } else if (s.action === 'step1') {
        vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, { a: q.a, op: opSign, b: bTens, result: mid }, null);
        eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span class="highlight-gold">${bTens}</span> <span class="op">${opSign}</span> <span>${bOnes}</span> <span class="eq">=</span> <span class="blank">?</span>`;
      } else if (s.action === 'step2') {
        vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, { a: q.a, op: opSign, b: bTens, result: mid, done: true }, { a: mid, op: opSign, b: bOnes, result: q.answer });
        eq.innerHTML = `<span class="highlight-green">${mid}</span> <span class="op">${opSign}</span> <span class="highlight-gold">${bOnes}</span> <span class="eq">=</span> <span class="blank">?</span>`;
      } else if (s.action === 'done') {
        vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, null, null, true, q.answer);
        eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="highlight-green">${q.answer}</span>`;
        Sound.correct();
      }
      if (si < subSteps.length - 1) { showTapContinue(() => { si++; renderSub(); }); }
      else { showTapContinue(); }
    }
    renderSub();
  }

  // ========== INTERACTIVE ==========
  function renderInteractive(lv, q) {
    switch (lv.method) {
      case 'bonds': renderBondsInteractive(q); break;
      case 'finger': renderFingerInteractive(q); break;
      case 'doubles': renderDoublesInteractive(q); break;
      case 'make_ten': renderMakeTenInteractive(q); break;
      case 'break_ten': renderBreakTenInteractive(q); break;
      case 'split': renderSplitInteractive(q); break;
      case 'mental': renderMentalInteractive(q); break;
    }
  }

  function renderBondsInteractive(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span class="blank">?</span> <span class="eq">=</span> <span>10</span>`;
    exp.textContent = fmt('learn_bonds_question', q.a);
    currentSpeechText = exp.textContent;
    Speech.speak(currentSpeechText, 0.85);
    vis.innerHTML = buildBondsVisual(q.a, 0, false);

    const wrong1 = q.b + 1 > 9 ? q.b - 2 : q.b + 1;
    const wrong2 = q.b - 1 < 1 ? q.b + 2 : q.b - 1;
    showChoices([q.b, wrong1, wrong2], q.b, () => {
      vis.innerHTML = buildBondsVisual(q.a, q.b, true);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.b; blank.style.color = 'var(--success)'; }
      exp.textContent = fmt('learn_bonds_great', q.a, q.b);
      Speech.speak(sp(`${q.b}！${q.a}加${q.b}等于10！毛毛太棒了！`, `${q.b}! ${q.a} plus ${q.b} equals 10! Great job Maomao!`), 0.85);
      showTapContinue();
    });
  }

  function renderDoublesInteractive(q) {
    const exp = document.getElementById('learn-explanation');
    const eq = document.getElementById('learn-equation');
    const vis = document.getElementById('learn-visual');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    vis.innerHTML = buildDoublesVisual(q.a, q.b, false);

    if (!q.isNear) {
      exp.textContent = fmt('learn_doubles_question', q.a);
      currentSpeechText = exp.textContent;
    } else {
      exp.textContent = fmt('learn_doubles_near_question', q.a, q.b);
      currentSpeechText = exp.textContent;
    }
    Speech.speak(currentSpeechText, 0.85);

    const wrong1 = q.answer + 2;
    const wrong2 = Math.max(2, q.answer - 2);
    showChoices([q.answer, wrong1, wrong2], q.answer, () => {
      vis.innerHTML = buildDoublesVisual(q.a, q.b, true);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      Speech.speak(sp(`${q.answer}！毛毛太棒了！`, `${q.answer}! Great job Maomao!`), 0.85);
      showTapContinue();
    });
  }

  function renderFingerInteractive(q) {
    const vis = document.getElementById('learn-visual');
    const eq = document.getElementById('learn-equation');
    const exp = document.getElementById('learn-explanation');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${q.op}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    exp.textContent = t('learn_finger_your_turn');
    currentSpeechText = t('learn_your_turn');
    Speech.speak(currentSpeechText, 0.85);

    // 显示手指，让毛毛点击
    let count = q.a; // 初始显示a根
    vis.innerHTML = buildFingerHTML(count, 0);
    let tapsNeeded = q.b;
    let tapped = 0;

    // 让手指可点击
    setTimeout(() => {
      const fingers = vis.querySelectorAll('.finger');
      fingers.forEach((f, idx) => {
        f.style.cursor = 'pointer';
        f.onclick = () => {
          if (tapped >= tapsNeeded) return;
          if (q.op === '+') {
            // 加法：点击未竖起的手指
            if (idx >= count + tapped) {
              tapped++;
              f.classList.add('up', 'counting');
              Sound.click();
              Speech.speakNumber(count + tapped);
              if (tapped >= tapsNeeded) {
                setTimeout(() => {
                  Sound.correct();
                  const blank = document.querySelector('#learn-equation .blank');
                  if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
                  exp.textContent = q.op === '+' ? fmt('learn_finger_result', q.answer, q.a, q.op, q.b) : fmt('learn_finger_remain', q.answer, q.a, q.op, q.b);
                  Speech.speak(sp(`${q.answer}！毛毛太棒了！`, `${q.answer}! Great job Maomao!`), 0.9);
                  showTapContinue();
                }, 500);
              }
            }
          } else {
            // 减法：点击任意竖起的手指放下
            if (f.classList.contains('up') && !f.classList.contains('counting')) {
              tapped++;
              f.classList.remove('up');
              f.classList.add('counting');
              Sound.click();
              Speech.speakNumber(count - tapped);
              if (tapped >= tapsNeeded) {
                setTimeout(() => {
                  Sound.correct();
                  const blank = document.querySelector('#learn-equation .blank');
                  if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
                  exp.textContent = fmt('learn_finger_remain', q.answer, q.a, q.op, q.b);
                  Speech.speak(sp(`${q.answer}！毛毛太棒了！`, `${q.answer}! Great job Maomao!`), 0.9);
                  showTapContinue();
                }, 500);
              }
            }
          }
        };
      });
    }, 100);
  }

  function renderMakeTenInteractive(q) {
    const exp = document.getElementById('learn-explanation');
    const eq = document.getElementById('learn-equation');
    eq.style.display = 'block'; exp.style.display = 'block';
    eq.innerHTML = `<span>${q.a}</span> <span class="op">+</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const need = 10 - q.a;
    exp.textContent = fmt('learn_make_ten_question', q.a);
    currentSpeechText = exp.textContent;
    Speech.speak(currentSpeechText, 0.85);
    showChoices([need - 1, need, need + 1, need + 2].filter(n => n > 0 && n <= 9).slice(0, 4), need, () => {
      const rest = q.b - need;
      exp.textContent = fmt('learn_make_ten_done', rest, q.answer);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      Speech.speak(sp(`对了！10加${rest}等于${q.answer}！毛毛太棒了！`, `Correct! 10 plus ${rest} equals ${q.answer}! Great job Maomao!`), 0.85);
      showTapContinue();
    });
  }

  function renderBreakTenInteractive(q) {
    const exp = document.getElementById('learn-explanation');
    const eq = document.getElementById('learn-equation');
    eq.style.display = 'block'; exp.style.display = 'block';
    eq.innerHTML = `<span>${q.a}</span> <span class="op">-</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    const remain = 10 - q.b;
    exp.textContent = fmt('learn_break_ten_question', q.b);
    currentSpeechText = exp.textContent;
    Speech.speak(currentSpeechText, 0.85);
    showChoices([remain - 1, remain, remain + 1, remain + 2].filter(n => n >= 0 && n <= 10).slice(0, 4), remain, () => {
      const ones = q.a - 10;
      exp.textContent = fmt('learn_break_ten_done', remain, ones, q.answer);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      Speech.speak(sp(`对了！${remain}加${ones}等于${q.answer}！毛毛太棒了！`, `Correct! ${remain} plus ${ones} equals ${q.answer}! Great job Maomao!`), 0.85);
      showTapContinue();
    });
  }

  function renderSplitInteractive(q) {
    const exp = document.getElementById('learn-explanation');
    const eq = document.getElementById('learn-equation');
    const vis = document.getElementById('learn-visual');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const aTens = Math.floor(q.a / 10) * 10;
    const aOnes = q.a % 10;
    const bTens = Math.floor(q.b / 10) * 10;
    const bOnes = q.b % 10;
    const opSign = q.op;
    const needBorrow = q.op === '-' && aOnes < bOnes;

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;

    if (needBorrow) {
      // 借位互动：问十位借完后剩多少，再问个位借10后减等于几
      const tensAfterBorrow = aTens - bTens - 10;
      const onesWithBorrow = aOnes + 10;
      const onesResult = onesWithBorrow - bOnes;

      vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'borrow', data: {} }, true);
      exp.textContent = fmt('learn_split_borrow', aOnes, bOnes);
      currentSpeechText = exp.textContent;
      Speech.speak(currentSpeechText, 0.85);
      showTapContinue(() => {
        // 问十位借完剩多少
        vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'borrow_tens', data: { tensAfterBorrow } }, true);
        exp.textContent = sp(
          `十位：${aTens}-${bTens}=${aTens - bTens}，再借走10，剩几？`,
          `Tens: ${aTens}-${bTens}=${aTens - bTens}, borrow 10, what's left?`
        );
        currentSpeechText = exp.textContent;
        Speech.speak(currentSpeechText, 0.85);
        showChoices([tensAfterBorrow, tensAfterBorrow + 10, Math.max(0, tensAfterBorrow - 10)], tensAfterBorrow, () => {
          // 问个位
          vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'borrow_ones', data: { tensAfterBorrow, onesResult } }, true);
          exp.textContent = sp(
            `个位：${aOnes}借10变${onesWithBorrow}，${onesWithBorrow}-${bOnes}=?`,
            `Ones: ${aOnes} borrows 10 becomes ${onesWithBorrow}, ${onesWithBorrow}-${bOnes}=?`
          );
          currentSpeechText = exp.textContent;
          Speech.speak(currentSpeechText, 0.85);
          showChoices([onesResult, onesResult + 2, Math.max(0, onesResult - 2)], onesResult, () => {
            finishSplit({ tensAfterBorrow, onesResult });
          });
        });
      });
    } else {
      // 不借位互动
      const tensResult = q.op === '+' ? aTens + bTens : aTens - bTens;
      const onesResult = q.op === '+' ? aOnes + bOnes : aOnes - bOnes;

      vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'show', data: {} }, false);
      exp.textContent = fmt('learn_split_question', aTens, opSign, bTens);
      currentSpeechText = exp.textContent;
      Speech.speak(currentSpeechText, 0.85);

      showChoices([tensResult, tensResult + 10, Math.max(0, tensResult - 10)], tensResult, () => {
        vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'ones', data: { tensResult, onesResult } }, false);
        exp.textContent = fmt('learn_split_ones', aOnes, opSign, bOnes, '?');
        currentSpeechText = exp.textContent;
        Speech.speak(currentSpeechText, 0.85);
        showChoices([onesResult, onesResult + 2, Math.max(0, onesResult - 2)], onesResult, () => {
          finishSplit({ tensResult, onesResult });
        });
      });
    }

    function finishSplit(data) {
      vis.innerHTML = buildSplitVisual(q, aTens, aOnes, bTens, bOnes, { action: 'done', data }, needBorrow);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      exp.textContent = fmt('learn_split_done', q.a, opSign, q.b, q.answer);
      Sound.correct();
      Speech.speak(sp(`${q.answer}！毛毛太棒了！`, `${q.answer}! Great job Maomao!`), 0.85);
      showTapContinue();
    }
  }

  function renderMentalInteractive(q) {
    const exp = document.getElementById('learn-explanation');
    const eq = document.getElementById('learn-equation');
    const vis = document.getElementById('learn-visual');
    vis.style.display = 'flex'; eq.style.display = 'block'; exp.style.display = 'block';

    const bTens = Math.floor(q.b / 10) * 10;
    const bOnes = q.b % 10;
    const mid = q.op === '+' ? q.a + bTens : q.a - bTens;
    const opWord = q.op === '+' ? 'plus' : 'minus';
    const opSign = q.op;

    eq.innerHTML = `<span>${q.a}</span> <span class="op">${opSign}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, null, null);
    exp.textContent = fmt('learn_mental_question', q.a, opSign, bTens);
    currentSpeechText = exp.textContent;
    Speech.speak(currentSpeechText, 0.85);

    const w1 = mid + (Math.random() < 0.5 ? 10 : -10);
    const w2 = mid + (Math.random() < 0.5 ? 5 : -5);
    showChoices([mid, Math.max(0, w1), Math.max(0, w2)], mid, () => {
      if (bOnes > 0) {
        exp.textContent = fmt('learn_mental_step2', mid, opSign, bOnes, '?');
        currentSpeechText = exp.textContent;
        Speech.speak(currentSpeechText, 0.85);
        const w3 = q.answer + 3, w4 = Math.max(0, q.answer - 3);
        showChoices([q.answer, w3, w4], q.answer, () => {
          finishMental();
        });
      } else {
        finishMental();
      }
    });

    function finishMental() {
      vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, opSign, null, null, true, q.answer);
      const blank = document.querySelector('#learn-equation .blank');
      if (blank) { blank.textContent = q.answer; blank.style.color = 'var(--success)'; }
      exp.textContent = fmt('learn_mental_done', q.a, opSign, q.b, q.answer);
      Sound.correct();
      Speech.speak(sp(`${q.answer}！毛毛太棒了！`, `${q.answer}! Great job Maomao!`), 0.85);
      showTapContinue();
    }
  }

  // ========== QUIZ ASSISTED (带提示的测验) ==========
  function renderQuizAssisted(lv, q) {
    const vis = document.getElementById('learn-visual');
    vis.style.display = 'flex';

    if (lv.method === 'finger') {
      vis.innerHTML = buildFingerHTML(q.a, 0);
    } else if (lv.method === 'make_ten') {
      const need = 10 - q.a;
      vis.innerHTML = buildCoinStageSplit(q.a, need, q.b - need);
    } else if (lv.method === 'break_ten') {
      const ones = q.a - 10;
      vis.innerHTML = '<div class="coin-stage"><div class="coin-group">' +
        Array(10).fill('<div class="pixel-block blue"></div>').join('') +
        '</div><span class="visual-separator">+</span><div class="coin-group">' +
        Array(ones).fill('<div class="pixel-block gold"></div>').join('') + '</div></div>';
    } else if (lv.method === 'split' || lv.method === 'mental') {
      const bTens = Math.floor(q.b / 10) * 10;
      const bOnes = q.b % 10;
      vis.innerHTML = buildSplitVisual(q.b, bTens, bOnes, q.op, null, null);
    }

    renderQuizCommon(q);
  }

  // ========== QUIZ SOLO ==========
  function renderQuizSolo(q) {
    quizQ = q;
    renderQuizCommon(q);
  }

  function renderQuizCommon(q) {
    showEl('learn-quiz', true);
    document.getElementById('learn-quiz-equation').innerHTML =
      `<span>${q.a}</span> <span class="op">${q.op}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    numpad = createNumpad('learn-numpad', (val) => {
      if (val === q.answer) {
        Sound.correct();
        FX.firework(window.innerWidth / 2, window.innerHeight / 3);
        const blankEl = document.querySelector('#learn-quiz-equation .blank');
        if (blankEl) { blankEl.textContent = q.answer; blankEl.style.color = 'var(--success)'; blankEl.style.borderColor = 'var(--success)'; }
        numpad.disable();
        Speech.speak(sp(`${q.answer}！毛毛真厉害！`, `${q.answer}! Awesome Maomao!`), 1.0);
        setTimeout(() => {
          const lv = LEVELS[currentLevel];
          if (step < lv.steps.length - 1) { step++; render(); }
          else { completeLevel(); }
        }, 1200);
      } else {
        Sound.wrong();
        numpad.clear();
        App.toast(t('wrong'));
      }
    }, 'learn-quiz-equation');
  }

  // ========== 通用工具 ==========
  function showTapContinue(customAction) {
    const area = document.getElementById('learn-tap-area');
    area.classList.remove('hidden');
    const tapText = document.getElementById('tap-text');
    if (tapText) tapText.textContent = t('learn_tap_continue');

    const btn = area.querySelector('.tap-continue');
    btn.onclick = () => {
      Sound.click();
      area.classList.add('hidden');
      if (customAction) {
        customAction();
      } else {
        // 下一主步骤
        const lv = LEVELS[currentLevel];
        if (step < lv.steps.length - 1) { step++; render(); }
        else { completeLevel(); }
      }
    };
  }

  function showChoices(options, correctVal, onCorrect) {
    // 去重：确保选项不重复，且一定包含正确答案
    let unique = [...new Set(options)];
    if (!unique.includes(correctVal)) unique.unshift(correctVal);
    // 如果去重后不足3个选项，补充不重复的干扰项
    let offset = 1;
    while (unique.length < 3) {
      const candidate = correctVal + offset;
      if (candidate >= 0 && !unique.includes(candidate)) unique.push(candidate);
      else { const c2 = correctVal - offset; if (c2 >= 0 && !unique.includes(c2)) unique.push(c2); }
      offset++;
    }
    unique.sort(() => Math.random() - 0.5);
    const el = document.getElementById('learn-choices');
    el.classList.remove('hidden');
    el.innerHTML = unique.map(v =>
      `<button class="choice-btn" data-val="${v}">${v}</button>`
    ).join('');
    el.querySelectorAll('.choice-btn').forEach(btn => {
      btn.onclick = () => {
        const val = parseInt(btn.dataset.val);
        if (val === correctVal) {
          Sound.correct();
          btn.classList.add('correct');
          el.querySelectorAll('.choice-btn').forEach(b => { b.disabled = true; });
          setTimeout(() => { el.classList.add('hidden'); onCorrect(); }, 800);
        } else {
          Sound.wrong();
          btn.classList.add('wrong');
          btn.disabled = true;
          setTimeout(() => btn.classList.remove('wrong'), 500);
          App.toast(t('wrong'));
        }
      };
    });
  }

  function completeLevel() {
    const completed = Store.get('learnCompleted', []);
    if (!completed.includes(currentLevel)) {
      completed.push(currentLevel);
      Store.set('learnCompleted', completed);
    }
    Sound.levelUp(); FX.confetti();
    App.toast(t('level_complete'));
    Speech.speak(sp('毛毛通关啦！太厉害了！', 'Maomao cleared it! Amazing!'), 0.85);
    setTimeout(() => init(), 2000);
  }

  function speakCurrent() {
    if (currentSpeechText) Speech.speak(currentSpeechText, 0.85);
    else if (quizQ) Speech.speakEquation(quizQ.a, quizQ.op, quizQ.b);
  }

  return {
    init, renderLevels, selectLevel, speakCurrent, tapContinue() {},
    prev() { Sound.click(); if (step > 0) { step--; render(); } },
    next() { Sound.click(); }
  };
})();

// ===== 练习模式 =====
const Practice = (() => {
  let range = 10, type = 'add';
  let questions = [], current = 0, score = 0, wrongList = [];
  let numpad = null;
  let locked = false;

  function init() {
    showSetup();
    setupOptionEvents();
  }

  function setupOptionEvents() {
    document.querySelectorAll('#range-options .setup-opt').forEach(btn => {
      btn.onclick = () => {
        Sound.click();
        document.querySelectorAll('#range-options .setup-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        range = parseInt(btn.dataset.range);
      };
    });
    document.querySelectorAll('#type-options .setup-opt').forEach(btn => {
      btn.onclick = () => {
        Sound.click();
        document.querySelectorAll('#type-options .setup-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        type = btn.dataset.type;
      };
    });
  }

  function showSetup() {
    document.getElementById('practice-setup').classList.remove('hidden');
    document.getElementById('practice-game').classList.add('hidden');
    document.getElementById('practice-result').classList.add('hidden');
  }

  function start() {
    Sound.click();
    questions = [];
    wrongList = [];
    score = 0;
    current = 0;
    locked = false;
    for (let i = 0; i < 10; i++) {
      questions.push(generateQuestion(range, type));
    }
    document.getElementById('practice-setup').classList.add('hidden');
    document.getElementById('practice-game').classList.remove('hidden');
    document.getElementById('practice-result').classList.add('hidden');

    numpad = createNumpad('practice-numpad', submitAnswer);
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[current];
    document.getElementById('practice-equation').innerHTML =
      `<span>${q.a}</span> <span class="op">${q.op}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    document.getElementById('practice-count').textContent = `${current + 1}/10`;
    document.getElementById('practice-score').textContent = `🪙 ${score}`;
    document.getElementById('practice-progress').style.width = (current / 10 * 100) + '%';
    document.getElementById('practice-feedback').innerHTML = '';
    locked = false;
    if (numpad) numpad.enable();
  }

  function speakCurrent() {
    const q = questions[current];
    if (q) Speech.speakEquation(q.a, q.op, q.b);
  }

  function submitAnswer(val) {
    if (locked) return;
    const q = questions[current];
    const feedbackEl = document.getElementById('practice-feedback');

    if (val === q.answer) {
      locked = true;
      score++;
      Sound.correct();
      FX.firework(window.innerWidth / 2, window.innerHeight / 4);
      const blankEl = document.querySelector('#practice-equation .blank');
      if (blankEl) { blankEl.textContent = q.answer; blankEl.style.color = 'var(--success)'; blankEl.style.borderColor = 'var(--success)'; }
      feedbackEl.innerHTML = `<span class="feedback-correct">${App.t('correct')}</span>`;
      document.getElementById('practice-score').textContent = `🪙 ${score}`;
      if (numpad) numpad.disable();
      // 🔊 读出得到金币
      const coinPhrases = App.lang === 'zh'
        ? ['毛毛太棒了！吃到金币！', '毛毛得到金币！', '毛毛好厉害！', '金币给毛毛！', '毛毛真棒！']
        : ['Awesome Maomao! Got a coin!', 'Maomao got a coin!', 'Great job Maomao!', 'Coin for Maomao!', 'Maomao is great!'];
      Speech.speak(coinPhrases[Math.floor(Math.random() * coinPhrases.length)], 1.0);

      setTimeout(() => {
        current++;
        if (current < 10) {
          renderQuestion();
        } else {
          showResult();
        }
      }, 1200);
    } else {
      Sound.wrong();
      if (numpad) numpad.clear();
      wrongList.push({ ...q, userAnswer: val });
      const msgs = App.t('encourage');
      feedbackEl.innerHTML = `<span class="feedback-wrong">${App.t('wrong')}</span>`;
      setTimeout(() => {
        feedbackEl.innerHTML = `<span class="feedback-encourage">${msgs[Math.floor(Math.random() * msgs.length)]}</span>`;
      }, 1000);
    }
  }

  function showResult() {
    document.getElementById('practice-game').classList.add('hidden');
    document.getElementById('practice-result').classList.remove('hidden');

    let title, starsHtml;
    let speechText;
    const zh = App.lang === 'zh';
    if (score === 10) { title = App.t('perfect'); starsHtml = '🌟🌟🌟'; FX.confetti(); Sound.oneUp(); speechText = zh ? '毛毛太厉害了！满分！三颗星！' : 'Maomao is amazing! Perfect score! Three stars!'; }
    else if (score >= 8) { title = App.t('great'); starsHtml = '🌟🌟'; Sound.levelUp(); speechText = zh ? '毛毛真棒！两颗星！' : 'Super Maomao! Two stars! Great job!'; }
    else if (score >= 5) { title = App.t('good'); starsHtml = '🌟'; speechText = zh ? '毛毛做得不错！一颗星！' : 'Good job Maomao! One star!'; }
    else { title = App.t('try_harder'); starsHtml = ''; speechText = zh ? '毛毛加油！你可以的！' : 'Keep going Maomao! You can do it!'; }

    document.getElementById('result-title').textContent = title;
    // 🔊 读出恭喜语
    setTimeout(() => Speech.speak(speechText, 0.85), 500);
    document.getElementById('result-stars').textContent = starsHtml;
    document.getElementById('result-score').textContent = App.t('score_text').replace('{0}', score).replace('{1}', 10);

    // Details
    const uniqueWrong = [];
    const seen = new Set();
    wrongList.forEach(w => {
      const key = `${w.a}${w.op}${w.b}`;
      if (!seen.has(key)) { seen.add(key); uniqueWrong.push(w); }
    });

    if (uniqueWrong.length > 0) {
      document.getElementById('result-details').innerHTML =
        App.t('wrong_list') + '<br>' +
        uniqueWrong.map(w => `${w.a} ${w.op} ${w.b} = ${w.answer}`).join('<br>');
      document.getElementById('btn-wrong-review').classList.remove('hidden');
    } else {
      document.getElementById('result-details').textContent = '';
      document.getElementById('btn-wrong-review').classList.add('hidden');
    }

    // Save high score
    const highScore = Store.get('highScore', 0);
    if (score > highScore) Store.set('highScore', score);

    document.getElementById('practice-progress').style.width = '100%';
  }

  function showWrong() {
    // Restart with only wrong questions
    if (wrongList.length === 0) return;
    const uniqueWrong = [];
    const seen = new Set();
    wrongList.forEach(w => {
      const key = `${w.a}${w.op}${w.b}`;
      if (!seen.has(key)) { seen.add(key); uniqueWrong.push(w); }
    });
    questions = uniqueWrong.map(w => ({ a: w.a, b: w.b, op: w.op, answer: w.answer }));
    while (questions.length < 10) {
      questions.push(generateQuestion(range, type));
    }
    wrongList = [];
    score = 0;
    current = 0;
    locked = false;
    document.getElementById('practice-result').classList.add('hidden');
    document.getElementById('practice-game').classList.remove('hidden');
    numpad = createNumpad('practice-numpad', submitAnswer);
    renderQuestion();
  }

  return { init, start, showWrong, speakCurrent };
})();

// ===== 闯关模式 =====
const Challenge = (() => {
  const LEVEL_CONFIG = [
    { max: 10, type: 'add', time: 60, boss: false },
    { max: 10, type: 'sub', time: 60, boss: false },
    { max: 10, type: 'mix', time: 50, boss: false },
    { max: 20, type: 'mix', time: 50, boss: false },
    { max: 20, type: 'mix', time: 35, boss: true },    // Boss
    { max: 50, type: 'add', time: 50, boss: false },
    { max: 50, type: 'sub', time: 50, boss: false },
    { max: 50, type: 'mix', time: 45, boss: false },
    { max: 100, type: 'mix', time: 45, boss: false },
    { max: 100, type: 'mix', time: 30, boss: true }     // Final Boss
  ];

  let currentLevel = 0;
  let questions = [], current = 0, correctCount = 0;
  let timer = null, timeLeft = 0;
  let numpad = null;
  let locked = false;

  function init() {
    showMap();
  }

  function renderMap() {
    const el = document.getElementById('challenge-map');
    const maxLevel = Store.get('challengeLevel', 0);
    const stars = Store.get('challengeStars', {});

    el.innerHTML = LEVEL_CONFIG.map((lv, i) => {
      const isLocked = i > maxLevel;
      const isBoss = lv.boss;
      const s = stars[i] || 0;
      const starStr = s > 0 ? '🌟'.repeat(s) + '☆'.repeat(3 - s) : '☆☆☆';

      return `<div class="map-level ${isLocked ? 'locked' : ''} ${isBoss ? 'boss' : ''}"
        onclick="Challenge.selectLevel(${i})">
        <span class="map-level-num">${i + 1}</span>
        <div class="map-level-info">
          <div class="map-level-name">${App.t('challenge_names')[i]}</div>
          <div class="map-level-desc">${lv.max} | ${lv.type === 'add' ? '➕' : lv.type === 'sub' ? '➖' : '🔀'} | ⏱️${lv.time}s</div>
        </div>
        <span class="map-level-stars">${isLocked ? '🔒' : starStr}</span>
      </div>`;
    }).join('');
  }

  function showMap() {
    document.getElementById('challenge-map').classList.remove('hidden');
    document.getElementById('challenge-game').classList.add('hidden');
    document.getElementById('challenge-result').classList.add('hidden');
    renderMap();
  }

  function selectLevel(i) {
    const maxLevel = Store.get('challengeLevel', 0);
    if (i > maxLevel) {
      App.toast(App.t('level_locked'));
      return;
    }
    Sound.click();
    currentLevel = i;
    startLevel();
  }

  function startLevel() {
    const lv = LEVEL_CONFIG[currentLevel];
    questions = [];
    current = 0;
    correctCount = 0;
    locked = false;

    for (let i = 0; i < 5; i++) {
      questions.push(generateQuestion(lv.max, lv.type));
    }

    document.getElementById('challenge-map').classList.add('hidden');
    document.getElementById('challenge-game').classList.remove('hidden');
    document.getElementById('challenge-result').classList.add('hidden');

    if (lv.boss) {
      Sound.boss();
      App.toast(App.t('boss_warning'));
    }

    document.getElementById('challenge-level-label').textContent = App.t('challenge_names')[currentLevel];
    numpad = createNumpad('challenge-numpad', submitAnswer);
    timeLeft = lv.time;
    startTimer();
    renderQuestion();
  }

  function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 5) Sound.tick();
      if (timeLeft <= 0) {
        clearInterval(timer);
        App.toast(App.t('time_up'));
        showResult();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = document.getElementById('challenge-timer');
    document.getElementById('timer-value').textContent = timeLeft;
    el.className = 'timer-display' +
      (timeLeft <= 5 ? ' danger' : timeLeft <= 10 ? ' warning' : '');
  }

  function renderQuestion() {
    const q = questions[current];
    document.getElementById('challenge-equation').innerHTML =
      `<span>${q.a}</span> <span class="op">${q.op}</span> <span>${q.b}</span> <span class="eq">=</span> <span class="blank">?</span>`;
    document.getElementById('challenge-count').textContent = `${current + 1}/5`;
    document.getElementById('challenge-feedback').innerHTML = '';
    locked = false;
    if (numpad) numpad.enable();
  }

  function speakCurrent() {
    const q = questions[current];
    if (q) Speech.speakEquation(q.a, q.op, q.b);
  }

  function submitAnswer(val) {
    if (locked) return;
    const q = questions[current];
    const feedbackEl = document.getElementById('challenge-feedback');

    if (val === q.answer) {
      locked = true;
      correctCount++;
      Sound.correct();
      FX.firework(window.innerWidth / 2, window.innerHeight / 4);
      const blankEl = document.querySelector('#challenge-equation .blank');
      if (blankEl) { blankEl.textContent = q.answer; blankEl.style.color = 'var(--success)'; blankEl.style.borderColor = 'var(--success)'; }
      feedbackEl.innerHTML = `<span class="feedback-correct">${App.t('correct')}</span>`;
      if (numpad) numpad.disable();
      // 🔊 读出得到金币
      const coinPhrases = App.lang === 'zh'
        ? ['毛毛太棒了！', '毛毛答对了！', '毛毛好厉害！', '毛毛真棒！', '毛毛正确！']
        : ['Awesome Maomao!', 'Maomao got it!', 'Great job Maomao!', 'Yes Maomao!', 'Correct Maomao!'];
      Speech.speak(coinPhrases[Math.floor(Math.random() * coinPhrases.length)], 1.0);

      setTimeout(() => {
        current++;
        if (current < 5) {
          renderQuestion();
        } else {
          clearInterval(timer);
          showResult();
        }
      }, 1000);
    } else {
      Sound.wrong();
      if (numpad) numpad.clear();
      feedbackEl.innerHTML = `<span class="feedback-wrong">${App.t('wrong')}</span>`;
      const msgs = App.t('encourage');
      setTimeout(() => {
        feedbackEl.innerHTML = `<span class="feedback-encourage">${msgs[Math.floor(Math.random() * msgs.length)]}</span>`;
      }, 800);
    }
  }

  function showResult() {
    clearInterval(timer);
    document.getElementById('challenge-game').classList.add('hidden');
    document.getElementById('challenge-result').classList.remove('hidden');

    let stars = 0;
    if (correctCount === 5) stars = 3;
    else if (correctCount >= 4) stars = 2;
    else if (correctCount >= 3) stars = 1;

    const passed = correctCount >= 3;
    const title = passed ? App.t('level_complete') : App.t('level_fail');
    const starsHtml = stars > 0 ? '🌟'.repeat(stars) + '☆'.repeat(3 - stars) : '☆☆☆';

    document.getElementById('challenge-result-title').textContent = title;
    document.getElementById('challenge-result-stars').textContent = starsHtml;
    document.getElementById('challenge-result-details').textContent =
      App.t('score_text').replace('{0}', correctCount).replace('{1}', 5);

    // 🔊 读出闯关结果
    const zh = App.lang === 'zh';
    const challengeSpeech = passed
      ? (stars === 3
        ? (zh ? '毛毛通关了！三颗星！太厉害了！' : 'Maomao cleared it! Three stars! Amazing!')
        : stars === 2
        ? (zh ? '毛毛通关了！两颗星！真棒！' : 'Maomao cleared it! Two stars! Great job!')
        : (zh ? '毛毛通关了！一颗星！' : 'Maomao cleared it! One star!'))
      : (zh ? '毛毛再试一次！你可以的！' : 'Try again Maomao! You can do it!');
    setTimeout(() => Speech.speak(challengeSpeech, 0.85), 500);

    if (passed) {
      Sound.levelUp();
      FX.confetti();
      // Save progress
      const maxLevel = Store.get('challengeLevel', 0);
      if (currentLevel >= maxLevel) {
        Store.set('challengeLevel', Math.min(currentLevel + 1, 9));
      }
      const allStars = Store.get('challengeStars', {});
      allStars[currentLevel] = Math.max(allStars[currentLevel] || 0, stars);
      Store.set('challengeStars', allStars);
    }
  }

  function retry() {
    Sound.click();
    startLevel();
  }

  return { init, renderMap, showMap, selectLevel, retry, speakCurrent };
})();

// ===== 启动 =====
document.addEventListener('DOMContentLoaded', () => App.init());
