---
title: 'Git'
date: '2022-03-08'
shortDescription: 'Notes on Git'
imgUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80'
---

Tuesday, March 8, 2022

Just sharing an open notes format on Git!

**Git Commands**

- _git status_

- Gives information on the current status of a git repository and its content

- _git init_

- Initialize a new git repository
- Creates a .git folder

- _git commit_

- Commit === group changes into a commit (snapshot of changes)
- Working Directory

- _git add_

- Staging Area

- _git commit_

- Repository

- _git add_

- Adds changes to a staging area
- _git add ._

- Stages all changes at once
- Be careful with using the dot

- _git commit_

- Actually commits changes from the staging area
- Requires a commit message
- _git commit -m "my message"_

- Bypass a text editor to make a commit message

- _git log_

- Shows commits and commit date from author and email

- git add -a -m "message"

**Commits**

- **Atomic Commits**

- A commit should encompass a single feature, change, or fix.
- Try to keep each commit focused on a single thing.
- Makes it much easier to undo or rollback changes later on.
- Also makes your code easier to review.

- **Present Tense Imperative Style for commit messages**

- Example: make X do Y.

**VIM Editor**

- Enter into insert mode (type "I")
- Type at top of message
- Hit escape key to exit insert mode

- Type **:wq** to write then quit

**Git Log**

- _git log ---oneline_

**Ammending Commits**

- Redo a previous commit using the ---amend option

- Git commit
- Git add forgotten_file
- Git commit ---amend

- Rough equivalent of...

- Git reset ---soft HEAD^
- Git commit -c ORIG_HEAD

- Will open up previous commit message to edit

**.gitignore file**

- Tells Git which files and directories to ignore
- Secrets, API keys, credentials
- Operating System files (.DS_store)
- Log files
- Dependencies and packages
- **.DS_Store** - will ignore exact files
- **folderName/ - will ignore an entire directory**
- **\*.log - will ignore any files with the .log extension**

**Branching**

- Each commit gets a hash with a parent (or null if first commit)
- Branches are an essential part of Git.

- Think of branches as alternative timelines for a project
- They enable us to create separate contexts where we can try new things or even work on multiple ideas in parallel
- Branches work on isolation of each other

- **Main Branch**

- Many people designate the main branch as the source of truth or the official branch but is a choice made by developers.
- Common workflow is feature branching off of main branch then merge back into main when ready
- HEAD -> Master
- What is HEAD?

- HEAD is simply a pointer that refers to the current "location" in your repository.
- It points to a particular branch reference.
- Branches as bookmarks in a book.

- Tons of bookmarks in a book (branches)
- Any given point of time, only one of these bookmarks can be open (active, viewed)
- HEAD is our current location that we are viewing (checking out)
- HEAD is a reference to a branch pointer (where a branch currently is)

- .git /HEAD

- refs/heads/[branch HEAD is referring to]
- Each file contains just a commit hash

**Viewing Branches**

- git branch views your existing branches.

**Creating Branches**

- git branch <branch-name>
- Make a new branch based upon the current HEAD
- Just creates the branch, does not switch you to that branch
- git switch to switch to branch (or git checkout)
- git switch -c to create a new branch AND switch to it
- git checkout -b also works

**Switching Branches with unstaged changes**

- If its a new file, it will carry over in the switch our checkout to a new branch
- If its the same file but in conflict, git will throw a warning

**Deleting and Renaming Branches**

- git branch -D (uppercase adds ---force)
- git branch -M (move/rename a branch)

**Merging Branches**

- Incorporate changes from one branch into another!
- We merge branches, not specific commits
- We always merge to the current HEAD branch
- To merge, follow these steps:

- Switch to branch you want to merge changes into (receiving branch)
- Use git merge to merge changes from a specific branch into current branch.
- **Fast-forward merge**: A branch simply caught up to the commits of another branch.
- Git log will include all commits from both branches
- Not all merges are fast forwards though.

- What if you are on a branch and in the meanwhile a new commit has been added to the main branch?
- What happens is a merge commit:

- Creates a new commit on the main branch and Git will prompt you for a message. (Merge commit has two different parents, one from each branch)

**Merge Conflicts**

- This occurs when git is unable to automatically merge and requires a manual resolve.
- Open file, remove conflict markers, add changes and commit file
- VSCode has built in interface.

**Git Diff**

- Compares Staging Area and Working Directory
- Reading Git Diff

