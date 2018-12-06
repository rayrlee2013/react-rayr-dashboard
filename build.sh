#!/usr/bin/env bash

project="react-rayr-dashboard"
ver=$1

if [ ! -n "$1" ] ;then
    echo "请输入版本号！"
    exit
else
    echo "当前输入的版本号为： $1"
fi

cd /home/fedev/www/$project
git remote -v
git pull
git branch

npm run build

echo "打包完成"

zip -r v_$ver.zip build/
rm -rf build

scp /home/fedev/www/$project/v_$ver.zip fedev@10.109.0.77:/home/fedev/static_zip/$project

rm -rf v_$ver.zip

echo "${project} v_${ver} 构建完成！"
