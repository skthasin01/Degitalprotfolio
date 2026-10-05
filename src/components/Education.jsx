import {
  MdGrade,
  MdSchool,
  MdArrowForward,
} from "react-icons/md";

export default function Education() {
  const education = [
    {
      year: "2025 — 2029",
      label: "CURRENT DEGREE",
      title: "BSc in Computer Science & Engineering",
      institution: "North Western University, Khulna",
      details: "Currently 2nd Year, 2nd Semester",
      grade: "CGPA: 3.19 / 4.00",
      icon: <MdSchool />,
      featured: true,
    },
    {
      year: "2024",
      label: "HIGHER SECONDARY",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Kazi Azhar Ali College, Fakirhat, Bagerhat",
      details: "Science Group",
      grade: "CGPA: 3.75 / 5.00",
      icon: <MdSchool />,
      featured: false,
    },
    {
      year: "2022",
      label: "SECONDARY SCHOOL",
      title: "Secondary School Certificate (SSC)",
      institution: "Mulgor Govt. High School, Fakirhat, Bagerhat",
      details: "Science Group",
      grade: "CGPA: 4.94 / 5.00",
      icon: <MdSchool />,
      featured: false,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-20 -left-20
        w-72 h-72
        rounded-full
        bg-tertiary/10
        blur-[110px]
        pointer-events-none"
      />

      <div
        className="absolute bottom-0 -right-20
        w-72 h-72
        rounded-full
        bg-primary/10
        blur-[110px]
        pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-10 h-[2px]
              bg-gradient-to-r
              from-tertiary
              to-primary"
            />

            <span
              className="text-xs font-bold
              uppercase
              tracking-[0.25em]
              text-tertiary"
            >
              Education
            </span>
          </div>

          <div
            className="flex flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5"
          >
            <div>
              <h2
                className="text-3xl md:text-5xl
                font-black
                tracking-tight
                text-white"
              >
                My{" "}
                <span
                  className="bg-gradient-to-r
                  from-tertiary
                  via-secondary
                  to-primary
                  bg-clip-text
                  text-transparent"
                >
                  Education
                </span>{" "}
                Journey
              </h2>

              <p
                className="mt-4
                max-w-2xl
                text-slate-400
                leading-7"
              >
                My academic journey in Computer Science and
                Engineering, from secondary education to
                university.
              </p>
            </div>

            <div
              className="hidden md:flex
              items-center gap-2
              px-4 py-2
              rounded-full
              border border-white/10
              bg-white/[0.03]
              text-xs font-mono
              text-slate-400"
            >
              <span
                className="w-2 h-2
                rounded-full
                bg-tertiary
                animate-pulse"
              />

              Academic Journey
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute
            left-[20px]
            md:left-[28px]
            top-5
            bottom-5
            w-px
            bg-gradient-to-b
            from-tertiary/70
            via-primary/30
            to-transparent"
          />

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={item.title}
                className="relative
                pl-14
                md:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute
                  left-0
                  md:left-2
                  top-6
                  w-10 h-10
                  rounded-full
                  flex items-center justify-center
                  border
                  ${
                    item.featured
                      ? "border-tertiary/50 bg-tertiary/10 text-tertiary shadow-[0_0_25px_rgba(120,100,255,0.25)]"
                      : "border-white/10 bg-white/[0.04] text-slate-500"
                  }
                  backdrop-blur-xl
                  z-10`}
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`group relative
                  overflow-hidden
                  rounded-2xl
                  border
                  p-5 md:p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${
                    item.featured
                      ? "border-tertiary/25 bg-gradient-to-br from-tertiary/[0.08] via-white/[0.03] to-primary/[0.04]"
                      : "border-white/10 bg-white/[0.03]"
                  }
                  hover:border-primary/30
                  hover:bg-white/[0.05]`}
                >
                  {/* Card Glow */}
                  <div
                    className={`absolute
                    -right-16
                    -top-16
                    w-40 h-40
                    rounded-full
                    blur-[70px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    ${
                      item.featured
                        ? "bg-tertiary/20"
                        : "bg-primary/10"
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Top */}
                    <div
                      className="flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3"
                    >
                      <span
                        className={`inline-flex
                        w-fit
                        px-3 py-1
                        rounded-full
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        ${
                          item.featured
                            ? "bg-tertiary/10 text-tertiary border border-tertiary/20"
                            : "bg-white/[0.04] text-slate-500 border border-white/10"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span
                        className={`text-xs
                        font-mono
                        font-semibold
                        ${
                          item.featured
                            ? "text-secondary"
                            : "text-slate-500"
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mt-5
                      text-xl
                      md:text-2xl
                      font-bold
                      text-white
                      tracking-tight"
                    >
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p
                      className="mt-2
                      text-sm
                      md:text-base
                      text-slate-400
                      font-medium"
                    >
                      {item.institution}
                    </p>

                    {/* Bottom */}
                    <div
                      className="mt-6
                      pt-4
                      border-t
                      border-white/10
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3"
                    >
                      <span
                        className="text-sm
                        text-slate-500"
                      >
                        {item.details}
                      </span>

                      <div
                        className="inline-flex
                        w-fit
                        items-center
                        gap-2
                        px-3 py-2
                        rounded-lg
                        bg-white/[0.04]
                        border
                        border-white/10
                        text-tertiary
                        text-xs
                        font-bold"
                      >
                        <MdGrade className="text-base" />

                        {item.grade}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <MdArrowForward
                      className="absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-slate-700
                      opacity-0
                      group-hover:opacity-100
                      group-hover:translate-x-1
                      transition-all
                      duration-300
                      hidden md:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            <span className="text-tertiary font-semibold">
              Learning
            </span>{" "}
            today to build better software tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}