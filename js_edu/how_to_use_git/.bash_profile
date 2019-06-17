# Enable tab completion
source ~/git-completion.bash

# colors!
green="\[\033[0;32m\]"
blue="\[\033[0;34m\]"
purple="\[\033[0;35m\]"
reset="\[\033[0m\]"

# Change command prompt
source ~/git-prompt.sh
export GIT_PS1_SHOWDIRTYSTATE=1
# '\u' adds the name of the current user to the prompt
# '\$(__git_ps1)' adds git-related stuff
# '\W' adds the name of the current directory
export PS1="$purple\u$green\$(__git_ps1)$blue \W $ $reset"

[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

#set lang to eng

$locale
LANG=pl_PL.utf8
LANGUAGE=
LC_CTYPE="pl_PL.utf8"
LC_NUMERIC="pl_PL.utf8"
LC_TIME="pl_PL.utf8"
LC_COLLATE="pl_PL.utf8"
LC_MONETARY="pl_PL.utf8"
LC_MESSAGES=C
LC_PAPER="pl_PL.utf8"
LC_NAME="pl_PL.utf8"
LC_ADDRESS="pl_PL.utf8"
LC_TELEPHONE="pl_PL.utf8"
LC_MEASUREMENT="pl_PL.utf8"
LC_IDENTIFICATION="pl_PL.utf8"
LC_ALL=