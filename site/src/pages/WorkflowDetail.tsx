import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { QingyuWorkflowCase } from '../components/QingyuWorkflowCase';

export default function WorkflowDetail() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen px-6 pb-24 pt-10 sm:px-12 lg:px-20 2xl:px-24">
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1560px]">
        <div className="project-detail-header relative z-40 mb-8">
          <button
            type="button"
            className="cyber-btn inline-flex items-center"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回
          </button>
        </div>

        <QingyuWorkflowCase />
      </div>
    </section>
  );
}
