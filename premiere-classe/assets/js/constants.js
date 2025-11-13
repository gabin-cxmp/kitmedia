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
  name: "PREMIERE CLASSE MAR 2026",
  abreviation: 'PC-MAR-26'
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
    dataId:'PC-MAR-26_custom-square',
    templateEN: 'assets/templates/1080x1080.png', 
    templateFR: 'assets/templates/1080x1080.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1080, 1080], 
    logoCenter: [540, 1035], 
    standLetterPosition: [1080-28, 1045], 
    //tentPosition : [67, 1043],
    maxLogoSize: [200, 64], 
    font: '32px Overused Grotesk' 
  },
  { 
    nameEN: 'Story format', 
    nameFR: 'Format story', 
    dataId:'PC-MAR-26_custom-story',
    templateEN: 'assets/templates/1080x1920.png', 
    templateFR: 'assets/templates/1080x1920.png', 
    description: '(1080x1920)', 
    socials: ['instagram', 'facebook', 'tiktok'], 
    dimensions: [1080, 1920], 
    logoCenter: [540, 1875], 
    standLetterPosition: [1080-28, 1885], 
    //tentPosition : [67, 1883],
    maxLogoSize: [200, 64], 
    font: '32px Overused Grotesk' 
  },
  { 
    nameEN: 'Portrait format', 
    nameFR: 'Format portrait', 
    dataId:'PC-MAR-26_custom-portrait',
    templateEN: 'assets/templates/1080x1350.png', 
    templateFR: 'assets/templates/1080x1350.png', 
    description: '(1080x1350)', 
    socials: ['facebook', 'instagram'], 
    dimensions: [1080, 1350], 
    logoCenter: [540, 1305], 
    standLetterPosition: [1080-28, 1315], 
    //tentPosition : [67, 1313],
    maxLogoSize: [200, 64], 
    font: '32px Overused Grotesk' 
  },
  { 
    nameEN: 'LinkedIn Banner', 
    nameFR: 'Bannière Linkedin',
    dataId:'PC-MAR-26_custom-linkedin', 
    templateEN: 'assets/templates/1584x396.png', 
    templateFR: 'assets/templates/1584x396.png', 
    description: '(1584x396)', 
    socials: ['linkedin'], 
    dimensions: [1584, 396], 
    logoCenter: [792, 361], 
    standLetterPosition: [1584-35, 371],
    //tentPosition : [67, 362],
    maxLogoSize: [200, 52], 
    font: '32px Overused Grotesk'
   },
   { 
    nameEN: 'Landscape format', 
    nameFR: 'Format paysage', 
    dataId:'PC-MAR-26_custom-landscape',
    templateEN: 'assets/templates/1200x628.png', 
    templateFR: 'assets/templates/1200x628.png', 
    description: '(1200x628)', 
    socials: ['facebook', 'instagram', 'x'], 
    dimensions: [1200, 628], 
    logoCenter: [600, 37], 
    standLetterPosition: [1200-27, 47], 
    //tentPosition : [67, 594],
    maxLogoSize: [200, 56], 
    font: '32px Overused Grotesk'
   },
   { 
    nameEN: 'Email signature', 
    nameFR: 'Signature Email', 
    dataId:'PC-MAR-26_custom-signature',
    templateEN: 'assets/templates/600x140.png', 
    templateFR: 'assets/templates/600x140.png', 
    description: '(600x140)', 
    socials: ['mail'], 
    dimensions: [600, 140], 
    logoCenter: [300, 127], 
    standLetterPosition: [600-14, 130],
    //tentPosition : [19, 131], 
    maxLogoSize: [70, 16], 
    font: '12px Overused Grotesk'
   },
   { 
    nameEN: 'Small banner', 
    nameFR: 'Petite bannière',
    dataId:'PC-MAR-26_custom-banner', 
    templateEN: 'assets/templates/300x250.png', 
    templateFR: 'assets/templates/300x250.png', 
    description: '(300x250)', 
    socials: ['google-ads', 'meta'], 
    dimensions: [300, 250], 
    logoCenter: [150, 239], 
    standLetterPosition: [300-8.5, 241],
    //tentPosition : [19, 241], 
    maxLogoSize: [34, 16], 
    font: '8px Overused Grotesk'
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
