import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TestimonialCard from "../testimonial/TestimonialCard";
import BgTestimonials from "../../images/svg/bg_testimonials.svg";

const getData = graphql`
query getTestimonialContent {
    strapiHomepage {
      testimonial_title
      testimonial_subtitle
      testimonials {
        id
        description
        name
        title
        workplace
        image {
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                    )
                }
            }
        }
      }
    }
  }
`

const TestimonialSection = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            testimonial_title, testimonial_subtitle, testimonials
        }
    } = data
    return (
        <>
        <div>
            <div className="h-auto pb-20 lg:pb-40 relative">    
                <div className="h-auto max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h2 className="text-center pt-20">
                        {testimonial_title}
                    </h2>
                    <p className="text-center max-w-lg mx-auto mt-10">
                        {testimonial_subtitle}
                    </p>
                    <div className="card-container grid grid-flow-row gap-12 place-content-center mt-32 lg:grid-cols-1 lg:gap-20">
                        {
                            testimonials.map( (card) => (
                                <TestimonialCard key={card.id} card={card} />
                            ))
                        }
                    </div> 
                </div>
                <BgTestimonials className="w-full h-full absolute top-1/20 md:top-0 xl:transform xl:scale-x-150 z-minus" />
            </div>
        </div>
        </>
    )
}

export default TestimonialSection;