- Compared files (one file is A, other file is B)
- Chunks

- Chunk Header

- && numbers &&
- -3,4

- Four lines from line 3 for file A

- Git diff HEAD

- Lists all changes in the working tree since your last commit
- Git diff HEAD~1

- Compares HEAD with previous commit

- Git diff ---staged

- Lists changes between the staging area and our last commit

- Git diff ---cached
- Narrow down to specific file

- Git diff HEAD [filename]
- Git diff ---staged [filename]

- git diff branch1..branch2

- List diff between two branches
- Order matters

- git diff commit1..commit2

- Compare two commits
- Use hashes of commits
- Order matters

**Git Stashing**

- Save uncommitted changes on a branch and switch to another branch
- Git stash pop

- Re-apply latest stash back

- Git stash apply

- Takes whatever is stashed and applies but does not remove from the stash

- Git stash list

- View all stashes

- **Git stash apply stash@{2}**
- **Git stash drop <stash-id>**

- Delete a particular stash

- Git stash clear

- Clears all stash

**Time Traveling and Undoing Stuff**

- _Git checkout_

- Can be used to create branches, switch to new branches, restore files, and undo history

- _Git checkout <commit hash>_

- Detached HEAD??

- Usually HEAD points to a specific branch reference
- Branch reference is a pointer to the last commit made on that branch
- HEAD => MASTER => Commit Hash
- **In detached HEAD, the HEAD is actually pointing at the commit rather than the branch pointer.**

- Allows experimental changes back in time.

- Stay in detached HEAD to examine contents of old commit. Poke around and view files.
- Leave and go back to wherever you were before - Reattach HEAD

- Git switch <branch>

- Create a new branch and switch to it. You can make and save changes since HEAD Is no longer detached.

**Another way to checkout previous commits**

Git checkout HEAD~1 (previous commit)

Git checkout HEAD~2 (2 commits before HEAD)

Git switch -  (switch to last used branch)

**Discarding Changes**

_Git checkout HEAD <filename> to discard any changes to that file, reverting back to the HEAD_

_Git checkout --- <filename> (dash dash)_

_Git restore_

- Brand new Git command that helps with undoing operations
- Introduced with git switch
- git restore ---source HEAD~1 home.html
- Unstage Files with Restore

- Git restore ---stage <filename>

**Git Reset**

Undo commits on a branch

Git reset <commit-hash>

- Code is still there but not committed

Git reset ---hard <commit-hash>

- Loose commits AND loose changes
- **Git reset ---hard HEAD~1**

- This will delete the last commit and associated changes

**Git Revert**

Git revert <commit-hash>

- Git revert is similar to git reset as they both "undo" changes, but they accomplish it in different ways
- Git reset actually moves the branch pointer backwards, eliminating commits from history.
- Git revert instead creates a brand new commit which reverses / undos the changes from a commit. Because it results in a new commit, you will be prompted to enter a commit message.

Which to use?

- If you want to reverse some commits that other people already have on their machines, you should use revert.
- If you want to reverse commits that you have not shared with others, use reset.

**Github**

- **What is GitHub?**

- A hosting platform for git repositories.
- Separate from Git.
- Collaboration and much more.

- **Cloning**

- Git clone

- Gets a local copy of an existing repository
- Git clone <url>

- **Remote**

- We need a "destination" to push changes to
- Git remote -v

- List the current remote

- Git remove add <name> <url>

- Adds a new remote
- Git remote add origin <git url>
- Origin? - conventional naming

- Git remote rename <old> <new>
- Git remote remove <name>

- **Git Push**

- Git push <remote> <branch>
- Need to specify the remote we want to push to AND the specific local branch
- Git push origin master

- Push up master branch to our remote origin

- Local master and remote master are not the same!
- Git push <remote> <local-branch>:<remote-branch>

- Git push origin pancake:waffle
- Push local branch to a remote branch of a different name

- **Git push -u option**

- Allows you to set the upstream of the branch we are pushing.
- Sets a link connecting our local branch to the branch on GitHub.
- Running git push -u origin mater sets the upstream of the local master branch so that it tracks the master branch on the origin repo.
- Allows you to just run **git push** instead of specifying origin each time.
- Works the same for branches.

- Git push -u newBranch

**Fetching and Pulling**

- Remote Tracking Branch

- Pointer to the last known commit from the origin branch
- <remote>/<branch>
- **Git branch -r**

- View remote branch

- Git status

