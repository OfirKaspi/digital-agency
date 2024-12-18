export const fetchHomePageData = async () => {
  const data = {
    hero: {
      _id: "1",
      header: "העתיד הדיגיטלי שלך מתחיל כאן",
      subHeader: "הופכים חלום למציאות",
      image: {
        _id: "1",
        src: "https://res.cloudinary.com/dudwjf2pu/video/upload/v1732805721/7020045_Abstract_Background_1920x1080_wfhrkz.mp4",
        alt: "תמונת נושא",
      },
      buttonText1: "צור קשר",
      buttonText2: "העבודות שלנו",
    },
    subscription: {
      _id: "1",
      header: "אם הגעת עד לכאן - קודם כל תודה. כנראה שהצלחנו לסקרן אותך, עכשיו הגיע הזמן לעלות שלב",
      desc: "כמו כולם, גם אתה רוצה לקחת את העסק שלך לשלב הבא ולבלוט בתחום שלך, אנחנו כאן כדי לעזור. עם בניית אתר מותאם אישית שמביא תוצאות מיידיות ומגוון פתרונות נוספים שאנו מציעים, אנחנו בטוחים שנוכל להצליח ביחד איתך. השאירו לנו פרטים ונקבע שיחת ייעוץ בחינם, בה נכיר ונדבר על הצרכים של העסק שלך ואם זה יעבוד בנינו - נתחיל לתכנן יחד את הדרך להצלחה",
      buttonText: "לעלות לשלב הבא!",
      src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_4:3/v1732882165/5617154_2920891_bspoyl.jpg",
      alt: "תמונה - תודה לכם"
    },
    questions: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "שאלות נפוצות",
        desc: "לכל שאלה או עזרה נוספת, הרגישו חופשי לפנות אלינו ונעזור באהבה ללא עלות",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/4865684_10584_vdqdn9.jpg",
        alt: "תמונה - שאלות נפוצות",
      },
      paragraphs: [
        {
          _id: "1",
          header: "מה ההבדל בין אתר שנבנה בקוד לאתר בוורדפרס?",
          desc: "ההבדל העיקרי הוא גמישות והתאמה אישית. אתר שנבנה בקוד מאפשר לנו לבנות לך אתר ייחודי לחלוטין שיתאים בדיוק לצרכים שלך. בעוד שאתרי וורדפרס ופלטפורמות דומות מציעים פתרונות מהירים ומוכנים מראש, אנחנו ב-LevelUp יוצרים אתרים בהתאמה אישית שניתן לשלוט בהם בצורה מלאה, עם יכולת להוסיף ולשנות כל פרט באתר לפי דרישותיך",
        },
        {
          _id: "2",
          header: "איך אני יכול לדעת אם האתר שלי מותאם למנועי חיפוש (SEO)?",
          desc: "אנו ב-LevelUp מציעים שירותי SEO כחלק מהתהליך שלנו. אנחנו מבצעים אופטימיזציה לאתר שלך כדי להבטיח שהוא יהיה ידידותי למנועי החיפוש ויעלה במיקומים גבוהים בגוגל. כולל התאמה של תוכן, תגיות, קישורים פנימיים, תמונות, ועוד.",
        },
        {
          _id: "3",
          header: "כמה זמן לוקח לבנות אתר?",
          desc: "זמן בניית האתר משתנה בהתאם לדרישות הספציפיות שלך. דף נחיתה או אתר תדמית יחסית פשוט יכול להיבנות תוך שעות עד ימים ספורים, אך אם מדובר באתר מורכב יותר, כמו אתר מסחר או אתר עם פונקציות מיוחדות, התהליך יכול לקחת גם מספר שבועות. אנחנו נספק לך לוח זמנים מדויק לאחר האיפיון והבנת הצרכים שלך",
        },
        {
          _id: "4",
          header: "האם אתם יכולים לעזור לי לשדרג אתר קיים?",
          desc: "כן, בהחלט! אם יש לך אתר קיים ואתה מרגיש שהוא לא מממש את הפוטנציאל שלו או שאינו תואם את הצרכים העכשוויים שלך, אנחנו כאן כדי לעזור. נשדרג את העיצוב, נוסיף פונקציות חדשות, ונדאג לשפר את חוויית המשתמש ואת קידום האתר. אנחנו יכולים לשדרג גם את התוכן ואת הביצועים של האתר כך שיתפקד בצורה מיטבית",
        },
        {
          _id: "5",
          header: "?האם האתר שלי יהיה מותאם למכשירים ניידים",
          desc: "בוודאי! כל אתר שאנו בונים ב-לבל אפ מותאם לכל המכשירים, כולל טלפונים ניידים וטאבלטים. כיום, כמעט 90% מהתנועה לאתרים מגיעה ממכשירים ניידים, ולכן אנחנו דואגים לכך שהאתר שלך יהיה מותאם באופן מושלם לכל סיטואציה שבה הגולש יכול לפגוש אותך",
        },
      ]
    },
    clientReviews: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "תוצאות בשטח",
        desc: "הלקוחות שלנו מעידים – אנחנו לא רק מבטיחים, אנחנו מביאים תוצאות. כל פרויקט שאנחנו מבצעים מתוכנן בקפידה כדי להבטיח שהוא משרת את המטרות של הלקוח בצורה הטובה ביותר. אנחנו עושים זאת על ידי שיחת איפיון, הגדרת מטרות ויעדים, עדכון שוטף במהלך העבודה ותיקונים לפי צרכי הלקוח. הנה הצצה למה שחלק מהם מספרים על העבודה איתנו:",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/5513846_2862210_lntbom.jpg",
        alt: "תמונה - תוצאות בשטח",
      },
      reviews: [
        {
          _id: "1",
          header: "לבלו אפ שינתה לחלוטין את הנוכחות הדיגיטלית שלנו",
          desc: "הצוות שלהם הצטיין בפיתוח ועיצוב האתר שלנו, והתוצאה היא פלטפורמת מסחר אלקטרוני יפיפייה ונוחה לשימוש. המכירות שלנו ברשת זינקו, ואנחנו פשוט מרוצים עד הגג",
          name: "מירי אקסלברד",
          role: "מייסד שיקלי",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/896_vnoji2.jpg",
          alt: "תמונה של מירי אקסלברד",
          link: {
            _id: "1",
            text: "צפו בפרויקט",
            href: "/projects/shikli"
          }
        },
        {
          _id: "2",
          header: "לעבוד עם לבל אפ היה פשוט חוויה מעולה",
          desc: "הם הבינו את החזון שלנו לאפליקציה שתייעל את שירות משלוחי המזון שלנו. האפליקציה שהם יצרו עלתה על כל הציפיות שלנו, והלקוחות שלנו נהנים מחוויית הזמנה מושלמת. לבל אפ היא שותפה שאפשר לסמוך עליה",
          name: "יונתן שמואלי",
          role: "מייסד סייט טק",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/7187_qwf50t.jpg",
          alt: "תמונה של יונתן שמואלי",
          link: {
            _id: "2",
            text: "צפו בפרויקט",
            href: "/projects/sitetech"
          }
        },
        {
          _id: "3",
          header: "לבל אפ יצרה עבורנו מערכת ניהול הזמנות ואירועים מתקדמת",
          desc: "הדיוק שלהם והיכולת ליצור פלטפורמה קלה לשימוש היו מורגשים בכל שלב. המערכת הפכה את העבודה שלנו ליעילה יותר ושדרגה את חוויית הלקוחות באירועים",
          name: "מאיה שניר",
          role: "מנכ״לית ברייד בוטיק",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877999/15511_mrizjo.jpg",
          alt: "תמונה של מאיה שניר",
          link: {
            _id: "3",
            text: "צפו בפרויקט",
            href: "/projects/bride-boutique"
          }
        },
        {
          _id: "4",
          header: "חברת לטס גארדן פנתה ללבל אפ לשדרוג תהליכי העבודה",
          desc: "הם פיתחו עבורנו מערכת תוכנה מותאמת אישית שהעלתה את הפרודוקטיביות שלנו והפחיתה טעויות. הידע והמקצועיות של לבל אפ הופכים אותם לשותף שאפשר להסתמך עליו",
          name: "רוברטו מישאלי",
          role: "סמנכ״ל תפעול לטס גארדן",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877998/12127_ryy3yp.jpg",
          alt: "תמונה של רוברטו מישאלי",
          link: {
            _id: "4",
            text: "צפו בפרויקט",
            href: "/projects/lets-garden"
          }
        }
      ]
    },
    techs: [
      {
        _id: "1",
        name: "Figma",
        alt: "Figma Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/figma_ihd6ko.svg"
      },
      {
        _id: "2",
        name: "Google Analytics",
        alt: "Google Analytics Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/google-analytics_ecg3yw.svg"
      },
      {
        _id: "3",
        name: "Mailchimp",
        alt: "Mailchimp Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/mailchimp_ekhmce.svg"
      },
      {
        _id: "4",
        name: "Monday",
        alt: "Monday Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/monday_ppefry.svg"
      },
      {
        _id: "5",
        name: "Motion",
        alt: "Motion Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/motion_xuxkqu.svg"
      },
      {
        _id: "6",
        name: "NextJS",
        alt: "NextJS Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/next_mf9asa.svg"
      },
      {
        _id: "7",
        name: "Strapi",
        alt: "Strapi Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757870/strapi_hjhv5t.svg"
      },
      {
        _id: "8",
        name: "Tailwind",
        alt: "Tailwind Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/tailwind_ho2k5z.svg"
      },
      {
        _id: "9",
        name: "Zapier",
        alt: "Zapier Image",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733757872/zapier_ochkxu.svg"
      },
    ],
    ourServices: {
      _id: "1",
      imageSection: {
        _id: "1",
        header: "השירותים שלנו, הנחת שלך",
        desc: "הכלל שלנו - אנחנו שותפים להצלחה שלך. עם ניסיון רב בבניית אתרים, עיצוב, שיווק ואסטרטגיות חדשניות נבנה חוויות דיגיטליות שיגרמו לך לבלוט ולהצליח. אנחנו כאן כדי לדאוג שכל פרט יותאם לצרכים הספציפיים שלך - בוא ונגשים את החזון שלך ביחד! שקיפות ואמינות → הקשבה והבנת הצרכים → תמיכה לאורך כל הדרך",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
        alt: "תמונה - השירותים שלנו",
      },
      services: [
        {
          _id: "1",
          header: "בנייה ועיצוב אתרים",
          desc: "ב-לבל אפ, אנו מתמחים בבניית אתרים מודרניים וידידותיים למשתמש שמשדרים מקצועיות ומדגישים את הייחודיות של המותג שלך. עם דגש על עיצוב חווייתי ותהליך פיתוח מתקדם, אנו מוודאים שהאתר שלך יבלוט במרחב הדיגיטלי",
          buttonText: "לעוד מידע לחץ כאן",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766524/brush_1_tcsr8v.svg",
          alt: "אייקון בנייה ועיצוב אתרים",
        },
        {
          _id: "2",
          header: "שירותי שיווק ופרסום",
          desc: "אנחנו מספקים שירותי שיווק ופרסום מותאמים אישית שיעזרו לך להגיע לקהל היעד שלך בצורה מדויקת. עם אסטרטגיות חדשניות וקמפיינים ממוקדים, נהפוך את החזון שלך להצלחה מדידה",
          buttonText: "לעוד מידע לחץ כאן",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766525/puzzle_1_t5nv0s.svg",
          alt: "אייקון שירותי שיווק ופרסום",
        },
        {
          _id: "3",
          header: "אוטומציות ומוצרים דיגיטליים חדשניים",
          desc: "הפתרונות שלנו כוללים אוטומציות חכמות ומוצרים דיגיטליים מתקדמים שמייעלים תהליכים עסקיים וחוסכים לך זמן. אנחנו עוזרים לך להתמקד בצמיחה תוך שימוש בטכנולוגיות חדשניות",
          buttonText: "לעוד מידע לחץ כאן",
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733766525/square-chart-gantt_1_jml7ug.svg",
          alt: "אייקון אוטומציות ומוצרים דיגיטליים חדשניים",
        },
      ]
    },
  }

  return data;
};
