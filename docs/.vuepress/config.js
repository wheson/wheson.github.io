module.exports = {
    title: 'wheson精進日記',
    description: '競プロメモ集',
    themeConfig: {
        sidebar: 'auto'
    },
    markdown: {
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    },
    head: [
        ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
        ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}]
    ]
}
