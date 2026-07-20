import { publicUrl } from '../lib/publicUrl';
import './QingyuPartnerExactCase.css';

const partnerCaseImages = [
  '/assets/qingyu-partner/partner-case-1.webp',
  '/assets/qingyu-partner/partner-case-2.webp',
] as const;

export function QingyuPartnerExactCase() {
  return (
    <div className="partner-case-canvas" data-node-id="9817:16780">
      {partnerCaseImages.map((src, index) => (
        <section className="partner-case-section" key={src}>
          <img
            src={publicUrl(src)}
            alt={index === 0 ? '伙伴系统体验优化作品集上半部分' : '伙伴系统体验优化作品集下半部分'}
            className="partner-case-image"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </section>
      ))}
    </div>
  );
}
