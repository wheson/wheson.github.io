module.exports = {
    title: 'wheson精進日記',
    description: '競プロメモ集',
    themeConfig: {
        sidebar: 'auto'
    },
    head: [
        ['script', {type: "text/x-mathjax-config"}, `
        MathJax.Hub.Config({
            tex2jax: {
            inlineMath: [ ['$','$'], ['\\(','\\)'] ],
            processEscapes: true
            }
        });
        `],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'}]
    ]
}
