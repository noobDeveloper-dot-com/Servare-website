import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mixpanel from "mixpanel-browser";
mixpanel.init("ccf64edc855dce8c3e284af8b91acb98");

gsap.registerPlugin(ScrollTrigger);

const MAIN_INTROS_H1 = document.querySelector(".main_intros");

gsap.to(MAIN_INTROS_H1, {
  scrollTrigger: {
    trigger: MAIN_INTROS_H1,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => {
      MAIN_INTROS_H1.classList.add("animate");

      mixpanel.track("Page Section", {
        section: "Work Smarter, not harder, with smart workflows",
      });
    },
    onLeaveBack: () => {
      MAIN_INTROS_H1.classList.remove("animate");
    },
    onEnterBack: () => {
      mixpanel.track("Page Section", {
        section: "Work Smarter, not harder, with smart workflows",
      });
    },
  },
});

const SECOND_SECTION_ROBOT_IMG = document.querySelector(".robot_image");

gsap.to(SECOND_SECTION_ROBOT_IMG, {
  scrollTrigger: {
    trigger: SECOND_SECTION_ROBOT_IMG,
    start: "top 60%",
    end: "bottom 20%",
    scrub: true,
  },

  x: 70,
  opacity: 100,
  duration: 1,
});

const SINGLE_TASK_BLOCK = document.querySelector(".single_task_block_sample");

gsap.to(SINGLE_TASK_BLOCK, {
  scrollTrigger: {
    trigger: SINGLE_TASK_BLOCK,
    start: "top 55%",
    end: "bottom top",
    onEnter: () => {
      SINGLE_TASK_BLOCK.classList.add("animate");
      mixpanel.track("Page Section", {
        section: "Eliminates those boring manual and repetitive tasks",
      });
    },
    onLeaveBack: () => SINGLE_TASK_BLOCK.classList.remove("animate"),
    onEnterBack: () => {
      mixpanel.track("Page Section", {
        section: "Eliminates those boring manual and repetitive tasks",
      });
    },
  },
});

const MULTI_TASK_BLOCK = document.querySelector(".multiple_blocks");

gsap.to(MULTI_TASK_BLOCK, {
  scrollTrigger: {
    trigger: MULTI_TASK_BLOCK,
    start: "top bottom",
    end: "bottom top",
    toggleClass: "animate",
    onEnter: () => {
      mixpanel.track("Page Section", { section: "Build more = Focus More" });
    },
    onEnterBack: () => {
      mixpanel.track("Page Section", {
        section: "Build more = Focus More",
      });
    },
  },
});

const NO_CODE_REQUIRED_ROBOT_SVG = document.querySelector(
  ".no-code_require_svg"
);

gsap.to(NO_CODE_REQUIRED_ROBOT_SVG, {
  scrollTrigger: {
    trigger: NO_CODE_REQUIRED_ROBOT_SVG,
    start: "top 50%",
    end: "bottom 20%",

    onEnter: () => {
      NO_CODE_REQUIRED_ROBOT_SVG.classList.add("animate");
      mixpanel.track("Page Section", {
        section: "No Code Required",
      });
    },
    onLeaveBack: () => NO_CODE_REQUIRED_ROBOT_SVG.classList.remove("animate"),
  },

  onEnterBack: () => {
    mixpanel.track("Page Section", {
      section: "No Code Required",
    });
  },
});

const USE_CASE_SECTION = document.querySelector(".use_case_scenario");

gsap.to(USE_CASE_SECTION, {
  scrollTrigger: {
    trigger: USE_CASE_SECTION,
    start: "top 50%",
    end: "bottom 20%",

    onEnter: () => {
      mixpanel.track("Page Section", {
        section: "Use Case",
      });
    },
  },

  onEnterBack: () => {
    mixpanel.track("Page Section", {
      section: "Use Case",
    });
  },
});

gsap.to("#Error", {});

ScrollTrigger.create({
  trigger: ".reduce_errors",
  start: "top 78%",
  end: "bottom 25%",
  toggleClass: { targets: "#Error", className: "animate" },
});

gsap.to("#WorkFlow", {});

ScrollTrigger.create({
  trigger: ".improved_workflow ",
  start: "-20px 22.5%",
  end: "bottom 18%",
  toggleClass: { targets: "#WorkFlow", className: "animate" },
});

gsap.to("#Time_Efficient", {});

ScrollTrigger.create({
  trigger: ".time_efficiency",
  start: "-20px 22.5%",
  end: "bottom 18%",
  toggleClass: { targets: "#Time_Efficient", className: "animate" },
});

gsap.to("#Deadline", {});

ScrollTrigger.create({
  trigger: ".meeting_deadlines",
  start: "-20px 22.5%",
  end: "bottom 18%",
  toggleClass: { targets: "#Deadline", className: "animate" },
});

gsap.to("#Job_Satishfaction", {});

ScrollTrigger.create({
  trigger: ".increase_job_satishfaction",
  start: "-20px 22.5%",
  end: "bottom top",
  toggleClass: { targets: "#Job_Satishfaction", className: "animate" },
});
