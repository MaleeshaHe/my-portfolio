"use client";

import { Star, StarHalf, Users } from "lucide-react";

const fiverrReviews = [
  {
    username: "ktlicks123",
    country: "United Kingdom",
    rating: 5,
    review:
      "He is honestly the best. Anytime I’m in need of extra assistance with a project, he is my first option. LITERALLY.",
  },
  {
    username: "ktlicks123",
    country: "United Kingdom",
    rating: 5,
    review:
      "The best of the best. First person that comes to mind when I need deep understanding and vast knowledge.",
  },
  {
    username: "ktlicks123",
    country: "United Kingdom",
    rating: 4.7,
    review:
      "Returning client. I enjoy working with Maleesha, great attention to details.",
  },
  {
    username: "ktlicks123",
    country: "United Kingdom",
    rating: 5,
    review: "Helped me with last-minute work. Amazing attention to details.",
  },
  {
    username: "landonmakia",
    country: "United States",
    rating: 5,
    review:
      "Amazing work and exceeded expectations with no bugs or errors. Highly recommend!",
  },
  {
    username: "landonmakia",
    country: "United States",
    rating: 5,
    review: "Great job in every task. Quick responses. Highly recommended!",
  },
  {
    username: "emillyx159",
    country: "Germany",
    rating: 5,
    review:
      "Delivery was quick. Adjustments were made immediately. Highly recommend this service.",
  },
  {
    username: "kdlsmall",
    country: "United Kingdom",
    rating: 5,
    review:
      "Maleesha’s work was very good. Helped with deep understanding of Python coding.",
  },
  {
    username: "mattnmad",
    country: "United Kingdom",
    rating: 4.3,
    review:
      "Very understanding of the circumstances. Managed a rush order professionally.",
  },
  {
    username: "kryobeam",
    country: "Guyana",
    rating: 5,
    review: "Did amazing work and exceeded my expectations.",
  },
  {
    username: "cao035",
    country: "United States",
    rating: 5,
    review: "Very great job within 30 minutes. Very fast. I recommend A++.",
  },
  {
    username: "sprk23",
    country: "Kuwait",
    rating: 5,
    review: "Fast delivery and great work.",
  },
  {
    username: "qatro_",
    country: "United States",
    rating: 5,
    review: "Quick response. Excellent seller. Highly recommend.",
  },
  {
    username: "matthewohn12",
    country: "United States",
    rating: 5,
    review: "Did everything I needed. Great service.",
  },
  {
    username: "tobiolutoye",
    country: "United Kingdom",
    rating: 5,
    review: "Very patient and helpful guy. I would recommend.",
  },
  {
    username: "eastside363",
    country: "United States",
    rating: 5,
    review: "Did great and delivers fast. Always my go-to.",
  },
  {
    username: "liolkagn23",
    country: "United States",
    rating: 4.3,
    review:
      "Quick responsiveness and early delivery. Great experience overall.",
  },
  {
    username: "kryobeam",
    country: "Guyana",
    rating: 5,
    review: "Phenomenal support and quality. 10/10 recommendation.",
  },
  {
    username: "alex1756",
    country: "Israel",
    rating: 5,
    review: "Great seller. Very professional. I will surely order more gigs.",
  },
  {
    username: "rafsazid",
    country: "Australia",
    rating: 5,
    review:
      "Went above and beyond. Provided steps and revisions. Great experience.",
  },
  {
    username: "user98258365",
    country: "France",
    rating: 5,
    review:
      "Quick delivery, bug-free code, great communication. Highly recommend.",
  },
  {
    username: "lamaoaf",
    country: "Saudi Arabia",
    rating: 4.3,
    review: "I loved working with him! Exceptional.",
  },
  {
    username: "sudo111",
    country: "Nepal",
    rating: 5,
    review: "Very good experience so far. Quick with responses.",
  },
];

// Country code mapping for flag images
const countryFlags = {
  "United States": "us",
  Kuwait: "kw",
  "United Kingdom": "gb",
  Guyana: "gy",
  Israel: "il",
  Australia: "au",
  France: "fr",
  "Saudi Arabia": "sa",
  Nepal: "np",
};

// Star rating component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={`full-${index}`}
          className="w-4 h-4 fill-[#FF4533] text-[#FF4533]"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <StarHalf className="w-4 h-4 fill-[#FF4533] text-[#FF4533]" />
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} className="w-4 h-4 text-gray-600" />
      ))}

      <span className="text-sm text-gray-400 ml-2">({rating})</span>
    </div>
  );
}

// Individual review card component
function ReviewCard({ review }) {
  return (
    <div className="bg-neutral-900 text-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4533]/10 border border-neutral-800 hover:border-neutral-700">
      {/* Header with username and country */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold text-white text-lg">
            {review.username}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            {countryFlags[review.country] ? (
              <img
                src={`https://flagcdn.com/24x18/${
                  countryFlags[review.country]
                }.png`}
                alt={`${review.country} flag`}
                className="w-6 h-4 object-cover rounded-sm border border-gray-600"
              />
            ) : (
              <span className="text-xl">🌍</span>
            )}
          </div>
        </div>
      </div>

      {/* Star rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <div className="text-gray-300 leading-relaxed">
        <p className="italic">"{review.review}"</p>
      </div>
    </div>
  );
}

export default function FiverrReviewsSection() {
  const averageRating = (
    fiverrReviews.reduce((sum, review) => sum + review.rating, 0) /
    fiverrReviews.length
  ).toFixed(1);

  return (
    <section id="reviews" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <Users className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            What Fiverr Clients Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg mb-8">
            Real feedback from satisfied clients who've experienced my freelance
            services on Fiverr.
          </p>

          {/* Overall stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF4533] mb-1">
                {averageRating}
              </div>
              <div className="flex items-center justify-center mb-1">
                <StarRating rating={parseFloat(averageRating)} />
              </div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>

            <div className="w-px h-16 bg-gray-700"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF4533] mb-1">
                {fiverrReviews.length}
              </div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fiverrReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Ready to work together?</p>
          <a
            href="https://www.fiverr.com/maleeshahe?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
}
