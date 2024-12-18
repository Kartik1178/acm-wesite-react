import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
   
    const events = [
        {
            mode: 'Online',
            image: 'assets/images/blog/blog-1/2.png',
            date: { day: 9, month: 'Oct' },
            location: 'Google Meet',
            title: 'Placement Talk',
            description: 'An insightful Placement talk co-hosted by ACM SIGAI'
        },
        {
            mode: 'Offline',
            image: 'assets/images/blog/blog-1/3.png',
            date: { day: 4, month: 'Oct' },
            location: 'IMAC LAB, SRMIST, KTR',
            title: 'Inauguration Event',
            description: 'Inaguration of ACM SIGAI student chapter'
        }
    ];

    return (
        <section className="event-area">
            <div className="container">
                <div className="row">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventList;
