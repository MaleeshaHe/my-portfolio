"use client";

import { Star, StarHalf, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const fiverrReviews = [
  {
    username: "ktlicks123",
    country: "United Kingdom",
    rating: 5,
    review:
      "He is honestly the best. Anytime I'm in need of extra assistance with a project, he is my first option. LITERALLY.",
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
      "Maleesha's work was very good. Helped with deep understanding of Python coding.",
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
  Germany: "de",
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
          className="w-3 h-3 fill-[#FF4533] text-[#FF4533]"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <StarHalf className="w-3 h-3 fill-[#FF4533] text-[#FF4533]" />
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} className="w-3 h-3 text-gray-600" />
      ))}

      <span className="text-xs text-gray-400 ml-1">({rating})</span>
    </div>
  );
}

// Individual review card component for carousel
function CarouselReviewCard({ review }) {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-4 sm:p-5 shadow-lg min-w-[280px] sm:min-w-[320px] max-w-[280px] sm:max-w-[320px] mx-2 sm:mx-3 border border-neutral-700 hover:border-[#FF4533]/40 transition-all duration-300 flex-shrink-0 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF4533]/10">
      {/* Header with username and country */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#FF4533] to-[#E63E2E] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg flex-shrink-0">
          {review.username.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-xs sm:text-sm mb-1 truncate">
            {review.username}
          </h4>
          <div className="flex items-center gap-1 sm:gap-2">
            {countryFlags[review.country] ? (
              <img
                src={`https://flagcdn.com/16x12/${
                  countryFlags[review.country]
                }.png`}
                alt={`${review.country} flag`}
                className="w-3 h-2 sm:w-4 sm:h-3 object-cover rounded-sm border border-gray-500 shadow-sm flex-shrink-0"
              />
            ) : (
              <span className="text-xs sm:text-sm">🌍</span>
            )}
            <span className="text-xs text-gray-400 truncate">
              {review.country}
            </span>
          </div>
        </div>
      </div>

      {/* Star rating */}
      <div className="mb-3 sm:mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <div className="text-gray-300 leading-relaxed">
        <p className="text-xs sm:text-sm italic relative line-clamp-4">
          <span className="text-[#FF4533] text-base sm:text-lg absolute -left-1 sm:-left-2 -top-0.5 sm:-top-1 font-serif">
            &quot;
          </span>
          <span className="ml-2 sm:ml-3">{review.review}</span>
          <span className="text-[#FF4533] text-base sm:text-lg font-serif">
            &quot;
          </span>
        </p>
      </div>

      {/* Bottom accent */}
      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-neutral-700">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Verified Fiverr Review</span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF4533] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function FiverrReviewCarousel() {
  // Duplicate reviews for seamless loop
  const allReviews = [...fiverrReviews, ...fiverrReviews];
  const scrollContainerRef = useRef(null);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsManualScrolling(true);
      const scrollAmount = window.innerWidth < 640 ? 300 : 340; // Smaller scroll for mobile
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      // Reset auto-scroll after 3 seconds
      setTimeout(() => setIsManualScrolling(false), 3000);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      setIsManualScrolling(true);
      const scrollAmount = window.innerWidth < 640 ? 300 : 340; // Smaller scroll for mobile
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      // Reset auto-scroll after 3 seconds
      setTimeout(() => setIsManualScrolling(false), 3000);
    }
  };

  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-[#050505] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Client Testimonials</span>
            <span className="sm:hidden">Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 px-4">
            What Fiverr Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Real feedback from satisfied clients who&apos;ve experienced my
            freelance services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Left Navigation Icon - Hidden on mobile, shown on larger screens */}
          <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
            <div
              onClick={handleScrollLeft}
              className="bg-black/60 backdrop-blur-sm border border-neutral-700 rounded-full p-2 sm:p-3 hover:bg-[#FF4533]/20 hover:border-[#FF4533]/50 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>

          {/* Right Navigation Icon - Hidden on mobile, shown on larger screens */}
          <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
            <div
              onClick={handleScrollRight}
              className="bg-black/60 backdrop-blur-sm border border-neutral-700 rounded-full p-2 sm:p-3 hover:bg-[#FF4533]/20 hover:border-[#FF4533]/50 transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className={`flex overflow-x-auto scrollbar-hide ${
                !isManualScrolling
                  ? "animate-scroll group-hover:animation-pause"
                  : ""
              }`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {allReviews.map((review, index) => (
                <CarouselReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          {/* Mobile navigation indicators */}
          <div className="flex justify-center mt-6 gap-4 sm:hidden">
            <button
              onClick={handleScrollLeft}
              className="bg-black/60 backdrop-blur-sm border border-neutral-700 rounded-full p-3 hover:bg-[#FF4533]/20 hover:border-[#FF4533]/50 transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={handleScrollRight}
              className="bg-black/60 backdrop-blur-sm border border-neutral-700 rounded-full p-3 hover:bg-[#FF4533]/20 hover:border-[#FF4533]/50 transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-[#FF4533]">
                4.9
              </div>
              <div className="text-xs text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-[#2a2a2a]"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-[#FF4533]">
                50+
              </div>
              <div className="text-xs text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-[#2a2a2a]"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-[#FF4533]">
                100%
              </div>
              <div className="text-xs text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-gray-400 mb-2 text-base sm:text-lg">
              Ready to join these satisfied clients?
            </p>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm">
              Start your project today and experience top-quality freelance
              services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="https://www.fiverr.com/maleeshahe?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4533] hover:bg-[#E63E2E] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF4533]/25 text-sm sm:text-base"
              >
                <span>Hire Me on Fiverr</span>
                <span className="text-sm opacity-75">→</span>
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .group:hover .animation-pause {
          animation-play-state: paused;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive animations */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
