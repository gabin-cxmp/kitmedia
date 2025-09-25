  // constants.js

export const dom = {
    logoUpload: document.getElementById('logoUpload'),
    standNumberInput: document.getElementById('standNumber'),
    generatedImagesSection: document.querySelector('.generated-images'),
    imagesContainer: document.querySelector('.images-container'),
    fileNameDisplay: document.querySelector('.file-name'),
    submitButton: document.getElementById('submitButton'),
    downloadAllButton: document.getElementById('downloadAllButton'),
    genericDownloadAll: document.getElementById('generic-downloadAll'),
    downloadAllPicturesButton: document.getElementById('downloadAllPicturesButton'),
    downloadAllLogos: document.getElementById('downloadAllLogos')
  };

export const infoEvent = {
  name: "SALON INTERNATIONAL DE LA LINGERIE 2025",
  abreviation: 'SIL-25'
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
    dataId:'customized-square-format-SIL',
    templateEN: 'assets/templates/1080x1080.png', 
    templateFR: 'assets/templates/1080x1080.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1080, 1080], 
    logoCenter: [540, 1045], 
    standLetterPosition: [1080-28, 1057], 
    maxLogoSize: [160, 54], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'Story format', 
    nameFR: 'Format story', 
    dataId:'customized-story-format-SIL',
    templateEN: 'assets/templates/1080x1920.png', 
    templateFR: 'assets/templates/1080x1920.png', 
    description: '(1080x1920)', 
    socials: ['instagram', 'facebook', 'tiktok'], 
    dimensions: [1080, 1920], 
    logoCenter: [540, 1885], 
    standLetterPosition: [1080-28, 1897], 
    maxLogoSize: [200, 54], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'Portrait format', 
    nameFR: 'Format portrait', 
    dataId:'customized-portrait-format-SIL',
    templateEN: 'assets/templates/1080x1350.png', 
    templateFR: 'assets/templates/1080x1350.png', 
    description: '(1080x1350)', 
    socials: ['facebook', 'instagram'], 
    dimensions: [1080, 1350], 
    logoCenter: [540, 1315], 
    standLetterPosition: [1080-28, 1327], 
    maxLogoSize: [200, 54], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'LinkedIn Banner', 
    nameFR: 'Bannière Linkedin',
    dataId:'customized-linkedin-banner-SIL', 
    templateEN: 'assets/templates/1584x396.png', 
    templateFR: 'assets/templates/1584x396.png', 
    description: '(1584x396)', 
    socials: ['linkedin'], 
    dimensions: [1584, 396], 
    logoCenter: [1083, 361], 
    standLetterPosition: [1584-32, 372], 
    maxLogoSize: [200, 50], 
    font: '32px dico-mono'
   },
   { 
    nameEN: 'Landscape format', 
    nameFR: 'Format paysage', 
    dataId:'customized-landscape-format-SIL',
    templateEN: 'assets/templates/1200x628.png', 
    templateFR: 'assets/templates/1200x628.png', 
    description: '(1200x628)', 
    socials: ['facebook', 'instagram', 'x'], 
    dimensions: [1200, 628], 
    logoCenter: [600, 593], 
    standLetterPosition: [1200-31, 606], 
    maxLogoSize: [200, 54], 
    font: '32px dico-mono'
   },
   { 
    nameEN: 'Email signature', 
    nameFR: 'Signature Email', 
    dataId:'customized-email-signature-SIL',
    templateEN: 'assets/templates/600x140.png', 
    templateFR: 'assets/templates/600x140.png', 
    description: '(600x140)', 
    socials: ['mail'], 
    dimensions: [600, 140], 
    logoCenter: [401, 129], 
    standLetterPosition: [600-8, 134], 
    maxLogoSize: [64, 16], 
    font: '11px dico-mono'
   },
   { 
    nameEN: 'Small banner', 
    nameFR: 'Petite bannière',
    dataId:'customized-small-banner-SIL', 
    templateEN: 'assets/templates/300x250.png', 
    templateFR: 'assets/templates/300x250.png', 
    description: '(300x250)', 
    socials: ['google-ads', 'meta'], 
    dimensions: [300, 250], 
    logoCenter: [150, 238], 
    standLetterPosition: [300-8, 241.5], 
    maxLogoSize: [56, 18], 
    font: '8px dico-mono'
   }
  ];

export const LOGOS = [
  {
    name: 'logo-SIL.png',
    src: 'assets/logos/logo-SIL.png'
  },
  {
    name: 'logo-SIL.svg',
    src: 'assets/logos/logo-SIL.svg'
  }
]