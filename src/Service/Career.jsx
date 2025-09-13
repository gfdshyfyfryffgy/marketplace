import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    title: "Product Designer",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    type: ["100% remote", "Full-time"],
    category: "Design",
  },
  {
    title: "Engineering Manager",
    description:
      "We’re looking for an experienced engineering manager to join our team.",
    type: ["100% remote", "Full-time"],
    category: "Development",
  },
  {
    title: "Customer Success Manager",
    description:
      "We’re looking for a customer success manager to join our team.",
    type: ["100% remote", "Full-time"],
    category: "Customer Service",
  },
];

const filters = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const Career = () => {
  const [activeFilter, setActiveFilter] = useState("View all");

  const filteredJobs =
    activeFilter === "View all"
      ? jobs
      : jobs.filter((job) => job.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0f1e1d] to-[#002c25] text-[#0f172a]">
      {/* HERO */}
      <section className="bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005243]/20 via-transparent to-[#00B3A3]/20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 rounded-b-3xl">
          <p className="text-[#00B3A3] font-semibold mb-3">We’re hiring!</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Be part of our mission
          </h1>
          <p className="max-w-2xl mx-auto text-[#C1C1C1] text-base md:text-lg">
            We’re looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {filters.map((filter, i) => {
            const active = activeFilter === filter;
            return (
              <button
                key={i}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    active
                      ? "bg-[#005243] text-white border-[#005243]"
                      : "bg-transparent text-white border border-[#00B3A3]/40 hover:bg-[#005243] hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* JOB LIST */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-6 border-b border-[#00B3A3]/30"
            >
              <div className="flex-1 bg-gradient-to-r from-[#005243]/30 via-transparent to-[#00B3A3]/20 p-6 rounded-xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {job.title}
                </h2>
                <p className="mt-2 text-[#C1C1C1] text-sm md:text-base">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {job.type.map((t, i2) => (
                    <span
                      key={i2}
                      className="px-3 py-1 text-sm border rounded-full text-[#C1C1C1] border-[#00B3A3]/40 bg-[#000000]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center ">
                <button
                  className="flex ml-20 items-center gap-2 px-4 py-2 rounded-md border border-[#00B3A3] text-[#00B3A3] font-medium hover:bg-[#005243] hover:text-white transition"
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#C1C1C1] py-8">
            No jobs available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Career;