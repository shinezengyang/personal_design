import { useEffect, useMemo, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Boxes, Gem, Landmark, Sparkles, Swords, Users } from 'lucide-react';
import { gsap } from 'gsap';

import { QINGYU_PROJECT_DETAIL_TABS, type ProjectDetailTabKey } from '../components/ProjectDetailTabViews';
import './HighSeasCaseIndex.css';
import './QingyuCaseIndex.css';

type QingyuCaseCard = {
  key: ProjectDetailTabKey;
  title: string;
  desc: string;
};

const QINGYU_CASES: QingyuCaseCard[] = [
  {
    key: 'framework',
    title: '框架',
    desc: '从玩家画像、范围层、结构层到界面承载层，整理庆余年的整体系统框架。',
  },
  {
    key: '2',
    title: '系统-房屋',
    desc: '围绕房屋布置、家具摆放、宠物抓捕与制造管理建立完整家园链路。',
  },
  {
    key: '4',
    title: '系统-金兰结义',
    desc: '从结义创建、招募、成员管理到任务副本，完成多人关系系统设计。',
  },
  {
    key: '20',
    title: '系统-伙伴',
    desc: '围绕伙伴主界面、养成、情感与收集线，整理 11 个子系统的整体体验优化。',
  },
  {
    key: '17',
    title: '系统-图鉴收集',
    desc: '整理图鉴收集、激活、筛选、求助与奖励反馈的收集型系统路径。',
  },
  {
    key: '19',
    title: '系统-帮派',
    desc: '拆解帮派创建、加入、成员、活动、福利与管理的组织系统结构。',
  },
  {
    key: '3',
    title: '养成-天脉',
    desc: '用材料循环、合成拆分和风险控制串联天脉养成的核心闭环。',
  },
  {
    key: '5',
    title: '养成-绣身',
    desc: '围绕星图节点、装配升级和阶段反馈，呈现绣身系统的成长路径。',
  },
  {
    key: '6',
    title: '养成-绝学',
    desc: '以主辅绝学、重数阶梯和招式联动构建武学养成体验。',
  },
  {
    key: '14',
    title: '养成-宝石镶嵌',
    desc: '梳理宝石孔位、属性提升、合成替换和装备联动的养成结构。',
  },
  {
    key: '10',
    title: '养成-三才',
    desc: '通过日月星辰结构、分解兑换和品阶系统建立三才养成循环。',
  },
  {
    key: '7',
    title: '玩法-绝境试炼',
    desc: '展示挑战入口、关卡条件、战斗反馈和奖励结算的试炼玩法链路。',
  },
  {
    key: '8',
    title: '玩法-边境战场',
    desc: '围绕个人关卡、公共组队、增益选择和限时 Boss 组织活动节奏。',
  },
  {
    key: '9',
    title: '玩法-婚礼结缘',
    desc: '从吉宴排期、受邀入场、婚礼现场到三生石展示完整结缘体验。',
  },
  {
    key: '11',
    title: '玩法-清泉沐浴',
    desc: '围绕双入口、报名投票、加冕结算和心流曲线呈现活动体验。',
  },
  {
    key: '13',
    title: '玩法-神庙遗迹',
    desc: '拆解遗迹探索、事件触发、奖励反馈和美术包装的玩法表达。',
  },
  {
    key: '16',
    title: '玩法-情报簿',
    desc: '整理线索收集、情报推进、状态提示和结果反馈的探索玩法。',
  },
  {
    key: '18',
    title: '玩法-惩凶除恶',
    desc: '围绕追捕目标、任务推进、状态变化和奖励回流设计玩法闭环。',
  },
  {
    key: '12',
    title: '活动-回流召回',
    desc: '用召回码、双端视角、互惠奖励和七天活跃日历组织回流体验。',
  },
  {
    key: '15',
    title: '活动-荣耀赛季',
    desc: '从赛季目标、奖励预览、成长路径到付费导购整理活动结构。',
  },
];

