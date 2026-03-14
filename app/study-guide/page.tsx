'use client';

import { useState, useMemo, useEffect } from 'react';
import { STUDY_SECTIONS, EXAM_FACTS, STUDY_TIPS, QUIZ_QUESTIONS, MNEMONICS, EXAM_TRAPS, NUMBERS_CHEAT_SHEET } from '@/data/studyGuide';
import type { StudySection, Topic, QuizQuestion } from '@/data/studyGuide';
import styles from './StudyGuide.module.css';

/* ───────── Auth Gate ───────── */
const AUTH_KEY = 'pwb_partner_auth';

function useAuth() {
    const [authed, setAuthed] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setAuthed(sessionStorage.getItem(AUTH_KEY) === 'true');
        setHydrated(true);
    }, []);

    const login = (user: string, pass: string): boolean => {
        if (user.toLowerCase().trim() === 'brianna' && pass === 'tylerlovesme') {
            sessionStorage.setItem(AUTH_KEY, 'true');
            setAuthed(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        sessionStorage.removeItem(AUTH_KEY);
        setAuthed(false);
    };

    return { authed, hydrated, login, logout };
}

function LoginGate({ onLogin }: { onLogin: (u: string, p: string) => boolean }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const ok = onLogin(username, password);
        if (!ok) {
            setError('Invalid credentials. Please try again.');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <main className={styles.page}>
            <div className={styles.loginBackdrop}>
                <div className={`${styles.loginCard} ${shake ? styles.loginShake : ''}`}>
                    <div className={styles.loginIcon}>🔐</div>
                    <h1 className={styles.loginTitle}>Partner Access</h1>
                    <p className={styles.loginSub}>
                        This study guide is exclusively for licensed partners.
                        <br />Enter your credentials to continue.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <div className={styles.loginField}>
                            <label htmlFor="login-user" className={styles.loginLabel}>Username</label>
                            <input
                                id="login-user"
                                type="text"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                                className={styles.loginInput}
                                placeholder="Enter your username"
                                autoComplete="username"
                                autoFocus
                            />
                        </div>
                        <div className={styles.loginField}>
                            <label htmlFor="login-pass" className={styles.loginLabel}>Password</label>
                            <input
                                id="login-pass"
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                className={styles.loginInput}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />
                        </div>
                        {error && <p className={styles.loginError}>{error}</p>}
                        <button type="submit" className={`btn btn--primary ${styles.loginBtn}`}>
                            Sign In
                        </button>
                    </form>
                    <p className={styles.loginFooter}>
                        Need access? <a href="mailto:brianna@protectwithbri.com" className={styles.loginLink}>Contact Brianna</a>
                    </p>
                </div>
            </div>
        </main>
    );
}

/* ───────── Progress Tracking ───────── */
function useProgress() {
    const [completed, setCompleted] = useState<Set<string>>(new Set());

    const toggle = (topicId: string) => {
        setCompleted((prev) => {
            const next = new Set(prev);
            if (next.has(topicId)) next.delete(topicId);
            else next.add(topicId);
            return next;
        });
    };

    const totalTopics = STUDY_SECTIONS.reduce((sum, s) => sum + s.topics.length, 0);
    const pct = totalTopics ? Math.round((completed.size / totalTopics) * 100) : 0;

    return { completed, toggle, pct, totalTopics, completedCount: completed.size };
}

/* ───────── Quiz Component ───────── */
function QuizMode({ sectionId }: { sectionId?: string }) {
    const [shuffleKey, setShuffleKey] = useState(0);
    const questions = useMemo(() => {
        const pool = sectionId
            ? QUIZ_QUESTIONS.filter((q) => q.sectionId === sectionId)
            : [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
        return pool;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionId, shuffleKey]);

    const [currentIdx, setCurrentIdx] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [answeredHistory, setAnsweredHistory] = useState<boolean[]>([]);

    if (questions.length === 0) return <p className={styles.quizEmpty}>No questions available for this section.</p>;

    const q = questions[currentIdx];
    const isLast = currentIdx >= questions.length - 1;
    const isDone = score.total >= questions.length && isLast && showAnswer;
    const progressPct = Math.round(((currentIdx + (showAnswer ? 1 : 0)) / questions.length) * 100);
    const scorePct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    const passed = scorePct >= 70;

    const handleSelect = (idx: number) => {
        if (showAnswer) return;
        setSelected(idx);
    };

    const handleCheck = () => {
        if (selected === null) return;
        setShowAnswer(true);
        const isCorrect = selected === q.correctIndex;
        setScore((prev) => ({
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1,
        }));
        setAnsweredHistory((prev) => [...prev, isCorrect]);
        if (isCorrect) {
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) setBestStreak(newStreak);
        } else {
            setStreak(0);
        }
    };

    const handleNext = () => {
        if (isLast) return;
        setCurrentIdx((i) => i + 1);
        setSelected(null);
        setShowAnswer(false);
    };

    const handleRestart = () => {
        setCurrentIdx(0);
        setSelected(null);
        setShowAnswer(false);
        setScore({ correct: 0, total: 0 });
        setStreak(0);
        setBestStreak(0);
        setAnsweredHistory([]);
        setShuffleKey((k) => k + 1);
    };

    /* Final results screen */
    if (isDone) {
        const missedQuestions = questions.filter((_, i) => !answeredHistory[i]);
        return (
            <div className={styles.quizWrap}>
                <div className={styles.quizResultsCard}>
                    <div className={styles.quizResultsEmoji}>
                        {passed ? (scorePct >= 90 ? '🏆' : scorePct >= 80 ? '🎉' : '✅') : '📖'}
                    </div>
                    <h3 className={styles.quizResultsTitle}>
                        {passed ? (scorePct >= 90 ? 'Outstanding!' : scorePct >= 80 ? 'Great Job!' : 'You Passed!') : 'Keep Studying!'}
                    </h3>
                    <div className={styles.quizResultsScoreRing}>
                        <svg viewBox="0 0 100 100" className={styles.quizScoreRingSvg}>
                            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--clr-border, #e0e0e0)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="42" fill="none"
                                stroke={passed ? 'var(--clr-success, #22c55e)' : 'var(--clr-warning, #f59e0b)'}
                                strokeWidth="8" strokeLinecap="round"
                                strokeDasharray={`${scorePct * 2.64} 264`}
                                transform="rotate(-90 50 50)" />
                        </svg>
                        <span className={styles.quizScoreRingText}>{scorePct}%</span>
                    </div>
                    <div className={styles.quizResultsStats}>
                        <div className={styles.quizResultsStat}>
                            <span className={styles.quizStatValue}>{score.correct}</span>
                            <span className={styles.quizStatLabel}>Correct</span>
                        </div>
                        <div className={styles.quizResultsStat}>
                            <span className={styles.quizStatValue}>{score.total - score.correct}</span>
                            <span className={styles.quizStatLabel}>Missed</span>
                        </div>
                        <div className={styles.quizResultsStat}>
                            <span className={styles.quizStatValue}>{bestStreak}</span>
                            <span className={styles.quizStatLabel}>Best Streak</span>
                        </div>
                    </div>
                    <p className={styles.quizResultsSub}>
                        {passed
                            ? `You scored above 70% — that's passing on the real exam. ${scorePct >= 90 ? 'You\'re exam-ready!' : 'Keep reviewing to get even higher.'}`
                            : `The passing score is 70%. Review the sections you missed and try again — you've got this!`}
                    </p>

                    {missedQuestions.length > 0 && (
                        <div className={styles.quizMissedSection}>
                            <h4 className={styles.quizMissedTitle}>📝 Questions to Review</h4>
                            <ul className={styles.quizMissedList}>
                                {missedQuestions.map((mq) => (
                                    <li key={mq.id} className={styles.quizMissedItem}>
                                        <span className={styles.quizMissedQ}>{mq.question}</span>
                                        <span className={styles.quizMissedA}>
                                            ✓ {mq.options[mq.correctIndex]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <button className={`btn btn--primary ${styles.quizBtn}`} onClick={handleRestart}>
                        🔄 Retake Quiz (Shuffled)
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.quizWrap}>
            {/* Progress bar */}
            <div className={styles.quizProgressBar}>
                <div className={styles.quizProgressFill} style={{ width: `${progressPct}%` }} />
            </div>

            <div className={styles.quizProgress}>
                <span>Question {currentIdx + 1} of {questions.length}</span>
                <span className={styles.quizMeta}>
                    {streak >= 3 && <span className={styles.quizStreak}>🔥 {streak} streak</span>}
                    {score.total > 0 && (
                        <span className={styles.quizScore}>
                            {score.correct}/{score.total} ({scorePct}%)
                        </span>
                    )}
                </span>
            </div>

            <p className={styles.quizQuestion}>{q.question}</p>

            <div className={styles.quizOptions}>
                {q.options.map((opt, i) => {
                    let cls = styles.quizOption;
                    if (showAnswer && i === q.correctIndex) cls += ` ${styles.quizCorrect}`;
                    if (showAnswer && i === selected && i !== q.correctIndex) cls += ` ${styles.quizWrong}`;
                    if (!showAnswer && i === selected) cls += ` ${styles.quizSelected}`;
                    return (
                        <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={showAnswer}>
                            <span className={styles.quizLetter}>{String.fromCharCode(65 + i)}</span>
                            {opt}
                        </button>
                    );
                })}
            </div>

            {showAnswer && (
                <div className={`${styles.quizExplanation} ${selected === q.correctIndex ? styles.quizExplanationCorrect : styles.quizExplanationWrong}`}>
                    <strong>{selected === q.correctIndex ? '✓ Correct!' : `✗ Incorrect — the answer is ${String.fromCharCode(65 + q.correctIndex)}.`}</strong>
                    <p>{q.explanation}</p>
                </div>
            )}

            <div className={styles.quizActions}>
                {!showAnswer ? (
                    <button className={`btn btn--primary ${styles.quizBtn}`} onClick={handleCheck} disabled={selected === null}>
                        Check Answer
                    </button>
                ) : (
                    <button className={`btn btn--primary ${styles.quizBtn}`} onClick={handleNext}>
                        Next Question →
                    </button>
                )}
            </div>
        </div>
    );
}

/* ───────── Topic Accordion ───────── */
function TopicCard({
    sectionId,
    topic,
    index,
    isCompleted,
    onToggleComplete,
}: {
    sectionId: string;
    topic: Topic;
    index: number;
    isCompleted: boolean;
    onToggleComplete: () => void;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.topic} ${open ? styles.topicOpen : ''} ${isCompleted ? styles.topicDone : ''}`}>
            <button className={styles.topicHeader} onClick={() => setOpen(!open)} aria-expanded={open ? 'true' : 'false'}>
                <span className={styles.topicTitle}>
                    <span className={styles.topicIndex}>{String(index + 1).padStart(2, '0')}</span>
                    {topic.title}
                </span>
                <span className={styles.topicChevron} aria-hidden="true">
                    {open ? '−' : '+'}
                </span>
            </button>

            {open && (
                <div className={styles.topicBody}>
                    {topic.content.map((item, i) => (
                        <div key={i} className={styles.contentItem}>
                            <p className={styles.contentText}>{item.text}</p>
                            {item.sub && (
                                <ul className={styles.subList}>
                                    {item.sub.map((s, j) => (
                                        <li key={j} className={styles.subItem}>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <button
                        className={`${styles.markBtn} ${isCompleted ? styles.markBtnDone : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleComplete();
                        }}
                    >
                        {isCompleted ? '✓  Reviewed' : '○  Mark as Reviewed'}
                    </button>
                </div>
            )}
        </div>
    );
}

/* ───────── Section Panel ───────── */
function SectionPanel({
    section,
    isActive,
    onActivate,
    completed,
    onToggle,
}: {
    section: StudySection;
    isActive: boolean;
    onActivate: () => void;
    completed: Set<string>;
    onToggle: (id: string) => void;
}) {
    const [showQuiz, setShowQuiz] = useState(false);
    const sectionCompleted = section.topics.filter((_, i) => completed.has(`${section.id}-${i}`)).length;
    const sectionQuestions = QUIZ_QUESTIONS.filter((q) => q.sectionId === section.id);

    return (
        <div className={`${styles.sectionCard} ${isActive ? styles.sectionActive : ''}`}>
            <button className={styles.sectionHeader} onClick={onActivate}>
                <div className={styles.sectionLeft}>
                    <span className={styles.sectionIcon}>{section.icon}</span>
                    <div>
                        <span className={styles.sectionNumber}>{section.number}</span>
                        <h3 className={styles.sectionTitle}>{section.title}</h3>
                    </div>
                </div>
                <div className={styles.sectionRight}>
                    <span className={styles.sectionProgress}>
                        {sectionCompleted}/{section.topics.length}
                    </span>
                    <span className={`${styles.sectionArrow} ${isActive ? styles.sectionArrowOpen : ''}`}>›</span>
                </div>
            </button>

            {isActive && (
                <div className={styles.sectionBody}>
                    <p className={styles.sectionDesc}>{section.description}</p>

                    {/* Toggle between study & quiz */}
                    <div className={styles.modeToggle}>
                        <button
                            className={`${styles.modeBtn} ${!showQuiz ? styles.modeBtnActive : ''}`}
                            onClick={() => setShowQuiz(false)}
                        >
                            📖 Study
                        </button>
                        {sectionQuestions.length > 0 && (
                            <button
                                className={`${styles.modeBtn} ${showQuiz ? styles.modeBtnActive : ''}`}
                                onClick={() => setShowQuiz(true)}
                            >
                                ❓ Quiz ({sectionQuestions.length})
                            </button>
                        )}
                    </div>

                    {showQuiz ? (
                        <QuizMode sectionId={section.id} />
                    ) : (
                        section.topics.map((topic, i) => (
                            <TopicCard
                                key={i}
                                sectionId={section.id}
                                topic={topic}
                                index={i}
                                isCompleted={completed.has(`${section.id}-${i}`)}
                                onToggleComplete={() => onToggle(`${section.id}-${i}`)}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

/* ───────── Tab Navigation ───────── */
type Tab = 'study' | 'quiz' | 'mnemonics' | 'traps' | 'numbers';

/* ───────── Main Page ───────── */
export default function StudyGuidePage() {
    const { authed, hydrated, login, logout } = useAuth();
    const { completed, toggle, pct, totalTopics, completedCount } = useProgress();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<Tab>('study');

    const tabs: { id: Tab; label: string; icon: string }[] = [
        { id: 'study', label: 'Study Guide', icon: '📖' },
        { id: 'quiz', label: 'Full Practice Exam', icon: '❓' },
        { id: 'mnemonics', label: 'Mnemonics', icon: '🧠' },
        { id: 'traps', label: 'Exam Traps', icon: '⚠️' },
        { id: 'numbers', label: 'Numbers Cheat Sheet', icon: '#️⃣' },
    ];

    /* Wait for hydration to avoid flash */
    if (!hydrated) return null;

    /* Show login gate if not authenticated */
    if (!authed) return <LoginGate onLogin={login} />;

    return (
        <main className={styles.page}>
            {/* Hero */}
            <header className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.heroLabel}>Study Guide</p>
                    <h1 className={styles.heroTitle}>
                        Georgia Life &amp; Health
                        <br />
                        <em>Insurance License Exam</em>
                    </h1>
                    <p className={styles.heroSub}>
                        Everything you need to pass the Georgia Life, Accident &amp; Sickness exam — organized,
                        clear, and in plain English.
                    </p>
                    <button className={styles.logoutBtn} onClick={logout} aria-label="Sign out">
                        🔓 Sign Out
                    </button>
                </div>
            </header>

            <div className={styles.container}>
                {/* Progress Bar */}
                <div className={styles.progressCard}>
                    <div className={styles.progressTop}>
                        <h2 className={styles.progressTitle}>Your Progress</h2>
                        <span className={styles.progressPct}>{pct}%</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
                    </div>
                    <p className={styles.progressSub}>
                        {completedCount} of {totalTopics} topics reviewed
                    </p>
                </div>

                {/* Tab Navigation */}
                <nav className={styles.tabNav}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className={styles.tabIcon}>{tab.icon}</span>
                            <span className={styles.tabLabel}>{tab.label}</span>
                        </button>
                    ))}
                </nav>

                {/* ═══ Tab: Study Guide ═══ */}
                {activeTab === 'study' && (
                    <>
                        {/* Exam Quick Facts */}
                        <div className={styles.factsCard}>
                            <h2 className={styles.factsTitle}>📋 Exam Quick Facts</h2>
                            <div className={styles.factsGrid}>
                                {Object.entries(EXAM_FACTS).map(([key, val]) => (
                                    <div key={key} className={styles.factItem}>
                                        <span className={styles.factLabel}>
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                                        </span>
                                        <span className={styles.factValue}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Study Tips */}
                        <div className={styles.tipsCard}>
                            <h2 className={styles.tipsTitle}>💡 Study Strategy Tips</h2>
                            <ul className={styles.tipsList}>
                                {STUDY_TIPS.map((tip, i) => (
                                    <li key={i} className={styles.tipItem}>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sections */}
                        <h2 className={styles.sectionsHeading}>Study Sections</h2>
                        <div className={styles.sections}>
                            {STUDY_SECTIONS.map((section) => (
                                <SectionPanel
                                    key={section.id}
                                    section={section}
                                    isActive={activeSection === section.id}
                                    onActivate={() =>
                                        setActiveSection(activeSection === section.id ? null : section.id)
                                    }
                                    completed={completed}
                                    onToggle={toggle}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* ═══ Tab: Full Practice Exam ═══ */}
                {activeTab === 'quiz' && (
                    <div className={styles.fullQuizCard}>
                        <h2 className={styles.factsTitle}>❓ Full Practice Exam</h2>
                        <p className={styles.sectionDesc}>
                            {QUIZ_QUESTIONS.length} questions covering all 8 sections — randomized order. Aim for 70% or higher to simulate a passing score.
                        </p>
                        <QuizMode />
                    </div>
                )}

                {/* ═══ Tab: Mnemonics ═══ */}
                {activeTab === 'mnemonics' && (
                    <div className={styles.mnemonicsWrap}>
                        <h2 className={styles.sectionsHeading}>🧠 Memory Aids &amp; Mnemonics</h2>
                        <p className={styles.mnemonicsSub}>These mental shortcuts will help you recall key lists and rules on exam day.</p>
                        <div className={styles.mnemonicsList}>
                            {MNEMONICS.map((mn) => (
                                <div key={mn.id} className={styles.mnemonicCard}>
                                    <div className={styles.mnemonicHeader}>
                                        <span className={styles.mnemonicLetters}>{mn.letters}</span>
                                        <h3 className={styles.mnemonicName}>{mn.name}</h3>
                                    </div>
                                    <ul className={styles.mnemonicItems}>
                                        {mn.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className={styles.mnemonicContext}>{mn.context}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ═══ Tab: Exam Traps ═══ */}
                {activeTab === 'traps' && (
                    <div className={styles.trapsWrap}>
                        <h2 className={styles.sectionsHeading}>⚠️ Exam Traps &amp; Tricky Distinctions</h2>
                        <p className={styles.mnemonicsSub}>
                            These are the most commonly missed questions. The exam specifically tests these confusing distinctions.
                        </p>
                        <div className={styles.trapsList}>
                            {EXAM_TRAPS.map((trap) => (
                                <div key={trap.id} className={styles.trapCard}>
                                    <h3 className={styles.trapTitle}>{trap.title}</h3>
                                    <div className={styles.trapBody}>
                                        <div className={styles.trapSection}>
                                            <span className={styles.trapLabel}>🚩 The Trap</span>
                                            <p>{trap.trap}</p>
                                        </div>
                                        <div className={styles.trapSection}>
                                            <span className={styles.trapLabelCorrect}>✅ The Correct Answer</span>
                                            <p>{trap.correct}</p>
                                        </div>
                                        <div className={styles.trapSection}>
                                            <span className={styles.trapLabelTip}>💡 Quick Tip</span>
                                            <p>{trap.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ═══ Tab: Numbers Cheat Sheet ═══ */}
                {activeTab === 'numbers' && (
                    <div className={styles.numbersWrap}>
                        <h2 className={styles.sectionsHeading}>#️⃣ Numbers You Must Memorize</h2>
                        <p className={styles.mnemonicsSub}>
                            Every number, time limit, dollar amount, and threshold the exam tests. Print this page and study it the night before.
                        </p>
                        <div className={styles.numbersList}>
                            {NUMBERS_CHEAT_SHEET.map((cat, i) => (
                                <div key={i} className={styles.numberCategory}>
                                    <h3 className={styles.numberCatTitle}>{cat.category}</h3>
                                    <div className={styles.numberItems}>
                                        {cat.items.map((item, j) => (
                                            <div key={j} className={styles.numberRow}>
                                                <span className={styles.numberValue}>{item.number}</span>
                                                <span className={styles.numberMeaning}>{item.meaning}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Home */}
                <div className={styles.backWrap}>
                    <a href="/" className={styles.backLink}>
                        ← Back to ProtectWithBri.com
                    </a>
                </div>
            </div>
        </main>
    );
}