- You made see "your branch is ahead of origin/master by 2 commits"
- **Git checkout origin/master** (view remote branch and compare differences)

**_Remote Branches_**

- git branch -r

- View all remote branches

- _Git checkout origin/branch_ (actually puts you in detached HEAD)
- _Git switch branch_

- Using same branch name, Git will assume you want to make local branch and set it up to track the remote branch.
- Old way: _git checkout ---track origin/branch_

**Git Fetch**

- Origin master branch gets a bunch of new commits and now your local copy is not up to date:

- Takes remote changes and brings down to local repository (not to local workspace)
- Fetching allows us to download changes from a remote repo, but those changes are not automatically integrated to our working files.
- Lets you see what others have been working on, without having to merge those changes into your local repo
- _Git fetch <remote>_

- Fetches branches and history from a specific remote repo. Only updates remote tracking branches.
- Git fetch origin will fetch all changes from the origin remote repo.

- Git fetch <remote> <branch>

- Git checkout origin/branch to take a peak at changes

**Git Pull**

- Pull actually updates our HEAD branch with whatever changes are brought in from the remote
- Git pull = git fetch (update remote tracking branch with latest changes from remote repo) + git merge (update my current branch with changes from remote tracking branch)
- Git pull <remote> <branch>

- Where we run git pull matters.
- Pulls can result in merge conflicts!
- Be on the branch you want to pull changes into!

- Before pushing up, you should pull down and see if merge conflicts arise
- **Git pull** by itself

- Git will assume the remote will default to the origin
- Branch will default to whatever tracking connection is configured for your current branch

**READMES**

- Communicates what the project does, how to run the project, why its noteworthy, who maintains the project

**Github Gists**

- Simply way to share code snippets and useful fragments with others.

**Github Pages**

- You can host webpages out of GitHub for free
- Static webpages only

**Feature Branches**

- No-one works directly on the main branch

- All development is done on separate branches

**Merging in Feature Branches**

- Pull requests!

- Allow developers to alert team-members to new work that needs to be reviewed.
- Mechanism to approve or reject the work on a given branch.
- Pull request is done on Gitlab / Github etc. Local branches do not know of these automatically.

- Git fetch / git pull

- Git pull request merge conflicts - how to handle locally

- Git fetch origin
- Git checkout -b branch origin/branch

- Git switch branch

- Git pull main and merge main into branch
- Git add and git commit
- Git checkout main and merge branch

- Git merge **---no-ff** new-heading

- Do not fast forward (want the merge commit to show)

- Git push origin main

- Branch protection rules

- Branch name pattern

- Require pull request reviews before merging

**Forking**

- Instead of one centralized Github repository, every developer has their own Github repo in addition to the "main" repo.
- Developers make changes and push to their own forks before making pull requests.
- Very common on large open-source projects.
- Origin points to your forked copy
- Upstream can connect to the original repo

- Git remote add upstream <upsteam remote>
- Git pull upstream

**Rebasing**

- Use rebase instead of git merge

- A way to move a branch so that it begins at the tip of the main branch.
- All the work is there but the history is re-written.
- Instead of a merge commit, rebasing rewrites history by creating new commits for each of the original feature branch commits.
- Git switch feature

- Git rebase master

- Creates new commits / history but in a way that cleans up history of commits.
- Can also use rebase instead of merge for a branch.
- Rebasing new commits ONTO an existing main branch of commits.
- **Reasons NOT to use rebase**

- Never rebase commits that have been shared with others. If you have already pushed commits up to Github...DO NOT rebase them unless you are positive no one on the team is using those commits.

- Rebase merge conflicts

- Resolve conflicts manually then state "git add/rm <conflicted_files>"
- Then "git rebase ---continue"

**Rebasing as a Cleanup Tool**

- Interactive Rebase

- Git rebase -I HEAD~4
- -I enters interactive mode which allows us to edit commits, add files, drop commits, etc.
- Need to specify how far back to go in commit history.
- We are NOT rebasing onto another branch. Instead we are rebasing a series of commits onto the HEAD they currently are based on.
- Will open up text editor with list of commands to choose from.

- _Pick - use the commit_
- _Reword - use the commit but edit commit message_
- _Edit - use commit contents but meld it into previous_
- _Mixup - use commit contents but meld into previous commit and discard commit message_
- _Drop - remove commit_

- ORDER is reversed! Oldest to newest
- **Fixup**

- **Like "Squash" but discards the commit's log message**
- **Consequence: All commits that come after become new hashes**

