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
rm -rf build
git remote -v
git pull
git branch

npm run build

echo "打包完成"

zip -r v_$ver.zip build

cd /home/fedev/www/static_zip

if [ ! -d $project ];then
    echo "创建${project}项目"
    mkdir $project
else
    echo "${project}已经存在"
fi

mv /home/fedev/www/$project/v_$ver.zip /home/fedev/www/static_zip/$project/

echo "${project} v_${ver} 构建完成！"
