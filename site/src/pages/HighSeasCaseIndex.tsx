import { useEffect, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass, Layers, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

import { PROJECT_DETAIL_TABS, type ProjectDetailTabKey } from '../components/ProjectDetailTabViews';
import { publicUrl } from '../lib/publicUrl';
import './HighSeasCaseIndex.css';

type HighSeasCaseCard = {
  key: ProjectDetailTabKey;
  title: string;
  desc: string;
  meta: string;
  image?: string;
};

const HIGH_SEAS_CASES: HighSeasCaseCard[] = [
  {
    key: 'framework',
    title: '项目框架',
    desc: '从玩家画像、范围层、结构层到框架层，梳理 High Seas Hero 的整体交互设计方法。',
    meta: '方法论 / 总览',
  },
  {
    key: '7',
    title: '系统-HUD',
    desc: '重新整理主界面信息密度、常驻入口和战斗反馈，让 HUD 更清晰、轻量。',
    meta: '系统设计',
    image: 'highseas-hud-card.webp',
  },
  {
    key: '2',
    title: '系统-阵容推荐',
    desc: '用推荐逻辑降低编队门槛，让新手也能快速理解阵容选择。',
    meta: '系统设计',
    image: 'highseas-formation-card.webp',
  },
  {
    key: '3',
    title: '系统-坐标收藏',
    desc: '优化地图标记、收藏和复用路径，提升大地图定位效率。',
    meta: '系统设计',
    image: 'highseas-coordinate-card.webp',
  },
  {
    key: '4',
    title: '系统-野外交互',
    desc: '把野外建筑、部队、资源点等操作归入统一交互框架。',
    meta: '系统设计',
    image: 'highseas-field-card.webp',
  },
  {
    key: '6',
    title: '系统-跨服海战',
    desc: '围绕跨服海域、行军、战斗和奖励反馈，建立清晰的海战流程。',
    meta: '系统设计',
    image: 'highseas-crossserver-card.webp',
  },
  {
    key: '5',
    title: '玩法-海军试炼',
    desc: '展示多难度挑战、个人/联盟试炼、地图怪物和奖励结算的完整玩法链路。',
    meta: '玩法设计',
    image: 'highseas-naval-card.webp',
  },
  {
    key: '9',
    title: '玩法-燃海矿区',
    desc: '围绕限时矿区、采集、争夺和结算，建立强目标感的活动循环。',
    meta: '玩法设计',
    image: 'highseas-embermine-card.webp',
  },
  {
    key: '8',
    title: '活动-许愿树',
    desc: '用低门槛抽奖、奖励预览和结果反馈，完成轻量运营活动包装。',
    meta: '活动设计',
    image: 'highseas-wishing-tree-card.webp',
  },
  {
    key: '10',
    title: '活动-清理帮派',
    desc: '清理帮派主题活动，从入口、任务推进到奖励领取的专题化展示。',
    meta: '活动设计',
    image: 'highseas-clear-gang-card.webp',
  },
];

export default function HighSeasCaseIndex() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const cases = useMemo(() => {
    const labels = new Map(PROJECT_DETAIL_TABS.map((tab) => [tab.key, tab.label]));
    return HIGH_SEAS_CASES.map((item) => ({ ...item, title: labels.get(item.key) ?? item.title }));
  }, []);
  const frameworkCase = cases.find((item) => item.key === 'framework');
  const caseGrid = cases.filter((item) => item.key !== 'framework');

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-case-reveal]',
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.72, stagger: 0.055, ease: 'expo.out' }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const openCase = (key: ProjectDetailTabKey) => {
    navigate('/projects/xingji-aodaisai', { state: { detailTab: key } });
  };

  return (
    <section ref={rootRef} className="high-seas-index min-h-screen px-6 pb-24 pt-10 sm:px-12 lg:px-20 2xl:px-24">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px]">
        <div className="mb-8 flex items-center justify-between gap-4" data-case-reveal>
          <Link to="/" className="cyber-btn inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回
          </Link>
        </div>

        {frameworkCase ? (
          <button
            type="button"
            className="high-seas-framework-featured-card group text-left"
            onClick={() => openCase(frameworkCase.key)}
            data-case-reveal
          >
            <div className="high-seas-framework-featured-card__media">
              <div className="case-flat-visual high-seas-framework-visual">
                <div className="case-flat-visual__grid" />
                <div className="case-flat-visual__orb case-flat-visual__orb--one" />
                <div className="case-flat-visual__orb case-flat-visual__orb--two" />
                <div className="case-flat-visual__path" />
                <div className="case-flat-visual__nodes">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="case-flat-visual__icon">
                  <Layers />
                </div>
              </div>
              <div className="high-seas-framework-featured-card__body">
                <h2>{frameworkCase.title}</h2>
                <p>{frameworkCase.desc}</p>
              </div>
              <div className="high-seas-case-card__corner high-seas-case-card__corner--tl" />
              <div className="high-seas-case-card__corner high-seas-case-card__corner--br" />
            </div>
          </button>
        ) : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3" data-case-reveal>
          {caseGrid.map((item, index) => (
            <button
              key={item.key}
              type="button"
              className="high-seas-case-card group text-left"
              onClick={() => openCase(item.key)}
              data-case-reveal
            >
              <div className={`high-seas-case-card__media ${item.image ? 'high-seas-case-card__media--image' : 'high-seas-case-card__media--flat'}`}>
                {item.image ? (
                  <img src={publicUrl(item.image)} alt={`${item.title} 案例封面`} loading="lazy" />
                ) : (
                  <div className={`case-flat-visual case-flat-visual--${index % 6}`}>
                    <div className="case-flat-visual__grid" />
                    <div className="case-flat-visual__orb case-flat-visual__orb--one" />
                    <div className="case-flat-visual__orb case-flat-visual__orb--two" />
                    <div className="case-flat-visual__path" />
                    <div className="case-flat-visual__nodes">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="case-flat-visual__icon">
                      {index % 3 === 0 ? <Layers /> : index % 3 === 1 ? <Compass /> : <Sparkles />}
                    </div>
                  </div>
                )}
                <div className="high-seas-case-card__corner high-seas-case-card__corner--tl" />
                <div className="high-seas-case-card__corner high-seas-case-card__corner--br" />
              </div>
              <div className="high-seas-case-card__body">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