**Git Tags**

- Tags are pointers that refer to a particular point in Git history
- Lightweight Tags

- Name / Label
- Git tag <tag name>

- Creates a lightweight tag where HEAD is referencing

- Annotated Tags

- Extra meta data
- Git tag -a <tagname>
- Git show <tagname>

- Git tag

- Prints a list of tags
- Git tag -l "_beta_" (L)

- Search specific tag name
- Or "17\*" (star means 0 or more characters)

- Tag previous commits

- Git tag <filename> <commit hash>

**Semantic Versioning**

- Standardized versioning system for software releases.
- Versions consist of three numbers separated by periods.
- MAJOR.MINOR.PATCH
- Initial release is 1.0.0
- Patch releases do not contain new features or significant changes. Often just bug fixes.

- 1.0.1

- Minor Releases

- New features or functionality but all is backwards compatible. No breaking changes. Should not force users to rewrite their own code.
- Resets patch number back to 0.
- 1.1.0

- Major Releases

- Significant changes that are not backwards compatible

- 2.0.0

- Checking out Tags

- Goes into detached head
- Git checkout 15.3.1 (tag name)

- Git tag -f <tag name>

- Reuse a tag

- Git tag -d <tagname>

- Delete tag

- Pushing tags

- Git push ---tags
- By default, tags are not included
- ---tags will push all tags

**.git folder**

- Config

- Global, system wide, locally

- Refs folder

- Contains one file per branch in a repo
- Each file is named after a branch and contains the hash of the commit at the tip of the branch

- Refs/heads/master contains commit hash of the last commit on the master branch

- HEAD

- Plain txt file
- Refers to branch pointer or commit in detached mode
- Objects Folder

- Contains all of the repo files
- Backup of files, commits in a repo, etc.
- All files are compressed and encrypted!
- 4 types of objects

- Commit
- Tree
- Blob
- Annotated tags

**Hashing**

- Hashing Function

- Map input data of some arbitrary size to fixed-size output values
- Small change in input yields large change in the output
- Same input always yields same output
- Unlikely to find 2 outputs with same value

SHA-1

- Git uses hashing function named SHA-1
- Always generates 40-digit hexadecimal numbers
- Git Database

- Key / Value pair

Trying Hashing

- echo 'hello' | git hash-object ---stdin
- Takes some data, stores in our .git/objects directory and gives us back the unique SHA-1 hash that refers to that data object.
- Git cat-file -p <object-hash>

- Retrieve content by using the hash.

- -p = Pretty print

Blobs

- Git blobs (binary large objects)

- Just stores the contents of a file!

Trees

- Trees contain contents of a directory
- Each tree contains pointers that refer to blobs and to other trees
- Each entry in a tree contains the SHA-1 hash of a blob or tree, as well as the mode, type, and filename.

**Reflogs**

- Record of whenever tips of branches and other references are updated

- HEAD Reflog

**Reflogs Rescue**

- Rebasing rewrites commits
- Git rebase -I HEAD~4

- Git reflog show branch
- Git reset ---hard commit

- Reference points to old commit

**Git Alias**

- Custom command shortcut
- Git s

- Git l

**SSH**

Git config user.email email

Git config user.name "name"

What is SSH?

- Secure Shell Protocol

- Allows you to be authenticated without having to write your email and username every time you want to clone from gitlab from the command line.

- SSH tutorial on Gitlab.
- Open terminal

- $ls -al ~/.ssh

- Check to see if any existing SSH keys are present
- Example of public SSH keys you may find:

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

To Generate a SSH Key

- Open terminal and paste:

- Ssh-keygen -t ed25519 -C "your email"
- Ssh-keygen -t rsa -b 4096 -C "your email"

- Prompt will say to save key in your .ssh folder. Hit enter
- Type or hit enter for passphrase.

Add SSH Key to the ssh-agent

- eval "$(ssh-agent -s)"
- Agent pid 59566

Open ~/.ssh/config file and add:

\*Host \*\*

_   AddKeysToAgent yes_

_   UseKeychain yes_

_   IdentityFile ~/.ssh/id_ed25519_

Add key to ssh-agent and store your passphrase in keychain

_Ssh-add -K ~/.ssh/id_ed25519_

Add SSH key to your GitHub account.

_pbcopy < ~/.ssh/id_ed25519.pub_

// Copies the contents of the file to your clipboard

Profile - Settings - Add new SSH key
