import { benefitsEn } from "../pages/Education/enBenef.js";
import { progressImage } from "../pages/Progress/ProgressImage.js";
import { companyImg } from "../pages/Feedback/companyImg.js";
import { clientImg } from "../pages/Feedback/clientImg.js";

export const dataEn = {
  navigation: {
    nav: [
      { href: "#about-us", label: "About Us", hasArrow: true },
      { href: "#feedback", label: "Feedback", hasArrow: true },
      { href: "#study-forms", label: "Study Forms", hasArrow: true },
      { href: "#qa", label: "Q&A", hasArrow: true },
      { href: "#contacts", label: "Contacts", hasArrow: true },
    ],
  },
  banner: {
    title: "English for Corporate Clients",
    main_title: "Expand",
    main_title_middle: "your business horizons",
    main_title_end: "with English!",
    explanation_str:
      "English is not only a tool for increasing competitiveness and",
    explanation_mid:
      "business globalization, but also a means of improving staff interaction,",
    explanation_end: "as it fosters team bonding and stronger connections.",
    button: "Learn more about the courses",
  },
  values: {
    title: "Our Values",
    subtitle: "Your goal",
    subtitle_end: "is our motivation",
    points: [
      {
        title: "Justice",
        description:
          "To fully dedicate oneself to the task, to be completely engaged in the lesson, ensuring that it truly feels productive.",
      },
      {
        title: "Creativity",
        description:
          "To be creative and innovative, not afraid to deviate from the template if it benefits the student.",
      },
      {
        title: "Diligence",
        description:
          "To be honest with yourself and others, not fearing to openly admit when working with a student is challenging and declining collaboration if necessary.",
      },
      {
        title: "Order",
        description:
          "To be organized; structure and clarity in learning are key principles of our teaching.",
      },
      {
        title: "Skill",
        description:
          "To continuously practice and improve your skills, fully implementing them during the learning process.",
      },
    ],
  },
  mission: {
    title: "Our Mission",
    text: "Teaching English for the student's enjoyment, for yourself, and remembering that the most important thing is to help realize the goals and dreams of our students",
    vision_title: "Our Vision",
    vision_text:
      "To teach Ukrainians English at level B2 and above so that they can use it as a tool to achieve their goals in business and personal affairs",
  },
  team: {
    title: "Meet us",
    subtitle: "A big team for",
    subtitle_end: "big results",
  },
  feedback: {
    title: "Feedback about us",
    subtitle: "Feedback",
    subtitle_main: "about success",
    subtitle_end: "with us",
    company_feedback: [
      {
        company: "Inoxoft",
        logo: companyImg.inoxoft,
        text: "Thank you for the great collaboration with Lyudmyla, a dedicated employee at Inoxoft for many years. Lyudmyla consistently provides excellent educational services and receives high praise from colleagues. She maintains interest in work and ensures high satisfaction levels. Additionally, Lyudmyla is known for her availability, responsiveness, innovative ideas, and effective communication. It’s hard to imagine professional collaboration without her remarkable contribution.",
        person: {
          image: companyImg.anastasia,
          name: "Anastasiia Dobush",
          position: "Head of HR Operations",
        },
      },
      {
        company: "Amazinum",
        logo: companyImg.amazinum,
        text: "Your English course for the data science company is excellent. Incorporating technical vocabulary and real-world data examples enhances relevance for professionals in the field. The focus on clear communication in data-driven projects equips participants with valuable skills for collaboration and presenting complex results. This tailored approach not only improves language skills but also ensures effective conveyance of complex concepts in data science.",
        person: {
          image: companyImg.alex,
          name: "Oleksiy Tsebrij",
          position: "CEO",
        },
      },
      {
        company: "Goodface",
        logo: companyImg.goodface,
        text: "The Goodface team has been learning at the Street English language school for about 9 months. We want to share our impressions and experience of interaction. Lessons are always conducted on time, with a convenient and flexible schedule, making it easy to combine learning with work (getting up a couple of hours earlier is not a problem). Each lesson is engaging, interactive, and most importantly, useful. The topics, focusing on business English and current social issues, allow us to immediately apply the acquired knowledge and new vocabulary in our professional activities. We especially appreciate the instructor's approach, who is always ready to support, offer valuable advice, and help solve any language questions, making the school our top choice!",
        person: {
          image: companyImg.yana,
          name: "Yana Hrynchuk",
          position: "COO, Goodface",
        },
      },
    ],
    client_feedback: [
      {
        text: "Hello, thank you very much for getting in touch! I really enjoy everything! I have the best teacher, who is very attentive and always wonderfully prepares lessons, helping me where necessary) During the time I’ve spent with you, I can already see the results and am very grateful for that! I also had the opportunity to attend a few lessons in the speaking club, and everything is at the highest level! Thank you💗🥰",
        person: {
          image: clientImg.mariana,
          name: "Mariana Popovniak",
          status: "Student",
        },
      },
      {
        text: "Hello! I really enjoy studying; the teacher is great. The approach to lessons and materials is very interesting. Everything is clear and concise. I like that speaking, reading, writing, and listening are combined. My English level has significantly improved; I’ve started speaking more fluently, learned many new words, and significantly improved my grammar. Thank you very much!",
        person: {
          image: clientImg.yaryna,
          name: "Yaryna",
          status: "Student",
        },
      },
      {
        text: "Hi! Thank you for making English lessons something I truly enjoy. The combination of interactive tasks and personalized feedback boosted my confidence. My teacher is amazing, always supportive and patient. I feel like I’m finally starting to speak naturally without overthinking every word. The speaking club has been a special highlight for me – I gained valuable insights and found great friends. Very happy to be part of this! ✨😊",
        person: {
          image: clientImg.dianne,
          name: "Den",
          status: "Student",
        },
      },
      {
        text: "Hello! Thank you for your care! I really enjoy the lessons conducted by Nastya! I’m very satisfied because every lesson is light! Thank you 🤩",
        person: {
          image: clientImg.nataliia,
          name: "Nataliia Hunka",
          status: "Student",
        },
      },
      {
        text: "Hello! I really like the approach and the lessons themselves; teacher Tanya explains everything very clearly and easily. Time flies by during the lessons, and most importantly, I notice positive results from the studies.",
        person: {
          image: clientImg.christina,
          name: "Kristina Haidan",
          status: "Student",
        },
      },
      {
        text: "Hello, StreetEnglishSchool is the best English school❤️‍🔥! I’m absolutely thrilled with the learning process; I’ve improved my English level in this school. My teacher explains all the topics and rules I find difficult to understand very well🥰! I don’t regret a single minute choosing this school to study English 😍",
        person: {
          image: clientImg.vasyl,
          name: "Vasyl Kliuk",
          status: "Student",
        },
      },
      {
        text: "Hello! I really like everything🥰. I’m truly glad Olena is my teacher. I love her values; lessons are always light and quick, with many interesting tasks. She’s happy to help with any questions, delivers material very accessibly, and really knows how to motivate.",
        person: {
          image: clientImg.olenka,
          name: "Olenka Kozak",
          status: "Student",
        },
      },
      {
        text: "Hello! Thank you, I enjoy everything. Communication is easy; everything is very clear. I like that we don’t move on to new topics until we’ve fully mastered the previous ones. She corrects me well when I make mistakes, making me think and analyze them myself. So far, I have no complaints about Kristy and am satisfied with our collaboration🫶🏻",
        person: {
          image: clientImg.kateryna,
          name: "Kateryna Vasylyk",
          status: "Student",
        },
      },
      {
        text: "Hello! I really enjoy the lessons. The approach is very thoughtful; everything is explained step by step, making even the most complex topics easy to understand. My teacher is attentive and always ensures I feel confident before moving on. If I make mistakes, they are resolved constructively, helping me analyze and avoid them in the future.",
        person: {
          image: clientImg.eric,
          name: "Eric",
          status: "Student",
        },
      },
    ],
    buttons: {
      company: {
        text: "Companies",
      },
      client: {
        text: "Clients",
      },
    },
  },
  phrase: {
    quote: "«The limits of my language are the limits of my world»",
    author: {
      name: "Ludwig Wittgenstein",
      position: "Philosopher",
    },
    main_title: "Expand the possibilities",
    main_title_str: "of your ",
    main_title_mid: "communication expand the possibilities",
    main_title_end: "of your world",
  },
  education: {
    title: "Learning Format",
    subtitle: "Choose your",
    subtitle_middle: "ideal learning",
    subtitle_end: "format",
    formats: {
      individual: {
        title: "Individual Online Learning",
        subtitle:
          "Personalized lessons with an instructor, tailored to your goals and language level.",
        details: {
          time: "60 min",
          person: "1 person",
          online: "Online",
        },
        price: {
          base: "410.00₴",
          discounts: {
            lesson_1: "10 lessons - 410.00₴",
            lesson_2: "16 lessons - 400.00₴",
            lesson_3: "32 lessons - 390.00₴",
          },
        },
      },

      couple: {
        title: "Couple Lessons",
        subtitle:
          "Personalized lessons with an instructor, tailored to your goals and language level.",
        details: {
          time: "60 min",
          person: "2 people",
          online: "Online",
        },
        price: {
          base: "315.00₴",
          discounts: {
            lesson_1: "10 lessons - 315.00₴",
            lesson_2: "16 lessons - 310.00₴",
            lesson_3: "32 lessons - 300.00₴",
          },
        },
      },

      group: {
        title: "Group Learning 3 People",
        subtitle:
          "Personalized lessons with an instructor, tailored to your goals and language level.",
        details: {
          time: "60 min",
          person: "3 people",
          online: "Online",
        },
        price: {
          base: "260.00₴",
          discounts: {
            lesson_1: "16 lessons - 260.00₴",
            lesson_2: "32 lessons - 250.00₴",
          },
        },
        //--//--//

        title2: "Group Learning 4 People",
        details2: {
          time2: "60 хв",
          person2: "4 people",
          online2: "Online",
        },
        price2: {
          base2: "215.00₴",
          discounts2: {
            lesson_12: "16 lessons - 215.00₴",
            lesson_22: "32 lessons - 210.00₴",
          },
        },
      },

      speaking: {
        title: "Conversation Club",
        subtitle:
          "Personalized lessons with an instructor, tailored to your goals and language level.",
        details: {
          time: "60 min",
          person: "Unlimited participants",
          online: "Online",
        },
        price: {
          base: "230.00₴",
          discounts: {
            lesson_1: "5 lessons - 230.00₴",
          },
        },
      },

      corporate: {
        title: "Corporate Learning",
        subtitle:
          "Personalized lessons with an instructor, tailored to your goals and language level.",
        details: {
          time: "60 min",
          person: "~",
          online: "Offline/Online",
        },
        message: {
          title: "Individually",
          pre: "Contact us via one of the messengers",
        },
      },
    },
    buttons: {
      individual: {
        text: "Individual",
      },
      couple: {
        text: "Couple",
      },
      group: {
        text: "Group",
      },
      speaking: {
        text: "Speaking",
      },
      corporate: {
        text: "Corporate",
      },
    },
  },
  progress: {
    main: "Why Choose Us",
    subtitle: "We help you",
    subtitle_end: "achieve more",
    items: [
      {
        imgSrc: progressImage.block,
        alt: "block-img",
        title: "Program Personalization",
        text: "Our school can create a unique educational program tailored to your company, starting from scratch. This ensures that all your specific needs and requirements are met.",
      },
      {
        imgSrc: progressImage.finance,
        alt: "finance-img",
        title: "Financial Flexibility",
        text: "Our school offers financial flexibility and payment options that allow you to choose the most convenient method of payment for the courses.",
      },
      {
        imgSrc: progressImage.notebook,
        alt: "notebook-img",
        title: "Program Adaptation",
        text: "We can modify existing courses to fit your specific requests, making necessary adjustments and changes to achieve maximum effectiveness.",
      },
      {
        imgSrc: progressImage.wallet,
        alt: "wallet-img",
        title: "Ability to Change Courses",
        text: "We offer the option to change or adjust courses during the learning process, allowing you to tailor the program to your company's current needs.",
      },
      {
        imgSrc: progressImage.quote,
        alt: "quote-img",
        title: "Regular Reporting and Feedback",
        text: "We provide regular reports and collect feedback on student success, allowing you to track the progress of your employees and adjust the learning process as needed.",
      },
      {
        imgSrc: progressImage.time,
        alt: "time-img",
        title: "Continuity of Learning",
        text: "For online learning, we guarantee instructor replacement during their vacation or illness. For offline learning, this depends on location. Corporate clients will not experience any interruption in the learning process.",
      },
    ],
  },
  partners: {
    title: "Leaders' Trust",
    subtitle: "Incredible",
    subtitle_mid: "companies that work",
    subtitle_end: "with us:",
  },
  question: {
    title: "Q&A",
    subtitle: "We answer",
    subtitle_end: "your questions:",
    questions: [
      {
        question: "Can the training program be adapted to your business?",
        answer:
          "Of course you can, we develop a customized training program specifically for your request and ultimate goal.",
      },
      {
        question:
          "How is the level of English proficiency of employees determined?",
        answer:
          "We are conducting an introductory test. There are several options for completing it, either through our chatbot or in individual meetings.",
      },
      {
        question: "How can we assess the progress of our employees?",
        answer:
          "We conduct testing and also periodically provide feedback on progress and attendance.",
      },
      {
        question: "Is it possible to conduct classes online?",
        answer:
          "Yes, our school specializes in online learning and has been working in this area since 2017.",
      },
      {
        question:
          "What is the duration of the course and the number of lessons?",
        answer:
          "32 lessons is the total number of lessons in the course. Duration is approximately 4 to 8 months, it all depends on how many times a week the student studies and how productively he learns the material.",
      },
      {
        question: "Is it possible to change the class schedule if necessary?",
        answer: "Yes, of course we adapt to our students' schedules.",
      },
      {
        question: "What materials are used during training?",
        answer:
          "We have courses that are developed on 2 platforms: Padlet or Kalyna, on them we can also develop courses for your personal request using additional sources if necessary.",
      },
      {
        question: "Do you provide certificates after completing the course?",
        answer:
          "Yes, of course the certificate proves that you have studied at our school.",
      },
      // {
      //   question:
      //     "How does the learning process work at Street English School?",
      //   answer:
      //     "The learning process at Street English School begins with determining the level of English proficiency and analyzing the needs of your employees. After that, we develop an individual program that takes into account the specifics of your business and learning goals. Classes can be conducted in a format convenient for you — individually, in groups, or online. Our teachers use modern methodologies and interactive materials to make learning effective and engaging. We regularly measure progress so that you can see real results.",
      // },
      // {
      //   question: "What forms of learning do you offer?",
      //   answer:
      //     "Individual, group, couple, conversation club, corporate training",
      // },
    ],
  },
  media: {
    title: "Contact Us",
    subtitle: "Start your",
    subtitle_end: "language journey!",
  },
  comunication: {
    title: "Learn More",
    subtitle: "Free",
    subtitle_mid: "consultation",
    subtitle_end: "waiting for you!",
  },
  //--//--//
  telegram: {
    text: "Telegram bot for communication",
  },
  benefits: {
    text: benefitsEn,
  },
};
