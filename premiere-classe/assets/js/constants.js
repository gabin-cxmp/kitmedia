  // constants.js

export const dom = {
    logoUpload: document.getElementById('logoUpload'),
    tentSelectInput: document.getElementById('tents'),
    standNumberInput: document.getElementById('standNumber'),
    generatedImagesSection: document.querySelector('.generated-images'),
    imagesContainer: document.querySelector('.images-container'),
    fileNameDisplay: document.querySelector('.file-name'),
    submitButton: document.getElementById('submitButton'),
    downloadAllButton: document.getElementById('downloadAllButton'),
    genericDownloadAll: document.getElementById('generic-downloadAll'),
    downloadAllLogos: document.getElementById('downloadAllLogos'),
  };

export const infoEvent = {
  name: "PREMIERE CLASSE 2025",
  abreviation: 'PC-25'
}

export const SOCIALS = [
    { name: 'instagram', url: 'assets/socials/instagram.svg' },
    { name: 'facebook', url: 'assets/socials/facebook.svg' },
    { name: 'x', url: 'assets/socials/x.svg' },
    { name: 'tiktok', url: 'assets/socials/tiktok.svg' },
    { name: 'linkedin', url: 'assets/socials/linkedin.svg' },
    { name: 'meta', url: 'assets/socials/meta.svg'},
    { name: 'mail', url: 'assets/socials/mail.svg'},
    { name: 'google-ads', url: 'assets/socials/google-ads.svg'}
  ];
  
 export const FORMATS_CUSTOMIZED_BANNERS = [
  { 
    nameEN: 'Square format',
    nameFR:'Format carré', 
    dataId:'customized-square-format-premiere-classe',
    templateEN: 'assets/templates/1080x1080.png', 
    templateFR: 'assets/templates/1080x1080.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1080, 1080], 
    logoCenter: [540, 1033], 
    standLetterPosition: [1080-67, 1043], 
    tentPosition : [67, 1043],
    maxLogoSize: [200, 70], 
    font: '32px Brockmann' 
  },
  { 
    nameEN: 'Story format', 
    nameFR: 'Format story', 
    dataId:'customized-story-format-premiere-classe',
    templateEN: 'assets/templates/1080x1920.png', 
    templateFR: 'assets/templates/1080x1920.png', 
    description: '(1080x1920)', 
    socials: ['instagram', 'facebook', 'tiktok'], 
    dimensions: [1080, 1920], 
    logoCenter: [540, 1873], 
    standLetterPosition: [1080-67, 1883], 
    tentPosition : [67, 1883],
    maxLogoSize: [200, 70], 
    font: '32px Brockmann' 
  },
  { 
    nameEN: 'Portrait format', 
    nameFR: 'Format portrait', 
    dataId:'customized-portrait-format-premiere-classe',
    templateEN: 'assets/templates/1080x1350.png', 
    templateFR: 'assets/templates/1080x1350.png', 
    description: '(1080x1350)', 
    socials: ['facebook', 'instagram'], 
    dimensions: [1080, 1350], 
    logoCenter: [540, 1303], 
    standLetterPosition: [1080-67, 1313], 
    tentPosition : [67, 1313],
    maxLogoSize: [200, 70], 
    font: '32px Brockmann' 
  },
  { 
    nameEN: 'LinkedIn Banner', 
    nameFR: 'Bannière Linkedin',
    dataId:'customized-linkedin-banner-premiere-classe', 
    templateEN: 'assets/templates/1584x396.png', 
    templateFR: 'assets/templates/1584x396.png', 
    description: '(1584x396)', 
    socials: ['linkedin'], 
    dimensions: [1584, 396], 
    logoCenter: [792, 351], 
    standLetterPosition: [1584-67, 362],
    tentPosition : [67, 362],
    maxLogoSize: [200, 70], 
    font: '32px Brockmann'
   },
   { 
    nameEN: 'Landscape format', 
    nameFR: 'Format paysage', 
    dataId:'customized-landscape-format-premiere-classe',
    templateEN: 'assets/templates/1200x628.png', 
    templateFR: 'assets/templates/1200x628.png', 
    description: '(1200x628)', 
    socials: ['facebook', 'instagram', 'x'], 
    dimensions: [1200, 628], 
    logoCenter: [600, 583], 
    standLetterPosition: [1200-67, 594], 
    tentPosition : [67, 594],
    maxLogoSize: [200, 70], 
    font: '32px Brockmann'
   },
   { 
    nameEN: 'Email signature', 
    nameFR: 'Signature Email', 
    dataId:'customized-email-signature-premiere-classe',
    templateEN: 'assets/templates/600x140.png', 
    templateFR: 'assets/templates/600x140.png', 
    description: '(600x140)', 
    socials: ['mail'], 
    dimensions: [600, 140], 
    logoCenter: [300, 127], 
    standLetterPosition: [600-19, 131],
    tentPosition : [19, 131], 
    maxLogoSize: [70, 18], 
    font: '10px Brockmann'
   },
   { 
    nameEN: 'Small banner', 
    nameFR: 'Petite bannière',
    dataId:'customized-small-banner-premiere-classe', 
    templateEN: 'assets/templates/300x250.png', 
    templateFR: 'assets/templates/300x250.png', 
    description: '(300x250)', 
    socials: ['google-ads', 'meta'], 
    dimensions: [300, 250], 
    logoCenter: [150, 237], 
    standLetterPosition: [300-19, 241],
    tentPosition : [19, 241], 
    maxLogoSize: [34, 18], 
    font: '10px Brockmann'
   }
  ];

export const LOGOS = [
  {
    name: 'Logo-Premiere-Classe.png',
    src: '../premiere-classe/assets/logos/logo-premiere-classe.png'
  },
  {
    name: 'Logo-Premiere-Classe.svg',
    src: '../premiere-classe/assets/logos/logo-premiere-classe.svg'
  }
]
