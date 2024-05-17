#!/usr/bin/env sh

set -e

cd dist

git init
git checkout-b main
git -A
git commit -m 'deploy'

#git push -f git@github.com/gudinojoaquin/Anuncios.git