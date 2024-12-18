import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  { imgSrc: 'assets/images/team/team-1/1.png', name: 'Dr. Uma M', position: 'Chair',link:'https://www.srmist.edu.in/faculty/dr-m-uma/' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: 'Dr Beaulah Jayavathana R', position: 'Vice Chair', link:'https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: 'Dr.Manikandan', position: 'Treasurer ',link:'https://www.srmist.edu.in/faculty/dr-manikandan-m/' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: ' Dr.Revathy', position: 'General Secretary' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: 'Dr.PV.Gopirajan', position: 'Web Master',link:'https://www.srmist.edu.in/faculty/dr-gopirajan-pv/' },
  { imgSrc: 'assets/images/team/team-1/2.png', name: 'Dr.Pitchaimanikam', position: 'Event Chair' },
  { imgSrc: 'assets/images/team/team-1/3.png', name: 'Krithika Ganesan', position: 'Chairman' },
  { imgSrc: 'assets/images/team/team-1/4.png', name: 'Divyaa Sriram', position: 'Co-Chairman' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Karthik Ganesan', position: 'Treasurer' },
  { imgSrc: 'assets/images/team/team-1/6.png', name: 'K J Tilak Reddy', position: 'Technical - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Disha B', position: 'Technical - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Jerin Klaudia A', position: 'Creatives - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'M H Nithyashree', position: 'Social Media - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Ralitsa Narayan', position: 'Content and Editorial - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Aditya Gaurkar', position: 'Corporate and Logistics - Coordinator' },
  { imgSrc: 'assets/images/team/team-1/5.png', name: 'Priyadarshini A', position: 'Women in Engineering - Coordinator' },
];

const TeamSection = () => {
  return (
    <section className="ep-team section-gap position-relative pd-top-90">
      <div className="container ep-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamCard

              key={index}
              link={member.link}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              delay={0.3 + index * 0.2} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