export default function QingyuCaseIndex() {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const cases = useMemo(() => {
    const labels = new Map(QINGYU_PROJECT_DETAIL_TABS.map((tab) => [tab.key, tab.label]));
    return QINGYU_CASES.map((item) => ({ ...item, title: labels.get(item.key) ?? item.title }));
  }, []);
  const frameworkCase = cases.find((item) => item.key === 'framework') ?? cases[0];
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
    navigate('/projects/qingyu-nian', { state: { detailTab: key } });
  };

  const fallbackIcon = (index: number) => {
    const icons = [Landmark, Swords, Gem, Users, BookOpen, Boxes, Sparkles];
    const Icon = icons[index % icons.length];
    return <Icon />;
  };

  const splitDisplayTitle = (title: string) => {
    const separator = title.indexOf('-');
    return separator >= 0
      ? { prefix: title.slice(0, separator), title: title.slice(separator + 1) }
      : { prefix: '', title };
  };

  return (
    <section ref={rootRef} className="high-seas-index qingyu-case-index min-h-screen px-6 pb-24 pt-10 sm:px-12 lg:px-20 2xl:px-24">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px]">
        <div className="case-index-toolbar mb-8 flex items-center justify-between gap-4" data-case-reveal>
          <Link to="/" className="cyber-btn inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回
          </Link>
          <h1 className="case-index-project-name">庆余年</h1>
        </div>

        <button
          type="button"
          className="qingyu-framework-featured-card group text-left"
          onClick={() => openCase(frameworkCase.key)}
          data-case-reveal
        >
          <div className="qingyu-framework-featured-card__media">
            <img
              className="qingyu-framework-featured-card__image"
              src="/qingyu-framework-card.webp"
              alt="框架案例卡片图"
              loading="lazy"
              decoding="async"
            />
            <div className="qingyu-framework-featured-card__body">
              <h2>{frameworkCase.title}</h2>
              <p>{frameworkCase.desc}</p>
            </div>
            <div className="high-seas-case-card__corner high-seas-case-card__corner--tl" />
            <div className="high-seas-case-card__corner high-seas-case-card__corner--br" />
          </div>
        </button>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3" data-case-reveal>
          {caseGrid.map((item, index) => {
            const displayTitle = splitDisplayTitle(item.title);
            return (
              <button
              key={item.key}
              type="button"
              className="high-seas-case-card qingyu-case-card group text-left"
              onClick={() => openCase(item.key)}
              data-case-reveal
            >
              <div className="high-seas-case-card__media high-seas-case-card__media--flat">
                {item.key === '2' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-house-card.webp" alt="系统-房屋案例卡片图" />
                ) : item.key === '4' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-jinlan-card.webp" alt="系统-金兰结义案例卡片图" />
                ) : item.key === '20' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-partner-card-new.png" alt="系统-伙伴案例卡片图" />
                ) : item.key === '17' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-atlas-card.webp" alt="系统-图鉴收集案例卡片图" />
                ) : item.key === '19' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-guild-card.webp" alt="系统-帮派案例卡片图" />
                ) : item.key === '3' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-tianmai-card.webp" alt="养成-天脉案例卡片图" />
                ) : item.key === '5' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-xiushen-card.webp" alt="养成-绣身案例卡片图" />
                ) : item.key === '6' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-juexue-card.webp" alt="养成-绝学案例卡片图" />
                ) : item.key === '14' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-gem-card.webp" alt="养成-宝石镶嵌案例卡片图" />
                ) : item.key === '7' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-juejing-card.webp" alt="玩法-绝境试炼案例卡片图" />
                ) : item.key === '8' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-bianjing-card.webp" alt="玩法-边境战场案例卡片图" />
                ) : item.key === '9' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-wedding-card.webp" alt="玩法-婚礼结缘案例卡片图" />
                ) : item.key === '10' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-sancai-card.webp" alt="养成-三才案例卡片图" />
                ) : item.key === '11' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-qingquan-card.webp" alt="玩法-清泉沐浴案例卡片图" />
                ) : item.key === '13' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-temple-card.webp" alt="玩法-神庙遗迹案例卡片图" />
                ) : item.key === '16' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-intel-card.webp" alt="玩法-情报簿案例卡片图" />
                ) : item.key === '18' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-chengxiong-card.webp" alt="玩法-惩凶除恶案例卡片图" />
                ) : item.key === '12' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-recall-card.webp" alt="活动-回流召回案例卡片图" />
                ) : item.key === '15' ? (
                  <img className="qingyu-case-card__cover-image" loading="lazy" decoding="async" src="/qingyu-glory-card.webp" alt="活动-荣耀赛季案例卡片图" />
                ) : (
                  <div className={`case-flat-visual qingyu-flat-visual case-flat-visual--${index % 6}`}>
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
                      {fallbackIcon(index)}
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
