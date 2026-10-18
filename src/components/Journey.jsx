import React from 'react';
import { Compass, GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

export const Journey = ({ data, lang }) => {
  const { journey } = data;

  const milestoneIcons = [
    <GraduationCap key="edu" size={18} color="#2563eb" />,
    <Briefcase key="work" size={18} color="#2563eb" />,
    <Award key="present" size={18} color="#2563eb" />,
  ];

  return (
    <section className="ribbon-section" id="journey">
      <div className="ribbon-container">
        {/* Section Eyebrow */}
        <div className="section-eyebrow eyebrow-light">
          <Compass size={14} />
          <span>{journey.badge[lang]}</span>
        </div>

        {/* Heading */}
        <h2 className="ribbon-heading">
          {journey.title[lang]}{' '}
          <span className="ribbon-heading-italic">
            {journey.titleAccent[lang]}
          </span>
        </h2>

        {/* Timeline Track */}
        <div className="timeline-track">
          {journey.timeline.map((item, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-year-badge">
                <Calendar size={12} />
                <span>{item.year}</span>
              </div>

              <h3 className="timeline-role">{item.role[lang]}</h3>
              <div className="timeline-org">{item.organization[lang]}</div>
              <p className="timeline-desc">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
