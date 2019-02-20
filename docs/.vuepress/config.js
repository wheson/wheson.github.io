module.exports = {
    title: 'wheson精進日記',
    description: '競プロメモ集',
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Twitter", link: "https://twitter.com/wheson" },
        ],
        sidebar: 'auto'
    },
    markdown: {
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css' }]
    ]
}
