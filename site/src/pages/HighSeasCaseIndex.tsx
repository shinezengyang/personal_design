import { useLayoutEffect, useMemo, useRef } from 'react';
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
    title: '活动-清理海盗',
    desc: '清理海盗主题活动，从入口、任务推进到奖励领取的专题化展示。',
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

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const root = rootRef.current;
    const back = root.querySelector<HTMLElement>('[data-case-back]');
    const featured = root.querySelector<HTMLElement>('[data-case-featured]');
    const featuredImage = featured?.querySelector<HTMLElement>('.high-seas-framework-featured-card__image') ?? null;
    const featuredCopy = featured ? Array.from(featured.querySelectorAll<HTMLElement>('.high-seas-framework-featured-card__body > *')) : [];
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-case-card]'));
    const allAnimated = [
      ...(back ? [back] : []),
      ...(featured ? [featured] : []),
      ...(featuredImage ? [featuredImage] : []),
      ...featuredCopy,
      ...cards,
    ];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(allAnimated, { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      if (back) gsap.set(back, { x: -28, opacity: 0 });
      if (featured) gsap.set(featured, { y: 46, scale: 0.975, opacity: 0 });
      if (featuredImage) gsap.set(featuredImage, { scale: 1.085, filter: 'blur(8px) saturate(0.8)' });
      if (featuredCopy.length) gsap.set(featuredCopy, { y: 24, opacity: 0 });
      gsap.set(cards, { y: 46, rotateX: 5, opacity: 0, transformPerspective: 900 });

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (back) intro.to(back, { x: 0, opacity: 1, duration: 0.48, clearProps: 'transform' }, 0);
      if (featured) intro.to(featured, { y: 0, scale: 1, opacity: 1, duration: 0.78, clearProps: 'transform' }, 0.12);
      if (featuredImage) intro.to(featuredImage, { scale: 1, filter: 'blur(0px) saturate(1)', duration: 1, clearProps: 'transform,filter' }, 0.24);
      if (featuredCopy.length) intro.to(featuredCopy, { y: 0, opacity: 1, duration: 0.52, stagger: 0.1, clearProps: 'transform' }, 0.48);

      const observer = new IntersectionObserver(
        (entries, instance) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const card = entry.target as HTMLElement;
            const index = cards.indexOf(card);
            const media = card.querySelector<HTMLElement>('.high-seas-case-card__media');
            const copy = Array.from(card.querySelectorAll<HTMLElement>('.high-seas-case-card__body > *'));
            if (media) gsap.set(media, { clipPath: 'inset(0 0 100% 0)' });
            if (copy.length) gsap.set(copy, { y: 16, opacity: 0 });

            const delay = (index % 3) * 0.085;
            const cardTimeline = gsap.timeline({ delay });
            cardTimeline.to(card, { y: 0, rotateX: 0, opacity: 1, duration: 0.66, ease: 'power3.out', clearProps: 'transform' });
            if (media) cardTimeline.to(media, { clipPath: 'inset(0 0 0% 0)', duration: 0.62, ease: 'power2.inOut', clearProps: 'clipPath' }, 0.08);
            if (copy.length) cardTimeline.to(copy, { y: 0, opacity: 1, duration: 0.46, stagger: 0.07, ease: 'power2.out', clearProps: 'transform' }, 0.26);
            instance.unobserve(card);
          });
        },
        { threshold: 0.16, rootMargin: '0px 0px -4% 0px' },
      );

      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const openCase = (key: ProjectDetailTabKey) => {
    navigate('/projects/xingji-aodaisai', { state: { detailTab: key } });
  };

  const splitDisplayTitle = (title: string) => {
    const separator = title.indexOf('-');
    return separator >= 0
      ? { prefix: title.slice(0, separator), title: title.slice(separator + 1) }
      : { prefix: '', title };
  };

  return (
    <section ref={rootRef} className="high-seas-index min-h-screen px-6 pb-24 pt-10 sm:px-12 lg:px-20 2xl:px-24">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px]">
        <div className="mb-8 flex items-center justify-between gap-4" data-case-back>
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
            data-case-featured
          >
            <div className="high-seas-framework-featured-card__media">
              <img
                className="high-seas-framework-featured-card__image"
                src={publicUrl('highseas-framework-card.webp')}
                alt="High Seas Hero 项目框架案例封面"
              />
              <div className="high-seas-framework-featured-card__body">
                <h2>{frameworkCase.title}</h2>
                <p>{frameworkCase.desc}</p>
              </div>
              <div className="high-seas-case-card__corner high-seas-case-card__corner--tl" />
              <div className="high-seas-case-card__corner high-seas-case-card__corner--br" />
            </div>
          </button>
        ) : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {caseGrid.map((item, index) => {
            const displayTitle = splitDisplayTitle(item.title);
            return (
              <button
              key={item.key}
              type="button"
              className="high-seas-case-card group text-left"
              onClick={() => openCase(item.key)}
              data-case-card
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
                <div className="high-seas-case-card__heading">
                  <h2>{displayTitle.title}</h2>
                  {displayTitle.prefix ? <span className="high-seas-case-card__category">{displayTitle.prefix}</span> : null}
                </div>
                <p>{item.desc}</p>
              </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
