/* 提取自 index.html 的主要脚本 (已调整以在 DOMContentLoaded 后初始化) */
'use strict';

// 配置与状态
const config = {
    inhale: 4,
    hold: 7,
    exhale: 8,
    totalCycles: 5
};

const state = {
    isRunning: false,
    phase: 'idle', // idle, inhale, hold, exhale, hold2
    currentCycle: 0,
    timeLeft: 0,
    totalTimeInPhase: 0,
    timerId: null,
    animationFrameId: null,
    phaseStartTime: null
};

// DOM 元素引用（将在 init 中赋值）
let els = {};

// 常量
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 45; // r=45

// 初始化
function init() {
    // DOM 查询（确保在 DOMContentLoaded 后运行）
    els = {
        btn: document.getElementById('main-action-btn'),
        btnText: document.getElementById('btn-text'),
        btnIcon: document.querySelector('#main-action-btn i'),
        settingsBtn: document.getElementById('toggle-settings-btn'),
        settingsPanel: document.getElementById('settings-panel'),
        instruction: document.getElementById('instruction-text'),
        timer: document.getElementById('timer-text'),
        visual: document.getElementById('breath-visual'),
        progressRing: document.getElementById('progress-ring'),
        statusText: document.getElementById('status-text'),
        statusDot: document.getElementById('status-dot'),
        cycleCounter: document.getElementById('cycle-counter'),
        inputs: {
            inhale: document.getElementById('inhale-input'),
            hold: document.getElementById('hold-input'),
            exhale: document.getElementById('exhale-input'),
            cycle: document.getElementById('cycle-input')
        },
        displays: {
            inhale: document.getElementById('inhale-val'),
            hold: document.getElementById('hold-val'),
            exhale: document.getElementById('exhale-val'),
            cycle: document.getElementById('cycle-val')
        }
    };

    // 绑定事件
    els.btn.addEventListener('click', toggleBreathing);
    els.settingsBtn.addEventListener('click', toggleSettings);
    
    // 帮助弹窗元素与交互（点击按钮显示，点击任意处关闭）
    els.helpBtn = document.getElementById('help-btn');
    els.helpPopup = document.getElementById('help-popup');
    if (els.helpBtn && els.helpPopup) {
        els.helpBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const open = els.helpPopup.classList.toggle('open');
            els.helpBtn.setAttribute('aria-expanded', open);
        });
        document.addEventListener('click', (e) => {
            if (!els.helpPopup.classList.contains('open')) return;
            if (!els.helpPopup.contains(e.target) && e.target !== els.helpBtn) {
                els.helpPopup.classList.remove('open');
                els.helpBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 绑定输入事件
    Object.keys(els.inputs).forEach(key => {
        els.inputs[key].addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            config[key === 'cycle' ? 'totalCycles' : key] = val;
            els.displays[key].textContent = val;
            updateCycleDisplay();
        });
    });

    updateCycleDisplay();
    resetVisuals();
}

// 切换设置面板
function toggleSettings() {
    els.settingsPanel.classList.toggle('hidden');
}

// 更新循环计数显示
function updateCycleDisplay() {
    els.cycleCounter.textContent = `循环: ${state.currentCycle} / ${config.totalCycles}`;
}

// 切换开始/暂停
function toggleBreathing() {
    if (state.isRunning) {
        stopBreathing();
    } else {
        startBreathing();
    }
}

// 开始呼吸逻辑
function startBreathing() {
    if (state.currentCycle >= config.totalCycles) {
        resetSession();
    }

    state.isRunning = true;
    updateUIState(true);
    startPhase('inhale');
}

// 停止呼吸逻辑
function stopBreathing() {
    state.isRunning = false;
    clearTimeout(state.timerId);
    cancelAnimationFrame(state.animationFrameId);
    state.phaseStartTime = null;
    updateUIState(false);
    els.instruction.textContent = "已暂停";
    els.timer.textContent = "--";
    els.statusText.textContent = "已暂停";
    els.statusDot.className = "w-2 h-2 rounded-full bg-yellow-500";
}

// 重置会话
function resetSession() {
    state.currentCycle = 0;
    updateCycleDisplay();
}

