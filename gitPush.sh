#!/bin/sh
# @author Hubal
# @Email Hubal@123.com
# @createBy 2018-11-30
# Shell脚本提交git代码 简单,快速,高效
#
author = Hubal
echo ' >>>>>> start push <<<<<< '
echo " ====== 当前分支 ====== "
branch= git branch
echo $branch

# 判断参数1是否包含参数2
contains_str(){
    # echo " >>> $1 <<< "
    # echo " <<< $2"

    contains_result=$(echo $1 | grep "${2}")
    if [[ -n $contains_result  ]] ; then
          return 1
      else
          return 0
    fi

}

git_add(){
    echo ">>>>>> 执行 git add 之前,本地文件状态如下 <<<<<<"
    git status
    statusResult=$(git status)
    no_change="nothing to commit"

    contains_str "$statusResult" "$no_change"

    if [[ $? == 1 ]]; then
        echo "=== 当前没有新增或者修改的文件 ==="
        git_push
        exit
    fi

    read -p "是否确定add？Y|N : " add_params
    if [[ $add_params == "Y" || $add_params == "y" ]]; then
            git add .
    else
        exit
    fi
}

git_commit(){
     echo ">>>>>> 执行 git commit 之前,本地文件状态如下 <<<<<<"
     git status
     read -p "是否确定commit？Y|N : " commit_params
     if [[ $commit_params == "Y" || $commit_params == "y" ]] ; then
             read -p "请输入commit信息: " commit_msg
             if [ -z $commit_msg  ] ; then
                 git commit -m "git commit by $author" .
             else
                 git commit -m $commit_msg .
             fi
     elif [[ $commit_params == "N" || $commit_params == "n" ]] ; then
          exit
     else
         exit
     fi
}

git_push(){
    echo ">>>>>> 执行 git push 之前,本地文件状态如下 <<<<<<"
    git status
    current_branch=$(git symbolic-ref --short -q HEAD)
    echo ">>>>>> 当前分支:$current_branch <<<<<<"
    read -p "是否确定push？Y|N : " push_confirm
    if [[ $push_confirm != "Y" &&  $push_confirm != "y" ]]; then
        echo ">>>>>> end push <<<<<<"
        exit
    fi
    read -p "请输入远程git地址别名,默认是origin: " origin_params
    echo -e "\n"
    read -p "请输入远程分支名称,默认是当前分支: " branch_params
    push_result="";
    if [[ -z $origin_params && -z $branch_params ]]; then
        echo ">>>>>> push origin $current_branch"
        sleep 5
        git push origin $current_branch

    elif [[ -n $origin_params && -n $branch_params ]]; then
        echo ">>>>>> push $origin_params $branch_params"
        sleep 5
        git push $origin_params $branch_params

    elif [[ -z $origin_params && -n $branch_params  ]]; then
        echo ">>>>>> push origin $branch_params"
        sleep 5
        git push origin $branch_params

    elif [[ -n $origin_params && -z $branch_params  ]]; then
        echo ">>>>>> push $origin_params $current_branch"
        sleep 5
        git push $origin_params $current_branch
    else
        echo ">>>>>> end push <<<<<<"
    fi

}



read -p "默认push当前分支，Q代表quit,其他单词代表切换分支 : " branch
if [[ $branch == "Y" || $branch == "y" || -z $branch ]] ; then
        # echo  "你输入的是:  $branch "
        statusResult=$(git status)
        to_commit="Changes to be committed"
        contains_str "$statusResult" "$to_commit"
        if [[ $? != 1 ]]; then
            git_add;
        else
            git add .
            echo " ====== 本地没有需要add的文件，直接commit ====== "
        fi
        git_commit;
        git_push;
        exit;

elif [[ $branch == "Q" || $branch == "q" ]] ; then
        # echo "你输入的是： $branch ,代表退出当前操作！"
        exit
else
    git checkout $branch
    echo -e "当前分支: \n $(git branch) "
    git_add;
    git_commit;
    git_push;
    exit;
fi
