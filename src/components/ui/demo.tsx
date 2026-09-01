import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
  },
  {
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    name: "Richard Nelson",
    role: "SWE 2 @ Amazon",
  },
  {
    quote:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    name: "James Washington",
    role: "SWE 2 @ Google",
  },
];

export default function StudentTestimonials() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Students Say</h1>
      <p className="text-sm md:text-base text-gray-500 mt-4">
        Join thousand of successful students who transformed their careers with us
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-16 text-left">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="w-80 flex flex-col items-start border border-gray-200 p-5 rounded-lg bg-white"
          >
            <Quote className="h-9 w-10 fill-blue-600 text-blue-600" strokeWidth={0} />
            <div className="flex items-center justify-center mt-3 gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-[#FF532E] text-[#FF532E]" />
              ))}
            </div>
            <p className="text-sm mt-3 text-gray-500">{testimonial.quote}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <div>
                <h2 className="text-lg text-gray-900 font-medium">{testimonial.name}</h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
