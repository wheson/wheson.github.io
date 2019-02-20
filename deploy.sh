#!/usr/bin/env sh

# abort on errors
set -e

# build
echo 'vuepress build now..'
vuepress build docs

# navigate into the build output directory
echo 'cd docs/.vuepress/dist'
cd docs/.vuepress/dist

echo 'wheson.com' > CNAME

echo 'git init now..'
git init
echo 'git add -A now..'
git add -A
echo 'git commit now..'
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo 'git push now..'
git push -f --set-upstream git@github.com:wheson/wheson.github.io.git master
cd -
echo 'completed!'
