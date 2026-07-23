import { useEffect, useRef } from 'react';
import { publicUrl } from '../lib/publicUrl';
import './QingyuPartnerExactCase.css';

const partnerCaseImages = [
  '/assets/qingyu-partner/partner-case-1.webp',
  '/assets/qingyu-partner/partner-case-2.webp',
] as const;

export function QingyuPartnerExactCase() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const sections = sectionRefs.current.filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return undefined;

    sections.forEach((section) => section.classList.remove('is-partner-visible'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-partner-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-partner-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="partner-case-canvas" data-node-id="9817:16780">
      {partnerCaseImages.map((src, index) => (
        <section
          className={`partner-case-section partner-motion-section partner-motion-section-${index + 1}`}
          key={src}
          ref={(node) => {
            sectionRefs.current[index] = node;
          }}
        >
          <div className="partner-case-frame">
            <div className="partner-case-wash" aria-hidden="true" />
            <img
              src={publicUrl(src)}
              alt={index === 0 ? '伙伴系统体验优化作品集上半部分' : '伙伴系统体验优化作品集下半部分'}
              className="partner-case-image"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
