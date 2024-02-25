const languages = {
    suggest: [
      {
        id: '1',
        name: "English",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "en",
        subtitle: "English"   
  
      },
      {
        id: '2',
        name: "தமிழ்",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "ta",
        subtitle: "Tamil"
  
      },
      {
        id: '3',
        name: "हिंदी",
        language: "hi",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        subtitle: "Hindi"
  
      },
  
      {
        id: '4',
        name: "मराठी",
        language: "mr",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        subtitle: "Marathi"
      },
      
      {
        id: '6',
        name: "ਪੰਜਾਬੀ",
        language: "pa",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        subtitle: "Punjabi"
      },
      {
        id: '7',
        name: "اردو",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "ur",
        subtitle: "Urdu"
      },
  
      {
        id: '8',
        name: "ગુજરાતી",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "gu",
        subtitle: "Gujarati"
      },
      {
        id: '9',
        name: "ಕನ್ನಡ",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "kn",
        subtitle: "Kannada"
      },
      {
        id: '10',
        name: "മലയാളം",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "ml",
        subtitle: "Malayalam"
      },   
      {
        id: '12',
        name: "తెలుగు",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/In%403x.png",
        language: "te",
        subtitle: "Telugu"
      },
    ],
    allLanguage: [
      {
        id: "01",
        name: "عربي",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/arabic.png",
        language: "ar",
        subtitle: "Arabic"
      },
  
      {
        id: "02",
        name: "Azərbaycan",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Flag_of_Azerbaijani_Land_Forces.svg.png",
        language: "az",
        subtitle: "Azerbaijani"
      },
  
      {
        id: "03",
        name: "Bengali",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Flag_of_Bangladesh.svg.png",
        language: "bn",
        subtitle: "Bengali"
      },
  
      {
        id: "04",
        name: "български",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Bg%403x.png",
        language: "bg",
        subtitle: "Bulgarian"
      },
      {
        id: "05",
        name: "Catalonia",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Catalonia%403x.png",
        language: "ca",
        subtitle: "Catalonia"
      },  
      {
        id: "07",
        name: "Nederlands",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Netherland.png",
        language: "nl",
        subtitle: "Nederlands"
      },
  
      {
        id: "08",
        name: "eesti keel",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Ee%403x.png",
        language: "et",
        subtitle: "Estonian"
      },
  
      {
        id: "09",
        name: "Filipino",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Ph%403x.png",
        language: "tl",
        subtitle: "Filipino"
      },
      {
        id: "10",
        name: "Suomi",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Fi%403x.png",
        language: "fi",
        subtitle: "Suomi"
      },
      {
        id: "011",
        name: "Français",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/French.png",
        language: "fr",
        subtitle: "French"
      },
  
      {
        id: "012",
        name: "Deutsch",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/germen.png",
        language: "de",
        subtitle: "German"
      },
      {
        id: "013",
        name: "Ελληνικά",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Gr%403x.png",
        language: "el",
        subtitle: "Greek"
      },
  
      {
        id: "014",
        name: "Magyar",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Hu%403x.png",
        language: "hu",
        subtitle: "Magyar"
      },
      {
        id: "015",
        name: "íslenskur",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Is%403x.png",
        language: "is",
        subtitle: "Icelandic"
      },
  
      {
        id: "016",
        name: "bahasa Indonesia",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Id%403x.png",
        language: "id",
        subtitle: "Indonesian"
      },
  
      {
        id: "017",
        name: "Italiana",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/It%403x.png",
        language: "it",
        subtitle: "Italian"
      },
      {
        id: "18",
        name: "日本",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Jp%403x.png",
        language: "ja",
        subtitle: "Japanese"
      },
  
      {
        id: "019",
        name: "한국인",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Kr%403x.png",
        language: "ko",
        subtitle: "Korean"
      },
  
      {
        id: "020",
        name: "latviski",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Lv%403x.png",
        language: "lv",
        subtitle: "Latvian"
      },
      {
        id: "022",
        name: "lietuvių",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Lt%403x.png",
        language: "lt",
        subtitle: "Lithuanian"
      },
  
      {
        id: "023",
        name: "Melayu",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/My%403x.png",
        language: "ms",
        subtitle: "Malay"
      },
  
      {
        id: "024",
        name: "नेपाली",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/nepal-country-flag-in-sphere-with-white-shadow-2EAPPX1.jpg",
        language: "ne",
        subtitle: "Nepali"
      },
      {
        id: "025",
        name: "Norsk",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/No%403x.png",
        language: "no",
        subtitle: "Norsk"
      },
  
      {
        id: "026",
        name: "Polski",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Pl%403x.png",
        language: "pl",
        subtitle: "Polski"
      },
      {
        id: "027",
        name: "Português",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Pt%403x.png",
        language: "pt",
        subtitle: "Portuguese"
      },
  
      {
        id: "028",
        name: "Română",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Ro%403x.png",
        language: "ro",
        subtitle: "Romanian"
      },
      {
        id: "029",
        name: "Русский",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Ru%403x.png",
        language: "ru",
        subtitle: "Russian"
      },
  
      {
        id: "030",
        name: "Српски",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Rs%403x.png",
        language: "sr",
        subtitle: "Serbian"
      },
  
      {
        id: "031",
        name: "slovenský",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Sk%403x.png",
        language: "sk",
        subtitle: "Slovak"
      },
      {
        id: "032",
        name: "Slovenščina",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Si%403x.png",
        language: "sl",
        subtitle: "Slovenian"
      },
      
      {
        id: "034",
        name: "Española",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Es%403x.png",
        language: "es",
        subtitle: "Somali"
      },
  
      {
        id: "035",
        name: "svenska",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Se%403x.png",
        language: "sv",
        subtitle: "Spanish"
      },
  
      {
        id: "036",
        name: "แบบไทย",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Th%403x.png",
        language: "th",
        subtitle: "Thai"
      },
  
      {
        id: "037",
        name: "Türkçe",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Tr%403x.png",
        language: "tr",
        subtitle: "Turkish"
      },
  
      {
        id: "038",
        name: "українська",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Ua%403x.png",
        language: "uk",
        subtitle: "Ukrainian"
      },
  
      {
        id: "039",
        name: "Tiếng Việt",
        flag: "https://feedbacksync-v2.s3.ap-south-1.amazonaws.com/flags/Vn%403x.png",
        language: "vi",
        subtitle: "Vietsubtitlese"
      },
    ],
  };
  
  export default languages;
  
  
  