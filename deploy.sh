#!/usr/bin/env sh

set -e
npm run build
cd .vuepress/dist

# echo 'docs.pywebview.org' > CNAME
git init
# git config user.name 'doudoudzj'
# git config user.email 'doudoudzj@gmail.com'
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/pywebview/pywebview.github.io.git
git push -f -u origin master
cd -