// 更新UI状态（按钮、文字）
function updateUIState(isRunning) {
    if (isRunning) {
        els.btnText.textContent = "暂停";
        els.btnIcon.className = "fas fa-pause";
        els.btn.classList.replace('bg-accent', 'bg-red-500');
        els.btn.classList.replace('hover:bg-accent-light', 'hover:bg-red-600');
        els.btn.classList.replace('shadow-accent/30', 'shadow-red-500/30');
        els.settingsBtn.disabled = true;
        els.settingsBtn.classList.add('opacity-50', 'cursor-not-allowed');
        els.statusText.textContent = "练习中...";
        els.statusDot.className = "w-2 h-2 rounded-full bg-green-500 animate-pulse";
    } else {
        els.btnText.textContent = state.currentCycle > 0 ? "继续" : "开始练习";
        els.btnIcon.className = "fas fa-play";
        els.btn.classList.replace('bg-red-500', 'bg-accent');
        els.btn.classList.replace('hover:bg-red-600', 'hover:bg-accent-light');
        els.btn.classList.replace('shadow-red-500/30', 'shadow-accent/30');
        els.settingsBtn.disabled = false;
        els.settingsBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// 开始特定阶段
function startPhase(phase) {
    state.phase = phase;
    state.phaseStartTime = null; // 重置时间记录，在 runTimer 中会设置正确的开始时间
    
    // 设置阶段时长
    switch(phase) {
        case 'inhale':
            state.timeLeft = config.inhale;
            state.totalTimeInPhase = config.inhale;
            els.instruction.textContent = "吸气";
            els.instruction.className = "text-2xl font-bold tracking-widest text-white drop-shadow-md";
            break;
        case 'hold':
            state.timeLeft = config.hold;
            state.totalTimeInPhase = config.hold;
            els.instruction.textContent = "屏息";
            els.instruction.className = "text-2xl font-bold tracking-widest text-accent-light drop-shadow-md";
            break;
        case 'exhale':
            state.timeLeft = config.exhale;
            state.totalTimeInPhase = config.exhale;
            els.instruction.textContent = "呼气";
            els.instruction.className = "text-2xl font-bold tracking-widest text-white drop-shadow-md";
            break;
    }

    runTimer();
}

// 计时器核心逻辑
function runTimer() {
    if (!state.isRunning) return;

    // 记录阶段开始时间（如果还没记录）
    if (!state.phaseStartTime) {
        state.phaseStartTime = Date.now();
    }

    // 计算从阶段开始经过的时间（秒）
    const elapsedTime = (Date.now() - state.phaseStartTime) / 1000;
    
    // 计算剩余时间（用于显示整数秒）
    state.timeLeft = Math.max(0, Math.ceil(state.totalTimeInPhase - elapsedTime));

    // 更新数字显示
    els.timer.textContent = state.timeLeft;

    // 计算进度比例 (0 到 1)，基于实际经过的时间，实现平滑动画
    let progress = elapsedTime / state.totalTimeInPhase;
    progress = Math.min(progress, 1); // 确保不超过 1
    
    // 更新圆环进度
    const offset = CIRCLE_CIRCUMFERENCE - (progress * CIRCLE_CIRCUMFERENCE);
    els.progressRing.style.strokeDashoffset = offset;

    // 更新视觉动画 (缩放)
    updateVisuals(progress);

    if (elapsedTime < state.totalTimeInPhase) {
        state.animationFrameId = requestAnimationFrame(runTimer);
    } else {
        state.phaseStartTime = null; // 重置时间记录
        nextPhase();
    }
}

// 更新视觉圆环的大小和透明度
function updateVisuals(progress) {
    let scale = 1;
    let opacity = 0.8;

    if (state.phase === 'inhale') {
        // 1 -> 1.4 (以圆环内侧为参照)
        scale = 1 + (progress * 0.4);
        opacity = 0.8 + (progress * 0.2);
    } else if (state.phase === 'hold') {
        // 保持 1.4
        scale = 1.4;
        opacity = 1.0;
    } else if (state.phase === 'exhale') {
        // 1.4 -> 1
        scale = 1.4 - (progress * 0.4);
        opacity = 1.0 - (progress * 0.2);
    }

    els.visual.style.transform = `scale(${scale})`;
    els.visual.style.opacity = opacity;
}

// 阶段切换逻辑
function nextPhase() {
    if (state.phase === 'inhale') {
        startPhase('hold');
    } else if (state.phase === 'hold') {
        startPhase('exhale');
    } else if (state.phase === 'exhale') {
        state.currentCycle++;
        updateCycleDisplay();
        
        if (state.currentCycle >= config.totalCycles) {
            completeSession();
        } else {
            startPhase('inhale');
        }
    }
}

// 完成会话
function completeSession() {
    state.isRunning = false;
    updateUIState(false);
    els.instruction.textContent = "完成";
    els.timer.textContent = "🎉";
    els.statusText.textContent = "练习结束";
    els.statusDot.className = "w-2 h-2 rounded-full bg-blue-500";
    els.btnText.textContent = "重新开始";
    resetVisuals();
}

// 重置视觉元素
function resetVisuals() {
    els.visual.style.transform = `scale(1)`;
    els.visual.style.opacity = `0.8`;
    els.progressRing.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
}

// 在 DOM 完全解析后启动
document.addEventListener('DOMContentLoaded', init);
