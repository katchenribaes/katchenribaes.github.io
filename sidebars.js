/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  encordPythonSDK: [
  {
    type: 'category',
    label: 'Encord SDK',
    collapsible: true,
    collapsed: true,
    link: {type: 'doc', id: 'about/encord-sdk'},
    items: [
      'about/how-it-works',
      {
        type: 'category',
        label: 'User Guide',
        collapsible: true,
        collapsed: true,
        link: {type: 'doc', id: 'user-guide/overview'},
        items: [
          'user-guide/install-encord-sdk',
          'user-guide/authenticate',
          'user-guide/use-labels',
        ],
      }, 
    ],
  },  
],
};

module.exports = sidebars;
