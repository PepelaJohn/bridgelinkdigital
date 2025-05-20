import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Clients testimonial',
    title: 'What Our Clients Say About BridgeLink',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: 'Jane Cooper',
        },
        name: 'Jane Cooper',
        about: 'Marketing Director',
      },
      speech:
        'BridgeLink transformed our outdated website into a stunning digital storefront. Their design team captured our brand perfectly while making the site incredibly user-friendly. The results have been outstanding!',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Jane Otieno ',
        },
        name: 'Jane Otieno',
        about: 'Small Business Owner',
      },
      speech:
        'Working with BridgeLink on our social media strategy has been a game-changer. Their team developed a cohesive approach that dramatically increased our engagement and brought in quality leads consistently.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-11.png',
          alt: 'John Wiliiams',
        },
        name: 'John Wiliiams',
        about: 'E-commerce Manager',
      },
      speech:
        'The website BridgeLink created for our online store not only looks beautiful but performs exceptionally well. The attention to detail in both design and functionality has helped us increase conversions by 40%.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-12.png',
          alt: 'Kevin Martin',
        },
        name: 'Kevin Martin',
        about: 'Startup Founder',
      },
      speech:
        'BridgeLink helped us establish our digital presence from the ground up. Their comprehensive approach to website design and social media has been instrumental in building our brand recognition.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-13.png',
          alt: 'Christian Okello',
        },
        name: 'Christian Okello',
        about: 'Creative Director',
      },
      speech:
        'As a design professional myself, I have high standards. BridgeLink exceeded them all. Their creative approach to our website redesign brought fresh ideas while respecting our established brand guidelines.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-14.png',
          alt: 'Kevin Deen',
        },
        name: 'Kevin Deen',
        about: 'Nonprofit Director',
      },
      speech:
        'Our nonprofit needed a website that could effectively communicate our mission while being easy to update. BridgeLink delivered exactly what we needed, plus provided valuable training for our team.',
      rating: 5,
    },
  ],
};
