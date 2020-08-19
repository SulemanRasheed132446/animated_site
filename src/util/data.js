import detail from '../images/detail.svg'
import consultation from '../images/consultation.svg'
import emergency from '../images/emergency.svg'
import pharmacy from '../images/pharmacy.svg'
import search from '../images/search.svg'
import tracking from '../images/tracking.svg'
import healthprovider from '../images/healthprovider.svg'
import mobileapp from '../images/mobileapp.svg'
import customer from '../images/customer.png'


export const servicesList = [
    {
        icon: search,
        heading: 'Search doctor',
        title: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
        icon: pharmacy,
        heading: 'Online pharmacy',
        title: 'Buy  your medicines with our mobile application with a simple delivery system',
    },
    {
        icon: consultation,
        heading: 'Consultation',
        title: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
        icon: detail,
        heading: 'Details info',
        title: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
        icon: emergency,
        heading: 'Emergency care',
        title: `You can get 24/7 urgent care for yourself or your children and your
        lovely family`,
    },
    {
        icon: tracking,
        heading: 'Tracking',
        title: 'Track and save your medical history and health data ',
    },
]

export const infoList = [
    {
        description: `Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
        in the solutions we deliver`,
        btnText: "Learn more",
        svg: healthprovider,
        heading: "Leading healthcare providers",
        toggle: false
    },
    {
        description: `Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely`,
        btnText: "Download",
        svg: mobileapp,
        heading: "Download our mobile apps",
        toggle: true

    },
]

export const customerReviews = [
    {
        name: 'Edward Newgate',
        title: 'Founder Circle',
        comment: `“Our dedicated patient engagement app and
        web portal allow you to access information instantaneously (no tedeous form, long calls,
        or administrative hassle) and securely”`,
        image: customer
    },
    {
        name: 'Edward Newgate',
        title: 'Founder Circle',
        comment: `“Our dedicated patient engagement app and
        web portal allow you to access information instantaneously (no tedeous form, long calls,
        or administrative hassle) and securely”`,
        image: customer
    },
    {
        name: 'Edward Newgate',
        title: 'Founder Circle',
        comment: `“Our dedicated patient engagement app and
        web portal allow you to access information instantaneously (no tedeous form, long calls,
        or administrative hassle) and securely”`,
        image: customer
    }
]